import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Preload from './components/Preload/Preload.jsx';
import Menu from './pages/Menu.jsx';
import Individual from './pages/Individual.jsx';

const HomeScreen = lazy(() => import('./pages/HomeScreen.jsx'));

function App() {
  const [showPreload, setShowPreload] = useState(true);

  useEffect(() => {
    // Revisa si ya se mostró el preload previamente
    const preloadShown = localStorage.getItem('preloadShown');
    const preloadDuration = preloadShown ? 2000 : 12000; // 2 segundos si ya se mostró, 12 segundos si no

    // Establece un timeout para ocultar el preload después del tiempo correspondiente
    const timeout = setTimeout(() => {
      setShowPreload(false);
      localStorage.setItem('preloadShown', 'true'); // Marca el preload como mostrado
    }, preloadDuration);

    return () => clearTimeout(timeout); // Limpia el timeout si el componente se desmonta
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>N23 - Bags de diseño | Compra facil en la tienda</title>
        <link rel="icon" type="image/svg+xml" href="/src/assets/Logo.svg" />
        <meta
          name="description"
          content="219Food es tu servicio de menús online para pedir comida de manera rápida y sencilla a través de nuestra página."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "219Food",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dirección de ejemplo 123",
              "addressLocality": "Ciudad de ejemplo",
              "addressRegion": "Provincia de ejemplo",
              "postalCode": "0000",
              "addressCountry": "AR",
            },
            "telephone": "+541123456789",
            "description":
              "219Food ofrece menús online para que puedas pedir comida de forma fácil y rápida. Descubre nuestra amplia variedad de platos y haz tu pedido ahora.",
            "url": "https://219food.com/",
          })}
        </script>
      </Helmet>
      {showPreload ? (
        <Preload />
      ) : (
        <Suspense fallback={<Preload />}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/coleccion" element={<Menu />} />
            <Route path="/individual/:id" element={<Individual />} />
            <Route path="/preload" element={<Preload />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;
