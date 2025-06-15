# HomeHive Integration MVP - Team Summary Document

## Project Overview
HomeHive helps people find their stuff across multiple storage locations. This is a minimal MVP with a 21M token budget constraint (7M tokens per team member).

## Tech Stack (EXACT - No Alternatives)
- **Framework:** React 18 with Vite
- **Styling:** TailwindCSS with Honey theme
- **State:** useState/useContext only (no Redux/Zustand)
- **Database:** Supabase (single table)
- **Deployment:** Netlify

## Critical Files - Copy These Exactly

### 1. package.json
```json
{
  "name": "homehive-integration-mvp",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.1",
    "@supabase/supabase-js": "^2.45.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

### 2. tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          300: '#FCD34D',
          500: '#F59E0B',
          600: '#D97706',
          800: '#92400E',
          900: '#78350F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
```

### 3. index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HomeHive - Find Your Stuff</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 4. .env.example
```
# Environment Variables for HomeHive MVP
# Copy this to .env and fill in your Supabase credentials

# Supabase Configuration (Person B will provide these)
VITE_SUPABASE_URL=your-project-url-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# No auth tokens needed for demo user MVP
```

### 5. src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Complete File Structure to Create

```
homehive-mvp-fresh/
├── docs/                        # (Already exists - keep as-is)
│   ├── project-overview.md
│   ├── technical-specs.md
│   ├── ui-design-guide.md
│   └── user-flows.md
├── src/
│   ├── components/
