# Vanilla Node.js Static Web Server

A lightweight HTTP static file server built purely with native Node.js modules (`http`, `fs`, `path`) without external web frameworks like Express. Built with automated test coverage using Mocha and Chai.

## Key Features

- **Zero-Framework Architecture:** Relies solely on native Node.js core API.
- **MIME Type Handling:** Dynamic Content-Type resolution for HTML, CSS, JS, images, and binary streams.
- **Custom Error Handling:** Automatic fallback to a custom `404.html` page for missing resources.
- **Automated Testing:** Full unit testing suite covering HTTP response codes and headers.

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Testing:** Mocha, Chai
- **Core Modules:** `http`, `fs`, `path`

## Project Structure

```text
├── public/              # Static assets directory
│   ├── 404.html
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── image.png
│   └── file.unknown
├── server.js            # Server logic & routing
├── server.test.js       # Test suite
└── package.json
