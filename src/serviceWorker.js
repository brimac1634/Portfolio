// Retire only the portfolio's former CRA service worker.
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => {
        const worker = registration.active || registration.waiting || registration.installing;
        if (worker && worker.scriptURL === `${window.location.origin}/service-worker.js`) {
          registration.unregister();
        }
      });
    }).catch(console.error);
  }
}
