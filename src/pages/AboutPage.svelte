<script>
  import { Page, Navbar, Block, NavTitle, NavLeft, NavRight, Link } from 'framework7-svelte';
</script>

<Page>
  <Navbar>
    <NavLeft>
      <Link iconIos="f7:arrow_left" back backLink="Back" />
      <Link iconIos="f7:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle>About</NavTitle>
    <NavRight>
      <Link iconIos="f7:ellipsis_vertical" panelOpen="right" />
    </NavRight>
  </Navbar>

  <Block>
    <p>
      This is the About page. Welcome to our application!
    </p>
    <p>
      Here you can add information about your app, team, or any other content.
    </p>
  </Block>
</Page>
