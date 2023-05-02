import Artwork from '../interfaces/artwork'
import { ImageContainer, ImageItem } from './image'
import ArtworkInfo from './artwork-info'

const ArtworkCard = ({ ThumbnailURL, ...rest }: Artwork) => {
  return (
    <ImageContainer>
      <ImageItem src={ThumbnailURL} width="300" height="300" />
      {/* <ArtworkInfo {...rest} /> */}
    </ImageContainer>
  )
}

export default ArtworkCard
