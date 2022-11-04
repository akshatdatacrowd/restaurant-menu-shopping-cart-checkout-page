import React from 'react'

// props

type Props = {
    fullName : string,
}

const ThankYou = ({ fullName }: Props) => {
  return (
    <div className="w-25 top-50 start-50 position-fixed translate-middle border border-dark rounded-3 p-3 bg-warning">
        <h1 className="text-center">Thank you for your order {fullName}!</h1>
    </div>
  )
}

export default ThankYou