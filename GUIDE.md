# Beginner's Guide to This Portfolio

This guide explains, in plain language:

1. [How a website works (HTML, CSS, JavaScript)](#1-how-a-website-works)
2. [What each file in this project does](#2-what-each-file-does)
3. [How this portfolio was built, step by step](#3-how-this-portfolio-was-built)
4. [How to put it on GitHub and host it for free (no software needed)](#4-upload-and-host-on-github-browser-only)
5. [How to make changes later (directly on github.com)](#5-how-to-make-changes)
6. [Common problems and fixes](#6-common-problems)

You do **not** need VS Code, Git or the command prompt. Everything below can be done in a web browser.

---

## 1. How a website works

A website is just a few text files that a browser (Chrome, Edge, etc.) reads and draws on the screen. Three languages work together, like building a house:

| Language | Job | House analogy | File in this project |
|---|---|---|---|
| **HTML** | The *content and structure*: headings, paragraphs, images, buttons, links | The bricks and walls | `index.html` |
| **CSS** | The *look*: colours, fonts, spacing, layout, animations | The paint and furniture | `css/style.css` |
| **JavaScript (JS)** | The *behaviour*: things that react when you click, scroll or type | The electricity and switches | `js/script.js` |

### HTML in 30 seconds

HTML uses **tags** written in angle brackets. Most tags come in pairs: an opening tag and a closing tag with a `/`.

```html
<h1>Debosmita Jana</h1>                 <!-- a big heading -->
<p>I am a CS student.</p>                <!-- a paragraph -->
<a href="https://github.com/">GitHub</a> <!-- a link -->
<img src="assets/profile.jpg" alt="My photo" />  <!-- an image -->
```

Tags can have **attributes** like `class="btn"` or `id="contact"`. These are names that CSS and JavaScript use to find and style that element.

### CSS in 30 seconds

CSS picks elements (using a **selector**) and gives them **properties**:

```css
.btn {                 /* selector: every element with class="btn" */
  background: purple;  /* property: value; */
  border-radius: 50px; /* rounded corners */
}
```

A `.` means a class, a `#` means an id. `@media (max-width: 768px) { ... }` means "only apply these rules on small screens like phones". This is what makes the site **responsive**.

### JavaScript in 30 seconds

JS finds an element and tells it what to do when something happens (an **event**):

```js
const button = document.querySelector("#themeToggle"); // find the theme button
button.addEventListener("click", () => {               // when it is clicked...
  document.documentElement.dataset.theme = "light";    // ...switch to light theme
});
```

---

## 2. What each file does

```
portfolio/
├── index.html        ← the page itself: all the text and sections
├── css/style.css     ← all the colours, fonts, layout and animations
├── js/script.js      ← project list + all the interactive features
├── assets/
│   ├── profile.jpg   ← profile photo
│   └── favicon.svg   ← the little "DJ" icon on the browser tab
├── .nojekyll         ← empty file; tells GitHub "just show my files as they are"
├── README.md         ← project description shown on the GitHub repo page
└── GUIDE.md          ← this guide
```

`index.html` is the **main** file. Its name matters: when someone opens your website, the server automatically shows the file called `index.html`. Inside it, these two lines connect the other files:

```html
<link rel="stylesheet" href="css/style.css" />   <!-- in the <head>: load the styles -->
<script src="js/script.js"></script>              <!-- at the bottom: load the behaviour -->
```

So the folder names (`css`, `js`, `assets`) must stay exactly the same, or the page will lose its styling.

### The sections of the page

`index.html` is split into sections. Each one has an `id`, which is what the menu links jump to (`href="#about"` jumps to `id="about"`).

| Section | `id` | What's in it |
|---|---|---|
| Navbar | `navbar` | Logo, menu links, theme button, phone menu button |
| Hero | `home` | Name, typing animation, intro line, photo, social icons |
| About | `about` | Bio, degree, university, location, CGPA, number counters |
| Skills | `skills` | 4 tabs of skill bars + a cloud of tech names |
| Projects | `projects` | Filter buttons, project cards (made by JS), sorting visualizer |
| Journey | `journey` | Timeline: B.Tech, hackathon, certifications, Class XII |
| Contact | `contact` | Email/phone/LinkedIn/GitHub cards and a contact form |
| Footer | (none) | Copyright line |

---

## 3. How this portfolio was built

This is the order a developer normally follows. You can explain it this way in a viva:

1. **Plan the content.** Decided the sections every portfolio needs: intro, about, skills, projects, education, contact.
2. **Write the HTML skeleton.** Created `index.html` with one `<section>` per part, using *semantic* tags like `<header>`, `<nav>`, `<main>`, `<section>` and `<footer>` so the structure is meaningful (good for accessibility and search engines).
3. **Style with CSS.**
   - Defined colours once as **CSS variables** (`--accent`, `--bg`, `--text`) at the top of `style.css`. Dark and light themes just swap these variables.
   - Used **Flexbox** for rows of items (navbar, buttons) and **CSS Grid** for 2-column layouts (hero, about, contact) and the project card grid.
   - Added **animations** with `@keyframes` (spinning photo ring, floating badges, blinking cursor).
   - Added **media queries** so the layout stacks into one column on phones and the menu turns into a hamburger (☰).
4. **Add interactivity with JavaScript** (`script.js`):
   - **Typing effect:** adds/removes one letter at a time using `setTimeout`.
   - **Theme toggle:** switches `data-theme` between dark and light and remembers the choice with `localStorage`.
   - **Scroll effects:** `IntersectionObserver` notices when a section enters the screen and fades it in, starts the number counters and fills the skill bars.
   - **Project cards:** projects are stored as a list of objects (an *array*) at the top of `script.js`, and JS builds the cards from it. Adding a project = adding one object, no HTML needed.
   - **Filters and modal:** clicking a filter hides cards of other categories; clicking a card opens a pop-up with details.
   - **Sorting visualizer:** real Bubble/Selection/Insertion/Merge/Quick sort code, slowed down with `async/await` so each comparison and swap can be drawn as coloured bars.
   - **Contact form:** checks the fields (name, valid email, message length) before opening the visitor's email app.
5. **Test** on desktop and phone sizes, in dark and light mode.
6. **Write the README** and **deploy** on GitHub Pages.

**Tech used:** HTML5, CSS3, vanilla JavaScript (ES6), Google Fonts, GitHub Pages. No frameworks or libraries.

---

## 4. Upload and host on GitHub (browser only)

> **Already done for this site.** The files are in the repo `debosmitajana55-droid/portfolio` and GitHub Pages is switched on.
>
> - **Live website:** https://debosmitajana55-droid.github.io/portfolio/
> - **Code:** https://github.com/debosmitajana55-droid/portfolio
>
> Send both links to the professor. The steps below are for future projects.

### Uploading files to a repository

1. Open the repo and click **Add file → Upload files**.
2. Drag the files **and folders** from your computer into the browser window. Dragging keeps folders intact; the "choose your files" button can't upload folders.
3. Write a short message in the "Commit changes" box (e.g. `Add contact page`) and click **Commit changes**.

Each upload becomes one **commit** (a saved version). Several small commits with clear messages look better than one big one.

### Turning on GitHub Pages for a repository

1. In the repo, click **Settings** → **Pages** (left sidebar).
2. Under **Source**, choose **Deploy from a branch**; under **Branch**, choose **`main`** and **`/ (root)`**, then **Save**.
3. After 1–2 minutes the page shows **"Your site is live at …"**.

The link is always `https://USERNAME.github.io/REPO-NAME/`. The repo must be **Public** and have an `index.html` at the top level.

---

## 5. How to make changes

Every change can be made on github.com. After each change the live site updates automatically in 1–2 minutes (refresh with **Ctrl + Shift + R** to skip the old cached copy).

### Editing a file

1. Open the repo, click the file (e.g. `index.html`).
2. Click the **pencil ✏️ icon** (top right of the file).
3. Press **Ctrl + F** to find the text you want to change, edit it.
4. Click **Commit changes…**, write a short message (e.g. "Update contact details"), click **Commit changes**.

Only change the text *between* tags. Be careful not to delete `<`, `>`, `"` or `/` characters, or that part of the page may break.

### Where each detail lives

| What | File | Search for (Ctrl + F) |
|---|---|---|
| Email | `index.html` (2 places) and `js/script.js` | `debosmitajana55@gmail.com` |
| LinkedIn / GitHub links | `index.html` | `linkedin.com` / `github.com/debosmitajana55-droid` |
| Bio (About section) | `index.html` | `Hello! I'm` |
| Number counters | `index.html` | `data-target=` (the number in quotes is what it counts up to) |
| Education timeline | `index.html` | `tl-item` |
| Projects | `js/script.js` | `const projects` |

### Replacing the profile photo

1. Crop a photo to a square (around 600×600 pixels) with your face near the centre, and name it `profile.jpg`.
2. Open the `assets` folder in the repo → **Add file → Upload files** → drop `profile.jpg` → **Commit changes**. It replaces the old one.

### Adding or changing a project

Open `js/script.js`. Near the top is `const projects = [ ... ]`. Each project looks like this:

```js
{
  title: "Expense Tracker",
  emoji: "💰",
  category: "web",          // one of: web, systems, data  (decides which filter shows it)
  featured: false,          // true adds a "★ Featured" badge
  desc: "Short description shown on the card.",
  features: ["Feature one", "Feature two"],
  learned: "What I learned from building it.",
  tags: ["HTML", "CSS", "JavaScript"],
  code: "https://github.com/USERNAME/expense-tracker",   // link to the project's code
  live: null,               // or a link to a live demo, in quotes
},
```

- **Edit:** change the text inside the quotes.
- **Add:** copy one whole block from `{` to `},` and paste it right after another block, then edit it.
- **Remove:** delete one whole block from `{` to `},`.

Keep the commas and quotes exactly as in the example. A missing comma is the most common reason everything below it stops working.

### Changing a skill bar

In `index.html`, search for the skill name, e.g. `Python`. You'll see:

```html
<span>Python</span><span>75%</span> ... data-level="75"
```

Change **both** `75%` (the text) and `data-level="75"` (the bar length).

### Changing colours

At the top of `css/style.css`:

```css
--accent: #8b5cf6;    /* purple */
--accent-2: #ec4899;  /* pink */
--accent-3: #22d3ee;  /* cyan */
```

Replace the colour codes (pick any at [htmlcolorcodes.com](https://htmlcolorcodes.com)). The whole site changes colour.

### Changing the typing words

In `js/script.js`, search `const roles` and edit the words in the list.

---

## 6. Common problems

| Problem | Cause and fix |
|---|---|
| Live link shows **404** | Pages takes 1–2 minutes the first time. Also check `index.html` is at the top of the repo (not inside a folder) and is spelt in lowercase. |
| Page shows text but **no colours or layout** | The `css` folder is missing or was renamed, or `style.css` sits outside it. The repo should contain `css/style.css`. |
| **Animations, projects, or theme button don't work** | `js/script.js` is missing, or there's a typo (often a missing comma or quote) from a recent edit. Undo the last change: open the file → **History** → open the previous version and copy it back. |
| Changes don't show up | Wait 1–2 minutes, then refresh with **Ctrl + Shift + R**. Check the **Actions** tab for a green tick. |
| Photo doesn't appear | The file name in `index.html` must match exactly, including `.jpg` vs `.png` and upper/lower case. |

To see what went wrong in the browser: right-click the page → **Inspect** → **Console** tab. Errors are shown in red, with the file name and line number.
