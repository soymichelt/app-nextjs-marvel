import Head from 'next/head'
import {AppLayout} from './../../elements/theme/components/app-layout'
import {Hero} from './../../elements/hero/components/index'
import { StoriesContainer } from './../../elements/stories/containers/stories-container'

export default function StoriesPage() {
  return (
    <div>
      <Head>
        <title>Stories - Soymichel.dev</title>
      </Head>
      <AppLayout>
          <Hero
            title='Marvel stories are fabulous and exciting'
            caption='The stories created by Marvel help readers to extend the information raised in the comics. Learn more about your favorite characters with the stories.'
            image='/hero.png'
          />
          <StoriesContainer />
      </AppLayout>
    </div>
  )
}