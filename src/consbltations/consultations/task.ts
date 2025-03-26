
let age: number= 25;  

let name: string = "Alice";

let isActive: boolean = true; 

let nullableValue: string | null = null; // Строка или null

let numbers: number[] = [1, 2, 3, 4];

let names: string[] = ["Alice", "Bob", "Charlie"];

let mixed: (number | string)[] = [1, "Alice", 2, "Bob"];

let colors: (number | string | boolean)[] = [123, "red", true, "blue"];


const add = (a: number, b:number): number => {
    return a - b;
  };

  enum ROLE {
    Admin = "admin",
    User = "user",
    Guest = "guest"
   };

  interface User {
    id: number | string;
    name: string;
    email: string;
    isActive: boolean;
    role: ROLE;
  }

  const user: User = {
    id: 1,
    name: 'Vira',
    email: '1qwe@com',
    isActive: true,
    role:ROLE.Admin

  }

  interface Products {
    id: number;
    name: string;
    price: number;
    inStock: boolean
    
  }
  const products: Products[] = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Keyboard", price: 80, inStock: true },
  ];


  interface Book {
    id: string;
    title: string;
    author: Author;
    price: number;
    inStock: boolean;
  }
  interface Author {
    id: number; 
    name: string;
    birthYear: number; 
    country: string;
  }
  interface Customer {
    id: number;
    name: string;
    email: string;
  }
  interface Order {
    orderId: string;
    customerId: number;
    books: string[];
    totalAmount:number;
    status: 'processing' | 'shipped' | 'delivered';
  }
  interface Settings {
    currency: string;
    isOpen: boolean;
    discountRate: number;
  }
  interface Bookstore {
    name: string;
    location: string;
    books: Book[];
    customers: Customer[];
    orders: Order[];
    settings: Settings;
  }

  const bookstore: Bookstore = {
    name: "The Grand Bookstore",
    location: "New York, USA",
    books: [
      {
        id: "B001",
        title: "The Hobbit",
        author: { id: 1, name: "J.R.R. Tolkien", birthYear: 1892, country: "UK" },
        price: 15.99,
        inStock: true,
      },
      {
        id: "B002",
        title: "1984",
        author: { id: 2, name: "George Orwell", birthYear: 1903, country: "UK" },
        price: 12.5,
        inStock: false,
      },
    ],
    customers: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
    ],
    orders: [
      {
        orderId: "O1001",
        customerId: 101,
        books:  [ "B001", "B001" ],
        totalAmount: 15.99,
        status: "shipped",
      },
    ],
    settings: {
      currency: "USD",
      isOpen: true,
      discountRate: 10, 
    }
  }