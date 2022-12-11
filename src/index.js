import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Exercise from './pages/Exercise';
import PlayPage from './pages/PlayPage';
import TicTacToe from './pages/TicTacToe';
import AddSomething from './pages/AddSomething';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ViewLife from './pages/ViewLife';
import ManageTodo from './pages/ManageTodo';
import ChangeWallpaper from './pages/ChangeWallpaper';
import GeneratePage from './pages/GeneratePage';
import fs from 'fs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/exercise" element={<Exercise/>} />
        <Route path="/play" element={<PlayPage/>} />
        <Route path="/tictactoe" element={<TicTacToe/>} />
        <Route path="/add" element={<AddSomething/>} />
        <Route path="/view" element={<ViewLife/>} />
        <Route path="/managetodo" element={<ManageTodo/>} />
        <Route path="/changewallpaper" element={<ChangeWallpaper/>} />
        <Route path="/generate" element={<GeneratePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
