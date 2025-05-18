# VibeCoder

VibeCoder is a real-time collaborative code editor platform inspired by tools like Replit and CodeSandbox. Built with React, Next.js, Convex, and TailwindCSS, it provides a smooth developer experience with AI-assisted editing and robust backend support.

## 🚀 Features

- 🌐 Real-time collaboration using Convex
- 🧠 Contextual AI code generation (optional)
- 📁 File system simulation with tabbed editors
- 🎨 TailwindCSS-based clean UI with ShadCN components
- 💬 Chat-like AI prompt window for code generation
- 🔐 Auth with Clerk (or add your preferred provider)
- 💳 Token-based payment system (Convex + Stripe supported)

---

## 🛠️ Tech Stack

| Layer         | Technology                         |
| ------------- | ---------------------------------- |
| Frontend      | Next.js, React, Tailwind CSS, shadcn/ui |
| Backend       | Convex                            |
| State/Storage | Convex Database                   |
| Auth          | Clerk / Auth.js                   |
| AI Services   | OpenAI / Other LLMS               |
| Styling       | Tailwind CSS, shadcn/ui           |

---

## 📦 Getting Started

### Prerequisites

- Node.js v18+
- NPM

### Installation

```bash
npm install
```

### Development Server

First, start Convex locally:

```bash
npx convex dev
```

Then in a separate terminal:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔐 Environment Variables

Create a `.env.local` file with the following:

```env
NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_GEMINI_API_KEY=
NEXT_PUBLIC_PAYPAL_CLIENT_Id=
```

---

## 🧪 Testing

```bash
npm run test
```

Add unit tests with Jest or your preferred framework.

---

## 🤝 Contributing

We welcome contributions of all types! Whether you're fixing a bug, adding a new feature, improving documentation, or helping with testing, you're very welcome here. 

### How to Contribute

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Added feature: your description"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Create a Pull Request.

Make sure your code adheres to the existing style and includes relevant documentation or comments. Contributions should be meaningful and tested.

If you need help, open an issue or join the community discussion tab.

---

## 📸 Screenshots

Coming soon...

---

## 📄 License

MIT License.

Feel free to use, fork, and modify this project for your own use!

---

## ✨ Acknowledgements

- [Convex.dev](https://convex.dev)
- [OpenAI](https://openai.com)
- [Clerk.dev](https://clerk.dev)
- [ShadCN UI](https://ui.shadcn.dev)
- [TailwindCSS](https://tailwindcss.com)
