import React from 'react'
import Brands from './Brands'
import AppFeaturesItems from './AppFeaturesItems'

const AppFeatures = () => {
  return (
    <section className="app-features" aria-label="App Features" id="app-features">
      <div className="container">
        <Brands />
        <div className="app-features-flex">
          <div className="app-features-left">
            <img src="images/app-features-phone.svg" alt="phone visa card" />
          </div>
          <div className="app-features-right">
            <div className="app-features-description">
              <h2>App Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
            <AppFeaturesItems />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppFeatures