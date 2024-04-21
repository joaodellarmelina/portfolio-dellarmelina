import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import MoreText from "./MoreText";
import Main from "./Main";
import Premios from "./Premios";

const SobreMim = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

  return (
    <section id='sobreMimSec' className='flex flex-col gap-24'>
      <Main />
      <EmblaCarousel options={OPTIONS} />
      <MoreText />
      <Premios />
    </section>
  )
};


export default SobreMim;
