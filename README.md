# ❤️ Chiara's date invitation
A playful and interactive date invitation experience built with Next.js, featuring a multi-step flow, dynamic UI interactions, and email delivery using EmailJS.

## 📌 Features
- Multi-step invitation flow (like a mini app)
- Interactive UI (including a "runaway" button)
- Date & time selection
- Multiple vibe selection with emojis
- Custom "other place" input
- Email delivery with selected options
- Fully responsive design

## 🛠️ Technologies
- Next.js – React framework
- TypeScript – Type safety
- Tailwind CSS – Styling
- EmailJS – Email sending (no backend needed)
- React Hooks – State management

## 🗂️ Project structure
```md
src
    - app/
        - components/
            - states/   # Step components (multi-step flow)
        - types/
        - page.tsx      # Main app controller
        - layout.tsx    # Global layout
```

## ⚙️ Setup
1. Clone repository
```md
git clone https://github.com/fellipe27/date-invitation.git
cd date-invitation
```

2. Install dependencies
```md
npm install
```

3. Environment variables

Create a .env.local file:
```md
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## ▶️ Running the app
```md
npm run dev
```

## 🔐 Security
- Uses public EmailJS key only (safe for frontend)
- Sensitive data not stored in repository

## 📄 License
MIT

## 👨‍💻 Author
Developed by **Paulo Fellipe**
