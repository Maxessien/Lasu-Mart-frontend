# 🛍️ LASU Mart — Frontend (Next.js)

> *Campus marketplace. Built solo. Polished like a product.*

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-2E5A8A?style=for-the-badge&logo=tanstack&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-hotpink?style=for-the-badge&logo=sass&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Firebase (client)](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

---

## ✨ What is LASU Mart (frontend)?
**LASU Mart** is the production-focused **frontend client** for a campus marketplace built with **Next.js (App Router)**.  
This repo contains the user-facing application: product discovery, vendor listings, cart & checkout flows, user profiles, and vendor management — all architected as a single, modular frontend app.

> **Important:** This repository is frontend-only. Backend services (Firebase project settings, Firestore rules, serverless functions, payment servers) are external and integrated by the client.

---

## 🚀 Key Features (Client-side)
- 🔐 Phone & email authentication via **Firebase client SDK** (config included)  
- 🛒 Persistent cart and global UI/auth state with **Redux Toolkit**  
- ⚡ Client data fetching, caching, and background syncing with **React Query**  
- 💳 Checkout UI and payment placeholders (plug-in ready for Stripe, Paystack, etc.)  
- 🧑‍💼 Vendor dashboard: product listing, edit, and vendor flows  
- 🧩 Reusable component library (buttons, forms, loaders, headers, cards)  
- 🎨 SCSS design system with variables & mixins for theming consistency  
- 📱 Responsive-first layout patterns and progressive UX

---

## 🧩 Frontend Tech Stack
> _Technologies used strictly in this frontend repository._

- **Next.js (App Router)** — routing, layouts, hybrid server/client components  
- **React 18** — UI library  
- **Redux Toolkit** — client global state (cart, auth, filters)  
- **TanStack React Query** — async fetching & cache management  
- **Axios** — HTTP client for REST endpoints / serverless functions  
- **SCSS (Sass)** — modular styling with variables and mixins  
- **Vercel** — recommended deployment platform for the frontend  
- **ESLint + Prettier** — linting & formatting  
- **Firebase Client SDK** — frontend auth & Firestore reads/writes (project config managed separately)

---

## 📁 Project layout (high level)

app/                      # Next.js App Router routes & layouts src/ ├── components/          # UI components (organized by feature) ├── reactQueryApiLogics/ # client-side data fetch & handler logic ├── store_slices/        # Redux Toolkit slices (cart, auth, filters) ├── utils/               # client helper utilities ├── assets/              # SCSS variables, mixins, reusable styles firebase/                 # frontend Firebase client config (replace with your keys) public/                   # static assets (images, fonts, testing JSON)

Each folder separates **presentation**, **state**, and **fetching logic** so the frontend stays maintainable and easy for collaborators to onboard.

---

## ⚙️ Quick local setup (frontend-only)
```bash
# 1. Clone the repo
git clone https://github.com/MaxEssien/lasu-mart-frontend.git
cd lasu-mart-frontend

# 2. Install dependencies
npm install

# 3. Environment variables
# Create .env.local in the project root with required NEXT_PUBLIC_* keys:
# NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
# NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
# NEXT_PUBLIC_API_BASE_URL=https://your-backend.example.com

# 4. Start development server
npm run dev

# 5. Build for production
npm run build && npm run start


---

🔌 Integrations & Notes

firebase/fb_config.js initializes the Firebase client SDK — replace with your NEXT_PUBLIC_ keys.

Payment interactions are UI-level placeholders; integrate your payment provider (Stripe, Paystack, etc.) via checkout handlers or serverless functions.

Do not commit secrets. Use .env.local for local dev and Vercel environment variables for production.

Static data like public/trending.json is included for local dev and demoing UI flows.



---

🎨 Design & Code Philosophy

Component-first: small, testable, reusable UI pieces grouped by feature.

Separation of concerns: UI, state, and fetching layers are clearly separated.

Practical polish: prioritize UX reliability and clarity over gimmicks.

Solo-friendly scale: structured so future teammates can jump in without chaos.



---

🧭 Frontend Roadmap

[ ] PWA & offline caching (service worker)

[ ] Full client image upload with preview + cloud storage integration

[ ] Edge caching & image optimization for performance

[ ] Improved vendor verification UX (client-side flows)

[ ] Accessibility audit and fixes



---

🤝 Contributing

This is primarily a solo project, but contributions are welcome:

1. Fork the repository


2. Create a focused feature branch (git checkout -b feature/your-feature)


3. Commit small, logical changes (git commit -m "Add feature")


4. Push and open a Pull Request describing the change



Keep PRs focused — one logical change per PR speeds review and merge.


---

👨🏽‍💻 Developer

Max Essien — solo full-stack builder and creator of LASU Mart.
This repo is the frontend client: clean, modular, and built to scale.





---

⭐ Support

If LASU Mart inspired you or helped, star the repo — it matters.
Built by a student. Crafted like a startup. — Max Essien
