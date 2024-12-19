import React from 'react';

const SOSButton = ({ userLocation }) => {
    const sendSOS = () => {
        fetch('http://localhost:5000/api/sos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location: userLocation }),
        })
            .then((res) => res.json())
            .then((data) => alert('SOS sent successfully!'))
            .catch((err) => console.error(err));
    };

    return (
        <button onClick={sendSOS} style={{ padding: '10px', backgroundColor: 'red', color: 'white' }}>
            Send SOS
        </button>
    );
};

export default SOSButton;
