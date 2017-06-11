<template>
  <header>
    <div class="wrapper">
      <h1>
        <span class="firstName">Hanna</span><span class="lastName">Söderström</span>
        <span class="separator">|</span>
        <span class="title">Web Developer</span>
      </h1>
      <nav>
        <app-navigation></app-navigation>
      </nav>
    </div>
  </header>
</template>

<script>
  import Navigation from '@/components/App/Navigation'
  export default {
    components: {
      appNavigation: Navigation
    }
  }
</script>

<style lang="postcss" scoped>
  header {
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
    display: flex; 
    justify-content: center;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-family: Roboto, sans-serif;
    font-size: 1.5em;
    display: flex;
    align-items: center;
  }
  nav {
  }
  .firstName {
    font-weight: 900;
    text-transform: uppercase;
    color: #555;
    letter-spacing: -1px;
  }
  .lastName {
    font-weight: 100;
    text-transform: uppercase;
    color: #444;
    letter-spacing: -1px;
  }
  .separator {
    color: #555;
    padding: 0 .2em;
    font-weight: 200;
  }
  .title {
    font-weight: 700;
    letter-spacing: -1px;
    color: #68cb60;
    font-size: .8em;
  }
</style>