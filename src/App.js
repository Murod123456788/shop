import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import  Hero  from './component/Hero'
import Products from './component/Products';
import Feature from './component/Feature';
import Footer from './component/Footer'
import { productData } from './component/Products/data';
import { productDataTwo } from './component/Products/data'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/> 
      <Feature />
      <Products heading='Sweet Treats for you' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
