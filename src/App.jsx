import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Product from './Components/Products/Product';
import Footer from './Components/Footer/Footer';

const App = () => {
  const data=[
    {
      Sale:"",
      product:"Fancy Product",
      review:false,
      price1:"$40.00",
      price2:"$80.00",
      discount:false
    },
    {
      Sale:"Sale",
      product:"Special Item",
      review:true,
      price1:"$20.00",
      price2:"$18.00",
      discount:true
    },
    {
      Sale:"Sale",
      product:"Sale Item",
      review:false,
      price1:"$50.00",
      price2:"$25.00",
      discount:true
    },
    {
      Sale:"",
      product:"Popular Item",
      review:true,
      price1:"$40.00",
      discount:false
    },
    {
      Sale:"Sale",
      product:"Sale Item",
      review:false,
      price1:"$50.00",
      price2:"$25.00",
      discount:true
    },
    {
      Sale:"",
      product:"Fancy Product",
      review:false,
      price1:"$120.00",
      price2:"$280.00",
      discount:false
    },
    {
      Sale:"Sale",
      product:"Special Item",
      review:true,
      price1:"$20.00",
      price2:"$18.00",
      discount:true
    },
    {
      Sale:"",
      product:"Popular Item",
      review:true,
      price1:"$40.00",
      discount:false
    }
  ]
  const[Count,SetCount]=useState(0)
  return (
    <>
      <Navbar Count={Count}/>
      <Header />
      <Product data={data} SetCount={SetCount} Count={Count}/>
      <Footer />
    </>
  );
};

 

export default App;