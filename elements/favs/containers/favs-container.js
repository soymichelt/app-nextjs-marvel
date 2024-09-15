import { GalleryText } from './../../shared/components/gallery-text'
import {Gallery} from './../../shared/components/gallery'
import {get} from './../../../utils/local-storage'
import { SUCCESS } from '../../shared/hooks/useStateChanges'
import moment from 'moment'

export const FavsContainer = () => {

    const results = get()

    const charactersData = results.filter(item => item.type === 'character')
    const comicsData = results.filter(item => item.type === 'comic')
    const storiesData = results.filter(item => item.type === 'story')
    
    return (
        <>
            <Gallery
                title={'Your Favs Characters'}
                data={charactersData}
                status={SUCCESS}
                renderItem={(character) => {
                    return {
                        id: character.data.id,
                        title: character.data.name,
                        imageUrl: character.data.thumbnail ? `${character.data.thumbnail.path}.${character.data.thumbnail.extension}` : null,
                        linkUrl: `/characters/${character.data.id}`,
                    }
                }}
            />
            <Gallery
                title={'Your Favs Comics'}
                data={comicsData}
                status={SUCCESS}
                renderItem={(comic) => {
                    return {
                        id: comic.data.id,
                        title: comic.data.name,
                        imageUrl: comic.data.thumbnail ? `${comic.data.thumbnail.path}.${comic.data.thumbnail.extension}` : null,
                        linkUrl: `/comics/${comic.data.id}`,
                    }
                }}
            />
            <GalleryText
                title={'Your Favs Stories'}
                data={storiesData}
                status={SUCCESS}
                renderItem={(story) => {
                    const date = new moment(story.data.modified)
                    return {
                        id: story.data.id,
                        title: story.data.title,
                        caption: date.format('MMMM D, YYYY'),
                        linkUrl: `/stories/${story.data.id}`,
                    }
                }}
            />
        </>
    )
}