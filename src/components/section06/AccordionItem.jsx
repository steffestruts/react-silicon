import React from 'react'
import AccordionList from './AccordionList'
import { Link } from 'react-router-dom'

const AccordionItem = () => {
  return (
    <Link to={'/api/faq/${item.id}'}>
      <div class="accordion-container">
        <div class="panel"><p>{faq.content}</p></div>
      </div>
    </Link>
  )
}

export default AccordionItem