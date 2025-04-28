# SecuResidences WebApp

The web landing page and associated backend API for **SecuResidences** – a hospitality automation mobile application designed to streamline hostel management through features like GPS-based attendance, slot-based cleaning, maintenance tracking, and outing pass approvals.

---

## Table of Contents

- [Features](#features)  
- [Technology Stack](#technology-stack)  
- [Folder Structure](#folder-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Configuration](#configuration)  
  - [Running Locally](#running-locally)  
  - [Building for Production](#building-for-production)  
- [API Reference](#api-reference)  
- [Deployment Recommendations](#deployment-recommendations)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact & Support](#contact--support)  

---

## Features

- **Responsive Landing Page**  
  A polished, mobile-first React/Vite front end showcasing key value propositions, videos, and imagery.

- **Location-Based Attendance**  
  Geofencing logic for auto-marking student attendance without manual input.

- **Slot-Based Cleaning Booking**  
  Students book preferred room-cleaning slots; cleaning staff get optimized daily routes.

- **Maintenance Management**  
  Photo-enabled issue reporting; real-time status tracking for maintenance staff and students.

- **Digital Outing Pass System**  
  Multi-level approval workflow with instant notifications to wardens and parents.

- **Contact & Feedback**  
  Integrated contact form (via Nodemailer/Express) and embedded Google Forms survey for gathering feedback.

---

## Technology Stack

### Frontend

- **Framework:** React 19  
- **Bundler:** Vite  
- **Styling:** Tailwind CSS  
- **Routing:** React Router v7  
- **Icons:** React Icons  
- **State & Effects:** React Hooks

### Backend

- **Runtime:** Node.js (ES Modules)  
- **Framework:** Express 5  
- **Email:** Nodemailer (Gmail service)  
- **Security:** CORS, environment variables via dotenv  

### Tooling & Linting

- **Package Manager:** npm  
- **Linting:** ESLint (`@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)  
- **Post-processing:** PostCSS, Autoprefixer  
- **Version Control:** Git  

---

## Folder Structure

```
.
├── .env                   # Environment variables (EMAIL_USER, EMAIL_PASS)
├── .gitignore
├── package.json
├── server.js              # Express server for /contact API
├── vite.config.js
├── tailwind.config.js
│
├── public/                # Static assets served by Vite
│   └── vite.svg
│
└── src/
    ├── index.html
    ├── main.jsx           # Entrypoint
    ├── index.css
    ├── App.jsx            # Router & layout
    │
    ├── assets/
    │   ├── img/            # Images & video
    │   ├── react.svg
    │   └── vite.svg
    │
    └── components/         # Reusable UI components
        ├── Navbar.jsx
        ├── Home.jsx
        ├── Features.jsx
        ├── Contact.jsx
        ├── Survey.jsx
        └── Footer.jsx
```

---

## Getting Started

### Prerequisites

- Node.js v16+  
- npm v8+ (or Yarn/PnPM)  

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/otAdarshP/SecuResidences-WebApp.git
   cd SecuResidences-WebApp
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

### Configuration

1. Duplicate `.env.example` (if provided) or create a new `.env` at project root.
2. Add your Gmail credentials for Nodemailer:
   ```env
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASS=your_app_specific_password
   ```

> **Important:** Use an [App Password](https://support.google.com/accounts/answer/185833) for Gmail authentication.

### Running Locally

1. **Start the backend server**  
   ```bash
   node server.js
   ```
   Runs on port **5000** by default.

2. **Start the frontend development server**  
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

### Building for Production

```bash
npm run build
npm run preview
```
- `build` generates optimized assets in `dist/`.  
- `preview` serves the production build locally.

---

## API Reference

### `POST /contact`

Sends an email to the configured `EMAIL_USER`.

- **Request Body** (JSON)
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "message": "Hello, I'd like more info."
  }
  ```
- **Responses**
  - `200 OK`  
    ```json
    { "success": true, "message": "Message sent!" }
    ```
  - `500 Internal Server Error`  
    ```json
    { "success": false, "message": "Failed to send message" }
    ```

---

## Deployment Recommendations

- **Frontend:** Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages).  
- **Backend:** Host `server.js` on Heroku, AWS Elastic Beanstalk, or any Node-capable platform.  
- **Environment Variables:** Securely store `EMAIL_USER` and `EMAIL_PASS` in your host’s config settings.  

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m "Add YourFeature"`.
4. Push to branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

Please adhere to existing coding styles and include clear commit messages.

---

## License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---

## Contact & Support

- **Email:** [securesidences@gmail.com](mailto:securesidences@gmail.com)  
- **Location:** Bengaluru, India  

Feel free to open issues for bugs, suggest enhancements, or reach out directly via email. We’d love to hear your feedback!
