import { useEffect, useState } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import './theme.css';

export default function ThemeChanger() {
    const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    useEffect(() => {
        // Set transition property on component mount
        document.body.style.transition = 'background-color 0.7s ease, color 0.7s ease';
        
        // Update background and text color on theme change
        document.body.style.backgroundColor = theme === 'dark' ? '#121212' : '#FFFFFF';
        document.body.style.color = theme === 'dark' ? '#F1F1F1' : '#1B1B1B';

        // Update CSS variables for theme colors
        const root = document.documentElement;
        if (theme === 'dark') {
            root.style.setProperty('--background-color', '#121212');
            root.style.setProperty('--border-color', '#DDDDDD');
            root.style.setProperty('--text-color', '#F1F1F1');
            root.style.setProperty('--accordion-bg','rgba(34, 34, 34, 0.8)');
            root.style.setProperty('--accordion-border','rgba(255, 111, 97, 0.3)');
            root.style.setProperty('--accordion-header-bg','rgba(51, 51, 51, .8)');
            root.style.setProperty('--accordion-content-bg','rgba(34, 34, 34, 0.6)');            
            root.style.setProperty('--skill-color','#373A40');
        
            root.style.setProperty('--letter-color','#ccc');
root.style.setProperty('--l-text-color','#FFB3AB');
root.style.setProperty('--prev-back-color','#000');
          
            root.style.setProperty('--project-technology-color','#444444');
        } else {
            root.style.setProperty('--background-color', '#FFFFF0');
            root.style.setProperty('--border-color', '#E8E8E8');
            root.style.setProperty('--text-color', '#2C2C2C');
            root.style.setProperty('--accordion-bg', 'rgba(245, 245, 245, 1)');
            root.style.setProperty('--accordion-bg', 'rgba(245, 245, 245, 1)');
            root.style.setProperty('--accordion-border', '#E9F6FF');
            root.style.setProperty('--accordion-header-bg', 'rgba(230, 230, 230, 1)');
            root.style.setProperty('--accordion-content-bg', 'rgba(250, 250, 250, 1)');
root.style.setProperty('--skill-color','#DDDDDD');
root.style.setProperty('--prev-back-color','#fff');
root.style.setProperty('--letter-color','#333');
root.style.setProperty('--l-text-color','##FF6F61');
root.style.setProperty('--project-technology-color','#f0f0f0');
        }
    }, [theme]);

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className="themeicon" onClick={toggleTheme} style={{ transition: 'color 0.7s ease' }}>
            {theme === 'dark' ? <Sun style={{ transition: 'background-color 0.7s ease' }} /> : <MoonStar style={{ transition: 'background-color 0.7s ease' }} />}
        </div>
    );
}