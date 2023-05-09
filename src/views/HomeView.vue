<script setup>
import SideNav from '../components/SideNav.vue'
</script>

<template>
  <main>
    <SideNav />
    <section>
      <div class="container">
        <h1>
          Ahoy Scallywaggy!
        </h1>
        <div class="box">
          <p>
            And welcome aboard this totally awesome piece of software where you can get ya crew in order, so you
            wont ever have to question who's turn it be to fix up the deck when she got a scrap, <br> Aaargh!
          </p>
        </div>
        <div class="linkContainer">
          <router-link class="button" to="/login">
            Login
          </router-link>
          <router-link class="button" to="/signup">
            Sign up
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
    
section
  display: flex
  justify-content: center
  align-items: center

.container
  max-width: 600px
  
h1
  font-size: 2em
  color: var(--waterText)
  margin-bottom: .5rem

.box
  border-bottom: 3px solid var(--darkSandBg)
  border-left: 3px solid var(--darkSandBg)
  background:  var(--sandBg)
  padding: 25px
  border-radius: var(--br)
  transition: 100ms
  box-shadow: var(--darkText) 0 0 18px -10px
  margin-bottom: 1rem
  line-height: 1.5em
  &:hover
    border-left: 3px solid var(--waterText)
    border-bottom: 3px solid var(--waterText)
    p
      color: var(--waterText)
      transition: 100ms

.button
  background: radial-gradient(farthest-corner at 5% 5%, var(--neutralBg) 0%, var(--waterBg) 250%), var(--neutralBg)
  padding: .4em .6em
  border-radius: 20px
  border: solid 3px var(--waterText)
  color: var(--waterText)
  font-weight: 700
  transition: 100ms
  cursor: pointer
  margin: 0 .25em
  &:hover
    border: solid 3px var(--waterTextHighlight)
    color: var(--waterTextHighlight)

.linkContainer
  display: flex
  justify-content: center

</style>