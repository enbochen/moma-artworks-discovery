import { WEBSITE_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        {WEBSITE_NAME}
      </h1>
    </section>
  )
}

export default Intro
