'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import DATA from './constants'
import clsx from 'clsx'
import 'swiper/scss'
import 'swiper/scss/pagination'
import * as s from './Reviews.module.scss'

const Reviews = () => {
  return (
    <section id="reviews" className={clsx('container', s.reviews)}>
      <h2 className={clsx('h1', s.reviews_title)}>
        What <strong>our clients</strong> say about us?
      </h2>

      <Swiper
        modules={[Pagination]}
        slidesPerView="auto"
        spaceBetween={24}
        rewind
        updateOnWindowResize
        pagination
        breakpoints={{
          1024: {
            pagination: false,
          },
        }}
        className={s.reviews_list}
      >
        {DATA.map(({ name, pic, text }) => (
          <SwiperSlide key={name} className={s.reviews_item}>
            <p className={s.reviews_text}>{text}</p>

            <div className={s.reviews_bottom}>
              <Image
                width="58"
                height="58"
                src={pic}
                alt={name}
                className={s.reviews_pic}
              />
              <span className={s.reviews_name}>{name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Reviews
