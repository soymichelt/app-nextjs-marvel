import {useDataProvider} from './../../shared/hooks/useDataProvider'
import {List} from './../../shared/components/list'
import moment from 'moment'
import {Filter} from './../components/filter'
import { useState } from 'react'
import { LOADING } from '../../shared/hooks/useStateChanges'

export const COMICS_URL = 'comics'

export const ComicsContainer = () => {
    const [state, setLoading] = useDataProvider(COMICS_URL, false, 'title')

    const {
        data,
        statusData,
        error,
    } = state

    const comics = data?.data?.results

    const [format, setFormat] = useState('')
    const handleFormat = (e) => setFormat(e.target.value)

    const [title, setTitle] = useState('')
    const handleTitle = (e) => setTitle(e.target.value)

    const [issueNumber, setIssueNumber] = useState('')
    const handleIssueNumber = (e) => setIssueNumber(e.target.value)

    const handleFilter = () => {
        const params = []
        if(format) params.push(`format=${format}`)
        if(title) params.push(`titleStartsWith=${title}`)
        if(issueNumber) params.push(`issueNumber=${issueNumber}`)
        setLoading(`${COMICS_URL}`, params)
    }

    return (
        <List
            title='Awesome Comics'
            filterComponent={<Filter
                formats={[
                    {
                        id: 'comic',
                        label: 'Comic',
                    },
                    {
                        id: 'magazine',
                        label: 'Magazine',
                    },
                    {
                        id: 'trade paperback',
                        label: 'Trade Paperback',
                    },
                    {
                        id: 'hardcover',
                        label: 'Hardcover',
                    },
                    {
                        id: 'digest',
                        label: 'Digest',
                    },
                    {
                        id: 'graphic novel',
                        label: 'Graphic Novel',
                    },
                    {
                        id: 'digital comic',
                        label: 'Digital Comic',
                    },
                    {
                        id: 'infinite comic',
                        label: 'Infinite Comic',
                    },
                ]}
                format={format}
                onChangeFormat={handleFormat}
                title={title}
                onChangeTitle={handleTitle}
                issueNumber={issueNumber}
                onChangeIssueNumber={handleIssueNumber}
                onFilterClick={handleFilter}
                loading={statusData === LOADING}
            />}
            status={statusData}
            data={comics}
            error={error}
            renderItem={(item) => {
                const date = new moment(item.modified)
                return {
                    id: item.id,
                    title: item.title,
                    caption: date.format('MMMM D, YYYY'),
                    imageUrl: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    linkUrl: `/comics/${item.id}`,
                }
            }}
        />
    )
}