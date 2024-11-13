import React from 'react'

const TransferSimple = () => {
  return (
    <section className="transfer-simple">
      <div className="container">
        <div className="transfer-simple-clear">
          <div className="content">
            <h2>Make your money transfer simple and clear</h2>
            <ul>
              <li>Banking transactions are free for you</li>
              <li>No monthly cash commission</li>
              <li>Manage payments and transactions online</li>
            </ul>
            <a className="btn-learn-more" href="#">
              <span>Learn more</span>
              <img src="images/icon-arrow-right.svg" alt="arrow right" />
            </a>
          </div>
          <img src="images/transfer-simple-and-clear-graph.svg" alt="Transfer Graph" />
        </div>

        <div className="transfer-simple-payment">
          <img src="images/transfer-simple-and-clear-list.svg" />
          <div className="content">
            <h2>Receive payment from international bank details</h2>
            <div className="transfer-simple-payment-flex">
              <div className="transfer-simple-payment-container">
                <div className="transfer-simple-icon">
                  <img src="images/icon-creditcard.svg" alt="Credit Card" />
                </div>
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
              <div className="transfer-simple-payment-container">
                <div className="transfer-simple-icon">
                  <img src="images/icon-wallet.svg" alt="Wallet" />
                </div>
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>
            <a className="btn-learn-more" href="#">
              <span>Learn more</span>
              <img src="images/icon-arrow-right.svg" alt="arrow right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransferSimple