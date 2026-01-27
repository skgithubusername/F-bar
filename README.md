# F-bar - Restaurant & Bar Website

This is a Next.js project for F-bar, a premium restaurant and bar in Gurugram. The website is fully optimized for SEO and includes all necessary components for a modern restaurant website.

## Features

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- SEO Optimized
- Responsive Design
- PWA Support
- Schema Markup
- Open Graph Tags
- Twitter Cards
- Sitemap Generation
- Robots.txt
- Accessibility Features

## SEO Features Implemented

### 1. Metadata Optimization
- Comprehensive meta tags including title, description, and keywords
- Open Graph tags for social media sharing
- Twitter Cards for better Twitter integration
- Canonical URLs to prevent duplicate content issues

### 2. Structured Data
- JSON-LD schema markup for Restaurant
- Breadcrumb schema
- WebPage schema
- Proper semantic HTML structure

### 3. Performance Optimization
- Image optimization with Next.js Image component
- Font optimization with next/font
- Preloading of critical resources
- Responsive images

### 4. Accessibility
- Proper ARIA labels and roles
- Semantic HTML elements
- Keyboard navigation support
- Screen reader friendly

### 5. Technical SEO
- Sitemap.xml generation
- Robots.txt configuration
- PWA manifest for mobile experience
- Favicon and touch icons

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## SEO Configuration

### Environment Variables
Create a `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_BASE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-analytics-id
```

### Google Search Console
1. Add your site to Google Search Console
2. Verify ownership using the verification code in `layout.tsx`
3. Submit your sitemap: `https://your-domain.com/sitemap.xml`

### Social Media Integration
Update the social media URLs in `layout.tsx`:
- Twitter handle
- Facebook URL
- Instagram URL

## Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

### Other Platforms
- Netlify
- AWS Amplify
- Firebase Hosting

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!