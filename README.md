# 🌎 Travel Advisor

Travel Advisor is an interactive web app that helps users explore nearby hotels, restaurants, and attractions using live Google Maps data and real-time location tracking.
It’s built with React and Material UI, integrated with the Google Maps API, and provides an intuitive interface for travel discovery.

## Deployed using Netlify
https://travel-advisor-mrk.netlify.app/

## 🎯 Features

- 🗺️ Interactive Google Map integration using @react-google-maps/api

- 📍 Real-time location detection and dynamic place rendering

- 🍽️ Displays restaurants, hotels, and attractions with ratings and reviews

- 🔍 Filter results by rating or category

- 📸 Display photos, addresses, and contact info for each location

- ⚡ Fast and responsive with Material UI components and grid layouts

- 📱 Fully responsive design optimised for mobile and desktop

- 🔄 Seamless API integration for location and travel data via Axios

## 🛠 Tech Stack

| Layer                       | Technology / Tool                                                                                                                               | Purpose                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Framework**               | [React 18.3](https://react.dev/)                                                                                                                | Component-based front-end library           |
| **UI Library**              | [Material UI 5.16](https://mui.com/) + [MUI Icons](https://mui.com/material-ui/material-icons/)                                                 | Modern, responsive UI components            |
| **Styling System**          | [Emotion](https://emotion.sh/docs/introduction) (`@emotion/react` & `@emotion/styled`)                                                          | CSS-in-JS styling for MUI                   |
| **Maps Integration**        | [@react-google-maps/api 2.19](https://react-google-maps-api-docs.netlify.app/)                                                                  | Embed Google Maps with markers and events   |
| **Alternative Maps Option** | [google-map-react 2.2](https://github.com/google-map-react/google-map-react)                                                                    | Flexible map rendering                      |
| **Data Fetching**           | [Axios 1.7](https://axios-http.com/)                                                                                                            | Fetching location and travel data from APIs |
| **UI Utilities**            | [MUI Lab](https://mui.com/material-ui/about-the-lab/) & [MUI Styles](https://mui.com/system/styles/basics/)                                     | Additional experimental UI components       |
| **Testing Libraries**       | [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) + [Jest DOM](https://github.com/testing-library/jest-dom) | Unit and DOM testing                        |
| **Performance Metrics**     | [Web Vitals](https://web.dev/vitals/)                                                                                                           | Measure and optimize app performance        |
| **Build Tool**              | [Create React App 5](https://create-react-app.dev/)                                                                                             | Boilerplate setup and build process         |
| **Deployment**              | [Netlify](https://www.netlify.com/)                                                                                                             | CI/CD and static hosting                    |
