import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";
import axios from "axios";


export const addFav = (character, res) => {

    return async (dispatch) => {

        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav';
            let response = await axios.post(endpoint, character);
             console.log(response.data)
            return dispatch({
                type: ADD_FAV,
                payload: response.data,
            });

        } catch (error) {

            return res.status(500).send({ error: error.message })

        }
    }

};

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
                
            return res.status(500).send({ error: error.message })

        }

    }

};

export const orderCards = (orden) => { return { type: ORDER, payload: orden } };
export const filterCards = (gender) => { return { type: FILTER, payload: gender } };