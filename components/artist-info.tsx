import Artist from '../interfaces/artist'

const ArtsitInfo = ({ DisplayName, ArtistBio, Gender }: Artist) => {
  return (
    <div className="mt-6">
      <h3 className="text-4xl md:text-4xl font-bold mb-3 leading-snug">
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
