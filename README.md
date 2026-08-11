# Restaurant Management System API

This repository implements a backend RESTful API built on Express, PostgreSQL/Sequelize, and Pino logging for managing a restaurant administration platform.

## Features

- **Relational Schema**: Integrated database design for restaurants, menu items, users, and tables using Sequelize ORM.
- **Pino Logger**: Premium high-performance structured logging.
- **Global Error Handler**: Custom exception middleware mappings.

## Prerequisites

- Node.js
- PostgreSQL (or dialected SQL database)

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure database credentials in `config/config.json`.

3. Run migrations and database seeding:
   ```bash
   # Run migrations
   npm run migrate
   # Run seeders
   npm run seed
   ```

4. Start development server:
   ```bash
   npm start
   ```

## Running Tests

Execute tests using Node.js native test runner:
```bash
npm test
```
