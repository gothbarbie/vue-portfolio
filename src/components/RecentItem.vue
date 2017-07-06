<template>
  <article>  
    <header class="dark">
      <div class="wrapper flex">
        <h2>{{ recently.title }}</h2>
        <div class="date">
          <div class="month">{{ getMonth }}</div>
          <div class="day">{{ getDay }}</div>
          <div class="year">{{ getYear }}</div>
        </div>
      </div>
    </header>
  
    <main class="wrapper white col">
      <div class="left">
        <img class="recentlyImage" :src="renderUrl" alt="An image" />
      </div>
      <div class="right" v-html="recently.content"></div>
    </main>
  </article>
</template>    
    
<script>
  import moment from 'moment'

  export default {
    props: {
      recently: Object
    },
    computed: {
      renderUrl () {
        return require('../assets/img/posts/' + this.recently.image)
      },
      getMonth () {
        return moment(this.recently.date).format('MMM')
      },
      getDay () {
        return moment(this.recently.date).format('DD')
      },
      getYear () {
        return moment(this.recently.date).format('YYYY')
      }
    }
  }

</script>

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
    align-items: flex-start;
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