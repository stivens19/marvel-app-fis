import React, { useReducer } from 'react'
import clientAxios from '../config/clientAxios';
import marvelContext from './marvelContext';
import { marvelReducer } from './marvelReducer';
import { types } from './../types/types';

const MarvelState = ({children}) => {
    const initialState={
        characters: [],
        character:{},
        loading: false,
    }
    const [state, dispatch] = useReducer(marvelReducer,initialState)
    const getCharacters=async()=>{
        
        try {
            dispatch({
                type:types.START_LOADING
            })
            const res=await clientAxios.get('/v1/public/characters')
            dispatch({
                type: types.GET_CHARACTERS,
                payload: res.data.data.results
            })
        } catch (error) {
            
        }
    }
    const getCharacter=async id=>{
        try {
            dispatch({
                type:types.START_LOADING
            })
            const res=await clientAxios.get(`/v1/public/characters/${id}`)
            dispatch({
                type: types.GET_CHARACTER,
                payload:res.data.data.results[0]
            })
        } catch (error) {
            
        }
    }
    const searchCharacters=async(searchText)=>{
        try {
            dispatch({
                type:types.START_LOADING
            })
            const res=await clientAxios.get(`/v1/public/characters?nameStartsWith=${searchText}`)
            dispatch({
                type: types.GET_CHARACTERS,
                payload: res.data.data.results
            })
        } catch (error) {
            
        }
    }
    return <marvelContext.Provider value={{
        characters: state.characters,
        loading: state.loading,
        getCharacters,
        getCharacter,
        character:state.character,
        searchCharacters
    }}>
        {children}
    </marvelContext.Provider>
}

export default MarvelState