## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


# API Endpoints for Job Applications

Base URL: `http://localhost:3000/api/applications`

## Endpoints

### 1. Get All Applications
- **GET** `/api/applications`
- **Description:** Returns a list of all job applications.
- **Response:** `[ { "id": 1, "company": "ABC Corp", "position": "Software Engineer", "status": "Applied" } ]`

### 2. Add a New Application
- **POST** `/api/applications`
- **Description:** Adds a new job application.
- **Body:**
  ```json ` { "id": 1, "company": "ABC Corp", "position": "Software Engineer", "status": "Applied" } `

### 3. Update an Application
- **PUT** `/api/applications`
- **Description:** Updates an existing application.
- **Body:**
  ```json `{ "id": 1, "company": "ABC Corp", "position": "Senior Engineer", "status": "Interview" } `

### 4. Delete an Application
- **DELETE** `/api/applications`
- **Description:** Deletes an application by ID.
- **Body:**
  ```json ` { "id": 1 } `
