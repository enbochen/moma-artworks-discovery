import Container from '../../components/container'
import Layout from '../../components/layout'
import ArtsitInfo from '../../components/artist-info'
import ArtsitArtworks from '../../components/artist-artworks'
import Artist from '../../interfaces/artist'
import Artwork from '../../interfaces/artwork'
import { getAllArtistsId, getArtistWithArtworksById } from '../../lib/api'

interface Props {
  artist: Artist
  artworks: Artwork[]
}
export default function Artist({ artist, artworks }: Props) {
  return (
    <Layout>
      <Container>
        <ArtsitInfo {...artist} />
        <ArtsitArtworks artworks={artworks} />
      </Container>
    </Layout>
  )
}

export function getStaticPaths() {
  const paths = getAllArtistsId()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { artist, artworks } = await getArtistWithArtworksById(params.id)
  return {
    props: {
      artist,
      artworks,
    },
  }
}
