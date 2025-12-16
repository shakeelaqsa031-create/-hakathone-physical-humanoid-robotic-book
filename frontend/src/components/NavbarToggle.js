import React from 'react';
import { useUser } from '../contexts/UserContext';

export default function NavbarToggle() {
    const { difficulty, setDifficulty, language, setLanguage } = useUser();

    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginRight: '10px' }}>
            <select 
                value={difficulty} 
                onChange={(e) => setDifficulty(e.target.value)}
                style={{ padding: '5px', borderRadius: '4px' }}
            >
                <option value="beginner">Beginner</option>
                <option value="advanced">Advanced</option>
            </select>

            <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                style={{ padding: '5px', borderRadius: '4px' }}
            >
                <option value="en">English</option>
                <option value="ur">Urdu (اردو)</option>
            </select>
        </div>
    );
}
