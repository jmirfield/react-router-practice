import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Welcome from './pages/Welcome';
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetail';
import Quotes from './pages/Quotes'
import QuoteDetails from './pages/QuoteDetails'
import NewQuote from './pages/NewQuote'
import Comments from './components/comments/Comments';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        {/* <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} /> */}
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetails />} >
            <Route path='comments' element={<Comments />}></Route>
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
