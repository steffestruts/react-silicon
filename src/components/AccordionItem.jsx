import React, {useEffect, useState} from 'react'

const AccordionItem = () => {
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq');
      const data = await res.json();
      setAccordionData(data);
    }

    fetchData();
  }, []);
    
  return (
    <div className="faq-and-newsletter-accordion">
        {accordionData.map((item, index) => (
          <div className="accordion"  key={item.id}>
            <strong>{item.title}</strong>
            <br />
            <div className="panel"><p>{item.content}</p></div>
          </div>
        ))}
    </div>
  )
}

export default AccordionItem