import fs from 'fs'
import { join } from 'path'
import Artist from '../interfaces/artist'
import Artwork from '../interfaces/artwork'
import { getRandomRowsAsJSON, getRowsBySearch } from './csv'

const artistDirectory = join(process.cwd(), '_art/Artists.json')
const artworksDirectory = join(process.cwd(), '_art/Artworks.csv')

export function getArtists(): Artist[] {
  const fileContent = fs.readFileSync(artistDirectory, 'utf-8')
  const data = JSON.parse(fileContent)
  return data
}

// export function getArtworks(): Artwork[] {
//   const fileContent = fs.readFileSync(artworksDirectory, 'utf-8')
//   const data = JSON.parse(fileContent)
//   return data
// }

export function getAllArtists() {
  return getArtists()
}

export function getAllArtistsId() {
  const artists = getAllArtists()
  return artists.map((artist) => {
    return {
      params: {
        id: artist.ConstituentID.toString(),
      },
    }
  })
}

export async function getArtworksByArtistId(id: number): Promise<Artwork[]> {
  const artworkByArtist = (await getRowsBySearch(artworksDirectory, (row) =>
    row.ConstituentID.includes(id)
  )) as Artwork[]
  const artworksWithImage = artworkByArtist.filter(
    (artwork) => artwork.ThumbnailURL !== ''
  )
  return artworksWithImage
}

export async function getDailyRandomArtworks(limit = 2): Promise<Artwork[]> {
  const randomArtworks = await getRandomRowsAsJSON(artworksDirectory, limit)
  return randomArtworks
}

export function getArtistById(id: number): Artist {
  const artists = getAllArtists()
  const artist = artists.filter((artist) => artist.ConstituentID === id)[0]
  return artist
}

export async function getArtistWithArtworksById(id: string) {
  const idNumber = parseInt(id)
  const artist = getArtistById(idNumber)
  const artworks = await getArtworksByArtistId(idNumber)
  return {
    artist,
    artworks,
  }
}
