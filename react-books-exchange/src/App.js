import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        {/* <Route path="/" component={Layout}/> */}
      </Layout>
    </div>
  );
}

export default App;
