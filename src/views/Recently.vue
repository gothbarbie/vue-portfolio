<template>
  <main>
    <section class="green">
      <div class="wrapper">
        <h2>Recently</h2>
      </div>
    </section>

    <article>  
      <header class="dark">
        <h3>React and Redux</h3>
        <div class="date">
          <div class="month">May</div>
          <div class="day">1</div>
          <div class="year">2017</div>
        </div>
      </header>
    
      <main class="white">
        <img class="recentlyImage" src="/static/post-image.jpg" alt="An image" />
        <p>Today I finished my most recent course on React.</p> 
        <p>It was a really good, entertaining and educational course 
        by one of my favorite educators - Stephen Grider. I can really recommend it!</p>
        <p>Use this link to get it at a reduced cost: <a href="#">Udemy</a></p>
      </main>
    </article>
    
  </main>
</template>

<style lang="postcss" scoped>
  .green {
    display: flex;
    background-image: -moz-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
    background-color: #7acb66;
    color: var(--color-white);
  }
  .white {
    background: var(--color-white);
    color: #555;
    padding: 2em 2em 4em;
    justify-content: center;
  }
  .wrapper {  
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    margin-bottom: .5em;
  }
  .dark {
    background-color: var(--color-mine-shaft);
  }
  .date {
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
  }
  .month {
    font-size: 1em;
  }
  .day {
    font-size: 1.2em;
  }
  .year {
    font-size: .9em;
  }
  .recentlyImage {
    max-width: 100%;
    border: 1px solid var(--color-fruit-salad);
    margin-bottom: 2em;
  }
</style>