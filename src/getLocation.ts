import { getResource } from './getResource';
import type { Location, Region } from './types/Location';

export function getLocation(id: number | string): Promise<Location> {
  return getResource('location/' + id);
}

export function getLocationArea(id: number | string) {
  return getResource('location-area/' + id);
}

export function getPalParkArea(id: number | string) {
  return getResource('pal-park-area/' + id);
}

export function getRegion(id: number | string): Promise<Region> {
  return getResource('region/' + id);
}
