# Frontend Take-Home Assignment
This repository contains solutions for all three tasks of the Frontend Take-Home Assignment, covering React and Shopify Liquid implementations.

# Tech Stack
## React Tasks
 React (Vite)

React Router DOM

Tailwind CSS

JavaScript (ES6+)

Browser APIs (IntersectionObserver, localStorage)

## Shopify Task

Shopify Admin

Shopify Online Store 2.0

Liquid + HTML

Metaobjects & Metafields

## Project Structure
repo/
|  ├── react_task/
|  ├── node_modules/
|  ├── public/
|  ├── src/
|  │   ├── assets/
|  │   ├── config/
|  │   ├── Layout/
|  │   ├── Pages/
|  │   │   ├── ProductDetails/
|  │   │   ├── Products/
|  │   │   │   ├── Components/
|  │   │   │   ├── hooks/
|  │   │   │   └── Index.jsx
|  │   │   └── ViewedProducts/
|  │   ├── utilis/
|  │   ├── App.jsx
|  │   ├── index.css
|  │   └── main.jsx
|  ├── .gitignore
|  ├── eslint.config.js
|  └── package.json
│
├── shopify-liquid/
│   └── sections/
│       └── product-metaobject-info.liquid
│
└── README.md

# Question 1 — React
## Product Listing with Infinite Scroll (Offset-Based Pagination)
## Features Implemented
Fetches products from:
https://fakestoreapi.com/products

Displays:

Product image

Title

Description (2-line clamp)

Rating stars with count

Price

Offset-based pagination (client-side)

Infinite scroll using IntersectionObserver

Pagination controls:

Load More button

Page size selector (5 / 10 / 20)

Loading, empty, and error states handled

## Implementation Notes

Pagination handled fully on the client

Custom hook used for data fetching

Separate hook for infinite scroll logic

Clean component separation

No third-party pagination libraries used

# Question 3 — React
## Recently Viewed Products Widget
### Features Implemented

Tracks last 5 viewed products

Stores product IDs in localStorage

Prevents duplicate products

Most recently viewed product appears first

Fetches product details from API

Displays:

Product image

Title

Price

Updates automatically when a new product is viewed

Graceful handling for:

No viewed products

Invalid or missing product IDs

## Implementation Notes

Product click stores ID in localStorage

Utility functions manage add/remove logic

Widget reads from localStorage and re-fetches data

Data persists across page reloads

# Question 2 — Shopify Liquid
## Metaobject Reference Rendering (Product Page)

This task is implemented using Shopify Liquid in a real Shopify Admin + Theme environment.

## Shopify Data Model
### Metaobject Definition

Name: Product Info
Type: product_info

### Fields:

image → Image

title → Single-line text

description → Multi-line text

related_products → Product list

### Product Metafield

Namespace & key: custom.product_info

Type: Metaobject reference

Reference: product_info

Assigned to: Products

## Liquid Section Implementation
#### File Location
shopify-liquid/sections/product-metaobject-info.liquid

### Responsibilities

Render section only if metafield exists

#### Display:

Image (if present)

Title

Description

#### Render related products list:

Product image

Product title

Product price

#### Graceful handling:

No image → image not rendered

Empty related products → section hidden

#### Uses:

Liquid + HTML only

No JavaScript

No hardcoded product handles

No all_products

## Shopify Admin & Theme Setup (Performed)

Created Metaobject definition in
Admin → Content → Metaobjects

Created Product Metafield in
Settings → Metafields and metaobjects

Attached metaobject entry to a product

Added custom Liquid section to:
Online Store → Themes → Edit theme

Inserted section into:
Products → Default product template

Verified rendering and edge cases in storefront preview

### Verification Performed

Section renders when metafield exists

Section hides when metafield is removed

Image hides when not provided

Related products section hides when empty

No layout break or Liquid errors

### Extra Notes

Shopify task is intentionally separate from React app

Liquid code is also committed to the repository for review

Admin configuration steps are documented for completeness



# How to Run the Project (From Scratch)

This project contains two independent parts:

1. React application (Task 1 & Task 3)

2. Shopify Liquid section (Task 2 – runs inside Shopify Admin)

## Prerequisites

Before starting, make sure the following are installed on your system:

### Node.js (v20 or above)
👉 Download: https://nodejs.org

### Git
👉 Download: https://git-scm.com

A modern browser (Chrome / Edge / Firefox)

To verify installation, run:

node -v
npm -v
git --version

## Step 1: Clone the Repository
Open Terminal / Command Prompt / PowerShell and run:

https://github.com/saiganesh6841/frontend-take-home-assignment.git

Then move into the project folder:

cd frontend-take-home-assignment

# Step 2: Run the React Application (Tasks 1 & 3)
### 1.Navigate to React project
cd react_task

### Install dependencies
npm install

This will install all required packages listed in package.json.

### 3.Start the development server
npm run dev

### 4.Open the application in browser
After successful start, you’ll see an output like:

Open this URL in browser

http://localhost:5173


## 🙌 Thank You

Thank you for reviewing this assignment.
Happy to walk through any part of the implementation if needed.
