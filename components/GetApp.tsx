import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex flex-1 w-full flex-col items-start justify-center gap-12'>
          <h2 className="bold-40 lg:bolg-64 xl:max-w-[320px]">
            Get For Free Now
          </h2>
          <p className='regular-16 text-gray-10 -mt-12'>
            Available on iOS and Android
          </p>
          <div className='flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row'>
            <Button type="button" title="App Store" icon='/apple.svg' variant='btn_white' full={true}/>
            <Button type="button" title="Play Store" icon='/android.svg' variant='btn_dark_green_outline' full={true}/>

          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image src="/phones.png" alt='phone' width={550} height={870}/>
        </div>
      </div>
    </section>
  )
}

export default GetApp