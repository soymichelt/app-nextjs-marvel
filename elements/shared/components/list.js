import Image from 'next/image'
import {ListItem} from './item'
import {LOADING, ERROR, SUCCESS} from './../hooks/useStateChanges'
import {ListHeader} from './list-header'

export const List = ({
    title,
    filterComponent,
    data,
    status,
    error,
    renderItem,
}) => {
    return (
        <>
            <section className='list'>
                <ListHeader
                    title={title}
                    filterComponent={filterComponent}
                />
                <div className='wrapper list-container'>
                    {status === LOADING && (<div className='loading'>
                        <h2>Please Wait</h2>
                        <p>
                            We are loading the data 
                        </p>
                        <Image src="/loading.svg" height={64} width={64} />
                    </div>)}
                    {status === ERROR && (<div className='not-found'>
                        <div className='not-found__container'>
                            <h2>An unexpected error has occurred :(</h2>
                            <p>
                                We just got an unexpected problem loading application data, we are working on it. We offer you an apology. 
                            </p>
                            <img
                                src='/not-found.png'
                                alt='Not found data'
                            />
                        </div>
                    </div>)}
                    {(status === SUCCESS && (data && data.length === 0)) && (<div className='not-found'>
                        <div className='not-found__container'>
                            <h2>No results for this query</h2>
                            <p>
                                We are sorry but we have not found any results. We advise you to try changing the search filters. 
                            </p>
                            <img
                                src='/not-found.png'
                                alt='Not found data'
                            />
                        </div>
                    </div>)}
                    <div className={`list-items ${status === LOADING ? 'loading' : ''}`}>
                        {data && data.map(item => <ListItem
                            key={item.id}
                            {...renderItem(item)}
                        />)}
                    </div>
                </div>
            </section>
            <style jsx>{`
                .list {
                    min-height: 350px;
                    background-color: #eceff1;
                    padding: 3.5rem 0;
                }
                .list-container {
                    position: relative;
                }
                .loading {
                    top: 0;
                    left: 0;
                    right: 0;
                    position: absolute;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .list-items {
                    display: grid;
                    grid-template-columns: repeat( 1, minmax(250px, 1fr) );
                    gap: 20px;
                    transition: .3s;
                    opacity: 1;
                }
                .list-items.loading {
                    opacity: .5;
                }
                .not-found {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .not-found__container {
                    max-width: 320px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .not-found__container img {
                    text-align: center;
                    max-width: 250px;
                }
                .not-found__container h2,
                .not-found__container p {
                    text-align: center;
                }

                @media only screen and (min-width: 680px) {
                    .list-items {
                        grid-template-columns: repeat( 2, minmax(250px, 1fr) );
                    }
                }
                @media only screen and (min-width: 970px) {
                    .list-items {
                        grid-template-columns: repeat( 3, minmax(250px, 1fr) );
                    }
                }
                @media only screen and (min-width: 1280px) {
                    .list-items {
                        grid-template-columns: repeat( 4, minmax(250px, 1fr) );
                    }
                }
            `}</style>
        </>
    )
}