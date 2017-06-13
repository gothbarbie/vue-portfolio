<template>
  <main>

    <section class="introduction">
      <img class="hanna" src="/static/hanna.jpg" alt="Hanna" />
      <h1>Hi, I'm Hanna</h1>
      <p>As a kid I dreamed of being an inventor, creating really cool 
        machines and find solutions to problems people couldn’t 
        imagine...</p>

      <p>I grew up, someone invented the Internet and I became a web 
        developer.</p>

      <p>Now I build awesome web applications and find really cool 
        solutions to problems most people can’t imagine!</p>

    </section>
    
    <section class="green">
      <div class="wrapper">
        <div class="left">
          <h2>Experience</h2>
        </div>
        <div class="right green-right">
          <a href="#" class="download"><i class="ion-document" /> <span>Download CV</span></a>
        </div>
      </div>
    </section>

    <article>
      <div class="wrapper">
        <div class="left">
          <img class="iteamLogo" src="/static/iteam-logo.png" alt="Iteam"/>
          <div class="date">Aug. 2016 - Today</div>
        </div>
        <div class="right">
          <p>Culture, value and fun is the keywords for Iteam, where I work as 
            a Web Developer. We work in an agile manner, in self-organising 
            teams and in near relationship with our clients, to bring them 
            value, not only with technology, but with culture as well. Our core 
            values influence not only our daily work, but the clients we take 
            on, the projects we choose to be a part of and therefore also the 
            dedication and eagerness with which we produce really great 
            results for a wide range of businesses.</p>
          
          <p>My roles has been primarely focused on front end development 
          so far, using technologies such as:</p>

          <div class="techLogos">
            <img class="logoJs" src="/static/js.png" alt="JavaScript" />
            <img class="logoReact" src="/static/react.png" alt="React" />
            <img class="logoReactNative" src="/static/react-native.png" alt="React Native" />
            <img class="logoVue" src="/static/vue.png" alt="Vue" />
            <img class="logoNode" src="/static/node.png" alt="Node" />
            <img class="logoWebpack" src="/static/webpack.png" alt="Webpack 2" />
          </div>

          <p>I have grown a great deal during the last year through my daily 
            and continous work with cutting edge technologies, working with 
            really experienced and talented people in all areas of web 
            development.</p>
        </div>
      </div>
    </article>
  
  </main>
</template>

<style lang="postcss" scoped>
  main {
    display: block;
    width: 100%;
  }
  .hanna {
    max-width: 200px;  
    border-radius: 100px;
    margin: 1em auto;
    display: block;
  }
  .introduction {
    background-color: #333;
    color: #fff;
    padding: 2em;
  }
  .introduction p {
    color: #fff;
  }
  h1 {
    font-size: 2em;
    text-align: center;
    line-height: 3em;
  }
  .green {
    display: flex;
    justify-content: center;
    background-image: -moz-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-color: var(--color-mantis);
    color: #fff;
  }
  .download { 
    display: block;
    width: 100%;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
    position: absolute; 
    bottom: .5em;
    left: 0;
    color: #fff;
    font-size: 1em;
    text-decoration: none;
    text-align: right;

    & span {
      text-decoration: underline;
    }
  }
  article {
    background: #fff;
    color: #555;
    padding: 4em 0;
    display: flex;
    justify-content: center;
  }
  .wrapper {  
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2em;
  }
  .green-right {
    position: relative;
  }
  .iteamLogo {
    max-width: 100%;
    height: auto;
  }
  .date {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    text-align: right;
    letter-spacing: -1px;
    line-height: 4em;
  }
  .techLogos {
    width: 100%;
    text-align: center;
  }
  .techLogos img {
    margin: .5em;
  }

  .logoJs {
    width: 50px;
  }

  .logoReact {
    width: 120px;
  }

  .logoReactNative {
    width: 180px;
  }

  .logoVue {
    width: 50px;
  }

  .logoNode {
    width: 130px;
  }

  .logoWebpack {
    width: 190px;
  }

  .left, .right {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 901px) {
    .wrapper {
      max-width: 1000px;
    }
    .left {
      flex: 1;
      margin: 0 2em 0 0;
    }
    .right {
      flex: 1;
      margin: 0 0 0 2em;
    }
    .date {
      line-height: 4em;
    }
  }
</style>