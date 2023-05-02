import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import ArtworkTwins from '../components/artwork-twins'
import { getDailyRandomArtworks } from '../lib/api'
import Head from 'next/head'
import { WEBSITE_NAME } from '../lib/constants'
import Artwork from '../interfaces/artwork'

type Props = {
  randomArtworks: Artwork[]
}

export default function Index({ randomArtworks }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{WEBSITE_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <ArtworkTwins artworks={randomArtworks} />
        </Container>
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const randomArtworks = await getDailyRandomArtworks()

  return {
    props: { randomArtworks },
  }
}
