<template>
  <ul>
    <router-link to="/home" activeClass="active" tag="li"><i class="ion-code" /><div>Experience</div></router-link>
    <router-link to="/recently" activeClass="active" tag="li"><i class="ion-fork-repo" /><div>Recently</div></router-link>
    <router-link to="/contact" activeClass="active" tag="li"><i class="ion-person" /><div>Contact</div></router-link>
  </ul>
</template>

<style lang="postcss" scoped>
  i {
    font-size: 1.5em;
  }
  ul {
    padding: 0;
    margin: 0;
    height: 50px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    align-items: center;
    background-color: #f8f8f8;
  }
  li {
    text-align: center;
    color: #888;
    padding: .3rem 1rem;

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
    border-bottom: 2px solid var(--color-fuel-yellow);
  }
   @media (min-width: 768px) {
     ul {
       display: none;
     }
   }
  
</style>