import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

export default function FAQ() {
  return (
    <div>
    <Container className='mb-4'>
        <h2>Frequently Asked Questions</h2>
        <br/>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why should I sell on onestop?</Accordion.Header>
        <Accordion.Body>
            
        onestop is one of the most trusted and best E-commerce platforms. With over lots of customers across the country, onestop is trusted by more  sellers online throughout India. By selling online on onestop, the sellers also get access to some of India’s largest shopping festivals, such as The onestop billion Days, The Big Diwali Sale, and whatnot! onestop.com provides a very low cost of doing business.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does selling on onestop.com work?</Accordion.Header>
        <Accordion.Body>
        To sell online on onestop.com, all you require is at least 1 product to be listed. However, we recommend you to go for more than 1 product as onestop encompasses over 50 crore customers across 27000+ pin codes and the trust of 500000 sellers.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What products can I sell on onestop?</Accordion.Header>
        <Accordion.Body>
        onestop has more categories that you can opt from and sell online across India. Some of the popular categories are Clothes, Sarees, Electronics, Shoes, Beauty, T-Shirts, Furniture, Art, Mobiles, Camera, Bed, Groceries, Kitchenware, and many more.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
      <Container>
        
      </Container>
    </div>
  )
}
