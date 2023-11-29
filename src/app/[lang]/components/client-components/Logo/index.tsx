"use client"
import Link from 'next/link';
import { motion } from "framer-motion"

const MotionLink = motion(Link)

export default function Logo() {
  return (
    <div className='flex items-center justify-center mt-2' >
      <MotionLink href="/" whileHover={{
        color: ['#121212',
          '#f08',
          '#16f3d0',
          '#0af',
          '#ff0',
          '#f90',],
        transition: { duration: .8, repeat: Infinity }
      }}
        className=" text-dark text-2xl font-bold"
      >HUBLY</MotionLink>
    </div>
  )
}