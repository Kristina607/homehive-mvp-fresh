# UI Design Guide - HomeHive 21M Token MVP

## Honey Color Palette (Exact Hex Codes)

```css
/* Primary Honey Theme - Copy-Paste Ready */
:root {
  --honey-50: #FFFBEB;    /* Page background, lightest */
  --honey-100: #FEF3C7;   /* Card backgrounds */
  --honey-300: #FCD34D;   /* Secondary elements, borders */
  --honey-500: #F59E0B;   /* Primary buttons, logo */
  --honey-600: #D97706;   /* Hover states */
  --honey-800: #92400E;   /* Text, dark borders */
  --honey-900: #78350F;   /* Darkest text */
  
  /* Neutral Grays (for balance) */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-700: #374151;
  --gray-900: #111827;
}
```

## TailwindCSS Configuration (Exact Setup)

```javascript
// tailwind.config.js - Copy This Exactly
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
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
  plugins: []
};
```

## Typography (Simple & Clean)

- **Font Family:** Inter (Google Fonts) - `font-sans`
- **Headings:** `font-semibold text-honey-900`
- **Body Text:** `font-normal text-gray-700 leading-relaxed`
- **Small Text:** `text-sm text-gray-500`

### **Text Size Scale:**
- **Page Title (h1):** `text-3xl font-semibold text-honey-900`
- **Section Title (h2):** `text-xl font-semibold text-honey-800`
- **Card Title (h3):** `text-lg font-medium text-honey-800`
- **Body Text:** `text-base text-gray-700`
- **Helper Text:** `text-sm text-gray-500`

## Component Style Library (Copy-Paste Classes)

### **Layout Components**

#### **Page Container**
```css
.honey-page {
  @apply bg-honey-50 min-h-screen;
}

.honey-container {
  @apply max-w-6xl mx-auto px-6 py-8;
}
```

#### **Header/Navigation**
```css
.honey-header {
  @apply bg-honey-500 text-white px-6 py-4 shadow-md;
}

.honey-nav {
  @apply flex items-center justify-between max-w-6xl mx-auto;
}

.honey-logo {
  @apply text-xl font-bold flex items-center gap-2;
}
```

### **Card Components**

#### **Basic Card**
```css
.honey-card {
  @apply bg-white border border-honey-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow;
}

.honey-card-header {
  @apply border-b border-honey-100 pb-4 mb-4;
}

.honey-card-title {
  @apply text-lg font-semibold text-honey-800;
}
```

#### **Item Card (Specific to HomeHive)**
```css
.honey-item-card {
  @apply bg-white border border-honey-200 rounded-lg p-4 hover:border-honey-300 transition-colors cursor-pointer;
}

.honey-item-name {
  @apply text-base font-medium text-honey-900 mb-1;
}

.honey-item-location {
  @apply text-sm text-gray-600 mb-2;
}

.honey-item-category {
  @apply inline-block bg-honey-100 text-honey-800 text-xs px-2 py-1 rounded-full;
}
```

### **Form Components**

#### **Input Fields**
```css
.honey-input {
  @apply w-full border border-honey-300 rounded-md px-3 py-2 text-gray-700 
         focus:border-honey-500 focus:ring-1 focus:ring-honey-500 focus:outline-none
         placeholder-gray-400;
}

.honey-input-error {
  @apply border-red-300 focus:border-red-500 focus:ring-red-500;
}

.honey-label {
  @apply block text-sm font-medium text-gray-700 mb-1;
}

.honey-error-text {
  @apply text-sm text-red-600 mt-1;
}
```

#### **Select/Dropdown**
```css
.honey-select {
  @apply w-full border border-honey-300 rounded-md px-3 py-2 text-gray-700 
         focus:border-honey-500 focus:ring-1 focus:ring-honey-500 focus:outline-none
         bg-white;
}
```

#### **Textarea**
```css
.honey-textarea {
  @apply w-full border border-honey-300 rounded-md px-3 py-2 text-gray-700 
         focus:border-honey-500 focus:ring-1 focus:ring-honey-500 focus:outline-none
         placeholder-gray-400 resize-vertical;
}
```

### **Button Components**

