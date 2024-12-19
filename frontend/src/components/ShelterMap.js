import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ShelterMap = ({ userLocation }) => {
    const [shelters, setShelters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/shelters')
            .then((res) => res.json())
            .then((data) => setShelters(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '100%' }}
                center={userLocation}
                zoom={12}
            >
                {shelters.map((shelter) => (
                    <Marker
                        key={shelter._id}
                        position={{ lat: shelter.latitude, lng: shelter.longitude }}
                        title={shelter.name}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default ShelterMap;
