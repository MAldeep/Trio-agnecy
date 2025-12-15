"use client"
import { useEffect } from 'react'
import Header from '../_components/(homePage)/Header'
import { heroTimeline } from '../_components/(homePage)/HeroTimeline'

export default function BlogPage() {
  useEffect(() => {
    heroTimeline.play();
  } ,[]);
  return (
    <div className='w-full'>
      <Header/>
    </div>
  )
};