#### **Primary Button**
```css
.honey-btn-primary {
  @apply bg-honey-500 hover:bg-honey-600 text-white font-medium px-4 py-2 rounded-md 
         transition-colors focus:outline-none focus:ring-2 focus:ring-honey-500 focus:ring-offset-2;
}

.honey-btn-primary:disabled {
  @apply bg-gray-300 cursor-not-allowed hover:bg-gray-300;
}
```

#### **Secondary Button**
```css
.honey-btn-secondary {
  @apply bg-white hover:bg-honey-50 text-honey-700 font-medium px-4 py-2 rounded-md 
         border border-honey-300 hover:border-honey-400 transition-colors
         focus:outline-none focus:ring-2 focus:ring-honey-500 focus:ring-offset-2;
}
```

#### **Danger Button**
```css
.honey-btn-danger {
  @apply bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md 
         transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2;
}
```

## Simple Hexagon Logo (SVG - Desktop Only)

```jsx
// HexagonLogo.jsx - Copy This Component Exactly
const HexagonLogo = ({ size = 32, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 32 32" 
    className={className}
    fill="currentColor"
  >
    <path d="M16 2L26 8V24L16 30L6 24V8L16 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="16" cy="16" r="4" fill="currentColor"/>
  </svg>
);

// Usage in Header
<div className="honey-logo">
  <HexagonLogo size={28} className="text-white" />
  <span>HomeHive</span>
</div>
```

## Layout Patterns (Desktop-First Only)

### **Main Layout Structure**
```jsx
// Layout.jsx - Main App Structure
const Layout = ({ children }) => (
  <div className="honey-page">
    {/* Header */}
    <header className="honey-header">
      <nav className="honey-nav">
        <div className="honey-logo">
          <HexagonLogo size={28} className="text-white" />
          <span>HomeHive</span>
        </div>
        <div className="text-sm">
          Welcome, <span className="font-medium">Demo User</span>
        </div>
      </nav>
    </header>
    
    {/* Main Content */}
    <main className="honey-container">
      {children}
    </main>
  </div>
);
```

### **Two-Column Layout (Search + Results)**
```jsx
const SearchLayout = () => (
  <div className="grid grid-cols-12 gap-6">
    {/* Search Sidebar */}
    <div className="col-span-4">
      <div className="honey-card sticky top-6">
        <h2 className="honey-card-title mb-4">Search & Filter</h2>
        {/* Search components */}
      </div>
    </div>
    
    {/* Results Area */}
    <div className="col-span-8">
      <div className="space-y-4">
        {/* Item cards */}
      </div>
    </div>
  </div>
);
```

### **Form Layout Pattern**
```jsx
const FormLayout = () => (
  <div className="max-w-2xl mx-auto">
    <div className="honey-card">
      <div className="honey-card-header">
        <h2 className="honey-card-title">Add New Item</h2>
      </div>
      
      <form className="space-y-4">
        {/* Form fields with consistent spacing */}
      </form>
    </div>
  </div>
);
```

## Search Interface Design

### **Search Bar Component**
```jsx
const SearchBar = () => (
  <div className="space-y-4">
    {/* Search Input */}
    <div>
      <label className="honey-label">Search Items</label>
      <input 
        type="text"
        placeholder="Search by name, container, or room..."
        className="honey-input"
      />
    </div>
    
    {/* Category Filter */}
    <div>
      <label className="honey-label">Category</label>
      <select className="honey-select">
        <option value="">All Categories</option>
        {/* Categories */}
      </select>
    </div>
    
    {/* Room Filter */}
    <div>
      <label className="honey-label">Room</label>
      <select className="honey-select">
        <option value="">All Rooms</option>
        {/* Rooms */}
      </select>
    </div>
  </div>
);
```

### **Search Results Grid**
```jsx
const SearchResults = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map(item => (
      <div key={item.id} className="honey-item-card">
        <h3 className="honey-item-name">{item.name}</h3>
        <p className="honey-item-location">
          📍 {item.container} • {item.room}
        </p>
        <span className="honey-item-category">{item.category}</span>
        {item.description && (
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        )}
      </div>
    ))}
  </div>
);
```

## Form Design Patterns

