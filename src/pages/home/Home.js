import React, { useState, useEffect } from 'react';
import './Home.css';

//components
import { JerseyList } from '../../components/jerseys/JerseyList';


export const Home = () => {

    return (
        <div className="home-page">
            <JerseyList />
        </div>
    )
}
