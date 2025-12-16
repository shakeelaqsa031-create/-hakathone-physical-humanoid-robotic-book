import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
// import '../css/custom.css'; // Global CSS is already loaded by Docusaurus

export default function ChatWidget() {
    const { difficulty } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [context, setContext] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        // Capture selection when opening
        const selection = window.getSelection().toString();
        if (selection) {
            setContext(selection);
        }
    };

    const handleSend = async () => {
        if (!query) return;
        
        const userMsg = { role: 'user', content: query, context: context };
        setMessages(prev => [...prev, userMsg]);
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8000/api/chat/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    query, 
                    context: context || null, 
                    user_level: difficulty 
                }),
            });
            const data = await response.json();
            setMessages(prev => [...prev, { role: 'bot', content: data.answer }]);
        } catch (err) {
            setMessages(prev => [...prev, { role: 'bot', content: 'Error: Could not reach AI.' }]);
        } finally {
            setLoading(false);
            setQuery('');
            setContext(''); // Clear context after sending
        }
    };

    return (
        <div className="chat-widget-container" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
            {!isOpen && (
                <button 
                    onClick={handleOpen}
                    className="chat-toggle-btn"
                    style={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#A855F7'
                    }}
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                </button>
            )}

            {isOpen && (
                <div className="chat-window glass-panel flex flex-col" style={{ width: '380px', height: '600px', display: 'flex', flexDirection: 'column' }}>
                    {/* Header */}
                    <div className="chat-header p-3 flex justify-between items-center" style={{ padding: '1rem', borderBottom: '1px solid rgba(168,85,247,0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                             <div style={{ width: '8px', height: '8px', background: '#3B82F6', borderRadius: '50%', boxShadow: '0 0 5px #3B82F6' }}></div>
                             <span style={{ fontWeight: 'bold', color: '#fff' }}>AI Tutor <span style={{fontSize: '0.8em', opacity: 0.7}}>({difficulty})</span></span>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#A855F7', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
                    </div>
                    
                    {/* Messages */}
                    <div className="flex-1 p-3 overflow-y-auto" style={{ flex: 1, padding: '1rem', overflowY: 'auto', color: '#e2e8f0', scrollbarWidth: 'thin' }}>
                        {messages.length === 0 && (
                            <div style={{textAlign: 'center', marginTop: '50%', opacity: 0.5}}>
                                <p>Ask me anything about Physical AI!</p>
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <div key={i} className="mb-3" style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                                {msg.context && (
                                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontStyle: 'italic', marginBottom: '0.25rem', borderLeft: '2px solid #A855F7', paddingLeft: '0.5rem', maxWidth: '85%' }}>
                                        Running context: "{msg.context.substring(0, 50)}..."
                                    </div>
                                )}
                                <div style={{
                                    maxWidth: '85%',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '12px',
                                    background: msg.role === 'user' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                    border: msg.role === 'user' ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#fff',
                                    fontSize: '0.95rem'
                                }}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {loading && <div className="text-sm" style={{color: '#A855F7', paddingLeft: '1rem'}}>Processing...</div>}
                    </div>

                    {/* Input */}
                    <div className="p-3" style={{ padding: '1rem', borderTop: '1px solid rgba(168,85,247,0.2)', background: 'rgba(0,0,0,0.2)' }}>
                        {context && (
                            <div style={{ fontSize: '0.8rem', background: 'rgba(59, 130, 246, 0.2)', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                                <span style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '90%'}}>Selected: "{context}"</span>
                                <button onClick={() => setContext('')} style={{background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer'}}>✕</button>
                            </div>
                        )}
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input 
                                type="text" 
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                style={{
                                    flex: 1,
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(168, 85, 247, 0.3)',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    color: 'white',
                                    outline: 'none'
                                }}
                                placeholder="Type your question..."
                                onKeyDown={e => e.key === 'Enter' && handleSend()}
                            />
                            <button 
                                onClick={handleSend} 
                                disabled={loading} 
                                style={{
                                    background: 'linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)',
                                    border: 'none',
                                    color: 'white',
                                    borderRadius: '8px',
                                    width: '40px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}