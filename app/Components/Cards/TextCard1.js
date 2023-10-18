  'use client'



  // import { Card, Col, Row, Button, Text } from "@nextui-org/react";
  // import {  Button, Text } from "@nextui-org/react";
  import Col from "@nextui-org/react"; 
  import Row from "@nextui-org/react"; 
  import Button from "@nextui-org/react"; 
  import Text from "@nextui-org/react"; 
  // import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
  // import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
  import Card from "@nextui-org/react"; 
  import CardHeader from "@nextui-org/react"; 
  import CardBody from "@nextui-org/react"; 
  import Image from "@nextui-org/react"; 
  
  import tc from '../../Styles/TextCard.module.css';
  
  

  export const TextCard1 = () => (
    <Card id={tc.textCard} css={{ w: "100%", h: "400px" }}>
      {/* <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
        
        </Col>
      </Card.Header> */}
      {/* css={{ p: 0 }} */}
      <Card.Body >
        <Card.Image
          src="https://nextui.org/images/card-example-6.jpeg"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
          backgroundColor: "white"
        }}
      >
      
        <Row>
          <Col>
            <Text color="#000" size={12}>

            <h1 style={{fontWeight: '700', fontSize: "1.2rem", marginLeft: '10%', paddingTop: '0.4rem'}} >
              Groups 
            </h1> 
              
            </Text>

            <Text color="#000" size={12} style={{fontSize: '1.1rem', width: "80%", margin: "0 auto", color: "#888888", paddingBottom: '2rem', paddingTop: '0.3rem'}} >
              Our Network of Small Groups that Meet Across the Midlands 
            </Text>
          </Col>
        
        </Row>
      </Card.Footer>
    </Card>
  );