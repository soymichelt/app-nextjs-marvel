import Link from 'next/link'
import { useRouter } from 'next/router'

export const HeroNavigation = ({
    image,
}) => {

    const router = useRouter()

    return (
        <>
            <div className='hero-navigation'>
                <ul className='wrapper'>
                    <li><Link href='/'><a className={`${router.pathname === '/' && 'is-active'}`}>Characters</a></Link></li>
                    <li><Link href='/comics'><a className={`${router.pathname === '/comics' && 'is-active'}`}>Comics</a></Link></li>
                    <li><Link href='/stories'><a className={`${router.pathname === '/stories' && 'is-active'}`}>Stories</a></Link></li>
                </ul>
            </div>
            <style jsx>{`
                .hero-navigation {
                    background-color: #ffffff;
                    border-bottom: 1px solid #eceff1;
                    position: sticky;
                    z-index: 8;
                    top: 80px;
                }
                ul {
                    min-height: 72px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                li {
                    background: #eceff1;
                    color: #263238;
                    padding: .5rem .8rem;
                    border-radius: 3rem;
                    margin-left: 4px;
                    margin-right: 4px;
                    font-weight: 700;
                    text-transform: uppercase;
                    position: relative;
                }
                li a.is-active::after {
                    content: '•';
                    position: absolute;
                    text-align: center;
                    left: calc(50% - 2px);
                    top: 32px;
                    z-index: 10;
                }
            `}</style>
        </>
    );
};