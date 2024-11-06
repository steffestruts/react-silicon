import React from 'react'

const Testomonial = () => {
  return (
    <section className="testimonial" aria-label="Our Clients">
      <div className="container">
        <h2>Clients are Loving Our App</h2>
        <div className="testimonial-client">
          <img src="images/misc-rating4star.svg" className="rating" alt="Four Stars of Five" />
          <div className="text"><p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p></div>
          <div className="person">
            <div className="head">
              <img src="images/misc-f-head.svg" alt="Fannie Summers Profile" />
            </div>
            <div className="name">
              <h3>Fannie Rogers</h3>
              <h4>Designer</h4>
            </div>
          </div>
        </div>
        <div className="testimonial-client-fivestar">
          <div className="testimonial-client">
            <img src="images/misc-rating5star.svg" className="rating" alt="Five Stars of Five" />
            <div className="text"><p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p></div>
            <div className="person">
              <div className="head">
                <img src="images/misc-m-head.svg" alt="Albert Flores Profile" />
              </div>
              <div className="prpfile">
                <h3>Albert Flores</h3>
                <h4>Developer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testomonial