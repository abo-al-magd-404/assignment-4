# Assignment 4  
**Name:** abo-al-magd-404  
**Group:** Node_C45_Mon&Thurs_8:30pm_(Online)

---

## Project Overview

This project implements a simple retail store management system using Node.js and MySQL. It supports product, supplier, and sales data management, and demonstrates fundamental CRUD operations on a relational database. The system automates supplier/product registration, update, deletion, and advanced queries via a Node.js script.

---

## Features

- MySQL database schema for retail store management (products, suppliers, and sales)
- Automated data manipulation via JavaScript (insert, update, delete queries)
- Batch product addition linked to a supplier
- Query for unsold products
- Bonus: SQL logic for customer visit analysis

---

## Architecture

- **Database Layer:**  
  The database schema (see `3.retail_store.sql`) consists of:
  - `products`: Item details, price, stock, and supplier reference  
  - `suppliers`: Supplier info and contact  
  - `sales`: Tracks product sales  
  Relationships are enforced via foreign key constraints.

- **Application Layer:**  
  - **Node.js App (`4.main.js`):**  
    Uses the `mysql2` module to connect to the database and execute a series of predefined operations:
      - Adds a supplier  
      - Inserts multiple products  
      - Updates product pricing  
      - Deletes a product  
      - Selects unsold products

---

## Tech Stack

- **Node.js**  
- **JavaScript** (CommonJS modules)
- **MySQL** (relational database)
- **mysql2** npm package

---

## Usage

### 1. Setup Database
- Import the schema from `3.retail_store.sql` into your MySQL server.

### 2. Application Setup
```bash
npm install
```

### 3. Run Script
```bash
npm run start:dev
```
> The app uses connection parameters for `localhost`, user `root`, and an empty password. Make sure your MySQL setup matches or adjust `4.main.js`.

---

## File Structure

- `1.ERD_Diagram.png` / `2.ERD_Mapping.png`:  
  Entity-Relationship illustration and mappings (recommended to view for database structure clarification)
- `3.retail_store.sql`:  
  Full SQL schema and seed data
- `4.main.js`:  
  The Node.js script automating database operations
- `Bounus.txt`:  
  Bonus SQL query for counting customers with visits but no transactions

---

## Bonus Logic (Customer Without Transactions)

```sql
SELECT 
    customer_id, 
    COUNT(visit_id) AS count_no_trans
FROM Visits
WHERE visit_id NOT IN (SELECT visit_id FROM Transactions)
GROUP BY customer_id;
```

---

## License

ISC License

---

> For any issues, questions, or improvements, feel free to open an issue or pull request.
