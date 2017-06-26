<template>
  <main>
    <div class="wrapper">
      <h1>Dashboard</h1>

      <h2>New Recently</h2>
      <form method="POST">

        <div class="left">
          
          <div class="formElement">
            <label for="title">Title</label>
            <input type="text" v-model="recently.title" placeholder="What's up?"/>
          </div>
          <div class="formElement">
            <label for="content">Content:</label>
            <textarea v-model="recently.content" rows="4"></textarea>
          </div>

          <div class="alignRight">
            <input class="button" value="Create" @click="saveRecently">
          </div>
        </div>

      </form>
    </div>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        recently: {
          title: '',
          content: ''
        },
        experience: {
          title: '',
          content: ''
        }
        
      }
    },
    methods: {
      saveRecently() {
        // store Recently in Database
      },
      saveExperience() {
        // store Experience in Database
      }
    }
  }
</script>

<style lang="postcss" scoped>
  h1 {
    text-align: left;
  }
  .wrapper {
    padding: 2em;
  }
</style>