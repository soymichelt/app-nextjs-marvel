import Image from 'next/image'
import Link from 'next/link'
import { ERROR, LOADING, SUCCESS } from "../hooks/useStateChanges"

export const GalleryText = ({
    title,
    data,
    status,
    error,
    renderItem,
}) => {

    return (
        <>
            <div className='gallery'>
                <div className='wrapper gallery-content'>
                    <h2>{title}</h2>

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
                            <h2>No results founds</h2>
                            <p>
                                We are sorry but we have not found any results.
                            </p>
                            <img
                                src='/not-found.png'
                                alt='Not found data'
                            />
                        </div>
                    </div>)}
                    {data && (<section>
                        {data.map(image => {
                            const {
                                id,
                                title,
                                caption,
                                linkUrl,
                            } = renderItem(image)
                            return (
                                <Link href={linkUrl} key={id}>
                                    <a>
                                        <article>
                                            <h3>{title}</h3>
                                            <p>{caption}</p>
                                        </article>
                                    </a>
                                </Link>
                            )
                        })}
                    </section>)}
                </div>
            </div>
            <style jsx>{`
                .gallery {
                    min-height: 350px;
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .gallery-content {
                    position: relative;
                }
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    color: #000000;
                    margin-bottom: 1rem;
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
                section {
                    display: grid;
                    grid-template-columns: repeat( 1, minmax(250px, 1fr) );
                    grid-auto-rows: 1fr;
                    gap: 8px;
                }
                article {
                    min-height: 150px;
                    background-color: #37474f;
                    padding: 1.5rem;
                    display: flex;
                    border-radius: .625rem;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                h3 {
                    font-size: 26px;
                    font-weight: bold;
                    color: #ffffff;
                    margin-bottom: 1rem;

                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                p {
                    font-size: 18px;
                    font-weight: 500;
                    color: #fff;
                }
                h3, p {
                    text-align: center;
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
                    section {
                        grid-template-columns: repeat( 2, minmax(250px, 1fr) );
                    }
                }
                @media only screen and (min-width: 970px) {
                    section {
                        grid-template-columns: repeat( 3, minmax(250px, 1fr) );
                    }
                }
                @media only screen and (min-width: 1280px) {
                    section {
                        grid-template-columns: repeat( 4, minmax(250px, 1fr) );
                    }
                }
            `}</style>
        </>
    )
}