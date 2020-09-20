import { ADD, DELETE, UPDATE, DELETE_ALL } from "./types";

export const addItem = (item) => ({
    type: ADD,
    payload: item
})

export const updateItem = (item, index) => ({
    type: UPDATE,
    payload: {item, index}
})

export const deleteItem = (index) => ({
    type: DELETE,
    payload: index
})

export const deleteAll = () => ({
    type: DELETE_ALL,
    payload: 'delete_all'
})