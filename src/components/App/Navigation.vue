<template>
  <ul>
    <router-link to="/home" activeClass="active" tag="li"><div>Experience</div><i class="ion-code" /></router-link>
    <router-link to="/recently" activeClass="active" tag="li"><div>Recently</div><i class="ion-fork-repo" /></router-link>
    <router-link to="/contact" activeClass="active" tag="li"><div>Contact</div><i class="ion-person" /></router-link>
  </ul>
</template>

<style lang="postcss" scoped>
  
  ul {
    display: none;
  }
  
   @media (min-width: 768px) {
    i {
      font-size: 1.5em;
      margin-left: .5rem;
    }
    ul {
      padding: 0;
      margin: 0;
      font-family: Roboto, sans-serif;
      font-weight: 400;
      display: flex;
      list-style-type: none;
      justify-content: space-around;
      align-items: center;
      background-color: #f8f8f8;
    }
    li {
      display: flex;
      align-items: center;
      text-align: center;
      color: #888;
      padding: .3rem .5rem;
      margin: 0 .5rem;

      & div {
        font-size: .8em;
        display: inline-block;
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
      border-bottom: 2px solid var(--color-fuel-yellow);
    }
   }
</style>