import { lazy, Suspense } from 'react';

// Lazy loading des composants lourds
const Hero = lazy(() => import('./Hero'));
const Navigation = lazy(() => import('./Navigation'));
const Footer = lazy(() => import('./Footer'));

// Composant de fallback simple
const LoadingFallback = ({ height = "200px" }: { height?: string }) => (
  <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '20px',
      height: '20px',
      border: '2px solid #7a8c6e',
      borderTop: '2px solid #c9857a',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
);

// Exports optimisés
export const LazyHero = ({ ...props }) => (
  <Suspense fallback={<LoadingFallback height="100vh" />}>
    <Hero {...props} />
  </Suspense>
);

export const LazyNavigation = ({ ...props }) => (
  <Suspense fallback={<div style={{ height: '80px', background: '#f5f0e8' }} />}>
    <Navigation {...props} />
  </Suspense>
);

export const LazyFooter = ({ ...props }) => (
  <Suspense fallback={<LoadingFallback height="300px" />}>
    <Footer {...props} />
  </Suspense>
);