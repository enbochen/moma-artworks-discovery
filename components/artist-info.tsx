import Artist from '../interfaces/artist'

interface Props extends Artist {}

const ArtsitInfo = ({ DisplayName, ArtistBio, Gender }: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <a href="/" className="hover:underline">
          {DisplayName}
        </a>
      </h3>
      <p className="text-lg leading-relaxed mb-4">
        {ArtistBio}, {Gender}
      </p>
    </div>
  )
}

export default ArtsitInfo
