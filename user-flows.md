# User Flows - HomeHive 21M Token MVP

## Core User Flows (MVP Only - No Authentication)

### Flow 1: First Time User Experience (App Launch)
1. **Landing Page** → User sees HomeHive header with hexagon logo and "Demo User" in corner
2. **Automatic Access** → No login required, app loads directly to main dashboard
3. **Empty State** → User sees "No items found" with 📦 icon and "Add Your First Item" button
4. **Quick Start** → User clicks "Add Your First Item" → Navigates to item entry form

### Flow 2: Add New Item (Core Functionality)
1. **Add Item Button** → User clicks "Add Item" button from main dashboard
2. **Item Entry Form** → User sees form with fields:
   - Item Name * (text input)
   - Description (optional textarea)
   - Category * (dropdown with 9 predefined options)
   - Container/Storage * (text input)
   - Room * (text input)
3. **Fill Form** → User enters: "Camping Tent", "Electronics", "Garage Box #3", "Garage"
4. **Submit** → User clicks "Add Item to HomeHive" button
5. **Success State** → Shows green success message: "Item added successfully!"
6. **Redirect** → Returns to main dashboard showing new item in results

### Flow 3: Search Items (Primary Use Case - UC1)
1. **Dashboard View** → User sees search bar at top with "Search by name, container, or room..."
2. **Enter Search** → User types "tent" in search box
3. **Real-time Results** → Results filter automatically as user types (no search button needed)
4. **Find Item** → User sees "Camping Tent" card showing:
   - Item name: "Camping Tent"
   - Location: "📍 Garage Box #3 • Garage"
   - Category badge: "Camping Gear"
   - Description: "4-person Coleman tent"
5. **Success** → User found item location in under 30 seconds ✅

### Flow 4: Filter by Category (Use Case UC3 - Duplicate Prevention)
1. **Before Shopping** → User about to buy camping gear online
2. **Check HomeHive** → Opens app, selects "Camping Gear" from category dropdown
3. **Review Results** → Sees all camping items including tent, sleeping bags, lanterns
4. **Avoid Duplicate** → Realizes they already own tent, cancels online purchase
5. **Success** → Prevented unnecessary duplicate purchase ✅

### Flow 5: Browse All Items (General Usage)
1. **Dashboard Access** → User loads main dashboard
2. **View All Items** → Sees grid of all items (if any exist)
3. **Scan Items** → Can quickly scan item cards to see what they own
4. **Visual Organization** → Items grouped in clean grid layout with consistent styling

## Error States (Exact Messages)

### **Form Validation Errors**
- **Empty Name Field:** "Name is required"
- **Empty Category:** "Category is required" 
- **Empty Container:** "Container is required"
- **Empty Room:** "Room is required"

### **Database Errors**
- **Network Error:** "Connection failed. Please try again."
- **Save Error:** "Unable to save item. Please try again."
- **Load Error:** "Unable to load items. Please refresh the page."

### **Search Errors**
- **No Results:** Shows empty state with "No items match your search. Try different keywords."
- **Database Timeout:** "Search timed out. Please try again."

## Loading States (Exact UI)

### **Page Loading**
- Shows spinner with text: "Loading items..."
- Appears in center of main content area
- Uses honey-colored spinner (border-honey-500)

### **Form Submission**
- Button changes to: "Adding Item..." with disabled state
- Button styling: `honey-btn-primary:disabled`
- Prevents double-submission

### **Search Loading**
- Brief loading state while filtering (< 500ms)
- Search input shows loading indicator
- Results area shows skeleton cards (optional)

## Success States (Exact Messages)

### **Item Added Successfully**
- Green success banner: "✅ Item added successfully!"
- Banner appears at top of page for 3 seconds
- Auto-dismiss or user can close with X

### **Search Results Found**
- Shows count: "Found X items" above results grid
- Highlights search terms in item names (optional)
- Clear, organized grid display

### **Empty State (No Items)**
- Large 📦 emoji icon
- Heading: "No items found"
- Subtext: "Start building your HomeHive by adding your first item."
- Primary CTA: "Add Your First Item" button

## Navigation Patterns (Simplified)

### **Header Navigation (Fixed)**
- **Left:** HomeHive logo with hexagon + text
- **Right:** "Welcome, Demo User" (no profile menu)
- **No additional nav items** - single page app

