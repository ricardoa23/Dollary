//Mock Budget data in order to test components
export const testTransactions = [
  { id: 1, date: '2025-06-01', amount: -45.23, category: 'Groceries' },
  { id: 2, date: '2025-06-02', amount: -15.99, category: 'Transportation' },
  { id: 3, date: '2025-06-02', amount: 2000.00, category: 'Income' },
  { id: 4, date: '2025-06-03', amount: -75.50, category: 'Utilities' },
  { id: 5, date: '2025-06-04', amount: -120.00, category: 'Shopping' },
  { id: 6, date: '2025-06-05', amount: -30.00, category: 'Entertainment' },
  { id: 7, date: '2025-06-05', amount: -10.50, category: 'Dining Out' },
  { id: 8, date: '2025-06-06', amount: -80.00, category: 'Rent' },
  { id: 9, date: '2025-06-07', amount: -9.99, category: 'Subscriptions' },
];

export const budgetGoals = [
  { category: 'Groceries', limit: 300 },
  { category: 'Transportation', limit: 100 },
  { category: 'Entertainment', limit: 150 },
  { category: 'Dining Out', limit: 100 },
  { category: 'Utilities', limit: 200 },
  { category: 'Shopping', limit: 250 },
];

export const incomeVsExpenses = [
  { date: '2025-06-01', income: 0, expenses: 45.23 },
  { date: '2025-06-02', income: 2000, expenses: 15.99 },
  { date: '2025-06-03', income: 0, expenses: 75.5 },
  { date: '2025-06-04', income: 0, expenses: 120 },
  { date: '2025-06-05', income: 0, expenses: 40.5 },
  { date: '2025-06-06', income: 0, expenses: 80 },
  { date: '2025-06-07', income: 0, expenses: 9.99 },
];

//Mock user data in order to test components
export const testUsers = [
  {
    id: 'user_001',
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: 'Password123!', // Simulated only, don't store plain text in real apps.
    createdAt: '2025-05-01T10:00:00Z',
    settings: {
      theme: 'dark',
      notifications: true,
    },
  },
  {
    id: 'user_002',
    name: 'John Smith',
    email: 'john@example.com',
    password: 'SecurePass456!',
    createdAt: '2025-05-15T08:30:00Z',
    settings: {
      theme: 'light',
      notifications: false,
    },
  },
  {
    id: 'user_003',
    name: 'Maria Lopez',
    email: 'maria@example.com',
    password: 'Lopez789!',
    createdAt: '2025-06-01T13:45:00Z',
    settings: {
      theme: 'dark',
      notifications: true,
    },
  },
  { // Mock data for Appwrite specific data, Mock API
      $id: 'user_001',
      name: 'Jane Doe',
      email: 'jane@example.com',
      emailVerification: true,
      prefs: {
          theme: 'dark',
          notifications: true,
        },
        status: true,
        registration: '2025-05-01T10:00:00Z'
    }
];