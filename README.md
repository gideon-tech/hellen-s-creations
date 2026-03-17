# Hellen Creations 🎨

> Empowering Women Artisans Through Skills Training and Global Market Access

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](#license) [![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)](#) [![Bootstrap 4](https://img.shields.io/badge/Bootstrap-4.6-563d7c?logo=bootstrap&logoColor=white)](#)

A responsive, modern website for Hellen Creations — a Uganda-based social enterprise dedicated to empowering women artisans through skills training and connecting their handmade products to global markets.

**[View Live Demo](#)** • **[Report Bug](https://github.com/your-repo/issues)** • **[Request Feature](https://github.com/your-repo/issues)**

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Content Management](#content-management)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## About the Project

Hellen Creations is a Uganda-based social enterprise and NGO dedicated to empowering women through artisan skills training and connecting their handmade products to global markets. This website showcases the mission, products, craftspeople, and enables direct communication with customers and supporters.

The website highlights:
- **Skills Training Programs**: Crochet, beadwork, seed-bead jewelry, and carpet weaving
- **Artisan Marketplace**: Direct product sales with transparency about the makers
- **Partner Collaborations**: Partnerships with NGOs like MIFUMI, TATCO Uganda, and Anasi Farmers
- **Donation Support**: Direct support for training initiatives
- **Custom Orders**: Ability to request custom artisan-made products

### Key Features

- ✨ **Fully Responsive Design** - Mobile-first approach using Bootstrap 4
- 🎨 **Beautiful Product Showcase** - High-quality images with carousel functionality
- 👥 **Craftsperson Profiles** - Spotlight on individual artisans and their work
- 📞 **Multiple Contact Channels** - Email, WhatsApp, and contact form integration
- 🎯 **Clear Call-to-Actions** - Support, product purchases, and custom orders
- ♿ **Accessibility Ready** - Semantic HTML and ARIA labels
- 🔍 **SEO Optimized** - Meta tags and structured content
- 💰 **Donation System** - Multiple donation amounts with easy integration
- 📱 **Social Media Integration** - Links to Facebook, Instagram, and TikTok

### Tech Stack

- **Frontend Framework**: Bootstrap 4.6
- **Layout**: HTML5, CSS3 (BEM methodology)
- **Interactivity**: jQuery 3.7, Owl Carousel 2
- **Typography**: Playfair Display & DM Sans (Google Fonts)
- **Icons**: Font Awesome 5, Bootstrap Icons
- **Styling Approach**: Custom CSS overrides with CSS variables
- **Version Control**: Git

---

## Project Structure

```
hellen-s-creations/
├── README.md                      # This file
├── .gitignore                     # Git ignore rules
├── index.html                     # Home page
├── About.html                     # About & mission page
├── products.html                  # Products & shopping
├── contact.html                   # Contact & support
├── css/
│   └── hellen-overrides.css       # Custom styles & brand variables
├── js/
│   └── main.js                    # JavaScript interactions
└── img/                           # Image assets
    ├── tp-logo-hc.png            # Logo
    ├── photo_*.jpg                # Page & artisan photos
    └── ...
```

### Color Scheme (CSS Variables)

```css
--hc-rust:      #C8553D   /* Primary brand color */
--hc-teal:      #3CC78F   /* Accent color */
--hc-dark:      #2B2118   /* Dark text */
--hc-light:     #FFF8F2   /* Light background */
--hc-gold:      #D4A259   /* Gold accents */
--hc-text:      #4A3728   /* Body text */
--hc-light-text:#7A6555   /* Light text */
```

---

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code recommended)
- Git (for cloning the repository)
- A local web server (for development - see [Installation](#installation))

**Optional:**
- Node.js and npm (for running a development server)
- A GitHub account (for contributing)

### Installation

#### Option 1: Clone and Open Locally

```bash
# Clone the repository
git clone https://github.com/your-org/hellen-s-creations.git
cd hellen-s-creations

# Open in your default browser
open index.html

# Or, open with a specific browser
open -a "Google Chrome" index.html
```

#### Option 2: Using a Local Web Server (Recommended)

Python 3:
```bash
# Navigate to project directory
cd hellen-s-creations

# Start a simple HTTP server
python3 -m http.server 8000

# Visit http://localhost:8000 in your browser
```

Node.js (using `http-server`):
```bash
# Install globally (one-time)
npm install -g http-server

# Run in project directory
http-server

# Visit http://localhost:8080 in your browser
```

#### Option 3: VS Code Live Server Extension

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` and select "Open with Live Server"
3. Browser opens automatically at `http://127.0.0.1:5500`

### Verification

After installation, verify everything works:

- ✅ Home page loads at `/index.html`
- ✅ Navigation links work between all pages
- ✅ Images display correctly
- ✅ Responsive design works on mobile (use browser DevTools)
- ✅ Contact form and external links function

---

## Usage

### Viewing the Website

**Home Page** (`index.html`)
- Mission statement and value proposition
- Donation section with multiple amount options
- Latest updates about the organization
- CTA for contacting and supporting

**About Page** (`About.html`)
- Mission highlight and organization story
- What we do (skills training, market access, NGO partnerships)
- Meet the craftswomen
- Organization partners showcase
- Support mission section

**Products Page** (`products.html`)
- Product showcase with filtering/categorization
- Individual product details with pricing
- How to order process (3-step guide)
- Product gallery with images
- Custom order requests

**Contact Page** (`contact.html`)
- Contact form with message submission
- Multiple contact methods (Email, WhatsApp, socials)
- Location and business hours
- FAQ or support resources

### Adding Content

#### Adding a New Product

1. Open `products.html` in your text editor
2. Find the product grid section (class: `product-grid` or similar)
3. Add a new product card:

```html
<div class="col-lg-4 col-md-6">
  <div class="product-card">
    <img src="img/product-name.jpg" alt="Product Name">
    <h4>Product Name</h4>
    <p>Product description and details</p>
    <span class="price">$XX.XX</span>
    <a href="contact.html" class="btn-purchase">Purchase Now</a>
  </div>
</div>
```

4. Save and refresh the browser

#### Adding a New Artisan

1. Open `About.html` in your text editor
2. Find the "Our Craftswomen" section
3. Add a new artisan profile:

```html
<div class="col-lg-4 col-md-6">
  <div class="single_volunteer">
    <img src="img/artisan-name.jpg" alt="Artisan Name">
    <div class="volunteer-info">
      <h4>Artisan Name</h4>
      <span>Specialization (e.g., Crochet Specialist)</span>
      <div class="volunteer-social">
        <a href="https://facebook.com/profile" target="_blank"><i class="bi bi-facebook"></i></a>
        <a href="https://instagram.com/profile" target="_blank"><i class="bi bi-instagram"></i></a>
      </div>
    </div>
  </div>
</div>
```

5. Save and refresh

#### Updating Contact Information

Contact details are located in the footer on every page:

```html
<!-- Update in footer "Contact Us" section -->
<a href="mailto:email@example.com">Email</a>
<a href="https://wa.me/256XXXXXXXXX">WhatsApp</a>
```

Or in the top bar on every page.

---

## Content Management

### Updating Social Media Links

All social media links are in the top bar and footer:

| Location | File | Variable |
|----------|------|----------|
| Top bar (all pages) | `*.html` (line ~34-40) | `href` in `<a>` tags |
| Footer (all pages) | `*.html` (footer section) | `href` in social icons |

### Email & WhatsApp Contact

```html
<!-- Email -->
<a href="mailto:nyamwengesaudah@gmail.com">Email</a>

<!-- WhatsApp -->
<a href="https://wa.me/256700474721">WhatsApp</a>
```

### Customizing Brand Colors

Edit `css/hellen-overrides.css`:

```css
:root {
  --hc-rust:       #C8553D;    /* Change primary color */
  --hc-teal:       #3CC78F;    /* Change accent color */
  --hc-dark:       #2B2118;    /* Change dark text */
  --hc-light:      #FFF8F2;    /* Change light background */
  --hc-gold:       #D4A259;    /* Change gold accent */
  --hc-text:       #4A3728;    /* Change body text */
  --hc-light-text: #7A6555;    /* Change light text */
}
```

---

## Development

### Setting Up for Contributors

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/hellen-s-creations.git
   cd hellen-s-creations
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes** to HTML, CSS, or JS files

4. **Test locally** using a web server (see [Installation](#installation))

### Development Workflow

#### Branching Convention

```
main          # Production-ready code
└─ develop    # Integration branch
   ├─ feature/add-product-gallery
   ├─ feature/improve-mobile-nav
   └─ bugfix/fix-footer-alignment
```

#### Commit Convention

```bash
git commit -m "feat: add new product category filter"
git commit -m "fix: correct mobile navbar alignment"
git commit -m "docs: update README with new features"
git commit -m "style: improve accessibility with ARIA labels"
```

**Commit types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Testing

#### Manual Testing Checklist

- [ ] All pages load without errors (check browser console)
- [ ] Navigation links work on all pages
- [ ] Responsive design works (test at 320px, 768px, 1024px widths)
- [ ] Contact form can be submitted
- [ ] External links (social media, email, WhatsApp) work
- [ ] Images display correctly (check DevTools Network tab)
- [ ] No broken links (use Tools > Check for Broken Links)

#### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Use [BrowserStack](https://www.browserstack.com/) for cross-browser testing.

### Code Style

#### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Use BEM naming for classes: `.block__element--modifier`
- Include alt text on all images
- Use ARIA labels for accessibility

#### CSS
- Use CSS variables (stored in `:root` in `hellen-overrides.css`)
- Follow BEM methodology for class names
- Group related styles together
- Use comments for complex styling

#### JavaScript
- Use meaningful variable names
- Keep functions small and focused
- Add comments for complex logic
- Test jQuery selectors in console before committing

### Building/Bundling

This project uses static HTML files. No build step is required. However, for optimization:

```bash
# Minify CSS (optional, using external tool)
# Example with cleancss CLI
cleancss -o css/hellen-overrides.min.css css/hellen-overrides.css

# Optimize images (recommended)
# Use imagemin or similar tool
```

---

## Deployment

### Prerequisites for Deployment

- A web hosting provider (Netlify, Vercel, GitHub Pages, AWS S3, etc.)
- Git repository (already on GitHub)
- Domain name (optional but recommended)

### Deployment Platforms

#### Option 1: Netlify (Recommended - Easiest)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Connect GitHub**:
   - Click "New site from Git"
   - Select your GitHub repository
   - Authorize Netlify
3. **Configure build** (no build command needed):
   - Build command: leave empty
   - Publish directory: `.` (root)
4. **Deploy**: Click "Deploy site"
5. **Custom domain** (optional):
   - Go to Site Settings > Domain Management
   - Add custom domain and follow DNS instructions

#### Option 2: GitHub Pages

```bash
# Push to GitHub
git push origin main

# Enable GitHub Pages in Settings
# Repository Settings > Pages > Source: main branch > Save

# Site will be available at https://username.github.io/repo-name
```

#### Option 3: Vercel

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import project** from GitHub
3. **Deploy** - automatic for every push to main
4. **Custom domain** - add in Project Settings > Domains

#### Option 4: AWS S3 + CloudFront

```bash
# Create S3 bucket and sync files
aws s3 sync . s3://your-bucket-name --delete

# Optional: Set up CloudFront CDN for caching and HTTPS
```

### Production Checklist

Before deploying to production:

- ✅ All links work (internal and external)
- ✅ Images have correct paths and display
- ✅ Contact form integrates with backend service
- ✅ All pages validated (HTML Validator, CSS Validator)
- ✅ Mobile responsiveness tested
- ✅ Performance optimized (images compressed, CSS/JS minified)
- ✅ SEO meta tags are present and accurate
- ✅ SSL/HTTPS is enabled
- ✅ 404 page configured
- ✅ Analytics tracking code added (if desired)
- ✅ robots.txt and sitemap.xml in place

### Monitoring

After deployment:

```bash
# Monitor uptime
# Use services like Uptime Robot, Pingdom, or New Relic

# Monitor performance
# Use Google Lighthouse, GTmetrix, or PageSpeed Insights

# Monitor errors
# Set up error tracking with Sentry or similar
```

---

## Contributing

We welcome contributions! Whether it's reporting a bug, suggesting a feature, or submitting code, please help make Hellen Creations better.

### How to Contribute

1. **Fork the repository**:
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/hellen-s-creations.git
   cd hellen-s-creations
   ```

3. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make changes** and test locally

5. **Commit with clear messages**:
   ```bash
   git commit -m "feat: add product filter functionality"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request** on GitHub
   - Describe your changes clearly
   - Link any related issues
   - Wait for review

### Contribution Guidelines

- Keep changes focused and atomic (one feature per PR)
- Maintain consistency with existing code style
- Update documentation if adding features
- Test on multiple browsers and screen sizes
- Be respectful and inclusive in communications

### Reporting Issues

Found a bug or have a suggestion? [Open an issue](https://github.com/your-org/hellen-s-creations/issues) with:

- Clear title and description
- Steps to reproduce (for bugs)
- Browser and device information
- Screenshots or links to examples

### Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please treat all contributors with respect and kindness.

---

## Support

### FAQ

**Q: How do I change the website content?**
A: Edit the HTML files directly in a text editor. For styling changes, modify `css/hellen-overrides.css`. Changes are live when you refresh the browser.

**Q: How do I add a new page?**
A: Create a new `.html` file, copy the structure from an existing page, and add a link in the navigation bar on all pages.

**Q: How do I add images to the site?**
A: Save images in the `img/` folder and reference them in HTML: `<img src="img/filename.jpg" alt="Description">`

**Q: Can I use this website template for another project?**
A: Yes! The template is open-source. See the [License](#license) section for details.

**Q: How do I set up a contact form?**
A: The contact form currently needs backend integration. Popular services include Formspree, Basin, or custom backend with Node.js/Flask.

### Getting Help

- 📧 **Email**: nyamwengesaudah@gmail.com
- 📱 **WhatsApp**: +256 700 474 721
- 🌐 **Location**: Uganda, East Africa
- 💬 **GitHub Issues**: [Report a bug or ask a question](https://github.com/your-org/hellen-s-creations/issues)
- 🤝 **Community**: Connect with us on [Facebook](https://www.facebook.com/nicki256), [Instagram](https://www.instagram.com/_hellenscreations_), [TikTok](https://tiktok.com/@hellens_creations)

### Reporting Security Issues

If you discover a security vulnerability, please email [security contact] instead of using the issue tracker. We take security seriously and will respond promptly.

---

## Roadmap

### Current Version (v1.0)

- ✅ Responsive website with Bootstrap 4
- ✅ Product showcase and gallery
- ✅ Artisan profiles and stories
- ✅ Contact form and multiple contact channels
- ✅ Donation integration
- ✅ Partner organization showcase

### Planned Features (Short-term)

- 🔄 E-commerce integration for direct product sales
- 🔄 Customer reviews and testimonials section
- 🔄 Blog/news section for impact stories
- 🔄 Multi-language support (English, Luganda)
- 🔄 Newsletter subscription form

### Planned Features (Long-term)

- 🔮 Artisan dashboard for managing products
- 🔮 Customer account system
- 🔮 Advanced search and filtering
- 🔮 Impact metrics and reporting
- 🔮 Mobile app (iOS/Android)

### Recent Changes

**v1.0 (March 2026)**
- Removed custom orders section from public pages
- Reorganized footer consistency across all pages
- Improved mobile navigation and responsiveness
- Enhanced accessibility with ARIA labels

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use this project for commercial or personal purposes
- ✅ Modify and distribute the code
- ✅ Include this project in your own projects

You must:
- ⚠️ Include a copy of the license
- ⚠️ Provide attribution to the original creators

### Third-Party Licenses

This project uses:
- **Bootstrap 4** - MIT License
- **Font Awesome 5** - CC BY 4.0 License (free version)
- **jQuery 3** - MIT License
- **Owl Carousel 2** - MIT License
- **Google Fonts** - Open Font License

---

## Acknowledgments

### Contributors

- **Maku Gideon** - Original developer and design
- **Clovis Atiki** - Original developer and design
- **Hellen** - Founder and vision
- All contributors and testers

### Inspiration & Support

- MIFUMI Uganda - Partner organization
- TATCO Uganda - Partner organization
- Anasi Farmers (Casi Nazi) - Partner organization
- The global community supporting ethical commerce and women empowerment

### Related Projects

- [MIFUMI Uganda](https://mifumi.org/) - Women's leadership organization
- [TATCO Uganda](https://tatcoug.org/) - Training and care organization
- [Ethical Fashion Initiative](https://www.ethicalfashioninitiative.org/) - Global artisan platform

### Support This Mission

If you believe in empowering women artisans, consider:
- 💰 **Donate** at [Support Our Mission](#support)
- 🛍️ **Shop** on the products page
- 📣 **Share** this website with your network
- 🤝 **Partner** with us for collaborations
- 👨‍💻 **Contribute** code or design skills

---

## 📞 Contact

**Hellen Creations**  
Uganda, East Africa

- 📧 Email: [nyamwengesaudah@gmail.com](mailto:nyamwengesaudah@gmail.com)
- 📱 WhatsApp: [+256 700 474 721](https://wa.me/256700474721)
- 🌐 Website: [hellenscreations.com](#)
- 📘 Facebook: [@nicki256](https://www.facebook.com/nicki256)
- 📷 Instagram: [@_hellenscreations_](https://www.instagram.com/_hellenscreations_)
- 🎵 TikTok: [@hellens_creations](https://tiktok.com/@hellens_creations)

---

**Built with ❤️ by Hellen Creations | Empowering Through Skills, Thriving Through Crafts**

*Last updated: March 2026*
