import {useDataProvider} from './../../shared/hooks/useDataProvider'
import {List} from './../../shared/components/list'
import moment from 'moment'

export const STORIES_URL = 'stories'

export const StoriesContainer = () => {
    const [state] = useDataProvider(STORIES_URL, false, 'title')

    const {
        data,
        statusData,
        error,
    } = state

    const stories = data?.data?.results

    return (
        <List
            title='Awesome Stories'
            status={statusData}
            data={stories}
            error={error}
            renderItem={(item) => {
                const date = new moment(item.modified)
                return {
                    id: item.id,
                    title: item.title,
                    caption: date.format('MMMM D, YYYY'),
                    imageUrl: item.thumbnail ? `${item.thumbnail.path}.${item.thumbnail.extension}` : null,
                    linkUrl: `/stories/${item.id}`,
                }
            }}
        />
    )
}