import Head from 'next/head'
import moment from 'moment'
import { STORIES_URL } from '../../elements/stories/containers/stories-container'
import { AppLayout } from './../../elements/theme/components/app-layout'
import { generateUrl } from './../../utils/api-utils'
import {HeroProfile} from './../../elements/hero/components/hero-profile'
import {GalleryContainer} from './../../elements/shared/containers/gallery-container'
import {save, select, remove} from './../../utils/local-storage'
import { useState } from 'react'

export default function ComicPage({
    data,
    storyId,
}) {
    const [story] = data

    const {
        title,
        modified,
        thumbnail,
    } = story

    const charactersUrl = `${STORIES_URL}/${storyId}/characters`

    const comicsUrl = `${STORIES_URL}/${storyId}/comics`

    const date = new moment(modified)

    const [fav, setFav] = useState(select(storyId))

    const handleFav = () => {
        const storyFav = { data: story, type: 'story',}
        if(save(storyFav)) setFav(storyFav)
    }

    const handleRemoveFav = () => {
        if(remove(storyId)) {
            setFav(null)
        }
    }

    return (
        <div>
            <Head>
                <title>{title} | Comics - Soymichel.dev</title>
            </Head>
            <AppLayout>
                <HeroProfile
                    title={title}
                    caption={date.format('MMMM D, YYYY')}
                    avatarUrl={thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : null}
                    isFav={fav}
                    onFav={handleFav}
                    onRemoveFav={handleRemoveFav}
                />
                <GalleryContainer
                    title='Related Characters '
                    url={charactersUrl}
                    renderItem={(character) => {
                        return {
                            id: character.id,
                            title: character.name,
                            imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                            linkUrl: `/comics/${character.id}`,
                        }
                    }}
                />
                <GalleryContainer
                    title='Related Comics '
                    url={comicsUrl}
                    renderItem={(comic) => {
                        return {
                            id: comic.id,
                            title: comic.title,
                            imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                            linkUrl: `/comics/${comic.id}`,
                        }
                    }}
                />
            </AppLayout>
        </div>
    )
}

export async function getServerSideProps(context) {

    const {storyId} = context.params
    const dataUrl = generateUrl(`${STORIES_URL}/${storyId}`)

    try {
        const res = await fetch(dataUrl)
        const data = await res.json()
        if (!data) {
            return {props: {
                data: null,
            }}
        }
        return {props: {
            storyId: storyId,
            data: data?.data?.results
        }}
    }
    catch(e) {
        return {
            props: {
                storyId: storyId,
                data: null
            }
        }
    }
}