import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { About } from '@/components/sections/About'
import { Menu } from '@/components/sections/Menu'
import { Gallery } from '@/components/sections/Gallery'
import { Reviews } from '@/components/sections/Reviews'
import { Events } from '@/components/sections/Events'
import { Contact } from '@/components/sections/Contact'
import { Map } from '@/components/Map'

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="about" title="Our Story" sub="A warm, cozy corner where coffee meets conversation.">
        <About />
      </Section>

      <Section id="menu" title="Menu" sub="From classic brews to seasonal specials.">
        <Menu />
      </Section>

      <Section id="gallery" title="Gallery" sub="Night vibes, daylight charm, and coffee close-ups.">
        <Gallery />
      </Section>

      <Section id="reviews" title="What Customers Say" sub="Real words from our community.">
        <Reviews />
      </Section>

      <Section id="events" title="Events, Promotions & News" sub="Stay in the loop with what’s brewing.">
        <Events />
      </Section>

      <Section id="contact" title="Find Us" sub="We’d love to host you.">
        <div className="grid md:grid-cols-2 gap-8">
          <Contact />
          <div className="min-h-[300px]">
            <Map />
          </div>
        </div>
      </Section>
    </>
  )
}
