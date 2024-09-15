import { Dropdown } from '../../shared/components/dropdown'
import {Input} from './../../shared/components/input'
import {Button} from './../../theme/components/button'

export const Filter = ({
    comics,
    stories,
    search,
    onChangeSearch,
    comic,
    onChangeComic,
    story,
    onChangeStory,
    onFilterClick,
    loading,
}) => {
    return (
        <>
            <div>
                <Input
                    placeholder='Search by name'
                    value={search}
                    onChange={onChangeSearch}
                    disabled={loading}
                />
                <Dropdown
                    placeholder='Filter by comics'
                    value={comic}
                    onChange={onChangeComic}
                    renderItem={(comic) => ({
                        id: comic.id,
                        label: comic.title,
                    })}
                    data={comics}
                    disabled={loading}
                />
                <Dropdown
                    placeholder='Filter by stories'
                    value={story}
                    onChange={onChangeStory}
                    renderItem={(story) => ({
                        id: story.id,
                        label: story.title,
                    })}
                    data={stories}
                    disabled={loading}
                />
                <Button
                    className='search-button'
                    onClick={onFilterClick}
                    disabled={loading}
                >
                    <img className='icon' src='/search.png' />
                </Button>
            </div>
            <style jsx>{`
                div {
                    min-width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                :global(.search-button) {
                    height: 44px;
                    width: 44px;
                }
                .icon {
                    width: 20px;
                    height: 20px;
                }
                @media only screen and (min-width: 680px) {
                    div {
                        min-width: 634px;
                        flex-direction: row;
                    }
                }
                @media only screen and (min-width: 860px) {
                    div {
                        width: 634px;
                    }
                }
            `}</style>
        </>
    )
}