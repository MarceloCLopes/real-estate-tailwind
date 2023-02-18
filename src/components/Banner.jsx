import houseBannerImg from '../assets/img/house-banner.png'
import { Search } from './Search'

export const Banner = () => {
  return (
    <section className='h-full max-h-[40rem] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[8.43rem] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[3.62rem] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent</span> Your Dream House With
            Us.
          </h1>
          <p className='max-w-[30rem] mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            repellendus sed, fugit modi neque officia suscipit. Minus, assumenda
            sed! Inventore et sunt maiores sint accusamus laboriosam qui quas
            optio dicta.
          </p>
        </div>

        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={houseBannerImg} alt='' />
        </div>
      </div>
      <Search />
    </section>
  )
}
