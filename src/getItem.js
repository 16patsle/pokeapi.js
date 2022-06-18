import { getResource } from './getResource';

export function getItem(id) {
  return getResource('item/' + id);
}

export function getItemAttribute(id) {
  return getResource('item-attribute/' + id);
}

export function getItemCategory(id) {
  return getResource('item-category/' + id);
}

export function getItemFlingEffect(id) {
  return getResource('item-fling-effect/' + id);
}

export function getItemPocket(id) {
  return getResource('item-pocket/' + id);
}
