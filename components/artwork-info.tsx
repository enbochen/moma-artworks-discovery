import Artwork from '../interfaces/artwork'

const ArtworkInfo = ({
  Title,
  Date,
  Medium,
  Artist,
  ConstituentID,
  Dimensions,
}: Partial<Artwork>) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        {Title} ({Date})
      </h3>
      <h3 className="text-3xl mb-3 leading-snug">
        {Medium}, {Dimensions}
      </h3>
      {/* {Artist.map((artist, index) => (
        <div key={ConstituentID[index]}>{artist}</div>
      ))} */}
    </div>
  )
}

export default ArtworkInfo
