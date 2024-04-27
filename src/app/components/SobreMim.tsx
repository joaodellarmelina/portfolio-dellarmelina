import EmblaCarousel from './EmblaCarousel'
import MoreText from './MoreText'
import Main from './Main'
import Premios from './Premios'

const SobreMim = () => {
  return (
    <section id="sobreMimSec" className="flex flex-col gap-24">
      <Main />
      <EmblaCarousel />
      <MoreText />
      <Premios />
    </section>
  )
}

export default SobreMim
