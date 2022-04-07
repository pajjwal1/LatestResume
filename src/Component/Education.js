import React from 'react'
import { Col, Row } from 'reactstrap'

const Education = () => {
  return (
    <div>
        <h1 style={{"font-weight":"bold", "text-align": "center"}}>Education</h1>
        <div style={{"text-align": "center"}}>...............................................................................</div>
        <div className='degree_year'>
        <Row>
        <Col md={8}>
            <h3>Bachelor of Technology(Information Technology)</h3>
        </Col>
        <Col md={4}>
            <h5 style={{float:"right"}}>2014-2018</h5>
        </Col>
        </Row>
        </div>
        <div className='degree_year'>
        <Row>
        <Col md={8}>
            <h3>Intermediate</h3>
        </Col>
        <Col md={4}>
            <h5 style={{float:"right"}}>2012-2014</h5>
        </Col>
        </Row>
        </div>
        <div className='degree_year'>
        <Row>
        <Col md={8}>
            <h3>High School</h3>
        </Col>
        <Col md={4}>
            <h5 style={{float:"right"}}>2010-2012</h5>
        </Col>
        </Row>
        </div>
        
    </div>
  )
}

export default Education