import Link from 'next/link'
import {Button} from './../../theme/components/button'
import {HeroNavigation} from './hero-navigation'

export const Hero = ({
    image,
    title,
    caption,
}) => {
    return (
        <>
            <div className='background'>
                <div className='hero-content wrapper'>
                    <h1>{title}</h1>
                    <p>{caption}</p>
                    <Link href='/favs'>
                        <a>
                            <Button>Check your favorite comics!</Button>
                        </a>
                    </Link>
                </div>
            </div>
            <HeroNavigation />
            <style jsx>{`
                .background {
                    height: 420px;
                    position: relative;
                }
                .background::before {
                    content: ' ';
                    background-image: url(${image});
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
                    align-items: center;
                    justify-content: center;
                }
                .hero-content h1 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
                .hero-content p {
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                }
                .hero-content h1, .hero-content p {
                    text-align: center;
                    max-width: 100%;
                }
                @media only screen and (min-width: 680px) {
                    .hero-content {
                        align-items: flex-start;
                    }
                    .hero-content h1, .hero-content p {
                        text-align: left;
                        max-width: 520px;
                    }
                }
            `}</style>
        </>
    );
};