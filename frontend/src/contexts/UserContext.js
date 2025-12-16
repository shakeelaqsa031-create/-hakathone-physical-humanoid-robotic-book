import React, { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState('beginner'); // beginner | advanced
  const [language, setLanguage] = useState('en'); // en | ur

  useEffect(() => {
    // Check local storage for token
    const token = localStorage.getItem('token');
    if (token) {
      // For MVP, just assume logged in or fetch profile
      // In real app, validate token via API
      fetchProfile(token);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const response = await fetch('http://localhost:8000/api/auth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ username: email, password }),
    });
    
    if (!response.ok) throw new Error('Login failed');
    
    const data = await response.json();
    localStorage.setItem('token', data.access_token);
    await fetchProfile(data.access_token);
  };

  const register = async (userData) => {
    const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
  };

  const fetchProfile = async (token) => {
    try {
      const response = await fetch('http://localhost:8000/api/profile/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const profile = await response.json();
        setUser({ profile });
        // Sync context state with DB profile if available
        if (profile.difficulty) setDifficulty(profile.difficulty);
        if (profile.language) setLanguage(profile.language);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ 
        user, loading, login, logout, register, 
        difficulty, setDifficulty, 
        language, setLanguage 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
