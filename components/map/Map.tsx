"use client";

import { APIProvider, Map, useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import {latlngPoints, setLatlngPoints, setWaypoints, waypoints} from "@/state/mapState";
import {Search} from "@/components/search/search";

const randomLatLng = [
  {lat: 40.416775, lng: -3.703790},
  {lat: 42.605556, lng: -5.570000}
]

async function searchNearbyPlacesFrom(query: string, location: google.maps.LatLngLiteral[], map: google.maps.Map) {
  const route = Array(location.length)
  const placesService = new google.maps.places.PlacesService(map);
  location.forEach((latlng, index) => {
    const request = {
      location: latlng,
      radius: 1000,
      type: query,
      rankBy: google.maps.places.RankBy.PROMINENCE,
    }
    placesService.nearbySearch(request, (results, status) => {
      if (status === "OK" && results) {
        const place = results[0]
        route[index] = place.geometry?.location!.toJSON() as google.maps.LatLngLiteral
      }
      else {
        route[index] = latlng
      }
    })
  })
  while (route.includes(undefined)) {
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
  setWaypoints(route)
}
function drawRoute(waypoints: google.maps.LatLngLiteral[], map: google.maps.Map | null) {
  const DirectionsService = new google.maps.DirectionsService();
  const DirectionsRenderer = new google.maps.DirectionsRenderer();

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
  DirectionsService.route(request, (result, status) => {
    if (status === "OK") {
      DirectionsRenderer.setDirections(result);
    }
  }).then()
}

function setRouteFromWaypoints(waypoints: google.maps.LatLngLiteral[]) {
  const DirectionsService = new google.maps.DirectionsService();
  const request = {
    origin: waypoints[0],
    destination: waypoints[waypoints.length - 1],
    travelMode: google.maps.TravelMode.DRIVING,
  }
  DirectionsService.route(request, () => {})
    .then((response) => {
      const route = response.routes[0];
      const waypts = route.legs[0].steps
        .map((step) => {
          return {
            lat: step.end_location.lat(),
            lng: step.end_location.lng()
          }}) as google.maps.LatLngLiteral[]
      setLatlngPoints(waypts)
    })
}

function MainMapComponent() {
  const placesLibrary = useMapsLibrary("places");
  const map = useMap()
  const $latlngPoints = useStore(latlngPoints)
  const $waypoints = useStore(waypoints)

  useEffect(() => {
    if (!(placesLibrary && map))
      return;
    new placesLibrary.PlacesService(map);
    if(!$latlngPoints)
    {
      setRouteFromWaypoints(randomLatLng)
      return;
    }
    else
    {
      if($waypoints)
      {
        const points = $waypoints.filter((_, i) => i % 2 === 0)
        drawRoute(points, map)
        return;
      }
      searchNearbyPlacesFrom("food", $latlngPoints, map).then()
    }
  }, [map, placesLibrary, $latlngPoints, $waypoints])
  return <></>;
}
export default function MapComponent() {
  /* const [apiKey, setApiKey] = useState("") */
  /*
  const $origin = useStore(origin)
  useEffect(() => {
    const Geolocation = navigator.geolocation;
    if (Geolocation) {
      Geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setOrigin({lat: latitude, lng: longitude})
      })
    }
    else
      setOrigin({lat: 40.416775, lng: -3.703790})
  }, [$origin]);
   */
  const apiKey = process.env.API_KEY
  return apiKey && (
    <APIProvider apiKey={apiKey}>
      <Map defaultCenter={{lat: 0, lng: 0}} defaultZoom={5} mapId="e0dd0b4f7bfe120b" style={{width: "100%", height: "100vh"}}>
        <Search/>
        <MainMapComponent/>
      </Map>
    </APIProvider>
  )
}