# Cure Claim Solutions LLC - Website Clone

A pixel-perfect, responsive clone of the [Cure Claim Solutions LLC](https://cureclaimsolutionsllc.com/) website, built with semantic HTML5, modern CSS3, and Vanilla JavaScript.

## 🚀 Features

-   **Pixel-Perfect Design**: Exact color matches (`#204066`, `#12B48B`), typography (Poppins, Inter), and spacing.
-   **Fully Responsive**: Mobile-first design that adapts seamlessly to tablets and desktops.
-   **Interactive Elements**:
    -   Animated counters for statistics.
    -   Smooth scrolling navigation.
    -   Floating particle effects in the Hero section.
    -   Testimonial slider with auto-play.
    -   mobile navigation with hamburger menu.
    -   3D tilt effects on service cards.
-   **New Sections**:
    -   **Stats Section**: Animated counters showing achievements.
    -   **Quick Contact Form**: A simplified contact form for immediate inquiries.
-   **Optimization**:
    -   SVG placeholders for fast loading (ready for real images).
    -   Semantic HTML for better SEO and accessibility.
    -   Clean, commented code architecture.

## 🛠️ Tech Stack

-   **HTML5**: Semantic structure.
-   **CSS3**: Custom properties (variables), Flexbox, Grid, Animations.
-   **JavaScript**: Vanilla JS (ES6+) for DOM manipulation and interactivity.
-   **Font Awesome**: Icons.
-   **Google Fonts**: Poppins & Inter.

## 📂 Project Structure

```
/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # All styles (Reset, Base, Components, Responsive)
├── js/
│   └── script.js       # All interactivity (Nav, Forms, Animations)
├── assets/
│   └── images/         # SVG placeholders and images
└── README.md           # Project documentation
```

## 💻 Local Development Setup

To run this project locally:

1.  **Clone or Download** the repository.
2.  **Open the folder** in your terminal or command prompt.
3.  **Start a local server**:
    *   **Using Python (Recommended)**:
        ```bash
        python -m http.server 5500
        ```
    *   **Using Node.js (`serve`)**:
        ```bash
        npx serve .
        ```
    *   **Using VS Code**: Install the "Live Server" extension and click "Go Live".
4.  **Open in Browser**: Go to `http://localhost:5500` (or the port shown).

## 🌐 Deployment Instructions (Hostinger)

1.  **File Manager**: Log in to your Hostinger control panel and open the **File Manager**.
2.  **Public_html**: Navigate to the `public_html` directory.
3.  **Upload**: Upload all project files (`index.html`, `css/`, `js/`, `assets/`) to the root of `public_html` (or a subdirectory if preferred).
4.  **Verify**: Visit your domain URL to ensure everything loads correctly.
5.  **HTTPS**: Ensure SSL is active on your domain for security.

## 📝 Customization

-   **Images**: Replace the SVG placeholders in `assets/images/` with real images using the same filenames, or update the `src` paths in `index.html`.
-   **Colors**: Edit the `:root` variables in `css/style.css` to change the theme significantly.
-   **Content**: Update text in `index.html`.

---
*Created by Antigravity*
