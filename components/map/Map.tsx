"use client";

import { APIProvider, Map, AdvancedMarker, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { latlngPoints, setLatlngPoints, setRoute } from "@/state/mapState";

const randomLatLng = [
  {lat: 40.416775, lng: -3.703790},
  {lat: 42.605556, lng: -5.570000}
]

async function getPlaceDetails(id: string) {
  const Place = google.maps.places.Place;
  // Use place ID to create a new Place instance.
  const place = new Place({
    id
  });
    // Call fetchFields, passing the desired data fields.
  await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location', 'photos', 'types'] });

  // Set marker state
  return {
    latlng: place.location?.toJSON() as google.maps.LatLngLiteral,
    name: place.displayName as string,
    address: place.formattedAddress as string,
    id: id,
    photos: place.photos ?? [],
    types: place.types as string[]
  }
}
async function searchNearbyPlacesFrom(query: string, location: google.maps.LatLngLiteral, map: google.maps.Map) {
  const placesService = new google.maps.places.PlacesService(map);
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary
  const request = {
    location,
    radius: 1000,
    type: query,
    rankBy: google.maps.places.RankBy.PROMINENCE,
  }
  placesService.nearbySearch(request, (results, status) => {
    if (status === "OK" && results) {
      const place = results[0]
      /* console.log(place) */
      new AdvancedMarkerElement({
        position: place.geometry?.location?.toJSON(),
        map,
        title: place.name as string
      })
    }
  })
}
function drawRoute(waypoints: google.maps.LatLngLiteral[], map: google.maps.Map | null) {
  const DirectionsService = new google.maps.DirectionsService();
  const DirectionsRenderer = new google.maps.DirectionsRenderer();
  const response: {res: any} = {res: null}

  DirectionsRenderer.setMap(map);
  const request = {
    origin: waypoints[0],
    destination: waypoints[waypoints.length - 1],
    waypoints: waypoints.slice(1, waypoints.length - 1).map(waypoint => {
      return {
        location: waypoint,
        stopover: true
      }
    }),
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode.DRIVING,
  }
  return DirectionsService.route(request, (result, status) => {
    if (status === "OK") {
      DirectionsRenderer.setDirections(result);
    }
  })
}

function setRouteFromWaypoints(waypoints: google.maps.LatLngLiteral[], map: google.maps.Map | null) {
  drawRoute(waypoints, map).then((response) => {
    const route = response.routes[0];
    const waypts = route.legs[0].steps
      .map((step) => {
        return {
          lat: step.end_location.lat(),
          lng: step.end_location.lng()
        }}) as google.maps.LatLngLiteral[]
    /* console.log("setting") */
    setLatlngPoints(waypts)
  })
}

function MainMapComponent() {
  const placesLibrary = useMapsLibrary("places");
  const map = useMap()
  const $latlngPoints = useStore(latlngPoints)

  useEffect(() => {
    if (!(placesLibrary && map))
      return;
    new placesLibrary.PlacesService(map);
    if(!$latlngPoints.length)
      setRouteFromWaypoints(randomLatLng, map)
    else
    {
      $latlngPoints.forEach((latlng) => {
        searchNearbyPlacesFrom("food", latlng, map).then()
      })
      drawRoute($latlngPoints, map).then()
    }
  }, [placesLibrary, map, $latlngPoints])
  return <></>;
}
export default function MapComponent() {
  /* const [apiKey, setApiKey] = useState("") */
  /* useEffect(() => {
    if (!apiKey)
      fetch("/api/getApiKey")
        .then((res) => res.text())
        .then((apiKey) => setApiKey(apiKey));
  }, []); */
  /* const apiKey = process.env.API_KEY */
  // For now, we will use a hardcoded API key
  // This is not recommended for production
  const apiKey = "AIzaSyAq38rxp32Hxk4VAFYdaNds17YPtPQa15E"
  /* console.log(apiKey) */
  return apiKey && (
    <APIProvider apiKey={apiKey}>
      <Map defaultCenter={{lat: 0, lng: 0}} defaultZoom={5} mapId="e0dd0b4f7bfe120b" style={{width: "100%", height: "100vh"}}>
        <MainMapComponent/>
      </Map>
    </APIProvider>
  )
}