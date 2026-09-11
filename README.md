# SACA - System ADB Cleaner Assistant

> An interactive web application to manage, list, and uninstall Android applications/packages via ADB directly in the browser using WebUSB.

Developed by **3ky4r0**.

---

## ✨ Features

- 🔌 **WebUSB Connection**: Connect directly to your Android device from any Chromium-based browser (Chrome, Edge, Brave, Opera) without needing manual ADB command-line setups.
- 📦 **Package Management**:
  - Distinguishes between **System Apps** and **User Apps**.
  - Search packages by package name or app name in real-time.
  - Multi-select packages with batch uninstall capabilities.
  - Safety warnings for system critical packages.
- 💾 **Export List**: Export package lists to JSON for backup or auditing.
- ⚡ **Lightweight & Fast**: Built with Next.js and optimized for static export.

---

## 🚀 Getting Started

### Prerequisites

1. A Chromium-based browser supporting WebUSB (Google Chrome, Microsoft Edge, Brave, etc.).
2. Enable **USB Debugging** on your Android device (Settings > Developer Options > USB Debugging).
3. Connect your Android phone to your computer using a USB cable.

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the app.

---

## 🌐 Deployment (Cloudflare Pages)

This project is configured for static export (`output: 'export'`), producing pure static files in the `out/` directory.

### Build
```bash
npm run build
```

### Deploy with Wrangler CLI
```bash
npx wrangler pages deploy out --project-name=saca
```

Or connect the repository `3ky4r0/saca` directly to **Cloudflare Pages** with build command `npm run build` and output directory `out`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - Copyright (c) 2026 **3ky4r0**.
