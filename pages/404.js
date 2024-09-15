import Head from 'next/head'
import Link from 'next/link'
import { Button } from '../elements/theme/components/button'
import {AppLayout} from './../elements/theme/components/app-layout'

export default function CharacterPage() {
    return (
        <>
            <div>
                <Head>
                    <title>Error 404 Not Found - Soymichel.dev</title>
                </Head>
                <AppLayout>
                    <div className='not-found'>
                        <div className='wrapper not-found__container'>
                            <h1>This page does not exist :(</h1>
                            <p>
                                We are very sorry, but we believe that you have made a mistake when trying to access this site.  
                            </p>
                            <Link href='/'>
                                <a>
                                    <Button>
                                        Go To Home
                                    </Button>
                                </a>
                            </Link>
                            <img
                                src='/not-found.png'
                                alt='Not found data'
                            />
                        </div>
                    </div>
                </AppLayout>
            </div>
            <style jsx>{`
                .not-found {
                    width: 100%;
                    height: 100%;
                    margin-top: 3.5rem;
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
            `}</style>
        </>
    )
}