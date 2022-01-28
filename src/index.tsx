import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App, CollectionDetail, Collections, NFTDetail } from './containers';

ReactDOM.render(
  <App>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Collections />} />
        <Route path='/collection-detail/:name' element={<CollectionDetail />} />
        <Route path='/nft-detail/:id/:name' element={<NFTDetail />} />
      </Routes>
    </BrowserRouter>
  </App>,
  document.getElementById('root'),
);
