<template>
  <main>
    
    <section class="green">
      <div class="wrapper">
        <div class="left">
          <h2>Experience</h2>
        </div>
        <div class="right green-right">
          <a href="#" class="download"><i></i>Download CV</a>
        </div>
      </div>
    </section>

    <article>
      <div class="wrapper">
        <div class="left">
          <img class="iteamLogo" src="/static/iteam-logo.png" alt="Iteam"/>
          <span class="date">Aug. 2016 - Today</span>
        </div>
        <div class="right">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore expedita quasi pariatur consequatur omnis deserunt distinctio deleniti numquam totam quos eius commodi beatae dolorum veniam, cumque quam quo ducimus?</p>
        </div>
      </div>
    </article>
  
  </main>
</template>

<style lang="postcss" scoped>
  .green {
    display: flex;
    justify-content: center;
    background-image: -moz-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-color: #7acb66;
    color: #fff;
  }
  .download { 
    font-family: Roboto, sans-serif;
    position: absolute; 
    bottom: 1em;
    left: 0;
    color: #fff;
  }
  article {
    background: #fff;
    color: #555;
    padding: 4em 0;
    display: flex;
    justify-content: center;
  }
  .wrapper {  
    max-width: 1000px;
    width: 100%;
    display: flex;
  }
  .left {
    flex: 1;
    margin: 0 1em 0 0;
  }
  .right {
    flex: 1;
    margin: 0 0 0 1em;
  }
  .green-right {
    position: relative;
  }
  .iteamLogo {
    max-width: 100%;
    height: auto;
  }
</style>