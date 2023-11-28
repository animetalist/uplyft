import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Logo from '../Logo'
import Menu from '../Menu'
import Contacts from '../Contacts'
import { SCHEDULE, SOCIALS } from './constants'
import s from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={s.footer}>
      <div className={clsx('container container-small', s.footer_inner)}>
        <Logo isWhite className={s.footer_logo} />

        <Contacts variant="footer" />

        <ul className={s.footer_social}>
          {SOCIALS.map(({ Icon, name, link }) => (
            <li key={name}>
              <a
                href={link}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <div className={s.footer_menu}>
          <span className={clsx('h3', s.footer_title)}>Company</span>
          <Menu variant="footer" />
        </div>

        <div className={s.footer_schelude}>
          <span className={clsx('h3', s.footer_title)}>Working Hours</span>
          <div className={s.footer_scheludeList}>
            {SCHEDULE.map(({ title, value }) => (
              <React.Fragment key={title}>
                <span>{title}</span>
                <span className={s.footer_accent}>{value}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className={clsx('container', s.footer_bottom)}>
        <p className={s.footer_copy}>
          © {currentYear} UPLYFT FINANCIAL, LLC. ALL RIGHTS RESERVED.
        </p>
        <hr />
        <p className={s.footer_note}>
          UpLyft Financial is a consulting firm-marketing lead generator and
          assists in finding fully accredited Lenders for consumers. UpLyft
          Financial is not a lender, broker, Mortgage company or Attorney
          network. UpLyft Financial does not take loan applications, originate,
          service, underwrites, makes loans or credit decisions in connection
          with consumers. UpLyft Financial’s services are strictly consultative
          and administrative and should not be misunderstood as being a lender
          but will match you with a licensed lender if necessary. Any loan
          inquiry you submit is NOT an application for credit with UpLyft
          Financial. Rather, it is an inquiry to be matched with Lenders or
          Professionals to help you with your unsecured debts through debt
          relief help or a personal loan referral.{' '}
          <Link href="/policy">Privacy Policy</Link> -{' '}
          <Link href="/policy">Terms and Conditions</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
