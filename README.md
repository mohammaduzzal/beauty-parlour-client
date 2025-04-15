# 💇‍♀️ Jerin Parlour Project

A full-featured web application for a beauty parlour where users can book services, leave reviews, and admins can manage the entire system. Built using **React**, **Tailwind CSS**, **Firebase**, and more.

## 🚀 Live Site

[🔗 Visit Live Website](https://beauty-parlour-cd47d.web.app) 

---

## 📦 Tech Stack & Dependencies

- **Frontend**: React 19, Tailwind CSS 4, Vite
- **Routing**: React Router DOM v7
- **State Management**: React Query
- **Form Handling**: React Hook Form
- **Authentication**: Firebase Auth
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Notifications**: React Hot Toast, SweetAlert2
- **UI Enhancements**: SwiperJS
- **Storage**: localForage
- **Utils**: match-sorter, sort-by

---

## 👥 User Roles

### 🔓 Normal Users
- Book services
- See service progress
- Drop a review
- Send messages

### 🔐 Admin Users
- Add new services
- Update and delete existing services
- View all users
- Make other users admin

---

## 🔐 Authentication & Authorization

- **Firebase Authentication** for login/signup
- **Private Routes** for protected access
- **Custom Hooks**:
  - `useAuth` – to handle user state and context
  - `useAdmin` – to check admin privileges
  - `useAxiosSecure` – to use Axios with secure headers/tokens
  - `usePublic` – to access public APIs securely

---

## 🛠 Features

- ✅ Login/Signup via Firebase
- 🔒 Role-based Dashboard (User/Admin)
- 💇 Service booking with real-time progress
- 📝 Submit reviews and feedback
- 🧑‍💻 Admin dashboard to manage services and users
- ✉️ Contact/message support
- 📊 Visual improvements with Swiper sliders
- 📦 Local storage support via localForage
- 📡 API calls handled via Axios (secured & public)
- 🍞 Notifications via Hot Toast and SweetAlert2
- 🎨 Fully responsive and modern UI with Tailwind CSS

---




