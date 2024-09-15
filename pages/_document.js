import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'Marvel Soymichel Test'
const APP_DESCRIPTION = 'Marvel Test'

export default class extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html lang='en' dir='ltr'>
            <Head>
                <meta name='application-name' content={APP_NAME} />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                <meta name='description' content={APP_DESCRIPTION} />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='theme-color' content='#FFFFFF' />
                                
                <link rel='apple-touch-icon' sizes='180x180' href='/icon-512x512.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='shortcut icon' href='/favicon.ico' />
                <style>{`
                    html, body, #__next {
                        height: 100%;
                    }
                    #__next {
                        margin: 0 auto;
                    }
                    h1 {
                        text-align: center;
                    }
                `}</style>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}