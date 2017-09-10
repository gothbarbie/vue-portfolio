<template>
  <main>
    
    <section class="green">
      <div class="wrapper flex title">
        <h1>Contact</h1>
      </div>
    </section>
    
    <section class="contact">
      <div class="wrapper">
        <div class="left padding">
          <img class="hanna" src="../assets/img/hanna.jpg" alt="Hanna" />
        </div>
        <div class="right padding">
          <p>You can reach my on my email <a href="mailto:info@hannasoderstrom.com">info@hannasoderstrom.com</a>.</p>
          <p>I am also available through social media.</p>
          <ul class="socialMediaLinks">
            <li>
              <div>
                <i class="ion-social-twitter" />
              </div>
              <div>
                <a href="https://twitter.com/devSoderstrom">@devSoderstrom</a>
              </div>
            </li>
            <li>
              <div>
                <i class="ion-social-github" />
              </div>
              <div>
                <a href="https://github.com/gothbarbie">gothbarbie</a>
              </div>
            </li>
            <li>
              <div>
                <i class="ion-social-linkedin" />
              </div>
              <div>
                <a href="https://www.linkedin.com/in/hannasoderstromwebdev/">hannasoderstromwebdev</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </main>
</template>

<style lang="postcss" scoped>
  main {
    display: block;
    width: 100%;
  }
  .contact {
    margin: 2em 0;
  }
  .alignRight {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .socialMediaLinks {
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & i {
      font-size: 2em;
      color: var(--color-dove-gray);
      margin-right: 1rem;
      width: 2rem;
    }
  } 
  .socialMediaLinks li {
    line-height: 2em;
    width: 220px;
    display: flex;
    align-items: center;
  }
  .wrapper {
    padding: 0 2em;
  }
  .hanna {
    max-width: 200px;  
    border-radius: 100px;
    margin: 1em auto;
    display: block;
  }
  @media (min-width: 768px) {
    .contact .wrapper {
      display: flex;
      align-items: center;

      & h1 {
        text-align: left; 
      }

      & img {
        width: 50%;
      }
      & .text {
        width: 50%;
      }
    }
    .wrapper {
      display: flex;
      flex-direction: row;
    }
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
  }
  @media (min-width: 1000px) {
    .wrapper {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
</style>