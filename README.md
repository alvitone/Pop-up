# Vue Popup App

A simple Vue 3 project with a button that opens a popup component.

## Features

- Clean and simple UI
- Reusable Popup component
- Smooth animations and transitions
- Click outside to close
- Modern styling with gradients

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── App.vue                 # Main app component with button
├── components/
│   └── Popup.vue          # Reusable popup component
└── main.js                # Vue app entry point
```

## How it Works

- Click the "Open Popup" button to show the popup
- Click outside the popup or the close button (×) to dismiss it
- The popup uses Vue's Teleport to render at the body level
