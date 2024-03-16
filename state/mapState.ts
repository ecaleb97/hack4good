import { atom } from 'nanostores'

export const waypoints = atom<google.maps.LatLngLiteral[] | null>(null)
export const setWaypoints = (points: google.maps.LatLngLiteral[]) => waypoints.set(points)

export const addWaypoint = (point: google.maps.LatLngLiteral) => {
  if (waypoints.get() === null) {
    waypoints.set([point])
  } else {
    waypoints.set([...waypoints.get()!, point])
  }
}

export const latlngPoints = atom<google.maps.LatLngLiteral[] | null>(null)
export const setLatlngPoints = (points: google.maps.LatLngLiteral[]) => {
  latlngPoints.set(points)
}
export const origin = atom<google.maps.LatLngLiteral | null>(null)

export const setOrigin = (point: google.maps.LatLngLiteral) => origin.set(point)

export const destination = atom<google.maps.LatLngLiteral | null>(null)

export const setDestination = (point: google.maps.LatLngLiteral) => destination.set(point)