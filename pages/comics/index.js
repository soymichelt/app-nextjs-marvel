import Head from 'next/head'
import {AppLayout} from './../../elements/theme/components/app-layout'
import {Hero} from './../../elements/hero/components/index'
import { ComicsContainer } from './../../elements/comics/containers/comics-container'

export default function ComicsPage() {
  return (
    <div>
      <Head>
        <title>Comics - Soymichel.dev</title>
      </Head>
      <AppLayout>
          <Hero
            title='You know the amazing Marvel comics'
            caption='Marvel is a company that produces the most important comics in the world. We are sure that some of these are in your favorites.'
            image='/hero.png'
          />
          <ComicsContainer />
      </AppLayout>
    </div>
  )
}