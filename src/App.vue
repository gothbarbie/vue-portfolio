<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
    <nav id="footer-nav">
      <app-nav-footer></app-nav-footer>
    </nav>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/App/Header'
import NavigationFooter from '@/components/App/NavigationFooter'
import Footer from '@/components/App/Footer'

export default {
  components: {
    appHeader: Header,
    appNavFooter: NavigationFooter,
    appFooter: Footer
  }

}
</script>

<style lang="postcss">
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
  box-sizing: border-box;
}
/* General */

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');

body {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper {
  width: 100%;
}  

h2, h3, h4, h5, h6 {
  font-family: Montserrat, sans-serif;
  font-weight: 300;
}

h1 {
  font-size: 2em;
  text-align: center;
  line-height: 3em;
}

h2 {
  font-size: 1.5em;
  font-weight: 400;
  margin: .6em 0;
}

h3 {
  font-family: Roboto, sans-serif;
  font-size: 1.5em;
}

em {
  font-style: italic;
}

small {
  text-transform: uppercase;
}

strong {
  font-weight: bold;
}

#footer-nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
}

a {
  &:link{
    color: var(--color-fuel-yellow);
    text-decoration: underline;
  }
  &:visited{
    color: var(--color-fuel-yellow);
    text-decoration: underline;
  }
  &:hover{
    color: var(--color-fuel-yellow);
    text-decoration: none;
  }
  &:active{
    color: var(--color-fuel-yellow);
    text-decoration: none;
  }
}

.green {
  background-image: -moz-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
  background-image: -webkit-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
  background-image: -ms-linear-gradient( 90deg, rgb(133,203,106) 0%, rgb(74,203,86) 100%);
  background-color: var(--color-mantis);
  color: #fff;
}

.white {
  background: var(--color-white);
  color: #555;
}

.dark {
  background-color: var(--color-mine-shaft);
  color: var(--color-white);
}

p {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.7em;
  color: #555;
  margin: 0 0 1.25em 0;
  padding: 0;
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
</style>
