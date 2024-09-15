import { GalleryText } from '../components/gallery-text'
import {useDataProvider} from './../../shared/hooks/useDataProvider'
import {Gallery} from './../components/gallery'

export const GalleryContainer = ({
    title,
    url,
    renderItem,
    isGalleryText
}) => {
    const [state] = useDataProvider(url)

    const {
        data,
        statusData,
        error,
    } = state

    const results = data?.data?.results
    
    return (
        <>
            {!isGalleryText ? (
                <Gallery
                    title={title}
                    data={results}
                    status={statusData}
                    error={error}
                    renderItem={renderItem}
                />
            ) : (
                <GalleryText
                    title={title}
                    data={results}
                    status={statusData}
                    error={error}
                    renderItem={renderItem}
                />
            )}
        </>
    )
}