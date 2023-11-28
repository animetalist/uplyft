const DATA = [
  {
    name: 'Theme',
    label: 'What are you looking to do:',
    options: ['Personal loan', 'Conslidation of debt', 'Debt resolution'],
  },
  {
    name: 'From',
    label: 'How did you hear about us?',
    options: [
      'TV',
      'Radio',
      'TikTok',
      'Instagram',
      'Facebook',
      'Mail offer',
      'Google',
      'Family or friend',
      'Referral',
      'Other',
    ],
  },
  {
    name: 'FirstName',
    label: 'First Name',
    required: '*enter your name',
  },
  {
    name: 'LastName',
    label: 'Last Name',
  },
  {
    name: 'Email',
    type: 'email',
    label: 'Email Address',
    required: '*enter your email',
    pattern: /[a-z0-9._%+]+@[a-z0-9.]+\.[a-z]{2,}/,
  },
  {
    name: 'Phone',
    type: 'tel',
    label: 'Phone Number',
    required: '*enter your phone number',
    pattern: /^[+]?[\d() -]*\d[\d() -]*$/,
  },
]

export default DATA
