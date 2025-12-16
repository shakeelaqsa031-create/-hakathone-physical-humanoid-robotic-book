import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';

export default function ProfileForm() {
    const { register } = useUser();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        hardware_specs: 'NVIDIA RTX 3060',
        python_proficiency: 'Intermediate'
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            setStatus('Registration successful! Please login.');
        } catch (err) {
            setStatus('Error: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md max-w-md mx-auto">
            <h3>Create Profile</h3>
            <div className="mb-3">
                <label className="block">Email</label>
                <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block">Password</label>
                <input 
                    type="password" 
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block">Hardware Specs (GPU)</label>
                <select 
                    value={formData.hardware_specs}
                    onChange={e => setFormData({...formData, hardware_specs: e.target.value})}
                    className="w-full p-2 border rounded"
                >
                    <option>No GPU / CPU Only</option>
                    <option>NVIDIA RTX 3060</option>
                    <option>NVIDIA RTX 4090</option>
                    <option>Mac M1/M2/M3</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="block">Python Proficiency</label>
                <select 
                    value={formData.python_proficiency}
                    onChange={e => setFormData({...formData, python_proficiency: e.target.value})}
                    className="w-full p-2 border rounded"
                >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign Up
            </button>
            {status && <p className="mt-2 text-sm">{status}</p>}
        </form>
    );
}
