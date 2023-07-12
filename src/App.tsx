import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import AppLayout from '../src/layot/Layout';
import { Button } from 'antd';
import React from 'react';


const Home: React.FC = () => {

    return (
        <div> Hey you</div>
    );
}

const Gandon: React.FC = () => {

    return (
        <div> Gandon</div>
    );
}

const App: React.FC  = () => {

    return (
        <Router>

            <AppLayout content={

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/g" element={<Gandon />} />
                </Routes>
               

                }> </AppLayout>   

        </Router>
  );
}

export default App;

