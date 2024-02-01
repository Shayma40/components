import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";


const App = () => {

  const [isMouseOver, setMouseOver] = useState(false);
  const [heartIcon, setHeartIcon] = useState('🤍');

  const handleClick = () => {
      alert(`I hope you enjoy it`);
  };

  const handleHeartClick = () => {
    setHeartIcon('❤️'); // Change the color on click
    alert('Add it to wish list')
  };

  return (

    <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}
    onMouseEnter={() => setMouseOver(true)}
    onMouseLeave={() => setMouseOver(false)}
    >
      <Card style={{ width: '30rem', }}>
      <Card.Img style={{width: '30rem', height: '25rem'}} variant="top" src="Image/Entremet.jpg"/>
      {isMouseOver && (
      <Button variant="TOP" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'heartColor', border: 'none' }}
        onClick={handleHeartClick}>
          {heartIcon}
      </Button>
      )}
      <Card.Body>
        <Card.Title style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginBottom: '10px', marginTop: '10px'  }}><Name/></Card.Title>
        <Card.Text style={{textAlign: 'center', fontWeight: 'lighter', color: 'grey', }}>
          <Description/>
        </Card.Text>
        <Price/><br></br>
        <Button onClick={handleClick} variant="primary" style={{backgroundColor: 'grey', border: 'transparent', width: '100%',}}>Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
      
  );
}


export default App