### **Main Content Navigation**
- **Add Item Button** - Primary action, always visible
- **Search Bar** - Always at top of main content
- **Filter Controls** - Below search bar
- **Results Grid** - Main content area

### **No Breadcrumbs** - Single page application
### **No Sidebar** - All controls in main content area
### **No Footer** - Minimal MVP interface

## Conditional Logic (Keep Simple)

### **If No Items Exist:**
- Show empty state with add item CTA
- Hide search and filter controls
- Show welcome message

### **If Items Exist:**
- Show search and filter controls
- Display items in grid layout
- Show item count above results

### **If Search Returns No Results:**
- Show "No items match your search" message
- Suggest clearing search or trying different terms
- Keep search controls visible

### **If Database Error:**
- Show error message with retry button
- Log error details to console for debugging
- Graceful degradation - don't crash app

## Form Interaction Patterns

### **Item Entry Form Behavior**
- **Real-time validation** on blur (not on every keystroke)
- **Required fields** marked with red asterisk (*)
- **Error messages** appear below fields when invalid
- **Success feedback** after successful submission
- **Form reset** after successful submission

### **Search Form Behavior**
- **Real-time search** with 300ms debounce
- **Clear search** button when text exists
- **Filter persistence** across sessions (optional)
- **Auto-focus** search field on page load

### **Category/Room Dropdowns**
- **Predefined options** only - no custom input
- **"All Categories"** and "All Rooms"** default options
- **Clear visual hierarchy** in dropdown options

## Desktop Layout Specifications

### **Screen Size Assumptions**
- **Minimum:** 1024px width (laptop)
- **Optimal:** 1200px - 1440px width
- **Content max-width:** 1200px (centered)

### **Grid Layout (Search Results)**
- **2 columns** at 1024px width
- **3 columns** at 1200px+ width
- **Consistent card sizing** across all breakpoints
- **6px gap** between cards

### **Form Layout**
- **Single column** form (max-width: 600px)
- **Centered** on page with proper spacing
- **Consistent field heights** and spacing

## Performance Expectations

### **Search Performance**
- **Search results** appear within 500ms
- **Real-time filtering** feels responsive
- **No loading spinners** for searches under 500ms

### **Page Load Performance**
- **Initial page load** under 3 seconds
- **Subsequent interactions** under 1 second
- **Form submissions** under 2 seconds

### **Database Operations**
- **Add item** completes within 2 seconds
- **Load all items** completes within 3 seconds
- **Search/filter** completes within 500ms

## Use Case Validation Scenarios

### **UC1: Multi-Location Item Search (Sarah's headlamp)**
1. User types "headlamp" in search
2. Results show "LED Headlamp" located in "Camping Box #2 • Garage"
3. User finds exact location in under 30 seconds ✅
4. **Validation:** Search works across item names and descriptions

### **UC2: Physical-Digital Storage Mapping (Maria's backup modem)**
1. User types "modem" in search
2. Results show "Backup Modem" located in "Box #3 under desk • Office"
3. User finds exact container location ✅
4. **Validation:** Container field provides specific location details

### **UC3: Duplicate Purchase Prevention (Tom's battery alarm clock)**
1. User types "alarm clock" or "battery clock" in search
2. Results show existing "Battery Alarm Clock" in "Hall Closet - Top Shelf"
3. User avoids buying duplicate ✅
4. **Validation:** Search prevents unnecessary purchases

## Implementation Priority for Flows

### **Phase 1 (Person A - Frontend):**
1. ✅ Flow 2: Add New Item form
2. ✅ Flow 3: Search interface
3. ✅ All error and loading states
4. ✅ Empty states and success messages

### **Phase 2 (Person B - Backend):**
1. ✅ Database operations supporting all flows
2. ✅ Search functionality across all fields
3. ✅ Error handling for all database operations

### **Phase 3 (Person C - Integration):**
1. ✅ Complete user flows working end-to-end
2. ✅ All three use cases validated
3. ✅ Performance optimization
4. ✅ Final testing and bug fixes

**Success Metric:** All three core use cases (UC1, UC2, UC3) work flawlessly in demo, proving HomeHive's value proposition within 21M token budget.