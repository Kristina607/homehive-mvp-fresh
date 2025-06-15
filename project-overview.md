# Project Overview - HomeHive MVP

## Core Definition

- **App Name:** HomeHive
- **One-Line Purpose:** Help people find their stuff across multiple storage locations
- **Target User:** Homeowners with storage organization challenges (demo user simulation)
- **Success Metric:** User can find any cataloged item location in under 30 seconds
- **Token Budget:** 21,000,000 tokens TOTAL (7M per team member)

## Current Reality Check (Updated June 2025)

- **Available:** 3 team members × 7M tokens each = 21M total
- **Strategy:** Ultra-focused MVP with mock auth + minimal Supabase database
- **Timeline:** 15 days remaining, must ship working demo

## Scope Boundaries (STRICTLY ENFORCED - 21M Token Limit)

### IN SCOPE (Hackathon MVP Only)

1. **Demo User Authentication** - Hardcoded demo user, no login flow
2. **Minimal Database** - Single Supabase table with user isolation via user_id
3. **Item Entry** - Add items with: name, description (optional), category (predefined), container, room
4. **Search-Focused Core** - Find items by:
   - Item name (e.g., "tent", "camera") 
   - Container location (e.g., "Garage Box #3")
   - Category filter (predefined categories)
   - Room filter
5. **Basic CRUD** - Add, view, edit, delete items
6. **Desktop-First Design** - Honey/hexagon theme, optimized for desktop screens
7. **Netlify Deployment** - Static frontend with Supabase backend integration

### HARDCODED DEMO USER SPECS
```javascript
const DEMO_USER = {
  id: 'demo-user-123',
  name: 'Demo User',
  // All database operations filter by user_id = 'demo-user-123'
  // No signup, login, or logout functionality
  // App loads directly to main interface
};
```

### PREDEFINED CATEGORIES (No Custom Categories)
```javascript
const CATEGORIES = [
  "Electronics", 
  "Camping Gear", 
  "Kitchen Items", 
  "Tools", 
  "Seasonal Items", 
  "Documents", 
  "Cleaning Supplies", 
  "Sports Equipment", 
  "Other"
];
```

### MINIMAL DATABASE SCHEMA (Single Table Only)
```sql
-- Supabase Table: items
CREATE TABLE items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,  -- Always 'demo-user-123' for MVP
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- Must be from predefined CATEGORIES
  container TEXT NOT NULL, -- e.g., "Garage Box #3", "Bedroom Dresser"
  room TEXT NOT NULL,     -- e.g., "Garage", "Bedroom", "Kitchen"
  created_at TIMESTAMP DEFAULT now()
);

-- Row Level Security (RLS)
ALTER TABLE items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can only see their items" ON items
  FOR ALL USING (user_id = 'demo-user-123');
```

### HONEY/HEXAGON THEME (Simplified)
```css
/* Color Palette Only - No Complex Hexagon Shapes */
:root {
  --honey-primary: #F59E0B;    /* Amber-500 - main actions */
  --honey-secondary: #FCD34D;  /* Amber-300 - backgrounds */
  --honey-accent: #92400E;     /* Amber-800 - text/borders */
  --honey-bg: #FFFBEB;        /* Amber-50 - page background */
  --honey-light: #FEF3C7;     /* Amber-100 - cards */
}

/* Simple hexagon logo only - no complex UI shapes */
```

### OUT OF SCOPE (Future Phases - DO NOT BUILD)

- Real user authentication (signup/login/logout flows)
- Multiple users or user management
- Mobile optimization and responsive design
- Photo upload functionality
- Complex hexagon UI patterns or animations
- Advanced search features (tags, date ranges)
- Bulk operations or import/export
- User preferences or settings
- Advanced error handling or validation
- Performance optimization for large datasets

### NEVER SCOPE (Major Token Drains - ABSOLUTELY AVOID)

