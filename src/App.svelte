<script>
  // Import Framework7 Components
  import { 
    App, 
    View, 
    Page, 
    Navbar, 
    Block,
    Panel,
    Button,
    Segmented,
    List,
    ListItem,
    Link,
    NavLeft,
    NavRight
  } from 'framework7-svelte';
  import Framework7 from 'framework7/framework7-lite-bundle.esm.js';
  import Framework7Svelte from 'framework7-svelte';
  
  // Import Pages
  import HomePage from './pages/HomePage.svelte';
  import AboutPage from './pages/AboutPage.svelte';

  // Initialize Framework7
  Framework7.use(Framework7Svelte);

  // F7 Parameters
  const f7params = {
    name: 'My App',
    theme: 'ios',
    // Define routes for pages
    routes: [
      {
        path: '/',
        component: HomePage,
      },
      {
        path: '/about/',
        component: AboutPage,
      }
    ],
  };
</script>

<App {...f7params}>
  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />

  <Panel left cover dark>
    <Navbar title="Left Panel" />
    <Block>Left panel content</Block>
  </Panel>

  <Panel right reveal>
    <Navbar title="Right Panel" />
    <Block>Right panel content</Block>
  </Panel>
</App>
