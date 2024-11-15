import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'
import FAQContactPhone from './FAQContactPhone';
import FAQContactChat from './FAQContactChat';

const FAQ = () => {
  const [accordionData, setAccordionData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq');
      const data = await res.json();
      setAccordionData(data);
    }

    fetchData();
  }, []);

  return (
    <section className='faq-and-newsletter' aria-label="FAQ And Newsletter">
      <div className="container">
        <div className="faq-and-newsletter-left">
            <h2>Any questions? Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
            <div className="faq-and-newsletter-contact">
              {/* Phone Contact */}
              <FAQContactPhone />
              {/* Chat Contact */}
              <FAQContactChat />
            </div>
          </div>


          <div className="faq-and-newsletter-accordion">
            {
              accordionData.map(item => (
                <AccordionItem key={item.id} item={item}/>
              ))
            }
          </div>
      </div>
    </section>
  )
}

export default FAQ













