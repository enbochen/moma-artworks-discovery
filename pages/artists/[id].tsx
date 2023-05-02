import Head from 'next/head'
import Container from '../../components/container'
import Layout from '../../components/layout'
import ArtsitInfo from '../../components/artist-info'
import ArtsitArtworks from '../../components/artist-artworks'
import Artist from '../../interfaces/artist'
import Artwork from '../../interfaces/artwork'
import { getArtistWithArtworksById } from '../../lib/api'

interface Props {
  artist: Artist
  artworks: Artwork[]
}
export default function Artist({ artist, artworks }: Props) {
  return (
    <Layout>
      <Head>
        <title>{artist.DisplayName}</title>
      </Head>
      <Container>
        <ArtsitInfo {...artist} />
        <ArtsitArtworks artworks={artworks} />
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { artist, artworks } = await getArtistWithArtworksById(params.id)
  return {
    props: {
      artist,
      artworks,
    },
  }
}
