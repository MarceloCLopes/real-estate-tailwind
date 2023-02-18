import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HouseContext } from '../context/HouseContext'
import { House } from './House'

import { ImSpinner2 } from 'react-icons/im'

export const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[12.5rem]' />
    )
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing found
      </div>
    )
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}