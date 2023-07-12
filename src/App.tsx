import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import AppLayout from './components/app-layout/AppLayout';
import UpploadImages from './components/pages/blend-images/upload-images/UploadImages';

import { Button } from 'antd';
import React from 'react';
import BlendImages from './components/pages/blend-images/BlendImages';


const Home: React.FC = () => {

    return (
        <div> Hey you</div>
    );
}

const Gandon: React.FC = () => {

    return (
        <UpploadImages/>
    );
}

const App: React.FC  = () => {

    return (
        <Router>

            <AppLayout content={

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/g" element={<BlendImages />} />
                </Routes>
               

                }> </AppLayout>   

        </Router>
  );
}

export default App;

