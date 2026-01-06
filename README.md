# Blokko Accepted Payment Methods

A static webpage showcasing all payment methods accepted by Blokko, including cryptocurrency exchanges, Bitcoin Lightning Network, stablecoins, and real-time payment systems across Latin America.

**Live Demo:** [https://michael-abril.github.io/blokko-accepted/](https://michael-abril.github.io/blokko-accepted/)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deploying to Your Custom Domain

### Step 1: Update Configuration

Edit `astro.config.mjs` to use your domain:

```javascript
export default defineConfig({
  site: 'https://accepted.blokko.io',  // Your domain
  base: '/',                            // Root path (or '/accepted' if subdirectory)
  // ... rest of config
});
```

### Step 2: Update SEO Meta Tags

In `public/index.html`, update these URLs to match your domain:

```html
<!-- Line 15 -->
<link rel="canonical" href="https://accepted.blokko.io/">

<!-- Lines 17-21: Open Graph -->
<meta property="og:url" content="https://accepted.blokko.io/">

<!-- Lines 24-25: Twitter -->
<meta property="twitter:url" content="https://accepted.blokko.io/">
```

### Step 3: Update Sitemap Reference

In `public/robots.txt`, update the sitemap URL:

```
Sitemap: https://accepted.blokko.io/sitemap.xml
```

### Step 4: Build & Deploy

```bash
npm run build
```

This generates a `dist/` folder containing:
- `index.html` - The complete static page
- `robots.txt` - Search engine directives
- `sitemap.xml` - Auto-generated sitemap

**Deploy the entire `dist/` folder** to your hosting provider (Vercel, Netlify, AWS S3, etc.).

---

## Deployment Options

### Option A: Vercel (Recommended)

1. Connect your GitHub repo to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add custom domain in Vercel dashboard

### Option B: Netlify

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add custom domain in Netlify dashboard

### Option C: Traditional Hosting

1. Run `npm run build` locally
2. Upload contents of `dist/` folder to your web server
3. Configure your domain's DNS to point to the server

### Option D: GitHub Pages (Current Setup)

The repo is already configured for GitHub Pages deployment via `.github/workflows/deploy.yml`. Push to `main` branch to auto-deploy.

---

## Customization Guide

### Updating Payment Methods

All payment data is stored in JSON files under `src/data/`:

| File | Description |
|------|-------------|
| `exchanges/exchanges.json` | CEX metadata (Binance, Coinbase, Crypto.com) |
| `exchanges/binance-coins.json` | Supported cryptocurrencies on Binance Pay |
| `exchanges/coinbase-coins.json` | Supported cryptocurrencies on Coinbase |
| `exchanges/crypto-com-coins.json` | Supported cryptocurrencies on Crypto.com |
| `lightning-wallets.json` | Bitcoin Lightning Network wallets |
| `stablecoins.json` | Stablecoins with blockchain/wallet support |
| `rtp-networks.json` | Real-time payment networks (PIX, CoDi, PSE, etc.) |

**Example: Adding a new RTP network**

Edit `src/data/rtp-networks.json`:

```json
{
  "name": "New Network",
  "region": "Country",
  "logo": "https://example.com/logo.png",
  "description": "Description of the payment network",
  "wallets": [
    { "name": "Bank Name", "logo": "https://example.com/bank-logo.png" }
  ]
}
```

### Updating Branding Colors

Edit `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      'blokko-primary': '#4aa6db',  // Main blue
      'blokko-green': '#76c23a',     // Accent green
      'blokko-dark': '#0A2540',      // Dark navy
      'blokko-light': '#E2E8F0',     // Light gray
      'blokko-card': '#f4f8fb'       // Card background
    }
  }
}
```

### Updating Logo

In `public/index.html`, find and replace the logo URL (around line 818):

```html
<img src="YOUR_NEW_LOGO_URL" alt="Blokko.io Logo" class="h-24 md:h-32">
```

---

## Project Structure

```
blokko-accepted/
├── public/
│   ├── index.html          # Main static page (pre-built)
│   ├── robots.txt          # Search engine directives
│   ├── sitemap.xml         # Sitemap for SEO
│   ├── favicon.ico         # Browser tab icon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/
│   │   ├── Header.astro    # Header component
│   │   └── Footer.astro    # Footer component
│   ├── data/
│   │   ├── exchanges/      # CEX data files
│   │   ├── lightning-wallets.json
│   │   ├── rtp-networks.json
│   │   └── stablecoins.json
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML layout
│   └── styles/
│       └── global.css      # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages CI/CD
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
└── package.json            # Dependencies & scripts
```

---

## Tech Stack

- **Framework:** [Astro](https://astro.build/) 4.16 - Static site generator
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4 - Utility-first CSS
- **SEO:** Built-in sitemap generation, JSON-LD structured data
- **Output:** Pure static HTML/CSS/JS (no server required)

---

## SEO Features Included

- Meta tags (description, keywords, author)
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (Organization, WebPage, FAQPage schemas)
- Automatic sitemap generation
- Robots.txt with crawl directives
- Canonical URLs
- Mobile-optimized viewport

---

## Payment Methods Supported

### Cryptocurrency Exchanges
- Binance Pay (87 cryptocurrencies)
- Coinbase (31 cryptocurrencies)
- Crypto.com Pay (41 cryptocurrencies)

### Bitcoin Lightning Network
- Phoenix, Muun, Zeus, BlueWallet, Wallet of Satoshi, and more

### Stablecoins
- USDT, USDC, PYUSD on Ethereum, Solana, Polygon, and other blockchains

### Real-Time Payments (Latin America)
- PIX (Brazil)
- CoDi / SPEI (Mexico)
- PSE (Colombia)
- KHIPU (Chile)
- Yape (Peru)
- QRI (Argentina)
- SIP-QR (Bolivia)

---

## Support

For questions about implementation or customization, contact the developer who built this page.

---

## License

This project was built for Blokko. All rights reserved.
