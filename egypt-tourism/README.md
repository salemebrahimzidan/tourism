# Egypt Tourism | سياحة مصر

Arabic-first RTL tourism website for Egypt built with React, TypeScript, and Vite.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form + Zod
- Axios
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run preview` — preview production build

## Project Structure

```
src/
├── components/   # Reusable UI components
├── data/         # Static services, tours, contact data
├── lib/          # API, validations, utilities
├── pages/        # Page components
├── routes/       # React Router configuration
├── App.tsx
└── main.tsx
```

## Pages

- Home — hero, services preview, tours preview, why choose us, CTA
- Services — all tourism services
- Tours — tourism programs
- Booking — booking form with validation
- About — company information
- Contact — contact details and message form

## Notes

- No backend is connected yet. Booking and contact forms show a success toast on submit.
- Axios is configured in `src/lib/api.ts` for future backend integration.
