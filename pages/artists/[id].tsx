import Layout from '../../components/layout'
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
      <div>
        <div>{artist.DisplayName}</div>
        <div>{JSON.stringify(artworks)}</div>
      </div>
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
      artworks,
    },
  }
}
