import Container from '../../components/container'
import Layout from '../../components/layout'
import ArtsitInfo from '../../components/artist'
import Artist from '../../interfaces/artist'
import Artwork from '../../interfaces/artwork'
import {
  getAllArtistsId,
  getArtistById,
  getArtistWithArtworksById,
} from '../../lib/api'

interface Props {
  artist: Artist
  // artworks: Artwork[]
}
export default function Artist({ artist }: Props) {
  return (
    <Layout>
      <Container>
        <ArtsitInfo {...artist} />
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

export function getStaticProps({ params }) {
  const { artist, artworks } = getArtistWithArtworksById(params.id)
  return {
    props: {
      artist,
      // artworks,
    },
  }
}
