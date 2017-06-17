<template>
  <main>
    <section class="green">
      <div class="wrapper">
        <h1>Contact</h1>
      </div>
    </section>
    
    <section class="white">
      <form class="contactForm">
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    margin-bottom: .5em;
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
  .formElement {
    margin: 0 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  input, textarea {
    width: 100%;
    border-bottom: 1px solid #4f9b49;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 1rem;
    padding: .2rem;
    margin: .25rem 0;
  }
  select {
    border: 1px solid #4f9b49;
    border-radius: 0;
    font-size: 1rem;
    padding: .2rem;
    outline: none;

    & option {
      color: var(--color-emperor);
    }
  }
  .button {
    width: auto;
    color: var(--color-emperor);
    padding: .5rem 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(205, 205, 205);
    border-radius: 1px;
    background-image: -moz-linear-gradient( 90deg, rgb(224,224,224) 0%, rgb(250,250,250) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(224,224,224) 0%, rgb(250,250,250) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(224,224,224) 0%, rgb(250,250,250) 100%);
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