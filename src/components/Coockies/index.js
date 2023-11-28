'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Button from '../Button'
import s from './Coockies.module.scss'

const Coockies = () => {
  const [consentGiven, setConsentGiven] = useState(true)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent')
    hasConsent ? setConsentGiven(true) : setConsentGiven(false)
  }, [])

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true')
    setConsentGiven(true)
  }

  return (
    <div className={clsx(s.coockies, { [s.show]: !consentGiven })}>
      <div className={clsx('container container-small', s.coockies_inner)}>
        <p className={s.coockies_text}>
          We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking
          “Accept”, you consent to the use of ALL the cookies.{' '}
          <Link href="/policy" className={s.coockies_link}>
            Privacy Policy Terms and Conditions
          </Link>
        </p>

        <Button
          size="small"
          type="button"
          onClick={handleConsent}
          className={s.coockies_btn}
        >
          Accept
        </Button>
      </div>
    </div>
  )
}

export default Coockies
