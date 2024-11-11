import React, { useEffect, useState } from 'react'
import AccordionList from './AccordionList'

const FAQ = () => {

  const [TestimonialList, setTestimonialList] = useState([]);

  useEffect (() => {

  }, []);

  return (
    <section className='faq-and-newsletter' aria-label="FAQ And Newsletter">
      <div className="container">
        <div className="faq-and-newsletter-left">
            <h2>Any questions? Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
            <div className="faq-and-newsletter-contact">
              {/* Phone Contact */}
              <div className="faq-and-newsletter-contact-phone">
                <img src="images/icon-telephone.svg" alt="Telephone" />
                <p>Still have  questions?</p>
                <a href="#">
                  <span>Contact us</span>
                  <img src="images/icon-arrow-right-primary.svg" alt="arrow right" />
                </a>
              </div>
              {/* Chat Contact */}
              <div className="faq-and-newsletter-contact-chat">
                <img src="images/icon-chat-color.svg" alt="Chat" />
                <p>Don't like phone calls?</p>
                <a href="#">
                  <span>Contact us</span>
                  <img src="images/icon-arrow-right-green.svg" alt="arrow right" />
                </a>
              </div>
            </div>
          </div>
          <AccordionList/>
      </div>
    </section>
  )
}

export default FAQ