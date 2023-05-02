import Image from 'next/image'
import Artwork from '../interfaces/artwork'

type Props = {
  artworks: Artwork[]
}

const ArtworkTwins = ({ artworks }: Props) => {
  return (
    <div className="flex">
      {artworks.length > 0 &&
        artworks.map((artwork) => (
          <div key={artwork.ObjectID}>
            <a href={artwork.URL} target="_blank" rel="noreferrer noopener">
              <Image
                className="object-cover h-full shadow-md"
                src={artwork.ThumbnailURL}
                alt={artwork.Title}
                width="300"
                height="300"
              />
            </a>
          </div>
        ))}
    </div>
  )
}

export default ArtworkTwins
