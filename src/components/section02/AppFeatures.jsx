import React from 'react'

const AppFeatures = () => {
  return (
    <section className="app-features" aria-label="App Features" id="app-features">
      <div className="container">
        <div className="logo-ipsum">
          <img src="images/logo-logoipsum-01.svg" alt="logoipsum 1" />
          <img src="images/logo-logoipsum-02.svg" alt="logoipsum 2" />
          <img src="images/logo-logoipsum-03.svg" alt="logoipsum 3" />
          <img src="images/logo-logoipsum-04.svg" alt="logoipsum 4" />
          <img src="images/logo-logoipsum-05.svg" alt="logoipsum 5" />
          <img src="images/logo-logoipsum-06.svg" alt="logoipsum 6" />
        </div>
        <div className="app-features-flex">
          <div className="app-features-left">
            <img src="images/app-features-phone.svg" alt="phone visa card" />
          </div>
          <div className="app-features-right">
            <div className="app-features-description">
              <h2>App Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppFeatures