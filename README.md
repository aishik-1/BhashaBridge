# 🌉 BhashaBridge - Indian Language Learning Platform

An interactive Indian language learning platform for **Hindi (हिन्दी)**, **Bengali (বাংলা)**, and **Marathi (मराठी)**. Built with React 19, TypeScript, Tailwind CSS, and Vite.

Featuring interactive vocabulary, flashcards, native audio speech synthesis, quizzes, sentence builder, grammar laboratory, mock exams, and an AI Language Tutor.

---

## 🚀 Deploying to Vercel

This repository is pre-configured for **instant 1-click deployment on Vercel**.

### Option A: Deploy via GitHub (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Configure Vercel deployment with vercel.json"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Click **"Import Project"** and select your GitHub repository.
4. Vercel automatically detects the project configuration from `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your live URL will be ready in seconds!

---

### Option B: Deploy via Vercel CLI

1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. In the project root directory, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts:
   - *Set up and deploy?* `Y`
   - *Which scope?* (Select your team or personal account)
   - *Link to existing project?* `N`
   - *What's your project's name?* `bhashabridge`
   - *In which directory is your code located?* `./`
4. For production deployment, run:
   ```bash
   vercel --prod
   ```

---

## ⚙️ Vercel Configuration (`vercel.json`)

The project includes a `vercel.json` file in the root directory:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### What this does:
- **`framework: "vite"`**: Informs Vercel's build pipeline to use Vite optimizations.
- **`buildCommand` & `outputDirectory`**: Compiles TypeScript + Tailwind CSS and serves the optimized `dist` bundle.
- **`rewrites`**: Enables client-side Single Page Application (SPA) routing, ensuring direct navigation to any view without `404 Not Found` errors.
- **`headers`**: Applies long-term immutable caching to static assets in `/assets/` for maximum performance and lightning-fast load times.
- **`.vercelignore`**: Prevents unnecessary development or temporary files from being uploaded.

---

## 🛠️ Local Development

To run the application locally:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts:
- `npm run dev` - Starts the Vite dev server on port 3000 (`--host 0.0.0.0`)
- `npm run build` - Builds production bundle into `dist`
- `npm run preview` - Previews the production build locally
- `npm run lint` - Validates TypeScript code (`tsc --noEmit`)

---

## 🌟 Key Features

1. **Multi-Language Curriculum**: Complete courses for Hindi, Bengali, and Marathi with Beginner, Intermediate, and Advanced milestones.
2. **Interactive Audio Pronunciation**: Built-in speech synthesis engine with rate controls (normal and slow) for native phonetic mastery.
3. **Alphabet & Grammar Labs**: Aksharmala/Varnamala character breakdown, vowel diacritics (matras), conjuncts, and grammatical rules.
4. **AI Language Tutor & Voice Assistant**: Interactive conversational practice with microphone recording, real-time feedback, and grammar corrections.
5. **Sentence Builder**: Drag-and-drop word ordering puzzles practicing the Subject-Object-Verb (SOV) structure.
6. **Vocabulary & Flashcards**: Categorized by Daily Life, Food, Family, Travel, and Numbers with 3D flip card animations.
7. **Mock Exams & Quizzes**: Timed multiple-choice tests with detailed explanations and performance scorecards.
8. **Literature & Worksheets**: Classic stories, poetry, and printable PDF worksheet activities.
