import {Dropdown} from './../../shared/components/dropdown'
import {Input} from './../../shared/components/input'
import {Button} from './../../theme/components/button'

export const Filter = ({
    formats,
    format,
    onChangeFormat,
    title,
    onChangeTitle,
    issueNumber,
    onChangeIssueNumber,
    onFilterClick,
    loading,
}) => {
    return (
        <>
            <div>
                <Dropdown
                    placeholder='Search by formats'
                    value={format}
                    onChange={onChangeFormat}
                    renderItem={(format) => ({
                        id: format.id,
                        label: format.label,
                    })}
                    data={formats}
                    disabled={loading}
                />
                <Input
                    placeholder='Search by title'
                    value={title}
                    onChange={onChangeTitle}
                    disabled={loading}
                />
                <Input
                    placeholder='Search by issue number'
                    value={issueNumber}
                    onChange={onChangeIssueNumber}
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