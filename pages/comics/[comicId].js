import Head from 'next/head'
import moment from 'moment'
import { COMICS_URL } from '../../elements/comics/containers/comics-container'
import {AppLayout} from './../../elements/theme/components/app-layout'
import { generateUrl } from './../../utils/api-utils'
import {HeroProfile} from './../../elements/hero/components/hero-profile'
import {GalleryContainer} from './../../elements/shared/containers/gallery-container'
import {save, select, remove} from './../../utils/local-storage'
import { useState } from 'react'

export default function ComicPage({
    data,
    comicId,
}) {
    const [comic] = data

    const {
        title,
        modified,
        thumbnail,
    } = comic

    const charactersUrl = `${COMICS_URL}/${comicId}/characters`

    const storiesUrl = `${COMICS_URL}/${comicId}/stories`

    const date = new moment(modified)

    const [fav, setFav] = useState(select(comicId))

    const handleFav = () => {
        const comicFav = { data: comic, type: 'comic',}
        if(save(comicFav)) setFav(comicFav)
    }

    const handleRemoveFav = () => {
        if(remove(comicId)) {
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
                    avatarUrl={`${thumbnail.path}.${thumbnail.extension}`}
                    isFav={fav}
                    onFav={handleFav}
                    onRemoveFav={handleRemoveFav}
                />
                <GalleryContainer
                    title='Their Characters'
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
                    title='Appears  in Stories'
                    url={storiesUrl}
                    isGalleryText
                    renderItem={(story) => {
                        const storyDate = new moment(story.modified)
                        return {
                            id: story.id,
                            title: story.title,
                            caption: storyDate.format('MMMM D, YYYY'),
                            linkUrl: `/comics/${story.id}`,
                        }
                    }}
                />
            </AppLayout>
        </div>
    )
}

export async function getServerSideProps(context) {

    const {comicId} = context.params
    const dataUrl = generateUrl(`${COMICS_URL}/${comicId}`)

    try {
        const res = await fetch(dataUrl)
        const data = await res.json()
        if (!data) {
            return {props: {
                data: null,
            }}
        }
        return {props: {
            comicId: comicId,
            data: data?.data?.results
        }}
    }
    catch(e) {
        return {
            props: {
                comicId: comicId,
                data: null
            }
        }
    }
}