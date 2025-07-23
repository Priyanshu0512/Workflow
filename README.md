# 🚀 Workflow - Project Management Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2.14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-Database-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![Hono](https://img.shields.io/badge/Hono-API-FF6B35?style=for-the-badge&logo=hono&logoColor=white)](https://hono.dev/)

A modern, full-stack project management platform built with Next.js 14, featuring real-time collaboration, task management, and team workspaces.

## 🌐 Live Demo

🔗 **[View Live Application](https://your-deployed-url.vercel.app)**

> Replace with your actual deployed URL

## ✨ Features

- 🏢 **Multi-Workspace Management** - Create and manage multiple workspaces
- 📋 **Advanced Task Management** - Create, assign, and track tasks with multiple views
- 👥 **Team Collaboration** - Invite members and manage permissions
- 📊 **Analytics Dashboard** - Track project progress and team performance
- 🎯 **Project Organization** - Organize tasks by projects with custom avatars
- 📅 **Calendar View** - Visualize tasks and deadlines in calendar format
- 🔄 **Kanban Board** - Drag-and-drop task management
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🔐 **Secure Authentication** - Email/password and OAuth (Google, GitHub)
- 🎨 **Modern UI/UX** - Clean, intuitive interface with dark/light themes

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod validation
- **Drag & Drop**: @hello-pangea/dnd
- **Calendar**: React Big Calendar
- **Icons**: Lucide React

### Backend

- **API**: Hono.js
- **Database**: Appwrite
- **Authentication**: Appwrite Auth
- **File Storage**: Appwrite Storage
- **Validation**: Zod

### Development Tools

- **Package Manager**: npm/bun
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
workflow/
├── public/                     # Static assets
│   ├── logo.png
│   └── logo.svg
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Main dashboard routes
│   │   ├── (standalone)/      # Standalone pages
│   │   ├── api/               # API routes (Hono)
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── analytics.tsx
│   │   ├── navbar.tsx
│   │   └── sidebar.tsx
│   ├── features/             # Feature-based modules
│   │   ├── auth/             # Authentication
│   │   ├── members/          # Team member management
│   │   ├── projects/         # Project management
│   │   ├── tasks/            # Task management
│   │   └── workspaces/       # Workspace management
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility libraries
│   │   ├── appwrite.ts       # Appwrite configuration
│   │   ├── rpc.ts           # API client
│   │   └── utils.ts         # Helper functions
│   └── config.ts             # Environment configuration
├── components.json            # shadcn/ui configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Appwrite instance (cloud or self-hosted)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/workflow.git
cd workflow
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using bun (recommended)
bun install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your-project-id
NEXT_APPWRITE_KEY=your-api-key

# Database Collections
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your-database-id
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=workspaces-collection-id
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=members-collection-id
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=projects-collection-id
NEXT_PUBLIC_APPWRITE_TASKS_ID=tasks-collection-id
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=images-bucket-id
```

### 4. Appwrite Setup

1. **Create an Appwrite Project**

   - Go to [Appwrite Console](https://cloud.appwrite.io/)
   - Create a new project
   - Copy the Project ID

2. **Create Database Collections**

   Create the following collections with these attributes:

   **Workspaces Collection:**

   ```
   - name (string, required)
   - imageUrl (string, optional)
   - inviteCode (string, required)
   - userId (string, required)
   ```

   **Members Collection:**

   ```
   - workspaceId (string, required)
   - userId (string, required)
   - role (string, required) // ADMIN or MEMBER
   ```

   **Projects Collection:**

   ```
   - name (string, required)
   - imageUrl (string, optional)
   - workspaceId (string, required)
   ```

   **Tasks Collection:**

   ```
   - name (string, required)
   - status (string, required) // BACKLOG, TODO, IN_PROGRESS, IN_REVIEW, DONE
   - workspaceId (string, required)
   - projectId (string, required)
   - assigneeId (string, required)
   - position (number, required)
   - dueDate (datetime, required)
   - description (string, optional)
   ```

3. **Create Storage Bucket**

   - Create a bucket for image uploads
   - Set appropriate permissions

4. **Configure Authentication**
   - Enable Email/Password authentication
   - Configure OAuth providers (Google, GitHub) if needed
   - Set up redirect URLs

### 5. Run the Development Server

```bash
# Using npm
npm run dev

# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Database Permissions

Set up the following permissions for each collection:

- **Read**: Users who are members of the workspace
- **Write**: Users who are members of the workspace
- **Delete**: Workspace admins only

### Authentication Settings

1. **Email/Password**: Enabled by default
2. **OAuth Providers**:
   - Google: Configure OAuth credentials
   - GitHub: Configure OAuth app

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**

   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set Environment Variables**

   - Add all environment variables in Vercel dashboard
   - Update `NEXT_PUBLIC_APP_URL` to your production URL

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to Other Platforms

The application can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Use the web interface or CLI

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build
```

## 📚 API Documentation

The application uses Hono.js for API routes. Key endpoints:

- `GET /api/workspaces` - List user workspaces
- `POST /api/workspaces` - Create workspace
- `GET /api/tasks` - List tasks with filters
- `POST /api/tasks` - Create task
- `PATCH /api/tasks/:id` - Update task

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@yourapp.com
- 💬 Discord: [Join our community](https://discord.gg/yourserver)
- 📖 Documentation: [docs.yourapp.com](https://docs.yourapp.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Appwrite](https://appwrite.io/) for backend services
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/yourusername">Your Name</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
