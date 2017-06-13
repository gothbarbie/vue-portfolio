<template>
  <ul>
    <li class="active"><a href="/"><i class="ion-code" /><div>Experience</div></a></li>
    <li><a href="/recently"><i class="ion-fork-repo" /><div>Recently</div></a></li>
    <li><a href="/contact"><i class="ion-person" /><div>Contact</div></a></li>
  </ul>
</template>

<style lang="postcss" scoped>
  i {
    font-size: 1.5em;
  }
  ul {
    width: 100%;
    height: 50px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    align-items: center;
  }
  li {
    text-align: center;
    color: #888;
    padding: .4em 1em;

    & div {
      font-size: .8em;
    }
  }
  a {
    text-decoration: none;
    &:link {
      color: var(--color-tundora);
    }
    &:visited {
      color: var(--color-tundora);
    }
    &:hover {
      color: var(--color-fuel-yellow);
    }
    &:active {
      color: var(--color-fuel-yellow);
    }
  }

  .active {
    color: var(--color-fuel-yellow);
    border-bottom: 4px solid var(--color-fuel-yellow);
  }
  
  
</style>