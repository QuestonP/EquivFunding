import React from 'react'
import { CardCarousel } from './index';

const projectCards = [
  {
    title: 'Siding',
    description: 'Here we did some siding on the house of one of our clients',
    imageUrl: 'src/assets/siding.jpeg',
  },
  {
    title: 'Landscaping?',
    description: 'Landscaping? No problem!',
    imageUrl: 'src/assets/landscaping.jpeg',
  },
  {
    title: 'Outdoor Space',
    description: 'Nicholas Construction is ready to take on your next outdoor project',
    imageUrl: 'src/assets/stones.jpeg',
  },
  {
    title: 'Siding',
    description: 'Here we did some siding on the house of one of our clients',
    imageUrl: 'src/assets/siding.jpeg',
  },
  {
    title: 'Landscaping',
    description: 'Landscaping? No problem!',
    imageUrl: 'src/assets/landscaping.jpeg',
  },
  {
    title: 'Outdoor Space',
    description: 'Nicholas Construction is ready to take on your next outdoor project',
    imageUrl: 'src/assets/stones.jpeg',
  },
];

const Services = () => {
  return (
    <div className="w-full mx-2 flex flex-col content-center my-4">
        <h1 className="text-center  text-white text-4xl font-poppins font-bold">Services</h1>
        <div className="w-full flex flex-row justify-between">
          <CardCarousel cards={projectCards} />
        </div>
      </div>
  )
}

export default Services