import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', shelterId: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => alert('Registration successful!'))
            .catch((err) => console.error(err));
    };

    return (

        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Shelter ID:
                <input
                    type="text"
                    name="shelterId"
                    value={formData.shelterId}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
    };
    
    export default RegisterForm