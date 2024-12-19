import React, { useState, useEffect } from 'react';

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/alerts')
            .then((res) => res.json())
            .then((data) => setAlerts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Disaster Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>{alert.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Alerts;
