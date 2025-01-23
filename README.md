# Community Page Application

![Community Page Screenshot](./screenshots/community-page.png)

## Overview

A modern, responsive community page application built with React and TypeScript. This application allows users to create posts, engage in discussions through nested comments, and interact with community content through likes and replies.

## Features

- 📝 Create and view posts with rich text formatting
- 💬 Nested comment system with infinite reply depth
- 📱 Fully responsive design
- 🖼️ Support for multiple image uploads
- 🎨 Modern UI with Material-UI components

## Technology Stack

- React
- TypeScript
- Material-UI
- SCSS Modules
- Emotion (for styled components)

## Project Structure

```tree
src/
├── components/
│   ├── Comment.tsx           # Handles individual comments and nested replies
│   ├── CreateComment.tsx     # Comment creation form component
│   ├── CreatePost.tsx        # Post creation dialog component
│   ├── Post.tsx             # Individual post display component
│   ├── PostList.tsx         # Renders list of posts
│   └── Navbar.tsx           # Application navigation bar
├── layout/
│   └── Layout.tsx           # Main layout wrapper component
├── types/
│   └── index.ts             # TypeScript type definitions
└── data/
    └── mockData.ts          # Mock data for development
```

## Core Components 🧩

### CommunityPage

- Main container component
- Manages posts state
- Handles post creation
- Integrates with Layout component

### Post Component

- Displays individual posts
- Manages comments and replies
- Supports multiple image layouts

### Comment System

- Implements nested replies
- Like/dislike functionality
- Real-time comment updates
- Infinite nesting capability

## Getting Started 🚀

1. Clone the repository:

```bash
git clone https://github.com/yourusername/community-page.git
```

2. Install dependencies:

```bash
cd community-page
npm install
```

3. Start the development server:

```bash
npm start
```

## Component Architecture 🏗️

```
Layout
└── CommunityPage
    ├── CreatePost
    └── PostList
        └── Post
            └── Comment
                └── CreateComment
```

## State Management 🔄

- Local state management using React hooks
- Prop drilling for component communication
- Recursive state updates for nested comments

## Styling Approach 🎨

- Material-UI's styled components for base components
- SCSS modules for component-specific styling
- Responsive design using Material-UI's theme breakpoints
- Consistent color palette and typography

## Key Features Implementation 🔑

### Post Creation

- Rich text editor
- Image upload support
- Real-time preview
- Form validation

### Comment System

- Nested replies
- Like/dislike functionality
- Real-time updates
- Infinite nesting

### Responsive Design

- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions
- Optimized images

## Future Improvements 🔮

- [ ] Add user authentication
- [ ] Implement real-time updates
- [ ] Add image optimization
- [ ] Implement comment pagination
- [ ] Add unit and integration tests
- [ ] Add search functionality
- [ ] Implement data persistence
