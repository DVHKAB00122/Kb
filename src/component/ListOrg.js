import React, { Component } from 'react';
import Table from './Table';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Maps from './maps';


class ListOrg extends Component {

  render()
  {
    return (

        
     
          <Card bg="blue" text="white">
          
            <Row>
            <p>Education</p>
            </Row>
            <Row>
            <Col>
            <Table/>
            </Col>
            <Col>
            <Maps/>
            </Col>
            </Row>
           
           
            
          
        </Card>

        
     

    );
  }
 
}

export default ListOrg;