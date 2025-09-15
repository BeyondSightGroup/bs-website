# Beyond Sight Group - Coming Soon

![Beyond Sight Group Logo](https://img.shields.io/badge/Beyond%20Sight%20Group-Coming%20Soon-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)

A sophisticated coming soon website for Beyond Sight Group, featuring a modern dark theme and interactive elements.

## 🌟 Features

- **Modern Dark Theme**: Elegant design with sophisticated gradients and glassmorphism effects
- **Responsive Design**: Optimized for all screen sizes and devices
- **Interactive Elements**: 
  - Email subscription form with client-side validation
  - Animated logo and text effects
  - Subtle cursor-following background animation
  - Social media integration placeholders
- **Performance Optimized**: Fast loading with minimal dependencies
- **Accessibility Focused**: Semantic HTML with proper ARIA labels
- **SEO Ready**: Complete meta tags and Open Graph support

## 🎨 Design System

The design is inspired by the Nimbus dashboard design system, featuring:

- **Color Palette**:
  - Background: `#0b0f17` (Deep space blue)
  - Panels: `#111826` (Dark slate)
  - Text: `#e6edf3` (Cool white)
  - Accent: `#59c2ff` (Bright blue)
  - Accent 2: `#6ee7b7` (Mint green)

- **Typography**: System font stack for optimal readability
- **Animations**: Subtle, performance-optimized animations
- **Responsive Breakpoints**: Mobile-first design approach

## 🚀 Live Site

Visit the live website: **[https://beyondsightgroup.com](https://beyondsightgroup.com)**

## 🛠 Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, flexbox, and animations
- **Vanilla JavaScript**: Interactive features without dependencies
- **GitHub Pages**: Static site hosting

## 📂 Project Structure

```
bs-website/
├── index.html              # Main HTML file
├── assets/
│   └── css/
│       └── styles.css       # Main stylesheet
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🔧 Local Development

### Prerequisites

- Modern web browser
- Git
- Text editor or IDE

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BeyondSightGroup/bs-website.git
   cd bs-website
   ```

2. **Open in browser**:
   ```bash
   # macOS
   open index.html
   
   # Windows
   start index.html
   
   # Linux
   xdg-open index.html
   ```

3. **For development with live reload** (optional):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   ```

## 📧 Email Integration

The email subscription form is currently set up with client-side validation and visual feedback. To integrate with a real email service:

1. **Backend Integration**: Set up an API endpoint to handle form submissions
2. **Email Service**: Integrate with services like:
   - Mailchimp
   - ConvertKit
   - Sendinblue
   - Custom SMTP
3. **Update JavaScript**: Modify the form submission handler in `index.html`

## 🌐 Social Media Integration

Update the social links in `index.html`:

```html
<a href="YOUR_TWITTER_URL" class="social-link" data-platform="twitter">
<a href="YOUR_LINKEDIN_URL" class="social-link" data-platform="linkedin">
<a href="mailto:YOUR_EMAIL" class="social-link" data-platform="email">
```

## 🎯 Customization

### Colors

Update CSS custom properties in `assets/css/styles.css`:

```css
:root {
    --bg: #0b0f17;          /* Background */
    --accent: #59c2ff;       /* Primary accent */
    --accent-2: #6ee7b7;     /* Secondary accent */
    --text: #e6edf3;         /* Text color */
    --muted: #9fb0c0;        /* Muted text */
}
```

### Content

Update text content in `index.html`:

- Company name in the `<h1>` tag
- Tagline in the first `<p>` tag  
- Description in the second `<p>` tag
- Footer information

### Logo

Replace the text logo with an image:

```html
<div class="logo">
    <img src="assets/img/logo.svg" alt="Beyond Sight Group Logo" />
</div>
```

## 📈 Analytics

To add analytics tracking:

1. **Google Analytics 4**:
   ```html
   <!-- Add to <head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Event Tracking**: The existing JavaScript already includes placeholders for event tracking.

## 🚀 Deployment

### GitHub Pages (Current)

The site is automatically deployed via GitHub Pages. Any push to the `main` branch will trigger a new deployment.

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import the repository for serverless deployment  
- **AWS S3**: Static site hosting with CloudFront CDN
- **Custom Server**: Deploy to any web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is proprietary to Beyond Sight Group. All rights reserved.

## 📞 Contact

For questions about this website or Beyond Sight Group:

- **Email**: hello@beyondsightgroup.com
- **Website**: [https://beyondsightgroup.com](https://beyondsightgroup.com)

---

*Built with ❤️ for Beyond Sight Group*