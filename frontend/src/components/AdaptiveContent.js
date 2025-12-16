import React from 'react';
import { useUser } from '../contexts/UserContext';
import { translate } from '../utils/i18n';

export default function AdaptiveContent({ children, level = 'all' }) {
    const { difficulty, language } = useUser();

    // If level is specified, only show if it matches user preference
    if (level !== 'all' && level !== difficulty) {
        return null;
    }

    // Basic translation logic (if children is string)
    // For complex MDX, we might rely on the parent to pass translated props or use a wrapper that swaps children.
    // For this MVP, we'll assume children is rendered as-is, but if we wanted to translate text nodes, we'd do it here.
    // But better: Use the 'translate' utility inside the MDX content itself or have parallel MDX files.
    // Spec T021 says "Update Module 1 MDX content to use <AdaptiveContent> tags".
    
    // If language is Urdu, we might wrap in a div with RTL direction
    const style = language === 'ur' ? { direction: 'rtl', fontFamily: 'Noto Nastaliq Urdu, serif' } : {};

    return (
        <div className={`adaptive-content ${difficulty}`} style={style}>
            {children}
        </div>
    );
}
