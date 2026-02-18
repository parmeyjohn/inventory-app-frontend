import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css'

import App from './App.tsx'
import Dashboard from './pages/Dashboard.tsx';
import Inventory from './pages/Inventory.tsx';
import Events from './pages/Events.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="items" element={<Inventory></Inventory>}></Route>
          <Route path="events" element={<Events></Events>}></Route>
          <Route path="transactions" element={<Events></Events>}></Route>
          <Route path="expenses" element={<Events></Events>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
