import Head from 'next/head'
import '../styles/globals.css'
import {motion} from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return(
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      </Head>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                transition: {
                    delay: .2
                },
                opacity: 1,
            },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  )
}
