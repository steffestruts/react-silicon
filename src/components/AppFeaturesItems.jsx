import React from 'react'

const AppFeaturesItems = () => {
  return (
    <div className="tron-city">
      {/* Easy Payments */}
      <div className="app-features-container">
        <div className="app-features-icon">
          <img src="images/icon-creditcard.svg" alt="credit card" />
        </div>
        <div className="app-features-text">
          <h5>Easy Payments</h5>
          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>
      </div>
      {/* Data Security */}
      <div className="app-features-container">
        <div className="app-features-icon">
          <img src="images/icon-security.svg" alt="data security shield" />
        </div>
        <div className="app-features-text">
          <h5>Data Security</h5>
          <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
        </div>
      </div>
      {/* <Cost Statistics */}
      <div className="app-features-container">
        <div className="app-features-icon">
          <img src="images/icon-money-bars.svg" alt="bars graphics" />
        </div>
        <div className="app-features-text">
          <h5>Cost Statistics</h5>
          <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
        </div>
      </div>
      {/* Support 24/7 */}
      <div className="app-features-container">
        <div className="app-features-icon">
          <img src="images/icon-support247.svg" alt="chat" />
        </div>
        <div className="app-features-text">
          <h5>Support 24/7</h5>
          <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
        </div>
      </div>
      {/* Regular Cashback */}
      <div className="app-features-container">
        <div className="app-features-icon">
          <img src="images/icon-wallet.svg" alt="wallet" />
        </div>
        <div className="app-features-text">
          <h5>Regular Cashback</h5>
          <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
        </div>
      </div>
      {/* Top Standards */}
      <div className="app-features-container">
        <div className="app-features-icon">
          <img src="images/icon-happy.svg" alt="happy face" />
        </div>
        <div className="app-features-text">
          <h5>Top Standards</h5>
          <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
        </div>
      </div>
    </div>
  )
}

export default AppFeaturesItems