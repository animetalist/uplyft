'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSubmit } from '@formspree/react'
import { useForm } from 'react-hook-form'
import Field from './components/Field'
import Button from '../Button'
import DATA from './constants'
import s from './Form.module.scss'

const Form = () => {
  const router = useRouter()
  const [checked, setChecked] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    shouldUnregister: true,
    defaultValues: DATA.reduce(
      (acc, curr) => ({ ...acc, [curr.name]: '' }),
      {}
    ),
  })

  const handleSend = useSubmit(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mrgrdbyv',
    {
      onError(error) {
        setSubmitting(false)
        const formErrors = error.getFormErrors()
        console.log(formErrors[0])
      },
      onSuccess() {
        router.replace('/thanks')
      },
    }
  )

  const onSubmit = (submissionData) => {
    setSubmitting(true)
    handleSend(submissionData)
  }

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
    >
      <div className={s.form_fields}>
        {DATA.map((item) => (
          <Field
            key={item.name}
            {...item}
            register={register}
            errors={errors}
            disabled={submitting}
          />
        ))}
      </div>

      <label className={s.form_check}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((prevState) => !prevState)}
          className={s.form_checkInput}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="21"
          height="18"
          viewBox="0 0 21 18"
        >
          <path
            fill="currentColor"
            d="M0 3.3A3.3 3.3 0 0 1 3.3 0h11.4A3.2 3.2 0 0 1 18 3.3v11.4a3.2 3.2 0 0 1-3.3 3.3H3.3A3.2 3.2 0 0 1 0 14.7V3.3ZM3.3 2C2.5 2 2 2.6 2 3.3v11.4c0 .7.6 1.3 1.3 1.3h11.4c.7 0 1.3-.6 1.3-1.3V3.3c0-.7-.6-1.3-1.3-1.3H3.3Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m5 7 5 5L20 2"
            opacity={checked ? 1 : 0}
          />
        </svg>
        By clicking continue, you are providing your consent for UpLyft
        Financial to contact you by email, text, and phone, which may include
        pre-recorded messages and use automated technology. Your consent to such
        contact is not required as a condition to use UpLyft’s services. You can
        unsubscribe at any time.
      </label>
      <Button
        type="submit"
        disabled={!checked || submitting}
        className={s.form_btn}
      >
        Submit
      </Button>
    </form>
  )
}

export default Form
