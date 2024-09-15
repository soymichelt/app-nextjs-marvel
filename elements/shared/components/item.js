import Link from 'next/link'

export const ListItem = ({
    title,
    caption,
    imageUrl,
    linkUrl,
}) => {
    return (
        <>
            <article>
                <Link href={linkUrl}>
                    <a>
                        <header>
                            <p>{caption}</p>
                            <h2>{title}</h2>
                        </header>
                        <div>
                            {imageUrl && (
                                <img src={imageUrl} alt={title} />
                            )}
                        </div>
                    </a>
                </Link>
            </article>
            <style jsx>{`
                article {
                    min-width: 300px;
                    max-height: 350px;
                    overflow: hidden;
                    height: 100%;
                    background-color: #ffffff;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                div {
                    flex: 1;
                    min-height: 200px;
                    transition: .3s;
                    background-color: #cfd8dc;
                }
                div:hover {
                    transform: scale(1.2);
                }
                header {
                    background-color: #ffffff;
                    padding: .5rem;
                    position: relative;
                    z-index: 5;
                }
                p {
                    font-size: 14px;
                    font-size: 500;
                    color: #868e96;
                }
                h2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;

                    font-size: 1.3rem;
                    color: #343a40;
                    font-weight: bold;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </>
    )
}