- **Any OAuth providers or complex authentication**
- **Photo upload or file handling**
- **Real-time features or WebSockets**
- **Advanced state management (Redux/Zustand)**
- **Complex animations or custom CSS frameworks**
- **Mobile-first or responsive design**
- **Multi-table database relationships**
- **User onboarding flows or tutorials**
- **Advanced form validation beyond basic required fields**

## Token Budget Allocation (21M Total - STRICT LIMITS)

### **Person A - Frontend Foundation (7M tokens)**
- React + Vite + TailwindCSS setup (1.5M)
- Honey color theme implementation (1M)
- Hexagon logo creation (0.5M)
- Item entry form (name, category dropdown, container, room) (2M)
- Search interface with results display (2M)

### **Person B - Database Integration (7M tokens)**
- Minimal Supabase project setup (1M)
- Single table schema creation with RLS (1M)
- Basic CRUD operations (add, read, update, delete) (2.5M)
- Search functionality (name, container, category, room) (2M)
- Error handling for database operations (0.5M)

### **Person C - Integration & Deployment (7M tokens)**
- Combine frontend + backend code (2M)
- Desktop layout optimization (1M)
- Theme consistency across components (1M)
- Manual testing and bug fixes (1.5M)
- Netlify deployment with Supabase env vars (1M)
- Basic documentation (0.5M)

## Success Criteria for Hackathon (MUST ACHIEVE ALL)

### **Core Functionality Requirements:**
- [ ] User can add items with all required fields
- [ ] User can search items by name and find results instantly
- [ ] User can filter items by category and room
- [ ] Data persists across browser sessions (Supabase)
- [ ] Desktop interface with honey theme looks professional
- [ ] Deployed live URL works for judges to test

### **Use Case Validation:**
- [ ] **UC1 - Multi-Location Item Search:** User searches "tent" and finds "Garage Box #3"
- [ ] **UC2 - Physical-Digital Storage Mapping:** User searches "backup modem" and finds exact container
- [ ] **UC3 - Duplicate Purchase Prevention:** User searches before buying and finds existing item

### **Technical Requirements:**
- [ ] No console errors in browser
- [ ] All database operations work correctly
- [ ] Search returns results in under 2 seconds
- [ ] Forms validate required fields
- [ ] Deployment accessible via public URL

### **Demo Requirements:**
- [ ] 3-minute demo showing all three use cases
- [ ] Pre-populated demo data (20+ items across different categories)
- [ ] Clear explanation of HomeHive value proposition

## Risk Management (21M Token Constraints)

### **High-Risk Token Drains (AVOID THESE PROMPTS):**
❌ "Add user authentication"
❌ "Make it responsive for mobile"
❌ "Add photo upload"
❌ "Create complex animations"
❌ "Build admin features"

### **Safe, Token-Efficient Prompts:**
✅ "Create simple item entry form with 4 fields: name, category dropdown, container, room"
✅ "Add basic search that filters items array by name field"
✅ "Style this component with honey color theme using Tailwind classes"
✅ "Create Supabase table with exact schema provided"

### **Emergency Protocols:**
- **If Person A exceeds 5M tokens:** Switch to basic styling, skip theme polish
- **If Person B exceeds 5M tokens:** Switch to localStorage instead of Supabase
- **If Person C exceeds 5M tokens:** Deploy basic version without full integration
- **If team exceeds 18M tokens:** Cut scope to core search functionality only

## Final Reality Check

**This is an ULTRA-MINIMAL MVP designed specifically for 21M token constraints.**

The goal is to demonstrate the core HomeHive concept with search-focused functionality, not to build a complete application. Success means judges can see the value proposition and imagine the fuller vision, while the team gains experience with real full-stack development within severe resource constraints.

**Expected Demo Outcome:** "Here's HomeHive - you can instantly find any item's location. We've proven the core concept works, and with more resources, we'd add [list out-of-scope features]."