// mock-data.js - HomeHive Demo Data for 21M Token MVP
// Copy-paste ready data for testing and demo purposes

// Predefined Categories (Exact list from technical specs)
export const CATEGORIES = [
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

// Common Rooms (For auto-complete suggestions)
export const COMMON_ROOMS = [
  "Garage", 
  "Basement", 
  "Attic", 
  "Bedroom", 
  "Kitchen", 
  "Living Room", 
  "Office", 
  "Closet", 
  "Shed", 
  "Storage Unit",
  "Hallway",
  "Laundry Room"
];

// Demo User (Hardcoded)
export const DEMO_USER = {
  id: 'demo-user-123',
  name: 'Demo User',
  email: 'demo@homehive.app'
};

// Mock Items Data (For Testing Use Cases UC1, UC2, UC3)
export const MOCK_ITEMS = [
  // UC1 Test Data - Sarah's headlamp scenario
  {
    id: '1',
    user_id: 'demo-user-123',
    name: 'LED Headlamp',
    description: 'Rechargeable LED headlamp with red light mode',
    category: 'Camping Gear',
    container: 'Camping Box #2',
    room: 'Garage',
    created_at: '2025-06-01T10:00:00Z'
  },
  {
    id: '2',
    user_id: 'demo-user-123',
    name: 'Backup Headlamp',
    description: 'Battery-powered backup headlamp',
    category: 'Camping Gear',
    container: 'Emergency Kit',
    room: 'Closet',
    created_at: '2025-06-01T10:05:00Z'
  },

  // UC2 Test Data - Maria's backup modem scenario
  {
    id: '3',
    user_id: 'demo-user-123',
    name: 'Backup Modem',
    description: 'Spare internet modem for emergencies',
    category: 'Electronics',
    container: 'Box #3 under desk',
    room: 'Office',
    created_at: '2025-06-01T10:10:00Z'
  },
  {
    id: '4',
    user_id: 'demo-user-123',
    name: 'WiFi Router',
    description: 'Main wireless router',
    category: 'Electronics',
    container: 'Office Shelf',
    room: 'Office',
    created_at: '2025-06-01T10:15:00Z'
  },

  // UC3 Test Data - Tom's alarm clock scenario
  {
    id: '5',
    user_id: 'demo-user-123',
    name: 'Battery Alarm Clock',
    description: 'Digital battery-powered alarm clock',
    category: 'Electronics',
    container: 'Hall Closet - Top Shelf',
    room: 'Hallway',
    created_at: '2025-06-01T10:20:00Z'
  },
  {
    id: '6',
    user_id: 'demo-user-123',
    name: 'Backup Alarm Clock',
    description: 'Analog wind-up alarm clock',
    category: 'Electronics',
    container: 'Bedroom Dresser',
    room: 'Bedroom',
    created_at: '2025-06-01T10:25:00Z'
  },

  // Additional Demo Data - Various Categories
  {
    id: '7',
    user_id: 'demo-user-123',
    name: 'Camping Tent',
    description: '4-person Coleman tent with rainfly',
    category: 'Camping Gear',
    container: 'Garage Box #1',
    room: 'Garage',
    created_at: '2025-06-01T11:00:00Z'
  },
  {
    id: '8',
    user_id: 'demo-user-123',
    name: 'Sleeping Bags',
    description: 'Set of 2 sleeping bags for camping',
    category: 'Camping Gear',
    container: 'Garage Box #1',
    room: 'Garage',
    created_at: '2025-06-01T11:05:00Z'
  },
  {
    id: '9',
    user_id: 'demo-user-123',
    name: 'Laptop Charger',
    description: 'MacBook Pro 60W charger',
    category: 'Electronics',
    container: 'Office Drawer',
    room: 'Office',
    created_at: '2025-06-01T11:10:00Z'
  },
  {
    id: '10',
    user_id: 'demo-user-123',
    name: 'Kitchen Scale',
    description: 'Digital food scale up to 5kg',
    category: 'Kitchen Items',
    container: 'Kitchen Cabinet #3',
    room: 'Kitchen',
    created_at: '2025-06-01T11:15:00Z'
  },
  {
    id: '11',
    user_id: 'demo-user-123',
    name: 'Drill Set',
    description: 'Cordless drill with bit set',
    category: 'Tools',
    container: 'Garage Toolbox',
    room: 'Garage',
    created_at: '2025-06-01T11:20:00Z'
  },
  {
    id: '12',
    user_id: 'demo-user-123',
    name: 'Winter Jackets',
    description: 'Family winter coats and jackets',
    category: 'Seasonal Items',
    container: 'Hall Closet - Top Shelf',
    room: 'Hallway',
    created_at: '2025-06-01T11:25:00Z'
  },
  {
    id: '13',
    user_id: 'demo-user-123',
    name: 'Tax Documents 2024',
    description: 'Filed tax returns and receipts',
    category: 'Documents',
    container: 'Filing Cabinet Drawer A',
    room: 'Office',
    created_at: '2025-06-01T11:30:00Z'
  },
  {
    id: '14',
    user_id: 'demo-user-123',
    name: 'Vacuum Cleaner',
    description: 'Upright vacuum with attachments',
    category: 'Cleaning Supplies',
    container: 'Utility Closet',
    room: 'Laundry Room',
    created_at: '2025-06-01T11:35:00Z'
  },
  {
    id: '15',
    user_id: 'demo-user-123',
    name: 'Tennis Rackets',
    description: 'Set of 2 tennis rackets with covers',
    category: 'Sports Equipment',
    container: 'Sports Bin',
    room: 'Garage',
    created_at: '2025-06-01T11:40:00Z'
  },
  {
    id: '16',
    user_id: 'demo-user-123',
    name: 'Board Games',
    description: 'Collection of family board games',
    category: 'Other',
    container: 'Living Room Cabinet',
    room: 'Living Room',
    created_at: '2025-06-01T11:45:00Z'
  },
  {
    id: '17',
    user_id: 'demo-user-123',
    name: 'Emergency Radio',
    description: 'Hand-crank emergency radio with flashlight',
    category: 'Electronics',
    container: 'Emergency Kit',
    room: 'Closet',
    created_at: '2025-06-01T11:50:00Z'
  },
  {
    id: '18',
    user_id: 'demo-user-123',
    name: 'Pressure Cooker',
    description: 'Instant Pot 6-quart pressure cooker',
    category: 'Kitchen Items',
    container: 'Kitchen Cabinet #1',
    room: 'Kitchen',
    created_at: '2025-06-01T11:55:00Z'
  },
  {
    id: '19',
    user_id: 'demo-user-123',
    name: 'Garden Tools',
    description: 'Shovel, rake, pruning shears',
    category: 'Tools',
    container: 'Shed Wall Hooks',
    room: 'Shed',
    created_at: '2025-06-01T12:00:00Z'
  },
  {
    id: '20',
    user_id: 'demo-user-123',
    name: 'Christmas Decorations',
    description: 'Lights, ornaments, tree topper',
    category: 'Seasonal Items',
    container: 'Attic Box #5',
    room: 'Attic',
    created_at: '2025-06-01T12:05:00Z'
  }
];

// SQL Insert Statements for Supabase (Copy-Paste Ready)
export const SQL_INSERT_STATEMENTS = `
-- Insert demo data into Supabase items table
-- Run this in Supabase SQL editor after table creation

INSERT INTO items (user_id, name, description, category, container, room) VALUES
  ('demo-user-123', 'LED Headlamp', 'Rechargeable LED headlamp with red light mode', 'Camping Gear', 'Camping Box #2', 'Garage'),
  ('demo-user-123', 'Backup Headlamp', 'Battery-powered backup headlamp', 'Camping Gear', 'Emergency Kit', 'Closet'),
  ('demo-user-123', 'Backup Modem', 'Spare internet modem for emergencies', 'Electronics', 'Box #3 under desk', 'Office'),
  ('demo-user-123', 'WiFi Router', 'Main wireless router', 'Electronics', 'Office Shelf', 'Office'),
  ('demo-user-123', 'Battery Alarm Clock', 'Digital battery-powered alarm clock', 'Electronics', 'Hall Closet - Top Shelf', 'Hallway'),
  ('demo-user-123', 'Backup Alarm Clock', 'Analog wind-up alarm clock', 'Electronics', 'Bedroom Dresser', 'Bedroom'),
  ('demo-user-123', 'Camping Tent', '4-person Coleman tent with rainfly', 'Camping Gear', 'Garage Box #1', 'Garage'),
  ('demo-user-123', 'Sleeping Bags', 'Set of 2 sleeping bags for camping', 'Camping Gear', 'Garage Box #1', 'Garage'),
  ('demo-user-123', 'Laptop Charger', 'MacBook Pro 60W charger', 'Electronics', 'Office Drawer', 'Office'),
  ('demo-user-123', 'Kitchen Scale', 'Digital food scale up to 5kg', 'Kitchen Items', 'Kitchen Cabinet #3', 'Kitchen'),
  ('demo-user-123', 'Drill Set', 'Cordless drill with bit set', 'Tools', 'Garage Toolbox', 'Garage'),
  ('demo-user-123', 'Winter Jackets', 'Family winter coats and jackets', 'Seasonal Items', 'Hall Closet - Top Shelf', 'Hallway'),
  ('demo-user-123', 'Tax Documents 2024', 'Filed tax returns and receipts', 'Documents', 'Filing Cabinet Drawer A', 'Office'),
  ('demo-user-123', 'Vacuum Cleaner', 'Upright vacuum with attachments', 'Cleaning Supplies', 'Utility Closet', 'Laundry Room'),
  ('demo-user-123', 'Tennis Rackets', 'Set of 2 tennis rackets with covers', 'Sports Equipment', 'Sports Bin', 'Garage'),
  ('demo-user-123', 'Board Games', 'Collection of family board games', 'Other', 'Living Room Cabinet', 'Living Room'),
  ('demo-user-123', 'Emergency Radio', 'Hand-crank emergency radio with flashlight', 'Electronics', 'Emergency Kit', 'Closet'),
  ('demo-user-123', 'Pressure Cooker', 'Instant Pot 6-quart pressure cooker', 'Kitchen Items', 'Kitchen Cabinet #1', 'Kitchen'),
  ('demo-user-123', 'Garden Tools', 'Shovel, rake, pruning shears', 'Tools', 'Shed Wall Hooks', 'Shed'),
  ('demo-user-123', 'Christmas Decorations', 'Lights, ornaments, tree topper', 'Seasonal Items', 'Attic Box #5', 'Attic');
`;

// Demo Search Test Cases (For UC Validation)
export const SEARCH_TEST_CASES = [
  {
    testCase: 'UC1 - Sarah\'s headlamp',
    searchTerm: 'headlamp',
    expectedResults: [
      'LED Headlamp in Camping Box #2 • Garage',
      'Backup Headlamp in Emergency Kit • Closet'
    ],
    useCase: 'User finds headlamp location quickly'
  },
  {
    testCase: 'UC2 - Maria\'s backup modem',
    searchTerm: 'backup modem',
    expectedResults: [
      'Backup Modem in Box #3 under desk • Office'
    ],
    useCase: 'User finds emergency equipment without calling spouse'
  },
  {
    testCase: 'UC3 - Tom\'s alarm clock',
    searchTerm: 'alarm clock',
    expectedResults: [
      'Battery Alarm Clock in Hall Closet - Top Shelf • Hallway',
      'Backup Alarm Clock in Bedroom Dresser • Bedroom'
    ],
    useCase: 'User avoids buying duplicate item'
  },
  {
    testCase: 'Category Search - Electronics',
    searchTerm: '',
    filter: 'Electronics',
    expectedResults: [
      'Backup Modem', 'WiFi Router', 'Battery Alarm Clock', 
      'Backup Alarm Clock', 'Laptop Charger', 'Emergency Radio'
    ],
    useCase: 'User filters by category to see all electronics'
  },
  {
    testCase: 'Container Search',
    searchTerm: 'garage box',
    expectedResults: [
      'LED Headlamp in Camping Box #2 • Garage',
      'Camping Tent in Garage Box #1 • Garage',
      'Sleeping Bags in Garage Box #1 • Garage'
    ],
    useCase: 'User searches by container location'
  },
  {
    testCase: 'Room Search',
    searchTerm: 'garage',
    expectedResults: [
      'LED Headlamp', 'Camping Tent', 'Sleeping Bags', 
      'Drill Set', 'Tennis Rackets'
    ],
    useCase: 'User finds all items in specific room'
  }
];

// Form Validation Test Data
export const FORM_TEST_DATA = {
  valid: {
    name: 'Test Item',
    description: 'This is a test item',
    category: 'Electronics',
    container: 'Test Container',
    room: 'Test Room'
  },
  invalid: {
    empty_name: {
      name: '',
      description: 'Missing name',
      category: 'Electronics',
      container: 'Test Container',
      room: 'Test Room',
      expectedError: 'Name is required'
    },
    empty_category: {
      name: 'Test Item',
      description: 'Missing category',
      category: '',
      container: 'Test Container',
      room: 'Test Room',
      expectedError: 'Category is required'
    },
    empty_container: {
      name: 'Test Item',
      description: 'Missing container',
      category: 'Electronics',
      container: '',
      room: 'Test Room',
      expectedError: 'Container is required'
    },
    empty_room: {
      name: 'Test Item',
      description: 'Missing room',
      category: 'Electronics',
      container: 'Test Container',
      room: '',
      expectedError: 'Room is required'
    }
  }
};

// Error Messages (Exact text for components)
export const ERROR_MESSAGES = {
  // Form Validation
  NAME_REQUIRED: 'Name is required',
  CATEGORY_REQUIRED: 'Category is required',
  CONTAINER_REQUIRED: 'Container is required',
  ROOM_REQUIRED: 'Room is required',
  
  // Database Errors
  NETWORK_ERROR: 'Connection failed. Please try again.',
  SAVE_ERROR: 'Unable to save item. Please try again.',
  LOAD_ERROR: 'Unable to load items. Please refresh the page.',
  DELETE_ERROR: 'Unable to delete item. Please try again.',
  
  // Search Errors
  SEARCH_ERROR: 'Search failed. Please try again.',
  NO_RESULTS: 'No items match your search. Try different keywords.',
  
  // General Errors
  UNKNOWN_ERROR: 'Something went wrong. Please try again.'
};

// Success Messages (Exact text for components)
export const SUCCESS_MESSAGES = {
  ITEM_ADDED: '✅ Item added successfully!',
  ITEM_UPDATED: '✅ Item updated successfully!',
  ITEM_DELETED: '✅ Item deleted successfully!',
  SEARCH_COMPLETE: 'Found {count} items'
};

// Loading Messages (Exact text for components)
export const LOADING_MESSAGES = {
  LOADING_ITEMS: 'Loading items...',
  ADDING_ITEM: 'Adding item...',
  UPDATING_ITEM: 'Updating item...',
  DELETING_ITEM: 'Deleting item...',
  SEARCHING: 'Searching...'
};

// Demo Script for 3-Minute Presentation
export const DEMO_SCRIPT = {
  introduction: "This is HomeHive - helping you find your stuff across multiple storage locations.",
  
  scenario1: {
    title: "UC1 - Quick Item Search",
    action: "I need my headlamp for tonight's camping trip",
    demo: "Type 'headlamp' in search → See LED Headlamp in Camping Box #2, Garage",
    result: "Found exact location in 5 seconds instead of searching for hours"
  },
  
  scenario2: {
    title: "UC2 - Emergency Item Location", 
    action: "Internet is down, need backup modem",
    demo: "Search 'backup modem' → Found in Box #3 under desk, Office",
    result: "No need to call spouse at work or dig through boxes"
  },
  
  scenario3: {
    title: "UC3 - Duplicate Prevention",
    action: "About to buy alarm clock on Amazon",
    demo: "Search 'alarm clock' → Already own 2 clocks in different locations",
    result: "Prevented unnecessary $25 purchase"
  },
  
  conclusion: "HomeHive transforms chaotic storage into organized, searchable inventory. No more lost items, duplicate purchases, or storage frustration."
};

// Export everything for easy importing
export default {
  CATEGORIES,
  COMMON_ROOMS,
  DEMO_USER,
  MOCK_ITEMS,
  SQL_INSERT_STATEMENTS,
  SEARCH_TEST_CASES,
  FORM_TEST_DATA,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  LOADING_MESSAGES,
  DEMO_SCRIPT
};