// Performance monitoring utility
export const performanceMonitor = {
  // Mesurer le temps de chargement
  measureLoadTime: () => {
    if (typeof window !== 'undefined') {
      const loadTime = performance.now();
      console.log(`🚀 Page loaded in ${loadTime.toFixed(2)}ms`);

      // Mesurer les métriques Core Web Vitals
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
        onINP(console.log);
      }).catch(() => {
        // Si l'import échoue en environnement server-side, on ignore
      });
    }
  },

  // Optimiser les images (lazy loading)
  lazyLoadImages: () => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  },

  // Précharger les routes critiques
  preloadCriticalRoutes: () => {
    if (typeof window !== 'undefined') {
      // Précharger les pages principales après le chargement initial
      setTimeout(() => {
        const routes = ['/produits', '/presentation', '/contact'];
        routes.forEach(route => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          document.head.appendChild(link);
        });
      }, 2000);
    }
  }
};

// Initialiser le monitoring au chargement
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    performanceMonitor.measureLoadTime();
    performanceMonitor.lazyLoadImages();
    performanceMonitor.preloadCriticalRoutes();
  });
}