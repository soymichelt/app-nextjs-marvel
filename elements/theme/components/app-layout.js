import {AppHeader} from './app-header'
import {AppFooter} from './app-footer'

export const AppLayout = ({
    children,
}) => {
    return (
        <>
            <div className='app'>
                <AppHeader />
                <main>{children}</main>
                <AppFooter />
            </div>
            <style jsx global>{`
                .app {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                main {
                    flex: 1;
                }
                .wrapper {
                    max-width: 1280px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    box-sizing: border-box;
                }
            `}</style>
        </>
    );
};