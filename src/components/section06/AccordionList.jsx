import React, {useEffect, useState} from 'react'

const AccordionList = () => {
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq');
      const data = await res.json();
      setAccordionData(data);
    }

    fetchData();
  }, []);


  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }
    
  return (
    <div className="faq-and-newsletter-accordion">
        {accordionData.map((faq, index) => (
          <div className="accordion-container"  key={faq.id}>
            <button className="accordion" onClick={toggleAccordion}>{faq.title}<div className="chevron"></div></button>
            <div className="panel"><p>{faq.content}</p></div>
          </div>
        ))}
    </div>
  )
}

export default AccordionList