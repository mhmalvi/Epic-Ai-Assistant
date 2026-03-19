<div align="center">

# Epic AI Assistant

A modern, full-featured AI assistant SaaS platform that empowers users with intelligent draft generation, email classification, and content analysis tools — all wrapped in an elegant, responsive dashboard.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Auth_&_DB-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)

</div>

---

## Features

- **AI Draft Generator** — Create professional emails, documents, and content drafts with a single click
- **Email Classifier** — Automatically categorize and organize emails using intelligent classification
- **Content Analysis** — Analyze text for insights, tone, and key information
- **Usage Tracking** — Real-time usage widgets with progress indicators for each feature
- **Subscription Plans** — Built-in plan management (Free, Pro, Enterprise) with per-feature usage limits
- **User Authentication** — Secure sign-up, login, and session management powered by Supabase Auth
- **Admin Dashboard** — Dedicated admin metrics panel for monitoring platform-wide activity
- **Profile & Settings** — Full user profile management with avatar support and preference controls
- **Dark Mode** — Toggle between light and dark themes
- **Responsive Design** — Collapsible sidebar and mobile-friendly layout

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI Primitives |
| **State & Data** | TanStack React Query, React Hook Form, Zod |
| **Backend / Auth** | Supabase (Authentication, Database, Row-Level Security) |
| **Routing** | React Router v6 |
| **Charts** | Recharts |
| **Notifications** | Sonner, Radix Toast |

## Getting Started

### Prerequisites

- **Node.js** 18+ (or Bun)
- **npm**, **yarn**, or **bun**
- A **Supabase** project (for authentication and database)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mhmalvi/Epic-Ai-Assistant.git
   cd Epic-Ai-Assistant
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root with your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components (Header, Sidebar, FeatureCard, UsageWidget)
├── contexts/         # React context providers (AuthContext)
├── hooks/            # Custom hooks (useUserData, use-toast, use-mobile)
├── integrations/     # Third-party service clients (Supabase)
├── lib/              # Utility functions
├── pages/            # Route-level page components
│   ├── Index.tsx     # Main dashboard
│   ├── Auth.tsx      # Authentication page
│   ├── Profile.tsx   # User profile
│   ├── Settings.tsx  # App settings
│   └── Admin.tsx     # Admin metrics panel
└── main.tsx          # Application entry point
```

## License

This project is open source and available under the [MIT License](LICENSE).
