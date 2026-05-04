# 📚 OpenBook | Online Book Borrowing Platform

**Live Site:** [https://openbook-psi.vercel.app/]

## 📖 Project Overview
OpenBook is a premium, minimalist web application designed to digitize the traditional library experience. This platform allows users to browse a diverse collection of books, search for specific titles, filter by genres, and borrow books digitally. Built with a focus on security and "pixel-perfect" design using **Next.js**, **BetterAuth**, and **MongoDB**.

---

## 🚀 Key Features
*   **Secure Authentication:** Powered by **BetterAuth** including Google Social Login and Email/Password registration.
*   **Dynamic Search & Filter:** A dedicated "All Books" page with a real-time search bar and a functional category sidebar (Story, Tech, Science).
*   **Borrowing Logic:** Logged-in users can borrow books with automated availability checks and confirmation toasts.
*   **User Dashboard:** A private "My Profile" route displaying user info with a challenge feature to update Name and Profile Photo.
*   **Interactive UI:** High-quality UX featuring a scrolling marquee for "New Arrivals" and professional sliders.
*   **Fully Responsive:** A seamless experience across Mobile, Tablet, and Desktop devices.
*   **Secure Backend:** Environment variables are used to protect sensitive API keys and database credentials.

---

## 🛠️ Tech Stack & NPM Packages
*   **Framework:** Next.js (App Router)
*   **Language:** JavaScript
*   **Database:** MongoDB
*   **Auth:** BetterAuth
*   **Styling:** Tailwind CSS & DaisyUI/HeroUI
  **Packages:** 
    * `lucide-react` (for minimalist icons)
    * `react-hot-toast` (for interactive notifications)

---

## 📂 Data Structure
Books are managed using the following JSON schema:
```json
{
  "id": "unique-id",
  "title": "Book Title",
  "author": "Author Name",
  "description": "Short description of the book content.",
  "category": "Story | Tech | Science",
  "available_quantity": 5,
  "image_url": "[https://example.com/image.jpg](https://example.com/image.jpg)"
}

```


## 🛡️ Implementation Details
*   **Private Routes:** Access to `/book/:id` and `/profile` is strictly restricted to authenticated users via middleware/wrappers.
*   **Clean Code:** Followed modular component architecture for better maintainability and reusability.
*   **Optimized Performance:** Leveraged Next.js Image optimization and Server Components for faster load times.

## 🤝 Contact & Support
If you have any questions or want to discuss this project, feel free to reach out:

*   **Developer:** Shariea Reza Nabil
*   **LinkedIn:** [https://www.linkedin.com/in/shariea-reza-nabil/]
*   **Email:** [nabilreza183@gmail.com]

---
**This project was developed as a technical assignment for category A8-Mango.**  
*Committed to building "pixel-perfect" and high-performance web solutions.*
