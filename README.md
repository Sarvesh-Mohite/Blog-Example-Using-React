# React Multi-Page Application

A modern, responsive React application utilizing **React Router v6** for seamless client-side navigation. This project demonstrates basic routing patterns, including navigation headers and custom 404 "Not Found" handling.

## 🚀 Features

* **Declarative Routing:** Powered by `react-router-dom`.
* **Persistent Layout:** A global `<Header />` component that stays visible across all pages.
* **Dynamic Views:** Clean transitions between Home, About, and Contact pages.
* **Error Handling:** A catch-all route to handle undefined URLs via a `NotFound` component.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Routing:** React Router v6
* **Styling:** CSS3 (or your preferred framework)

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header/     # Navigation bar
│   ├── Home/       # Landing page
│   ├── About/      # Company/Person info
│   ├── Contact/    # Contact form/details
│   └── NotFound/   # 404 Error page
├── App.js          # Route configuration
└── index.js        # Entry point
```

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sarvesh-Mohite/Blog-Example-Using-React.git
    ```
2.  **Navigate to folder:**
    ```bash
    cd blog-example-rjs
    ```
    
3.  **Install dependencies:**
    ```bash
    npm install
    npm install react-router-dom
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```
    The app will run at `http://localhost:3000`.

## 📖 Available Routes

| Path | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home` | The main landing page. |
| `/about` | `About` | Information about the project or team. |
| `/contact` | `Contact` | Get in touch page. |
| `*` | `NotFound` | Displayed for any undefined URLs. |

## 📝 Note on React Router Versions
This project uses **React Router v6**. If you are migrating from v5, please note that `<Switch>` has been replaced by `<Routes>` and the `component` prop has been replaced by `element={<Component />}`.

##SCREEN SHOTS:
<img width="1896" height="855" alt="image" src="https://github.com/user-attachments/assets/19348162-52ae-4616-aa61-3ee449a621ae" />
<img width="625" height="706" alt="image" src="https://github.com/user-attachments/assets/25f093a4-5339-4d4b-beb4-862d440790b5" />
<img width="504" height="654" alt="image" src="https://github.com/user-attachments/assets/b6c5442b-06b8-4162-af93-7a687c1a57ca" />
