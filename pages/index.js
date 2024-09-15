import Head from 'next/head'
import {AppLayout} from './../elements/theme/components/app-layout'
import {Hero} from './../elements/hero/components/index'
import { CharactersContainer } from '../elements/characters/containers/characters-container'

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Characters - Soymichel.dev</title>
      </Head>
      <AppLayout>
          <Hero
            title='Visualize amazing Marvel characters'
            caption='Wonderful characters like Captain America or Spider-Man are here. Learn more about your favorite characters and know in which comics and stories they appear.'
            image='/hero.png'
          />
          <CharactersContainer />
      </AppLayout>
    </div>
  )
}