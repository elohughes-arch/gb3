# GB Contracting - Project Handover Documentation

## Overview
This is a modern, high-conversion landing page for GB Contracting, built with Next.js 13+, Tailwind CSS, and Framer Motion. The site is optimized for mobile readability and search engine visibility.

## Project Structure
- `/app` - Root of the application.
    - `/components` - Reusable UI sections (Hero, ServiceGrid, etc.).
    - `/data` - Contains `siteData.ts`, the "brain" of the site content.
    - `/booking` - The booking/quote request flow.
- `/public` - Static assets like images and the company logo.

## How to Edit Content
To update text, phone numbers, email, or services, you only need to edit **`/app/data/siteData.ts`**. The rest of the site will update automatically.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Modern, utility-first CSS)
- **Icons/Animations:** Heroicons & Framer Motion
- **Images:** Optimized using `next/image`

## Deployment
The site is set up to deploy seamlessly on **Vercel**. 
1. Push changes to the GitHub repository.
2. Vercel will automatically build and deploy the new version.

## Key Conversion Features
- **Sticky Mobile CTA:** A persistent "Call Now" button appears on mobile devices.
- **Optimized Hero:** Clear value proposition and immediate call-to-action.
- **Trust Indicators:** Counter stats and testimonials built into the flow.
- **Fast Performance:** Optimized image loading and minimal client-side weight.
