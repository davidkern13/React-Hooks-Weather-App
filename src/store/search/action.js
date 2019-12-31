import { SEARCH_QUERY, SELECTED_ITEM_WEATHER } from './enums';

export const searchQuery = query => ({
    type: SEARCH_QUERY,
    payload: query
})

export const selectedWeaterItem = item => ({
    type: SELECTED_ITEM_WEATHER,
    payload: item
})