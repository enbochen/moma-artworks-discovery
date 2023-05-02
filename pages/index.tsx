import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getDailyRandomArtworks } from '../lib/api'
import Head from 'next/head'
import { WEBSITE_NAME } from '../lib/constants'
import Artist from '../interfaces/artist'
import Artwork from '../interfaces/artwork'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  randomArtworks: Artwork[]
}

const ImageContainer = ({ children }) => (
  <div className="flex flex-wrap mx-[-10px]">{children}</div>
)

const ImageItem = ({ src, width, height }) => (
  <div className="w-full p-1">
    <img
      src={src}
      className="object-cover w-full h-full rounded shadow-md"
      width={width}
      height={height}
    />
  </div>
)

export default function Index({ randomArtworks }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{WEBSITE_NAME}</title>
        </Head>
        <Container>
          <Intro />

          <ImageContainer>
            {randomArtworks.length > 0 &&
              randomArtworks.map((artwork, index) => (
                <div key={artwork.ObjectID}>
                  <a
                    href={artwork.URL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ImageItem
                      src={artwork.ThumbnailURL}
                      alt={artwork.Title}
                      width="400"
                      height="300"
                    />
                  </a>
                  {/* <div className="text-warp">
                    <div>{artwork.Title}</div>
                    <div>{artwork.Date}</div>
                    <div>{artwork.Artist.join()}</div>
                    <div>{artwork.Medium}</div>
                  </div> */}
                </div>
              ))}
          </ImageContainer>
        </Container>
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const randomArtworks = await getDailyRandomArtworks()

  return {
    props: { randomArtworks },
  }
}
