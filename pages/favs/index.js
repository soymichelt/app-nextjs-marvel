import Head from 'next/head'
import {AppLayout} from './../../elements/theme/components/app-layout'
import {Hero} from './../../elements/hero/components/index'
import {FavsContainer} from './../../elements/favs/containers/favs-container'

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Characters - Soymichel.dev</title>
      </Head>
      <AppLayout>
          <Hero
            title='Better characters, comics and stories here'
            caption={`In this section you will find the favorite characters that you marked as favorites. If you don't delete your browser history, they will remain here.`}
            image='/hero.png'
          />
          <FavsContainer />
      </AppLayout>
    </div>
  )
}