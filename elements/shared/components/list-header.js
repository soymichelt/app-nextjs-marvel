export const ListHeader = ({
    title,
    filterComponent,
}) => {
    return (
        <>
            <header className='list-header'>
                <div className='wrapper list-header-content'>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div className='filter__wrapper'>
                        {filterComponent}
                    </div>
                </div>
            </header>
            <style jsx>{`
                .list-header {
                    margin-bottom: 2rem;
                }
                .list-header-content {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }
                .filter__wrapper {
                    width: 100%;
                }
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }
                @media only screen and (min-width: 860px) {
                    .list-header-content {
                        flex-direction: row;
                        justify-content: space-between;
                        width: unset;
                    }
                    .filter__wrapper {
                        width: auto;
                    }
                }
            `}</style>
        </>
    )
}