import React from 'react'
import clsx from 'clsx'
import DATA from './constants'
import s from './Features.module.scss'
import Lights from '../Lights'

const Features = () => {
  return (
    <section id="why" className={clsx('container container-small', s.features)}>
      <h2 className={clsx('h1', s.features_heading)}>
        Why <strong>UpLyft</strong>
      </h2>

      <ul className={s.features_list}>
        {DATA.map(({ title, descr, Icon }) => (
          <li key={title} className={s.features_item}>
            <Icon className={s.features_icon} />
            <div className={s.features_content}>
              <h3 className={s.features_title}>{title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: descr,
                }}
                className={s.features_descr}
              />
            </div>
          </li>
        ))}
      </ul>

      <Lights className={s.features_lights} />
    </section>
  )
}

export default Features
