import React from 'react'
import Faq from './Faq'

const Faqs = ({faqs}) => {
     
  return (
    <div>
        {faqs.map( (faq) => <Faq faq={faq} key={faq.id}/> )}
    </div>
  )
}

export default Faqs
