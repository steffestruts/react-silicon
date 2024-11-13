import React from 'react'

const Newsletter = () => {
  return (
    <div className="container">
      <div className="newsletter-box">
        <img src="images/icon-notification.svg" alt="bell icon"></img>
        <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
        <form action="">
          <input type="email" id="email" placeholder="Your Email" pattern=".+@example\.com" size="30" required />
          <button className="btn-subscribe">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter