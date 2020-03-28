import React, { useState, useEffect } from 'react';
import './JerseyList.css';

//components
import { Jersey } from './Jersey';


export const JerseyList = () => {
    const [jerseys, setJerseys] = useState([]);

    useEffect(() => {
        fetch('https://jerseystore-api.now.sh/api/v1/jerseys')
            .then(res  => res.json())
            .then(data => {
                console.log(data.jerseys);
                setJerseys(data.jerseys);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="grid-container">
            {jerseys.map(jersey => {
                return <Jersey jersey={jersey} key={jersey._id} />
            })}
        </div>
    )
}
