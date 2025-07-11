import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="What People Say About Me ?" sub="⭐ Client Feedback Highlights" />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({ name, mentions, review, imgPath }) => (
            <GlowCard card={{ review }} index={testimonials.indexOf({ name, mentions, review, imgPath })} >
              <div className="flex items-center gap-3">
                <div>
                  <img src={imgPath} alt={name} />
                </div>
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials