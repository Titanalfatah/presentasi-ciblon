# CIBLON Presentation - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Zero configuration for Vite
- ✅ Instant deployments

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy? `Y`
   - Which scope? (your account)
   - Link to existing project? `N`
   - Project name? `ciblon-presentation`
   - Directory? `./`
   - Override settings? `N`

5. **Production deployment**
   ```bash
   vercel --prod
   ```

**Result:** You'll get a URL like `https://ciblon-presentation.vercel.app`

---

### Option 2: Netlify

**Steps:**

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy
   ```

4. **For production:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

**Alternative: Drag & Drop**
1. Go to https://app.netlify.com/drop
2. Build: `npm run build`
3. Drag `dist/` folder to Netlify

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Update `package.json`**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/ciblon-presentation"
   }
   ```

3. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     base: '/ciblon-presentation/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Pages → Source: gh-pages branch
   - Save

---

### Option 4: Firebase Hosting

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub deploys: `No`

4. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 5: Cloudflare Pages

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Go to Cloudflare Pages**
   - Visit https://pages.cloudflare.com
   - Create a project
   - Connect Git repository

3. **Build settings:**
   - Build command: `npm run build`
   - Build output: `dist`
   - Framework preset: `Vite`

4. **Deploy**
   - Push to Git → Auto-deploy

---

### Option 6: Self-Hosted (VPS/Server)

**Requirements:**
- Linux server (Ubuntu/Debian)
- Nginx or Apache
- Domain name (optional)

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder to server**
   ```bash
   scp -r dist/* user@server:/var/www/ciblon
   ```

3. **Nginx configuration**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/ciblon;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

---

## 📦 Build Optimization

### Before Deployment

1. **Check bundle size**
   ```bash
   npm run build
   ```
   Look for output size in terminal

2. **Optimize images** (if any added)
   - Use WebP format
   - Compress with TinyPNG
   - Lazy load images

3. **Test production build locally**
   ```bash
   npm run preview
   ```

### Performance Tips

1. **Enable compression** (automatic on most platforms)
2. **Use CDN** (Vercel/Netlify provide this)
3. **Cache static assets** (configured in build)

---

## 🔒 Environment Variables

If you add API keys or secrets:

1. **Create `.env` file** (local only)
   ```
   VITE_API_KEY=your_key_here
   ```

2. **Add to `.gitignore`**
   ```
   .env
   .env.local
   ```

3. **Set in deployment platform:**
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **GitHub Pages**: Repository Secrets

---

## 🌐 Custom Domain

### Vercel
1. Project Settings → Domains
2. Add your domain
3. Update DNS records as shown

### Netlify
1. Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

### GitHub Pages
1. Repository Settings → Pages
2. Custom domain field
3. Add CNAME record in DNS

---

## 📊 Analytics (Optional)

### Google Analytics

1. **Get tracking ID** from Google Analytics

2. **Add to `index.html`**
   ```html
   <head>
     <!-- Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     </script>
   </head>
   ```

---

## 🔄 Continuous Deployment

### Auto-deploy on Git push

**Vercel:**
1. Connect GitHub repository
2. Auto-deploys on push to main

**Netlify:**
1. Connect Git repository
2. Auto-builds on commit

**GitHub Actions:**
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## ✅ Pre-Deployment Checklist

- [ ] `npm run build` successful
- [ ] No console errors in preview
- [ ] All 12 slides visible
- [ ] Animations working
- [ ] Responsive on mobile
- [ ] Navigation functional
- [ ] Scroll smooth
- [ ] Text readable
- [ ] Colors correct
- [ ] Performance good (Lighthouse)

---

## 🧪 Testing Deployed Site

1. **Open in multiple browsers**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Test on devices**
   - Desktop
   - Tablet
   - Mobile

3. **Check performance**
   - Use Lighthouse (Chrome DevTools)
   - Target: 90+ score

4. **Verify functionality**
   - Scroll navigation
   - Dot navigation
   - Animations
   - Responsive layout

---

## 🆘 Troubleshooting Deployment

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 errors
- Check `base` in `vite.config.js`
- Ensure SPA fallback configured

### Animations not working
- Check browser compatibility
- Verify Framer Motion loaded

### Slow loading
- Enable compression
- Use CDN
- Optimize assets

---

## 📱 Share Your Presentation

After deployment, share:

```
🎯 CIBLON Presentation
🔗 https://your-url.com
📱 Mobile-friendly
🎨 Interactive animations
⏱️ ~12-15 minutes
```

---

## 🎉 Recommended: Vercel

For this presentation, **Vercel** is the best choice:

```bash
# Quick deploy
npm run build
vercel --prod
```

**Done!** Your presentation is live in ~2 minutes.

---

**Need help?** Check the platform-specific documentation:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com
