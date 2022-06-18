import { getResource } from './getResource';

export function getItem(id: number | string) {
  return getResource('item/' + id);
}

export function getItemAttribute(id: number | string) {
  return getResource('item-attribute/' + id);
}

export function getItemCategory(id: number | string) {
  return getResource('item-category/' + id);
}

export function getItemFlingEffect(id: number | string) {
  return getResource('item-fling-effect/' + id);
}

export function getItemPocket(id: number | string) {
  return getResource('item-pocket/' + id);
}
