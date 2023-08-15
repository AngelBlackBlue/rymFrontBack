import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";
import axios from "axios";

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: ADD_FAV,
//                 payload: data,
//             });
//         });
//     };
// };

export const addFav = (character, res) => {

    return async (dispatch) => {

        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav';
            let response = await axios.post(endpoint, character);

            return dispatch({
                type: ADD_FAV,
                payload: response.data,
            });

        } catch (error) {

            return res.status(500).send(error.message)

        }
    }

};

// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint).then(({ data }) => {
//             return dispatch({
//                 type: REMOVE_FAV,
//                 payload: data,
//             });
//         });
//     };
// };

export const removeFav = (id, res) => {

    return async (dispatch) => {

        try {

            const endpoint = 'http://localhost:3001/rickandmorty/fav/' + (+id);
            const response = await axios.delete(endpoint);

            return dispatch({
                type: REMOVE_FAV,
                payload: response.data,
            });


        } catch (error) {

            return res.status(500).send(error.message)

        }

    }

};

export const orderCards = (orden) => { return { type: ORDER, payload: orden } };
export const filterCards = (gender) => { return { type: FILTER, payload: gender } };