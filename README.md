# Debosmita Jana: Personal Portfolio

A responsive, interactive personal portfolio website built from scratch with **HTML, CSS and vanilla JavaScript** (no frameworks), hosted for free on **GitHub Pages**.

🔗 **Live site:** https://debosmitajana55-droid.github.io/portfolio/

> 2nd year B.Tech Computer Science & Engineering student at Shoolini University (lateral entry), with a Diploma in Computer Science & Technology.

---

## ✨ Features

| Section | What it does |
|---|---|
| **Hero** | Animated typing effect, rotating gradient profile ring, floating badges, social links |
| **About** | Short bio, education details, animated stat counters |
| **Skills** | Tabbed skill categories with animated progress bars, tech-stack tag cloud |
| **Projects** | Project cards (portfolio, LAN-based examination system, database & website design, Power BI dashboard) with filters, 3D tilt on hover, and a detail pop-up for each |
| **Journey** | Timeline: B.Tech (Shoolini University), Diploma (GIST Haldia), Madhyamik |
| **Contact** | Contact cards + a validated contact form that opens the visitor's email app |

**Also:** dark / light theme toggle (remembered across visits), scroll progress bar, active-section highlighting in the navbar, scroll-reveal animations, mobile hamburger menu, back-to-top button, keyboard-accessible modal, and `prefers-reduced-motion` support.

## 🛠️ Tech Stack

- **HTML5**: semantic sections, accessible labels and ARIA attributes
- **CSS3**: custom properties (theming), Flexbox, Grid, keyframe animations, media queries
- **JavaScript (ES6+)**: DOM manipulation, IntersectionObserver, localStorage
- **Google Fonts**: Poppins and JetBrains Mono
- **GitHub Pages**: hosting

## 📁 Project Structure

```
portfolio/
├── index.html        # All page sections
├── css/
│   └── style.css     # Styles, themes, animations, responsive rules
├── js/
│   └── script.js     # Project data + all interactivity
├── assets/
│   ├── profile.jpg   # Profile photo
│   └── favicon.svg   # Browser tab icon
├── GUIDE.md          # Beginner guide: how it works and how to edit it
├── .nojekyll         # Tells GitHub Pages to serve files as-is
└── README.md
```

## 🚀 Run Locally

No build step needed.

```bash
git clone https://github.com/debosmitajana55-droid/portfolio.git
cd portfolio
# open index.html in your browser, or serve it:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub (repository must be **Public**).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, then **Save**.
4. Wait about 1 minute. The site is live at `https://debosmitajana55-droid.github.io/portfolio/portfolio/`.

## ✏️ Customising

- **Photo:** replace `assets/profile.jpg` with a new photo of the same name.
- **Projects:** edit the `projects` array at the top of `js/script.js`; cards and modals are generated from it.
- **Contact details:** in the Contact section of `index.html`, and `CONTACT_EMAIL` in `js/script.js`.
- **Colours:** change the `--accent` variables at the top of `css/style.css`.

## 📬 Contact

- Email: debosmitajana55@gmail.com
- LinkedIn: [debosmita-jana-bb4886383](https://www.linkedin.com/in/debosmita-jana-bb4886383)
- GitHub: [debosmitajana55-droid](https://github.com/debosmitajana55-droid)

---

© Debosmita Jana. Built with ❤️ and lots of ☕.
