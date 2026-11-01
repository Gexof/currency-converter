# CurrencyFlow 💱

A clean and responsive currency converter built with React and Tailwind CSS. Convert between different currencies using real-time exchange rates from the Frankfurter API.

## ✨ Features

- **Currency Conversion:** Convert between supported currencies.
- **Live Exchange Rates:** Fetch the latest available exchange rates from the Frankfurter API.
- **Currency Swapping:** Easily switch between the source and target currencies.
- **Dynamic Currency Selection:** Browse and select from the available currencies.
- **Light & Dark Mode:** Switch between themes with your preference saved in local storage.
- **Responsive Design:** Optimized for desktop, tablet, and mobile screens.
- **Loading States:** Skeleton loaders while fetching data.
- **Error Handling:** Clear error messages and retry functionality.
- **Input Validation:** Prevent invalid or negative amounts.

## 🛠️ Built With

- React
- Vite
- Tailwind CSS v4
- JavaScript
- Lucide React
- Frankfurter API

## 🌐 API

This project uses the [Frankfurter API](https://frankfurter.dev/) to retrieve currency information and exchange rates.

- **Currencies:** `https://api.frankfurter.dev/v2/currencies`
- **Exchange Rates:** `https://api.frankfurter.dev/v2/rate/{from}/{to}`

No API key is required.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Gexof/currency-converter.git
   ```

2. Navigate to the project directory:

   ```bash
   cd currency-converter
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## 📦 Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the development server     |
| `npm run build`   | Build the project for production |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint                       |

## 📁 Project Structure

```text
src/
├── components/
├── context/
├── App.jsx
├── main.jsx
└── index.css
```

## 📌 Future Improvements

- Add automated tests.
- Improve accessibility.

## 👨‍💻 Author

**Mohamed Ashraf**

- GitHub: [@Gexof](https://github.com/Gexof)

---

Built with ❤️ using React.
