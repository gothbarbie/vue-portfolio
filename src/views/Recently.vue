<template>
  <main>
    <section class="green">
      <div class="wrapper">
        <h1>Recently</h1>
      </div>
    </section>

    <recent-item v-for="(recently, i) in recentlies" :recently="recently" :key="i"></recent-item>

  </main>
</template>

<script>
  import { mapActions } from 'vuex'
  import RecentItem from '@/components/RecentItem'
  import moment from 'moment'

  export default {
    name: 'Recently',
    created() {
      this.loadRecentlies()
    },
    computed: {
      recentlies() {
        return this.$store.getters.recentlies
      }
    },
    methods: {
      ...mapActions(['loadRecentlies'])
    },
    components: {
      RecentItem
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
</style>