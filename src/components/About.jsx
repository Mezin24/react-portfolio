import aboutSvg from '../assets/about.svg';
import { SectionTitle } from './';

export const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='about img' className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
            beatae deleniti! Vel sequi deserunt ipsum, harum quos maxime porro
            veritatis eius illo quas beatae exercitationem repellat. Rerum
            repudiandae ducimus sunt minima unde veniam modi praesentium qui,
            voluptate similique alias dolorum.
          </p>
        </article>
      </div>
    </section>
  );
};
