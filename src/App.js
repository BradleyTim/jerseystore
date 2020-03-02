import React, { useState, useEffect } from 'react';
import './App.css';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Jersey } from './components/jerseys/Jersey';

const initialState = [
  {
    id: 1,
    name: 'Tottenham HotSpurs',
    brand: 'Tottenham',
    kit: 'Home',
    size: 'Medium',
    image: 'https://images.sportsdirect.com/images/products/37725818_l.jpg',
    price: 1000,
  },
  {
    id: 2,
    name: 'Everton',
    brand: 'Everton',
    kit: 'Home',
    size: 'Medium',
    image: 'https://productview1.fanobject.com/0025/1785/00251785_00.jpg?imwidth=600',
    price: 1000,
  },
  {
    id: 3,
    name: 'Man City',
    brand: 'Man City',
    kit: 'Home',
    size: 'Medium',
    image: 'https://productview2.fanobject.com/0025/0283/00250283_00.jpg?imwidth=600',
    price: 1000,
  },
  {
    id: 4,
    name: 'Liverpool',
    brand: 'Liverpool',
    kit: 'Home',
    size: 'Medium',
    image: 'https://skygarden.azureedge.net/media/images/products/2019/09/product_image_75c0f450-7807-45b6-85a4-9dd34bf699d0.jpg',
    price: 1000,
  },
  {
    id: 5,
    name: 'Chelsea',
    brand: 'Chelsea',
    kit: 'Home',
    size: 'Medium',
    image: 'https://productview1.fanobject.com/0026/4397/00264397_00.jpg?imwidth=600',
    price: 1000,
  },
  {
    id: 6,
    name: 'Arsenal',
    brand: 'Arsenal',
    kit: 'Home',
    size: 'Medium',
    image: 'https://i1.adis.ws/i/ArsenalDirect/meh5640_f?$810x810$&.jpg',
    price: 1000,
  },
];

function App() {
  // const [jerseys, setJerseys] = useState(initialState);

  // useEffect(() => {
  //   setJerseys(initialState);
  // }, [])

  return (
    <div className="App">
      <Header />
      <div className="container">
        {initialState.map(jersey => {
          return <Jersey jersey={jersey} key={jersey.id} />
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
