import { types } from './../types/types';

export const marvelReducer = (state, action) => {
    switch (action.type) {
        case types.GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                loading: false
            };
        case types.GET_CHARACTER:
            return {
                ...state,
                character: action.payload,
                loading: false
            };
        case types.START_LOADING:
            return{
                ...state,
                loading: true
            }
        /*
        case 'GET_COMICS':
        return {
            ...state,
            comics: action.payload,
            loading: false
        };
        case 'GET_COMIC':
        return {
            ...state,
            comic: action.payload,
            loading: false
        };
        case 'GET_SERIES':
        return {
            ...state,
            series: action.payload,
            loading: false
        };
        case 'GET_SERIE':
        return {
            ...state,
            serie: action.payload,
            loading: false
        };
        case 'GET_STORIES':
        return {
            ...state,
            stories: action.payload,
            loading: false
        };
        case 'GET_STORY':
        return {
            ...state,
            story: action.payload,
            loading: false
        };
        case 'GET_EVENTS':
        return {
            ...state,
            events: action.payload,
            loading: false
        };
        case 'GET_EVENT':
        return {
            ...state,
            event: action.payload,
            loading: false
        };
        case 'GET_SERVICES':
        return {
            ...state,
            services: action.payload,
            loading: false
        };
        case 'GET_SERVICE':
        return {
            ...state,
            service: action.payload,
            loading: false
        };
        case 'GET_ERRORS':
        return {
            ...state,
            errors: action.payload,
            loading: false
        };
        case 'SET_LOADING':
        return {
            ...state,
            loading: true
        };*/
        default:
            return state;
    }
}