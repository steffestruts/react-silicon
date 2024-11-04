import React from 'react'

const OneAppExplanation = () => {
  return (
    <section className="manage-one-app">
      <div className="container">
        <div className="tron-city">
          <div className="one-app-explanation">
            <div className="one-app-explanation-content">
              <h1 className="display4">Manage All Your Money in One App</h1>
              <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
              <a href="#"><img src="images/button-appstore.svg" alt="button apple appstore" /></a><a href="#"><img src="images/button-googleplay.svg" alt="button google playstore" /></a>
            </div>
            <a href="#app-features" className="discover-more-btn">
              <div className="discover-more-btn-chevron"><img src="images/icon-chevron-down.svg" alt="chevron down" /></div>
              <span>Discover more</span>
            </a>
          </div>
          <div className="phone-display">
            <img className="image-phone-creditcard" src="images/iphone12-creditcard.svg" alt="phone credit card" />
            <img className="image-phone-mybudget" src="images/iphone12-mybudget.svg" alt="phone my budget" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OneAppExplanation