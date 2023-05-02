import Artist from '../interfaces/artist'
import { MOMA_ARTIST_BASE_URL } from '../lib/constants'

const ArtsitInfo = ({
  DisplayName,
  ArtistBio,
  Gender,
  ConstituentID,
}: Artist) => {
  return (
    <div className="mt-6">
      <h3 className="text-4xl md:text-4xl font-bold mb-3 leading-snug">
        <a
          href={`${MOMA_ARTIST_BASE_URL}/${ConstituentID}`}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:underline"
        >
          {DisplayName}
        </a>
      </h3>
      <p className="text-xl font-bold leading-relaxed mb-4">
        {ArtistBio}, {Gender}
      </p>
    </div>
  )
}

export default ArtsitInfo
