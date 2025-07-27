# Packify E-commerce Platform Project MERN Stack — Object & Contextual Concepts

This document outlines the key objects in the **Packify** shopping platform and explains their roles across different contexts (User, Admin, and System). This helps developers and stakeholders understand how each component functions within its context.

---

## Object: Product

- **Context: User**
  - **Purpose**: Discover and purchase items
  - **Important Information**:
    - Name, price, images, description
    - Availability status
    - “Add to Cart” and quantity selection

- **Context: Admin**
  - **Purpose**: Manage product catalog
  - **Important Information**:
    - Create/edit/delete product entries
    - Set price, stock, and descriptions
    - Upload product images
    - Mark as top product (for carousel)

---

## Object: Cart

- **Context: User**
  - **Purpose**: Temporarily hold selected items
  - **Important Information**:
    - List of products with quantity and price
    - Add/remove/update products
    - Cart stays active until they checkout

- **Context: System**
  - **Purpose**: Prepare for checkout
  - **Important Information**:
    - Calculates totals and checks inventory before checkout

---

## Object: User

- **Context: User**
  - **Purpose**: Interact with Packify as a customer
  - **Important Information**:
    - Registration/login
    - View/edit profile
    - Book orders
    - View past orders
    - Make payment

- **Context: Admin**
  - **Purpose**: View and manage users
  - **Important Information**:
    - View user list and activity
    - Take actions if needed

---

## Object: Order

- **Context: User**
  - **Purpose**: Track current and past purchases
  - **Important Information**:
    - List of purchased items
    - Order status (pending, delivered)
    - Payment info

- **Context: Admin**
  - **Purpose**: Fulfill and manage customer orders
  - **Important Information**:
    - View all orders with user details
    - Update status to “Delivered”
    - View payment confirmation

---

## Object: Admin

- **Context: Admin**
  - **Purpose**: Manage platform operations
  - **Important Information**:
    - Manage products, users, and orders
    - Admin account credentials

---

## Object: Authentication

- **Context: User/Admin**
  - **Purpose**: Secure platform access
  - **Important Information**:
    - Email/password or token-based login
    - Role-based access control
    - Session or token management

---

## Object: Search & Pagination

- **Context: User**
  - **Purpose**: Help users navigate products
  - **Important Information**:
    - Keyword search
    - Page-wise product listing

---

## Object: Payment

- **Context: User**
  - **Purpose**: Complete the purchase
  - **Important Information**:
    - Razorpay integration fro payments
    - Select shipping and payment method
    - Get payment confirmation

- **Context: Admin**
  - **Purpose**: View completed payments
  - **Important Information**:
    - Payment info
    - Associated order info
    - Status (success/failure)

---

## Object: Dashboard

- **Context: Admin**
  - **Purpose**: Overview and control panel
  - **Important Information**:
    - Easy access to manage products, orders, and accounts

---

## Keeping This Document Useful

This file exists to help developers and stakeholders understand how Packify functions across different contexts. It acts as a quick reference during development or onboarding.

---

## Last updated

July 27, 2025