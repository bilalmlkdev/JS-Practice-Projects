<p align="center">
  <a href="https://seepreview.vercel.app/">
    <img src="./projectLogo.svg" alt="JS Practice Projects" width="100" height="72">
  </a>
</p>


<h1 align="center">JS Practice Projects</h1>

<p align="center"> 23 interactive vanilla JavaScript mini-apps, browsable live from a single dashboard - no frameworks, no build step.</p>

<p align="center">
  <a href="https://seepreview.vercel.app/"><strong>Live Demo</strong></a>
  ·
  <a href="https://github.com/bilalmlkdev/JS-Practice-Projects/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  ·
  <a href="https://github.com/bilalmlkdev/JS-Practice-Projects/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
</p>

[![JS Practice Projects Dashboard](https://raw.githubusercontent.com/bilalmlkdev/JS-Practice-Projects/main/screenshot.png)](https://seepreview.vercel.app/)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
</p>

---

## About

This is a personal front-end practice repo - 23 small, real apps built with plain HTML, CSS, and JavaScript, each solving one common UI problem (a weather app, a todo list, a calculator, a memory game, and so on).

Instead of leaving them scattered locally, every project is wired into a single **live preview dashboard** that renders each app in an iframe, so you can browse, search, and try all 23 without cloning anything.

- **Zero frameworks** - pure HTML, CSS, and ES6+ JavaScript throughout
- **Consistent structure** - every project lives in its own numbered folder with just `index.html` and `index.js`
- **One live dashboard** - search and preview all 23 apps from a single deployed page
- **Real APIs where relevant** - GitHub REST API, OpenWeather, and other public APIs are used in the apps that need them, with basic error handling

## Project List

| # | Project | Folder |
|---|---------|--------|
| 01 | Github Profile Finder | `01-github-profile-finder` |
| 02 | Weather App | `02-Weather-app` |
| 03 | Todo App | `03-Todo-app` |
| 04 | Digital Clock | `04-digital-clock` |
| 05 | Random Quotes | `05-random-quotes` |
| 06 | Age Calculator | `06-age-calculator` |
| 07 | Countdown Timer | `07-countdown-timer` |
| 08 | QR Code Generator | `08-QR-code-gen` |
| 09 | Typing Speed Test | `09-typing-speed-test` |
| 10 | Tabs Navigation | `10-tabs-navigation` |
| 11 | Password Generator | `11-password-generator` |
| 12 | Currency Converter | `12-currency-converter` |
| 13 | Simple Calculator | `13-simple-calculator` |
| 14 | Color Picker | `14-color-picker` |
| 15 | Stopwatch | `15-stopwatch` |
| 16 | Drawing Board | `16-drawing-board` |
| 17 | Custom Modal Popup | `17-custom-modal-popup` |
| 18 | Image Slider | `18-image-slider` |
| 19 | Form Validator | `19-form-validator` |
| 20 | Memory Card Game | `20-memory-card-game` |
| 21 | Theme Switcher | `21-theme-switcher` |
| 22 | Pomodoro Timer | `22-pomodoro-timer` |
| 23 | Notes App | `23-notes-app` |

## Folder Structure

```text
JS-Practice-Projects/
│
├── index.html              # Live preview dashboard
├── vercel.json
│
├── 01-github-profile-finder/
│   ├── index.html
│   └── index.js
│
├── 02-Weather-app/
│   ├── index.html
│   └── index.js
│
└── 23-notes-app/
    ├── index.html
    └── index.js
```

Every project follows the same two-file pattern, numbered sequentially for easy navigation.

## Getting Started

**Prerequisites:** a modern browser, and optionally VS Code with the Live Server extension.

```bash
git clone https://github.com/bilalmlkdev/JS-Practice-Projects.git
cd JS-Practice-Projects
```

No build step or dependencies - this is a static site.

- **Quick way:** open the root `index.html` directly in your browser.
- **Recommended:** open the folder in VS Code, right-click `index.html`, and choose **Open with Live Server** for auto-reload while editing.

## Usage

The root `index.html` is the dashboard. It lists every project as a card with a live iframe preview - search by name, click a card to open the full app in a new tab, or open any numbered folder directly to read the source.

Each project is self-contained: open its folder, read `index.js` for the logic, and reuse whatever's useful in your own work.

## Contributing

Contributions are welcome - bug reports, new mini-project ideas, or UI improvements.

```bash
git checkout -b feat/your-project-name
# make your changes
git commit -m "Add your practice project"
git push origin feat/your-project-name
```

Then open a pull request describing your changes.

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.

```text
MIT License

Copyright (c) 2026 Bilal Malik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
