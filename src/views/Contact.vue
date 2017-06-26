<template>
  <main>
    <section class="green">
      <div class="wrapper">
        <h1>Contact</h1>
      </div>
    </section>
    
    <section class="white">
      <form class="contactForm wrapper">
        <div class="left">
          
          <div class="formElement">
            <label for="name">Who are you?</label>
            <input type="text" name="name" placeholder="Your Name"/>
          </div>
          <div class="formElement">
            <label for="email">How can I reach you?</label>
            <input type="email" name="email" placeholder="your.email@example.com" />
          </div>
          <div class="formElement">
            <label for="subject">What is the subject?</label>
            <select>
              <option>Job oportunity</option>
              <option>Feedback &amp; Praise</option>
              <option>Personal / other...</option>
            </select>
          </div>
          <div class="formElement">
            <label for="message">Your message here:</label>
            <textarea name="message" rows="4"></textarea>
          </div>

          <div class="alignRight">
            <input class="button" type="submit" value="Send">
          </div>
        </div>

        <div class="right">
        </div>
      </form>
    </section>
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
    margin: 0 auto .5rem auto;
  }
  .contactForm {
    padding: 2rem;
  }
  .left, .right {
    width: 100%;
    margin: 0;
  }
  .right {
    display: none;
  }
  .alignRight {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  @media (min-width: 768px) {
    .left, .right {
      width: 50%;
    }
  }
</style>