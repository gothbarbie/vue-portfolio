<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <div class="name"><span class="firstName">Hanna</span><span class="lastName">Soderstrom</span></div><span class="separator">|</span><span class="title">Web Developer</span>
      </div>
      <div class="socialMedia">
        <p>If you want to get in touch with me, please use one of the following alternatives!</p>
        <ul class="socialMediaLinks">
          <li><a href="https://twitter.com/devSoderstrom"><i class="ion-social-twitter" /></a></li>
          <li><a href="https://github.com/gothbarbie"><i class="ion-social-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/hannasoderstromwebdev/"><i class="ion-social-linkedin" /></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  background-color: var(--color-mine-shaft);
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  background-image: -moz-linear-gradient( 112deg, rgb(0,0,0) 0%, rgb(255,255,255) 100%);
  background-image: -webkit-linear-gradient( 112deg, rgb(0,0,0) 0%, rgb(255,255,255) 100%);
  background-image: -ms-linear-gradient( 112deg, rgb(0,0,0) 0%, rgb(255,255,255) 100%);
}

.wrapper {
  padding: 4em 2em;
}
.logo {
  margin: 0 3em 2em;
  text-align: right;
  font-size: 1.45em;
}
.firstName {
  font-weight: 900;
  text-transform: uppercase;
  color: #ebebeb;
  letter-spacing: -1px;
}
.name {
  display: block;
}
.lastName {
  font-weight: 100;
  text-transform: uppercase;
  color: #ebebeb;
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
p {
  color: #fff;
  font-size: .8em;
}
.socialMedia {
  margin: 2em 0;
}
.socialMediaLinks {
  margin: 0 auto;
  width: 130px;
  display: flex;
  justify-content: space-around;
  & i {
    font-size: 2em;
    color: var(--color-dove-gray);
  }
} 
@media (min-width: 768px) {
  .wrapper {
    display: flex;
    align-items: center;
  }
}
</style>