### **Item Entry Form**
```jsx
const ItemForm = () => (
  <form className="space-y-4">
    {/* Item Name */}
    <div>
      <label className="honey-label">Item Name *</label>
      <input 
        type="text"
        placeholder="e.g., Camping Tent, Laptop Charger"
        className="honey-input"
        required
      />
    </div>
    
    {/* Description */}
    <div>
      <label className="honey-label">Description</label>
      <textarea 
        placeholder="Optional details about the item"
        className="honey-textarea"
        rows="3"
      />
    </div>
    
    {/* Category */}
    <div>
      <label className="honey-label">Category *</label>
      <select className="honey-select" required>
        <option value="">Choose a category</option>
        <option value="Electronics">Electronics</option>
        <option value="Camping Gear">Camping Gear</option>
        {/* More categories */}
      </select>
    </div>
    
    {/* Container */}
    <div>
      <label className="honey-label">Container/Storage *</label>
      <input 
        type="text"
        placeholder="e.g., Garage Box #3, Bedroom Dresser"
        className="honey-input"
        required
      />
    </div>
    
    {/* Room */}
    <div>
      <label className="honey-label">Room *</label>
      <input 
        type="text"
        placeholder="e.g., Garage, Bedroom, Kitchen"
        className="honey-input"
        required
      />
    </div>
    
    {/* Submit Button */}
    <div className="pt-4">
      <button type="submit" className="honey-btn-primary w-full">
        Add Item to HomeHive
      </button>
    </div>
  </form>
);
```

## Loading & Empty States

### **Loading Spinner**
```jsx
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-honey-500"></div>
    <span className="ml-2 text-gray-600">Loading items...</span>
  </div>
);
```

### **Empty State**
```jsx
const EmptyState = () => (
  <div className="text-center py-12">
    <div className="text-6xl mb-4">📦</div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
    <p className="text-gray-500 mb-4">
      Start building your HomeHive by adding your first item.
    </p>
    <button className="honey-btn-primary">
      Add Your First Item
    </button>
  </div>
);
```

## Error Handling UI

### **Error Message Component**
```jsx
const ErrorMessage = ({ message }) => (
  <div className="bg-red-50 border border-red-200 rounded-md p-4">
    <div className="flex">
      <div className="text-red-400">⚠️</div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800">Error</h3>
        <p className="text-sm text-red-700 mt-1">{message}</p>
      </div>
    </div>
  </div>
);
```

### **Success Message Component**
```jsx
const SuccessMessage = ({ message }) => (
  <div className="bg-green-50 border border-green-200 rounded-md p-4">
    <div className="flex">
      <div className="text-green-400">✅</div>
      <div className="ml-3">
        <p className="text-sm text-green-700">{message}</p>
      </div>
    </div>
  </div>
);
```

## Desktop Screen Sizes (Target Breakpoints)

- **Minimum Width:** 1024px (laptop screens)
- **Optimal Width:** 1200px - 1440px (desktop monitors)
- **Maximum Content Width:** 1200px (max-w-6xl)
- **No mobile optimization** - desktop-first only for MVP

## Token-Efficient Styling Rules

### **DO Use (Low Token Cost):**
- ✅ Pre-defined Tailwind classes from this guide
- ✅ Copy-paste className strings exactly as written
- ✅ Simple hover and focus states
- ✅ Basic grid layouts (grid-cols-1, grid-cols-2, grid-cols-3)
- ✅ Standard spacing (space-y-4, gap-4, p-4, m-4)

### **DON'T Use (High Token Cost):**
- ❌ Custom CSS classes beyond what's defined here
- ❌ Complex animations or transitions
- ❌ Responsive breakpoints (sm:, md:, lg:, xl:)
- ❌ Custom hexagon shapes in UI elements
- ❌ Complex grid layouts or positioning
- ❌ Advanced styling patterns not in this guide

## Implementation Priority

### **Phase 1: Foundation (Person A - Days 1-2)**
1. Set up TailwindCSS with honey color config
2. Create Layout component with header
3. Build simple hexagon logo
4. Implement basic page structure

### **Phase 2: Core Components (Person A - Days 3-4)**
1. ItemForm component with honey styling
2. SearchBar component
3. ItemCard component for results
4. Basic loading and error states

### **Phase 3: Polish (Person C - Integration)**
1. Ensure styling consistency across all components
2. Fix any visual bugs or alignment issues
3. Add hover states and smooth transitions
4. Final desktop layout optimization

**Success Metric:** Clean, professional interface that makes judges say "This looks like a real product" while staying within the 1.5M token budget for styling.