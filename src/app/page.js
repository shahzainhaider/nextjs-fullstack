import React from 'react'
import Banner from './components/Banner'
import HomeSection from './components/HomeSection'
import enjoyTv from '../app/images/Enjoy-Tv.png'
import downloadShows from '../app/images/Download-Shows.jpg'
import watchEverywhere from '../app/images/Watch-Everywhere.png'
import kidsShows from '../app/images/Kids-Shows.png'

const page = () => {
  return (
    <>
    <Banner />
    <HomeSection flexRow={'flex-row-reverse'} headingName={'Enjoy on your TV'} paragraphName={'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'} imageUrl={enjoyTv} />
    <HomeSection flexRow={'flex-row'} headingName={'Download your shows to watch offline'} paragraphName={'Save your favorites easily and always have something to watch.'} imageUrl={downloadShows} />
    <HomeSection flexRow={'flex-row-reverse'} headingName={'Watch everywhere'} paragraphName={'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'} imageUrl={watchEverywhere} />
    <HomeSection flexRow={'flex-row'} headingName={'Create profiles for kids'} paragraphName={'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'} imageUrl={kidsShows} />
    </>
  )
}

export default page

