import Link from 'next/link';
import {Button} from './button';
import {IconButton} from './icon-button';

export const AppHeader = ({}) => {
    return (
        <>
            <header>
                <nav className='wrapper'>
                    <Link href='/'>
                        <a>
                            <img className='logo' src='/logo.png' alt='Marvel Test Michel' />
                        </a>
                    </Link>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/mtraatabladaa94' target='_blank'>
                                <IconButton
                                    url='/facebook.png'
                                    size='md'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/mtraatabladaa94' target='_blank'>
                                <IconButton
                                    url='/youtube.png'
                                    size='md'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/mtraatabladaa94' target='_blank'>
                                <IconButton
                                    url='/github.png'
                                    size='md'
                                />
                            </a>
                        </li>
                        <li>
                            <Link href='/favs'>
                                <a>
                                    <Button>Favs</Button>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <style jsx>{`
                header {
                    background-color: #ffffff;
                    height: 80px;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 9;
                    -webkit-box-shadow: 0px 6px 15px -6px rgba(0,0,0,0.75);
                    -moz-box-shadow: 0px 6px 15px -6px rgba(0,0,0,0.75);
                    box-shadow: 0px 6px 15px -6px rgba(0,0,0,0.75);
                }
                header nav {
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                header nav ul {
                    display: flex;
                    list-style: none;
                }
                header nav ul li {
                    display: flex;
                    align-items: center;
                    margin-left: 4px;
                }
                header nav ul li:last-child {
                    border-left: 1px solid #999;
                    margin-left: 1rem;
                    padding-left: 1rem;
                }

                .logo {
                    height: 32px;
                    transition: .3s opacity;
                }
                .logo:hover{
                    opacity: .8;
                }
            `}</style>
        </>
    );
};