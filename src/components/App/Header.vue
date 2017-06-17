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
    background-color: var(--color-alabaster);
    margin: 0;
    display: flex; 
    justify-content: center;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    padding: 0 2rem;
  }
  h1 {
    font-family: Roboto, sans-serif;
    font-size: 1.4em;
    display: flex;
    align-items: center;
  }
  .firstName {
    font-weight: 900;
    text-transform: uppercase;
    color: var(--color-emperor);
    letter-spacing: -1px;
  }
  .lastName {
    font-weight: 100;
    text-transform: uppercase;
    color: var(--color-tundora);
    letter-spacing: -1px;
  }
  .separator {
    color: var(--color-emperor);
    padding: 0 .2em;
    font-weight: 200;
  }
  .title {
    font-weight: 700;
    letter-spacing: -1px;
    color: var(--color-shiny-mantis);
    font-size: .8em;
  }
</style>