import React, {useEffect, useState} from 'react'

// Used teacher Hans's solution, so credit to him.

const AccordionItem = ({item}) => {
  const [isOpen, setIsOpen] = useState(null);

  const accordionToggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq');
      const data = await res.json();
      setAccordionData(data);
    }
  }, []);
    
  return (
    <div className="accordion-container">
        <button className={`accordion-button ${isOpen ? 'open' : ''}`} onClick={accordionToggle}>{item.title}<div className="accordion-chevron"></div></button>
        {
          isOpen && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )
        }
    </div>
  )
}

export default AccordionItem