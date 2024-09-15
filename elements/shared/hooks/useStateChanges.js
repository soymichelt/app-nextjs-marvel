import {useEffect, useReducer} from 'react'

export const LOADING = 'loading';
export const SUCCESS = 'success';
export const ERROR = 'error';

const dataReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case LOADING: return {
            ...state,
            statusData: LOADING,
            dataLoading: payload.dataLoading,
        }
        case SUCCESS: return {
            ...state,
            statusData: SUCCESS,
            data: payload.data,
        }
        case ERROR: return {
            ...state,
            statusData: ERROR,
            error: payload.error,
        }
    }
};

export const useStateChanges = (initialState = {}) => {
    const newInitialState = {
        statusData: LOADING,
        dataLoading: { ...initialState },
        type: LOADING,
    };
    const [state, dispatch] = useReducer(dataReducer, newInitialState);

    const setLoading = (dataLoading) => {
        dispatch({
            type: LOADING,
            payload: {
                dataLoading: dataLoading,
            }
        })
    }

    const setSuccess = (data) => dispatch({
        type: SUCCESS,
        payload: {
            data: data,
        }
    })

    const setError = (error) => dispatch({
        type: ERROR,
        payload: {
            error: error,
        }
    })

    return {
        state,
        setLoading,
        setSuccess,
        setError
    }
}