import React, {useEffect, useState} from 'react'
import AccordionItem from './AccordionItem'

const AccordionList = () => {
  const [accordionItems, setSetaccordionItems] = useState([]);

const fetchData = async () => {
  const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq');
  const data = await res.json();
  setSetaccordionItems(data);
}

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="accordion-container">
        {
          accordionItems.map((faq, index) => (<AccordionItem key={faq.id}/>))
        }
    </div>
  )
}

export default AccordionList