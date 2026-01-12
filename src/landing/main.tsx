import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../index.css' // We need to ensure styles are imported. Resume stack has styles in `src/styles/index.css`. Landing page might need its own or shared.

// For now let's create a minimal style import or rely on Tailwind utility injection if tailwindcss/vite is active.
// Resume stack uses src/styles/index.css which includes @tailwind directives. 
// We should probably share the tailwind base.

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
