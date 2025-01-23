<script>
  import { Page, Navbar, Block, List, ListItem, NavTitle, NavLeft, NavRight, Link } from 'framework7-svelte';
</script>

<Page>
  <Navbar>
    <NavLeft>
      <Link iconIos="f7:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle>My App 2</NavTitle>
    <NavRight>
      <Link iconIos="f7:ellipsis_vertical" panelOpen="right" />
    </NavRight>
  </Navbar>
  
  <Block>
    <p>Welcome to Framework7 Svelte!</p>
  </Block>
  <List>
    <ListItem link="/about/" title="About" />
  </List>
  <Block>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Block>
</Page>
