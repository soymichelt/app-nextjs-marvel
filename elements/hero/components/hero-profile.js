import {Button} from './../../theme/components/button'

export const HeroProfile = ({
    title,
    caption,
    avatarUrl,
    onFav,
    onRemoveFav,
    isFav,
}) => {
    return (
        <>
            <div className='background'>
                <div className='hero-content wrapper'>
                    {avatarUrl && (
                        <img
                            alt={title}
                            src={`${avatarUrl}`}
                        />
                    )}
                    <h1>{title}</h1>
                    <p>{caption}</p>

                    <Button onClick={!isFav ? onFav : onRemoveFav}>{!isFav ? 'Add Favs' : 'Remove Favs'}</Button>
                </div>
            </div>
            <style jsx>{`
                .background {
                    height: 420px;
                    position: relative;
                }
                .background::before {
                    content: ' ';
                    background-image: url(/hero.png);
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    opacity: .2;
                }
                .hero-content {
                    position: relative;
                    z-index: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .hero-content img {
                    width: 156px;
                    height: 156px;
                    object-fit: cover;
                    border-radius: .625rem;
                    margin-bottom: 1rem;
                }
                .hero-content h1 {
                    text-align: center;
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
                .hero-content p {
                    text-align: center;
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
};