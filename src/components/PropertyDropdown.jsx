import { Menu } from '@headlessui/react'
import { useContext, useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri'

import { HouseContext } from '../context/HouseContext'

export const PropertyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { property, setProperty, properties } = useContext(HouseContext)

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
        <RiHome5Line className='dropdown-icon-primary' />

        <div>
          <div className='text-sm font-medium leading-tight'>{property}</div>
          <div className='text-xs'>Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className='cursor-pointer hover:text-violet-700 transition'
              as='li'
              key={index}>
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
