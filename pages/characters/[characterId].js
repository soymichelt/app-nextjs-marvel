import Head from 'next/head'
import moment from 'moment'
import { CHARACTER_URL } from '../../elements/characters/containers/characters-container'
import {AppLayout} from './../../elements/theme/components/app-layout'
import { generateUrl } from './../../utils/api-utils'
import {HeroProfile} from './../../elements/hero/components/hero-profile'
import {GalleryContainer} from './../../elements/shared/containers/gallery-container'
import {save, get, select, remove} from './../../utils/local-storage'
import { useState } from 'react'

export default function CharacterPage({
    data,
    characterId,
}) {
    const [character] = data

    const {
        name,
        modified,
        thumbnail,
    } = character

    const comicsUrl = `${CHARACTER_URL}/${characterId}/comics`

    const storiesUrl = `${CHARACTER_URL}/${characterId}/stories`

    const date = new moment(modified)

    const [fav, setFav] = useState(select(characterId))

    const handleFav = () => {
        const characterFav = { data: character, type: 'character',}
        if(save(characterFav)) setFav(characterFav)
    }

    const handleRemoveFav = () => {
        if(remove(characterId)) {
            setFav(null)
        }
    }

    return (
        <div>
            <Head>
                <title>{character.name} | Characters - Soymichel.dev</title>
            </Head>
            <AppLayout>
                <HeroProfile
                    title={name}
                    caption={date.format('MMMM D, YYYY')}
                    avatarUrl={`${thumbnail.path}.${thumbnail.extension}`}
                    isFav={fav}
                    onFav={handleFav}
                    onRemoveFav={handleRemoveFav}
                />
                <GalleryContainer
                    title='Appears  in Comics'
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

    const {characterId} = context.params
    const dataUrl = generateUrl(`${CHARACTER_URL}/${characterId}`)

    try {
        const res = await fetch(dataUrl)
        const data = await res.json()
        if (!data) {
            return {props: {
                data: null,
            }}
        }
        return {props: {
            characterId: characterId,
            data: data?.data?.results
        }}
    }
    catch(e) {
        return {
            props: {
                characterId: characterId,
                data: null
            }
        }
    }
}