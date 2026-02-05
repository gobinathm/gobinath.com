# Gobinath.com v2

![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Deploy](https://github.com/gobinathm/gobinath.com/actions/workflows/deploy.yml/badge.svg)

A modern, high-performance personal portfolio website built with **Astro 5** and **Tailwind CSS 4**. Featuring a glassmorphism bento-grid design, zero-JavaScript default performance, and extensive accessibility optimizations.

## 🚀 Features

- **High Performance**: Built with Astro 5 static site generation. Zero client-side JS by default.
- **Modern Design**: Glassmorphism UI, bento-grid layout, and subtle animated mesh gradients.
- **Dark Mode First**: Optimized for dark themes with deeply integrated Tailwind v4 variables.
- **Accessibility**: WCAG 2.1 AA compliant colors and semantic HTML.
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and JSON-LD structured data included.
- **Type-Safe**: Fully typed with TypeScript for reliable content management.

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Deployment**: GitHub Pages (Standard Workflow)
- **Icons**: Simple Icons (via SVG paths) & Lucide

## 🏃‍♂️ Getting Started

Want to create your own version? Follow these steps:

### 1. Fork the repository

Click the **Fork** button at the top right of [this repository](https://github.com/gobinathm/gobinath.com) to create your own copy. You can rename it to your own domain (e.g., `yourname.com`) during or after forking.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run development server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

## 🎨 Customization

This template is designed to be easily customizable via data files. You don't need to touch the complex Astro components for basic changes.

1.  **Site Config**: Edit `src/data/site.ts`
    *   Change name, title, description, social links, and main images.
2.  **Experience**: Edit `src/data/experience.ts` to add your job history.
3.  **Education**: Edit `src/data/education.ts` for degrees and certifications.
4.  **Skills**: Edit `src/data/skills.ts` to manage your tech stack proficiency.
5.  **Images**: Replace `src/assets/gobi.png` (profile) and `public/img/Sign.png` (signature) with your own.

## 📦 Build & Deploy

To create a production build:

```bash
npm run build
```

This project comes with a ready-to-use **GitHub Actions Workflow** in `.github/workflows/deploy.yml` that automatically deploys to GitHub Pages on every push to `main`.
