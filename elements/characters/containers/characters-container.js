import {useDataProvider} from './../../shared/hooks/useDataProvider'
import {List} from './../../shared/components/list'
import moment from 'moment'
import {Filter} from './../components/filter'
import {COMICS_URL} from './../../comics/containers/comics-container'
import {STORIES_URL} from './../../stories/containers/stories-container'
import { useState } from 'react'
import { LOADING } from '../../shared/hooks/useStateChanges'

export const CHARACTER_URL = 'characters'

export const CharactersContainer = ({
    preloadedData
}) => {
    const [state, setLoading] = useDataProvider(CHARACTER_URL, preloadedData ? true : false)

    const {
        data,
        statusData,
        error,
    } = state

    let characters = data?.data?.results

    if(!characters && preloadedData) characters = preloadedData

    const [stateComics] = useDataProvider(COMICS_URL, false, 'name')
    const {data: comicsData} = stateComics
    const comics = comicsData?.data?.results

    const [stateStories] = useDataProvider(STORIES_URL)
    const {data: storiesData} = stateStories
    const stories = storiesData?.data?.results

    const [search, setSearch] = useState('')
    const handleSearch = (e) => setSearch(e.target.value)

    const [comic, setComic] = useState('')
    const handleComic = (e) => setComic(e.target.value)

    const [story, setStory] = useState('')
    const handleStory = (e) => setStory(e.target.value)

    const handleFilter = () => {
        const params = []
        params.push(`orderBy=name`)
        if(search) params.push(`nameStartsWith=${search}`)
        if(comic) params.push(`comics=${comic}`)
        if(story) params.push(`stories=${story}`)
        setLoading(`${CHARACTER_URL}`, params)
    }
    
    return (
        <List
            title='Awesome Characters'
            filterComponent={<Filter
                comics={comics}
                stories={stories}
                search={search}
                onChangeSearch={handleSearch}
                comic={comic}
                onChangeComic={handleComic}
                story={story}
                onChangeStory={handleStory}
                onFilterClick={handleFilter}
                loading={statusData === LOADING}
            />}
            status={statusData}
            data={characters}
            error={error}
            renderItem={(item) => {
                const date = new moment(item.modified)
                return {
                    id: item.id,
                    title: item.name,
                    caption: date.format('MMMM D, YYYY'),
                    imageUrl: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    linkUrl: `/characters/${item.id}`,
                }
            }}
        />
    )
}