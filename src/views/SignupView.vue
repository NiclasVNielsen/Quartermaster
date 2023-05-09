<script setup>
import { ref } from 'vue';
import SideNav from '../components/SideNav.vue'
import { register } from '../modules/AuthCrud';
import { useRouter } from 'vue-router';

const router = useRouter()

/* Remove placeholder data */
const name = ref("")
const email = ref("")
const password = ref("")
const repeatPassword = ref("")

const prepareRegister = (e) => {
  e.preventDefault()

  new Promise((res, rej) => {
    register(res, rej,
      name.value,
      email.value,
      password.value,
      repeatPassword.value
    )
  })
  .then(response => {
    if(response == "success"){
      router.push('/boards')
    }else{
      console.log("Ehhh Error!...")
      console.log(response)
    }
  })
}

</script>

<template>
  <main>
    <SideNav />
    <section>
      <form class="container">
        <h2>
          Sign up!
        </h2>
        <p v-text="result"></p>
        <table class="box">
          <tr>
            <td>
              <label for="name">Name:</label>
            </td>
            <td>
              <input type="text" id="name" v-model="name">
            </td>
          </tr>
          <tr>
            <td>
              <label for="email">Email:</label>
            </td>
            <td>
              <input type="text" id="email" v-model="email">
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">Password:</label>
            </td>
            <td>
              <input type="password" id="password" v-model="password">
            </td>
          </tr>
          <tr>
            <td>
              <label for="repeatPassword">Repeat Password:&nbsp;</label>
            </td>
            <td>
              <input type="password" id="repeatPassword" v-model="repeatPassword">
            </td>
          </tr>
        </table>
        <p class="loginLink">
          <router-link to="/login">
            Already have an account? Login here!
          </router-link>
        </p>
        <button class="button" @click="prepareRegister">Enter!</button>
      </form>
    </section>
  </main>
</template>

<style lang="sass">
          
section
  display: flex
  justify-content: center
  align-items: center

.container
  max-width: 600px
  
h2
  font-size: 2em
  color: var(--waterText)
  margin-bottom: .5rem

input
  margin-bottom: .5em

tr:last-of-type
  td
    input
      margin-bottom: 0

.loginLink
  margin-bottom: .8em
  text-align: center
  a
    color: var(--waterText)
    transition: 100ms
    &:hover
      color: var(--waterTextHighlight)

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
    label
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

</style>
