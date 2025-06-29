# Naavo&Co. - Digital Creative Agency Portfolio

A stunning, modern portfolio website built with React.js and Three.js that showcases our digital creative agency's work and expertise.

## 🚀 Features

- **3D Animated Hero Section** - Interactive Three.js animations with floating particles
- **Smooth Animations** - Framer Motion powered entrance and hover animations
- **Modern Design** - Glassmorphism effects, gradients, and responsive layout
- **Custom Cursor** - Interactive cursor effects for enhanced UX
- **Loading Screen** - Animated loader with progress indicator
- **Responsive Design** - Fully responsive across all devices
- **Contact Form** - Functional contact form with validation
- **Project Showcase** - Interactive project cards with hover effects
- **Skills Visualization** - Animated progress bars for skills display

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Three.js** - 3D graphics and animations
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **CSS3** - Modern CSS with custom properties and animations
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd naavo-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js           # 3D animated hero section
│   ├── About.js          # About section with stats
│   ├── Projects.js       # Project showcase
│   ├── Skills.js         # Skills with progress bars
│   ├── Contact.js        # Contact form and info
│   ├── Loader.js         # Animated loading screen
│   └── *.css             # Component styles
├── App.js                # Main app component
├── index.js              # React entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #00a3ff;
  --secondary-color: #0077ff;
  --accent-color: #ff6b35;
  /* ... more variables */
}
```

### Content
- Update project information in `src/components/Projects.js`
- Modify skills in `src/components/Skills.js`
- Change contact details in `src/components/Contact.js`
- Update about content in `src/components/About.js`

### 3D Elements
Customize the Three.js animations in `src/components/Hero.js`:
- Modify the `AnimatedSphere` component
- Adjust particle count and colors in `FloatingParticles`
- Change camera settings and lighting

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🎯 Performance Optimizations

- **Code Splitting** - React.lazy for component loading
- **Image Optimization** - Optimized images in public folder
- **CSS Optimization** - Minimal CSS with efficient selectors
- **Bundle Optimization** - Tree shaking and dead code elimination

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style

- Use functional components with hooks
- Implement proper prop types
- Follow React best practices
- Use meaningful component and variable names

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: naavoandcoofficial@gmail.com
- **Website**: [Your Website URL]
- **Location**: India

---

Built with ❤️ by Naavo&Co. 