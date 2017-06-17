<template>
  <main>

    <section class="introduction">
      <div class="wrapper">
        <img class="hanna" src="/static/hanna.jpg" alt="Hanna" />
        <div class="text">
          <h1>Hi, I'm Hanna</h1>
          <p>As a kid I dreamed of being an inventor, creating really cool 
            machines and find solutions to problems people couldn’t 
            imagine...</p>

          <p>I grew up, someone invented the Internet and I became a web 
            developer.</p>

          <p>Now I build awesome web applications and find really cool 
            solutions to problems most people can’t imagine!</p>
        
          <a href="/static/hanna-soderstrom-cv-2017.pdf" class="download"><i class="ion-ios-download" /> <span>Download CV</span></a>
        </div>
      </div>
    </section>
    
    <section class="green">
      <div class="wrapper flex title">
        <h1>Experience</h1>
      </div>
    </section>

    <article>
      <div class="wrapper">
        <div class="left padding">
          <img class="iteamLogo" src="/static/iteam-logo.png" alt="Iteam"/>
          <div class="date">Aug. 2016 - Today</div>
        </div>
        <div class="right padding">
          <p>Culture, value and fun is the keywords for Iteam, where I work as 
            a Web Developer. We work in an agile manner, in self-organising 
            teams and in close relationship with our clients, to bring them 
            value. Not only with technology, but with culture as well. Our core 
            values - to produce value, to have fun and to do good - influence 
            not only our daily work, but the clients we take on, the projects 
            we choose to be a part of and therefore also the dedication and 
            eagerness with which we produce really great results for a wide 
            range of businesses.</p>
          
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

          <div class="customerLogos">
            <img class="logoTaxiStockholm" src="/static/taxi-stockholm.png" alt="Taxi Stockholm">
            <img class="logoMSF" src="/static/msf.png" alt="Medicins Sans Frontieres">
            <img class="logoVimla" src="/static/vimla.png" alt="Vimla">
          </div>
        </div>
      </div>
    </article>
  
  </main>
</template>

<script>
export default {
  name: 'Experience',
  created() {
    // const token // GET TOKEN

    // if (token) {
    //   let parsedToken
    //   try {
    //     parsedToken = JSON.parse(atob(token.split('.')[1]))
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }
  }
}
</script>

<style lang="postcss" scoped>
  .title {
    justify-content: space-between;
    padding: 0 2em;
  }
  main {
    display: block;
    width: 100%;
  }
  .padding {
    padding: 0 2em;
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
  .download { 
    display: block;
    width: 100%;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
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

   /* Tech Logos */
  .techLogos {
    width: 100%;
    text-align: center;

    & img {
      margin: .5em;  
    }
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


 /* Customer Logos */

  .customerLogos {
    width: 100%;
    text-align: center;

    & img {
      margin: .5em;
    }
  }

  .logoTaxiStockholm {
    width: 100px;
  }
  
  .logoMSF {
    width: 140px;
  }

  .logoVimla {
    width: 130px;
  }


  /* General */

  .left, .right {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 768px) {
    .hanna {
      max-width: 300px;  
      border-radius: 150px;
      margin: 1em auto;
      display: block;
    }
    .introduction .wrapper {
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