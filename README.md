# Responsive Product_Detail-Page (Vite+React, ContextAPI)
This is Product_Detail-page using `Context API` in which the data has been fetch by `json-server` using `axios` method and in which we can view different images and also by product using `useState` and also support for price, discount, colors. also having full responsive for small devices and medium devices using `mediaQuery`.

## 🚀 Features
- Data is Fetch dynamically using Axios and json-server.
- Dynamically Color, Price, Discount, images rendering.
- Full responsive for small devices.
- Add to Cart and Buy Now functionality.
- Modular CSS Styles.

## 🛠️ Technology Stack
- React (Vite + React).
- ContextAPI.
- Axios (Fetching Data).
- Json-Server (For Dummy Data).
- CSS (Responsive Layout).

## 📦 Installation
```
git clone https://github.com/prateek205/productDetail_page.git
cd productDetail_page
npm install
npm start
```
## 🔌JSON-server Mock API
```
json-server --watch db.json -p 3002
```
#### Ex. db.json
```
{
  "appliances":[
      "id": 14,
      "model": "Washing Machine",
      "category": "Electronics",
      "brand": "samsung",
      "colors": [
        {
          "name": "black",
          "title": "Samsung 7 kg, 5 Star, AI Control, Wi-Fi, Digital Inverter, Motor, Fully-Automatic Front Load Washing Machine (WW70T502NAN1TL, Hygiene Steam, Inox)",
          "images": [
            "/images/productImages/samsung/washing-machine_black.jpg",
            "/images/productImages/samsung/washing-machine_black-1.jpg",
            "/images/productImages/samsung/washing-machine_black-2.jpg",
            "/images/productImages/samsung/washing-machine_black-3.jpg",
            "/images/productImages/samsung/washing-machine_black-4.jpg",
            "/images/productImages/samsung/washing-machine_black-5.jpg"
            ],
          "price": 49990,
          "discount": 40,
          "dimensions": "45D x 60W x 85H Centimeters",
          "brand": "Samsung",
          "capacity": 7,
          "special feature": "Protective Rat Mesh, Child Lock, Hygiene Steam, Drum Clean, Delay Start",
          "finish type": "Glossy"
        },
        {
        "name": "grey",
        "title": "Samsung 7 kg, 5 star, EcoBubble Technology, Hygiene Steam with Inbuilt Heater, Digital Inverter, Fully-Automatic Front Load Washing Machine (WW70R22EK0X/TL, INOX GRAY)",
        "images": [
          "/images/productImages/samsung/washing-machine_grey.jpg",
          "/images/productImages/samsung/washing-machine_grey-1.jpg",
          "/images/productImages/samsung/washing-machine_grey-2.jpg",
          "/images/productImages/samsung/washing-machine_grey-3.jpg",
          "/images/productImages/samsung/washing-machine_grey-4.jpg",
          "/images/productImages/samsung/washing-machine_grey-5.jpg"
          ],
        "price": 30990,
        "discount": 0,
        "capacity": 7,
        "color": "inox",
        "brand": "Samsung",    
        "dimensions": "55D x 60W x 85H Centimenters",
        "special feature": "Child Lock, Digital Inverter Technology, Hygiene Steam, Quick Wash, Diamond Drum",
        "cycle option": "Daily Wash, Delicates, Tub Clean, Wool, Hygiene",
        "voltage": 220
      }  
    ]
  ]
}
```
## 📲 Responsive UI
- Image switch on color select
- Final price after discount
- Buttons: Add to Cart & Buy Now

## 📸 Preview
![Demo_Screenshot](https://github.com/prateek205/ProductDetail-Page/blob/2c8e21982bac0c1fdd43222b11273849e589711b/public/images/Screenshot/productDetail_page.png)

## 📂 Folder Structure
```
├── ProductDetail_page
├── public/
│   └── Images
├── src/
│   ├── Assets
│   ├── Components/
│   │   └── ProductDetail.jsx
│   ├── Context/
│   │   └── ProductDetailContext.jsx
│   ├── Style/
│   │   └── ProductDetail.css
│   ├── App.jsx
│   ├── index.css
│   └── Main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
