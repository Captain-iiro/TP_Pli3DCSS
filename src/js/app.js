import { section } from './components/section.js';

export function initApp() {
  const app = document.querySelector('#app');
  app.appendChild(section());
}
