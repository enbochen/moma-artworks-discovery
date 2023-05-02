import Image from 'next/image'
import Artwork from '../interfaces/artwork'

interface props {
  artworks: Artwork[]
}

const ArtistArtworks = ({ artworks }: props) => {
  return (
    <div>
      <h3 className="text-xl mb-2 leading-snug">Artworks({artworks.length})</h3>
      <div className="flex gap-2 flex-wrap">
        {artworks.map((artwork) => (
          <a href={artwork.URL} target="_blank" rel="noreferrer noopener">
            <Image
              src={artwork.ThumbnailURL}
              alt={artwork.Title}
              width="300"
              height="300"
              className="shadow-md"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default ArtistArtworks
