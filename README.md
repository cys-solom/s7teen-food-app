# Zukka Marketplace

A modern Arabic e-commerce marketplace built with React, TypeScript, and Firebase.

## 📋 Overview

Zukka Marketplace is a feature-rich e-commerce platform designed for Arabic markets. The application provides a seamless shopping experience with features like product browsing, cart management, user authentication, and more.

## ✨ Features

- **Responsive Design**: Mobile-first approach for optimal user experience across devices
- **Product Catalog**: Browse products by categories
- **Shopping Cart**: Add/remove items, update quantities, and checkout
- **User Authentication**: Account creation and management through Firebase
- **Search Functionality**: Find products quickly and efficiently
- **Performance Optimized**: Lazy loading images and components for better UX

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router Dom
- **Backend/Database**: Firebase
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/zukka-marketplace.git
cd zukka-marketplace
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Set up environment variables
Create a `.env` file in the root directory with your Firebase configuration:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
  ├── components/       # Reusable UI components
  │   ├── cart/         # Cart-related components
  │   ├── home/         # Homepage sections
  │   ├── layout/       # Layout components (Header, Footer, etc.)
  │   ├── products/     # Product-related components
  │   └── ui/           # Generic UI components
  ├── context/          # React Context providers
  ├── data/             # Data and API interfaces
  ├── pages/            # Application pages/routes
  ├── types/            # TypeScript type definitions
  ├── utils/            # Utility functions and helpers
  ├── App.tsx           # Main application component
  └── main.tsx          # Application entry point
```

## 🧪 Linting and Type Checking

```bash
npm run lint
# or
yarn lint
```

## 📱 Deployment

The project is configured for deployment on Vercel. Push to the main branch to trigger automatic deployments.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.