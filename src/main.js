// Import Framework7 Bundle
import Framework7 from 'framework7/framework7-lite-bundle.esm.js';

// Import Framework7-Svelte Bundle
import Framework7Svelte from 'framework7-svelte';

// Import Framework7 Styles
import 'framework7/framework7-bundle.min.css';
import 'framework7-icons/css/framework7-icons.css';

// Import App Component
import App from './App.svelte';

// Init F7-Svelte Plugin
Framework7.use(Framework7Svelte);

const app = new App({
  target: document.getElementById('app')
})

export default app
