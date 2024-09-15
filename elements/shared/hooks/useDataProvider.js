import {useEffect} from 'react'
import {LOADING, useStateChanges} from './useStateChanges'
import {
    generateUrl
} from './../../../utils/api-utils'

export const useDataProvider = (initialUrl, preloaded = false, orderBy = null) => {
    let preloadedConfig = {};
    
    if(preloaded) preloadedConfig = {
        type: null,
    };

    const defaultParams = []
    if(orderBy) defaultParams.push(`orderBy=${orderBy}`)

    const {
        state,
        setLoading,
        setSuccess,
        setError,
    } = useStateChanges({url: initialUrl})

    const {
        dataLoading,
        statusData,
    } = state

    useEffect(() => {
        if(statusData === LOADING && dataLoading.url) {
            const dataUrl = generateUrl(dataLoading.url, dataLoading.params)
            fetch(dataUrl)
            .then(res => res.json())
            .then(data => setSuccess(data))
            .catch(error => setError(error))
        }
    }, [
        dataLoading.url,
        dataLoading.params
    ])

    const loading = (url, params = null) => {
        setLoading({ url: url, params: params,})
    }

    return [state, loading]
}