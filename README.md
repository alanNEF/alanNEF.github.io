# Alan Achilles - Personal Website

A modern personal website built with React, Next.js, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with React 18, Next.js 14, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Intersection Observer animations and custom CSS animations
- **Contact Form**: Integrated contact form with Web3Forms
- **Performance Optimized**: Next.js Image optimization and code splitting

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alanNEF/Personal-Website.git
cd Personal-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar component
│   ├── Hero.tsx            # Hero/intro section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   └── Contact.tsx         # Contact form
└── ...
public/
└── assets/                 # Images and SVG icons
```

## Customization

### Content
- Update personal information in the respective component files
- Modify project links and descriptions in `Projects.tsx`
- Update social media links in `Hero.tsx`

### Styling
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are defined in the CSS file

### Contact Form
The contact form uses Web3Forms. Update the access key in `Contact.tsx` if needed.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

The built files will be in the `.next` directory.

## Original Conversion

This website was converted from a static HTML/CSS/JS site to a modern React/Next.js application while maintaining all original functionality and design.

## License

This project is licensed under the MIT License.
