import StarRating from './StarRating'
import React, { useEffect, useState } from 'react';

const TestimonialList = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials');
      const data = await res.json();
      setTestimonialData(data);
    }

    fetchData();
  }, []);
    
  return (
      <div className="container">
        <h2>Clients are Loving Our App</h2>
        {testimonialData.map((testimonial) => (
          <div className="testimonial-client" key={testimonial.id}>
            <div className="rating"><StarRating starRating={testimonial.starRating} /></div>
            <p className='text'>{testimonial.comment}</p>
            <div className="person">
              <div className="head">
                <img src={testimonial.avatarUrl} alt={testimonial.author} />
              </div>
              <div className="name">
                <h3>{testimonial.author}</h3>
                <h4>{testimonial.jobRole}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

    


/*     <div className="faq-and-newsletter-accordion">
    {accordionData.map((faq, index) => (
      <div className="accordion-container"  key={faq.id}>
        <button className="accordion">{faq.title}<div className="chevron"></div></button>
        <div className="panel"><p>{faq.content}</p></div>
      </div>
    ))}
    </div> */
  )
}

export default TestimonialList