<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
    <nav>
      <app-nav active="experience"></app-nav>
    </nav>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/App/Header'
import Navigation from '@/components/App/Navigation'
import Footer from '@/components/App/Footer'

export default {
  components: {
    appHeader: Header,
    appNav: Navigation,
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

// General

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
body {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  max-width: 1000px;
  width: 100%;
}  

h2, h3, h4, h5, h6 {
  font-family: Montserrat, sans-serif;
  font-weight: 300;
}

h2 {
  font-size: 2em;
  margin: 1.5em 0 1.5em;
}

h3 {
  font-family: Roboto, sans-serif;
  font-size: 1.5em;
}

nav {
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  background-color: #f8f8f8;
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

@media (min-width: 901px) {

  h2 {
    font-size: 2em;
    margin: 3em 0 2em;
  }

}

p {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.7em;
  color: #555;
  margin: 0 0 1.25em 0;
  padding: 0;
}
</style>
