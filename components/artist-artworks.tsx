import Artwork from '../interfaces/artwork'
import ArtworkCard from './artwork-card'

interface props {
  artworks: Artwork[]
}

const ArtistArtworks = ({ artworks }: props) => {
  return (
    <div>
      <h3 className="text-2xl mb-3 leading-snug">
        Artworks({artworks.length})
      </h3>
      <div>
        {artworks.map((artwork) => (
          <ArtworkCard {...artwork} key={artwork.ObjectID} />
        ))}
      </div>
    </div>
  )
}

export default ArtistArtworks
