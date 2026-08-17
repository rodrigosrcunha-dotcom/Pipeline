import React, { Suspense, lazy } from 'react';
import './App.css';

// Componente carregado sob demanda (Code Splitting / Dynamic Import)
const ComponenteLento = lazy(() => import('./ComponenteLento'));

function App() {
  return (
    <main>
      <h1>Pipeline Frontend</h1>
      <p>CI/CD configurado para validação, build e deploy automático.</p>

      {/* Carregamento sob demanda com Suspense */}
      <Suspense fallback={<div>Carregando componente...</div>}>
        <ComponenteLento />
      </Suspense>

      {/* Imagem otimizada com Lazy Loading */}
      <img 
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&format=webp" 
        alt="Código-fonte otimizado" 
        loading="lazy"
        width="600"
        height="350"
      />
    </main>
  );
}

export default App;