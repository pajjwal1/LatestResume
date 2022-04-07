import React from 'react'
import { Col, Row } from 'reactstrap'

const Employment = () => {
  return (
    <div>
        <h1 style={{"font-weight":"bold", "text-align": "center"}}>Employment</h1>
        <div style={{"text-align": "center"}}>...............................................................................</div>
        <div className='degree_year'>
        <Row>
        <Col md={8}>
            <h3>Ibm India Private Limited</h3>
        </Col>
        <Col md={4}>
            <h5 style={{float:"right"}}>Oct.2021 - Present</h5>
        </Col>
        </Row>
        </div>
        <div className='degree_year'>
        <Row>
        <Col md={8}>
            <h3>Capgemini Technology Services India Limited</h3>
        </Col>
        <Col md={4}>
            <h5 style={{float:"right"}}>Feb.2019 - Oct.2021</h5>
        </Col>
        </Row>
        </div>
    </div>
  )
}

export default Employment