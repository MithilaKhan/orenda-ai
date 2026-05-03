# Orenda AI 🌿

Orenda AI is a premium, nature-inspired AI content generator. Designed with a calming "forest green and soft sand" aesthetic, it provides users with a serene and distraction-free environment to explore the intersection of natural intelligence and artificial intelligence.

Built with modern web technologies, Orenda AI offers a seamless ChatGPT-style interface with a responsive layout, interactive message bubbles, and real-time content generation powered by the OpenAI API.

## ✨ Features

- **Premium UI/UX:** A highly polished, nature-themed design system emphasizing calm, focus, and creativity.
- **ChatGPT-Style Layout:** Familiar interface featuring a fixed collapsible sidebar for chat history and a sticky input area.
- **Real-Time Generation:** Seamless connection to the OpenAI API for fast and intelligent content creation.
- **Session Management:** Create new chats, switch between recent conversations, and manage history smoothly.
- **Fully Responsive:** Optimized for both desktop and mobile devices, ensuring a premium experience on any screen size.
- **Interactive Elements:** Smooth transitions, hover effects, and beautifully styled message bubbles.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **AI Integration:** [OpenAI SDK](https://platform.openai.com/docs/api-reference)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language:** TypeScript

## 📂 Project Structure

```text
├── app/
│   ├── api/generate/     # Backend API route handling OpenAI requests
│   ├── layout.tsx        # Global application layout and metadata
│   ├── page.tsx          # Main application state and logic
│   └── globals.css       # Global styles and Tailwind configuration
├── components/
│   ├── chat/             # Chat UI components (Input, Bubbles, Empty State, Window)
│   └── layout/           # Structural components (Sidebar, Main Layout)
└── package.json          # Project dependencies and scripts
```

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
```

Set up your environment variables by creating a `.env.local` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Run the development server:

```bash
npm run dev
# To access on your local network, run: npm run dev -- -H 0.0.0.0
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Philosophy

Orenda AI departs from the sterile, ultra-minimalist designs of standard AI tools. By utilizing earthy tones, subtle glassmorphism effects, and organic icons, it creates an environment that feels alive and inspiring—reducing cognitive load and encouraging pure creativity.
