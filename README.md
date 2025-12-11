**Luxury Perspective 🏠💎**

Luxury Perspective is a premium real estate web application built with Next.js. It features a dark, elegant aesthetic designed to showcase high-end properties with video backgrounds, smooth animations, and a responsive design.

✨ Key Features

Immersive UI: Full-screen video backgrounds and a modern dark theme using SCSS Modules.

Dynamic Property Pages: Individual property pages generated via SSG (Static Site Generation) using getStaticPaths and getStaticProps for optimal performance and SEO.

Property Showcase: Grid view of listings with hover effects and price formatting.

Interactive Elements:

Animated statistics counters (Revenue, Properties Sold, etc.).

Image Carousels powered by Embla Carousel.

Embedded Google Maps for property locations.

Contact System: Fully functional contact form configured for Netlify Forms.

Responsive Navigation: Custom mobile menu and routing.

🛠️ Tech Stack

Framework: Next.js (Pages Router)

Styling: Sass / SCSS

Animations:

react-countup (Number counters)

react-is-visible (Scroll detection)

Carousel: embla-carousel-react

Deployment: Optimized for Netlify (due to native form handling).

🚀 Getting Started

Follow these steps to run the project locally.

Prerequisites

Node.js (v14 or higher)

npm or yarn

Installation

Clone the repository:

```bash
git clone https://github.com/Brkic365/luxury-perspective.git
cd luxury-perspective
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

🗂️ Data Management

Properties are managed via a JSON file. To add, edit, or remove properties, modify the file located at:

public/data/listings.json

Data Structure Example:

```json
[
  {
    "id": 1,
    "street": "123 Palm Avenue",
    "city": "Los Angeles, CA",
    "price": 4500000,
    "bedrooms": 5,
    "bathrooms": 4,
    "size": 4200,
    "imgUrl": "/image_filename.jpg",
    "googleMaps": "https://www.google.com/maps/embed?..."
  }
]
```

Note: Ensure images are placed in the public/images/listings/ directory.

📬 Contact Form

The contact form in Components/Contact.jsx is pre-configured for Netlify Forms using the data-netlify="true" attribute.

If you deploy this project to Netlify, the form submissions will automatically appear in your Netlify dashboard without any backend code required.

📂 Project Structure
```bash
├── Components/       # Reusable UI components (Navbar, Footer, Carousel, etc.)
├── pages/            # Application routes
│   ├── properties/   # Property listing and dynamic details pages
│   ├── about-us.js   # About page
│   ├── index.js      # Homepage
│   ├── _app.js       # Global app wrapper
│   └── _document.jsx # HTML document structure
├── public/           # Static assets (images, videos, JSON data)
├── styles/           # SCSS module files and globals
└── next.config.js    # Next.js configuration
```
📄 License

This project is open source and available under the MIT License.
