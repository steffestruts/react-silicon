import React from 'react'
import TransferSimpleClear from './TransferSimpleClear'
import TransferSimplePayment from './TransferSimplePayment'

const TransferSimple = () => {
  return (
    <section className="transfer-simple">
      <div className="container">
        <TransferSimpleClear />
        <TransferSimplePayment />
      </div>
    </section>
  )
}

export default TransferSimple