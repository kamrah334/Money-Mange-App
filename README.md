# Smart Budget Manager - Free Edition

A completely free, full-featured budget manager that works offline with Google Drive backup support.

## Features

- 💰 **Offline-First PWA** - Works completely offline using IndexedDB
- 📊 **Smart Categorization** - Automatic transaction categorization using keyword matching
- 📈 **Analytics** - Visual charts showing spending by category and monthly trends
- ☁️ **Google Drive Backup** - Secure backup and restore of your data
- 📁 **CSV Export** - Export your transactions for external use
- 🌓 **Dark Mode** - Light and dark theme support
- 📱 **Responsive** - Works beautifully on desktop and mobile

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Database**: IndexedDB (via Dexie.js)
- **Charts**: Recharts
- **UI Components**: Shadcn/ui + Radix UI
- **Routing**: Wouter
- **Deployment**: Vercel (static site)

## Local Development

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd smart-budget-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## Deploying to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click **"Add New"** → **"Project"**
   - Import your GitHub repository
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist` (should auto-detect)
   - **Install Command**: `npm install`
   - Click **"Deploy"**

3. **Set up Google OAuth (for Drive backup):**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing
   - Enable Google Drive API
   - Create OAuth 2.0 credentials
   - Add your Vercel domain to authorized redirect URIs
   - Add environment variables in Vercel:
     - `VITE_GOOGLE_CLIENT_ID` = Your Google OAuth Client ID

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
   - Set up and deploy
   - Link to existing project or create new
   - Vercel will auto-detect Vite configuration

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

## How It Works

### Smart Categorization

The app uses keyword-based categorization that runs entirely in your browser:

- **Income**: salary, bonus, income, wage, payment
- **Food**: food, meal, restaurant, groceries, lunch
- **Utilities**: rent, bills, electricity, water, gas
- **Shopping**: shopping, clothes, store, amazon
- **Transport**: uber, taxi, gas, fuel, car, bus
- **Entertainment**: movie, cinema, game, netflix
- **Healthcare**: health, hospital, doctor, medicine
- **Others**: Default category

### Offline Storage

All your transactions are stored locally in IndexedDB using Dexie.js. This means:
- ✅ Works without internet connection
- ✅ Data persists between sessions
- ✅ Fast performance
- ✅ Private - data stays on your device

### Google Drive Backup

You can backup your data to Google Drive:
1. Click "Backup to Google Drive" in Settings
2. Authorize the app (one-time)
3. Your data is saved as JSON to your Drive
4. Restore anytime from any device

### CSV Export

Export your transactions as CSV for use in Excel, Google Sheets, or other apps:
1. Go to Settings
2. Click "Export to CSV"
3. Download starts automatically

## Privacy & Security

- 🔒 **No Server Database** - All data stored locally on your device
- 🔒 **OAuth 2.0** - Secure Google Drive integration
- 🔒 **No Tracking** - Zero analytics or tracking
- 🔒 **Open Source** - Inspect the code yourself
- 🔒 **Free Forever** - No paid APIs or hidden costs

## Project Structure

```
smart-budget-manager/
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities (db, categorizer, theme)
│   │   └── App.tsx         # Main app component
│   └── index.html
├── shared/
│   └── schema.ts           # Shared TypeScript types
├── server/                 # Minimal server (for local dev only)
├── vercel.json            # Vercel configuration
└── package.json

```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for any purpose.

## Support

If you find this project helpful, please give it a ⭐ on GitHub!

## Roadmap

- [ ] Recurring transaction templates
- [ ] Budget goals and spending limits
- [ ] Multi-currency support
- [ ] Import from other budget apps
- [ ] Advanced filtering and search
- [ ] Automatic daily backups
- [ ] Shared budgets (family mode)

---

Built with ❤️ using React, Vite, and Tailwind CSS
