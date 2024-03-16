import { map, atom } from 'nanostores'
import { useMap } from "@vis.gl/react-google-maps";
import Photo = google.maps.places.Photo;

type waypoint = {
    latlng: google.maps.LatLngLiteral,
    name: string,
    address: string,
    id: string
    photos: Photo[]
    types: string[]
}
type route = {
    waypoints: waypoint[],
    name: string,
}
export const route = map<route>()

export const setRoute = ({waypoints, name}: route) => {
  route.set({waypoints, name})
}

export const latlngPoints = map<google.maps.LatLngLiteral[]>([])
export const setLatlngPoints = (points: google.maps.LatLngLiteral[]) => {
  latlngPoints.set(points)
}
export const clearLatlngPoints = () => {
  latlngPoints.set([])
}

export const addWaypoint = (waypoint: waypoint) => {
  route.set({waypoints: [...route.get().waypoints, waypoint], name: route.get().name})
}

export const removeWaypoint = (index: number) => {
  route.set({waypoints: route.get().waypoints.filter((_, i) => i !== index), name: route.get().name})
}