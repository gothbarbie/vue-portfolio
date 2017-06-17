<template>
  <main>
    <section class="green">
      <div class="wrapper">
        <h1>Recently</h1>
      </div>
    </section>

    <article>  
      <header class="dark">
        <div class="wrapper flex">
          <h2>React and Redux</h2>
          <div class="date">
            <div class="month">May</div>
            <div class="day">1</div>
            <div class="year">2017</div>
          </div>
        </div>
      </header>
    
      <main class="wrapper white col">
        <div class="left">
          <img class="recentlyImage" src="/static/post-image.jpg" alt="An image" />
        </div>
        <div class="right">
          <p>Today I finished my most recent course on React.</p> 
          <p>It was a really good, entertaining and educational course 
          by one of my favorite educators - Stephen Grider. I can really recommend it!</p>
          <p>Use this link to get it at a reduced cost: <a href="#">Udemy</a></p>
        </div>
      </main>
    </article>
    
    <article>  
      <header class="dark">
        <div class="wrapper flex">
          <h2>React and Redux</h2>
          <div class="date">
            <div class="month">May</div>
            <div class="day">1</div>
            <div class="year">2017</div>
          </div>
        </div>
      </header>
    
      <main class="wrapper white col">
        <div class="left">
          <img class="recentlyImage" src="/static/post-image.jpg" alt="An image" />
        </div>
        <div class="right">
          <p>Today I finished my most recent course on React.</p> 
          <p>It was a really good, entertaining and educational course 
          by one of my favorite educators - Stephen Grider. I can really recommend it!</p>
          <p>Use this link to get it at a reduced cost: <a href="#">Udemy</a></p>
        </div>
      </main>
    </article>

  </main>
</template>

<style lang="postcss" scoped>
  .wrapper {  
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    margin: 0 auto;
  }
  .col {
    flex-direction: column;
    padding: 2rem;
  }
  .date {
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    border-radius: 4px; 
    background: #fff;
    color: var(--color-mine-shaft);
    padding: .5rem;
    margin: -3px 0;
    box-shadow: 0 1px 2px rgba(0,0,0,.15);
  }
  .month {
    font-size: .8em;
  }
  .day {
    font-size: 1.2em;
  }
  .year {
    font-size: .8em;
  }
  .recentlyImage {
    max-width: 100%;
    border: 1px solid var(--color-fruit-salad);
    margin-bottom: 2em;
  }
  @media (min-width: 768px) {
    .wrapper {
      flex-direction: row;
    }
    .left, .right {
      width: 50%;
    }
    .left {
      padding-right: .5rem;
    }
    .right {
      padding-left: .5rem;
    }
  }
</style>