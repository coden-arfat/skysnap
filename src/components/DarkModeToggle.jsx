import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
 const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('theme') === 'dark';
});

useEffect(() => {
  const root = document.documentElement;
  if (darkMode) {
    root.classList.add('dark-mode');
    root.classList.remove('light-mode');
  } else {
    root.classList.add('light-mode');
    root.classList.remove('dark-mode');
  }
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
}, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? '🌙 Dark' : '☀️ Light'}
</button>

  );
};
