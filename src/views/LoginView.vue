<script setup>
import { ref } from 'vue';
import SideNav from '../components/SideNav.vue'
import { useRouter } from 'vue-router';
import Footer from '../components/FooterComponent.vue'

const router = useRouter()

const email = ref("")
const password = ref("")

const errorMessage = ref()

const login = (e) => {
  e.preventDefault()
  fetch(
    "http://localhost:4000/api/auth/login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    }
  )
  .then(data => {
    /* Login in user */
    if(data.ok){
      localStorage.setItem("email", email.value)
      localStorage.setItem("isLoggedIn", true) /* <- ? should be edited not made */
      data.json().then(newData => {
        localStorage.setItem("id", newData.data.id)
        localStorage.setItem("token", newData.data.token)
      })
      
      /* Wohooo! it worked :3 */
      router.push('/boards')
      return "success"
    }else{
      errorMessage.value = "Ehh you typed something wrong 3:"
    }
  })
  .catch(error => {
    errorMessage.value = error
  })
}
</script>

<template>
  <main>
    <SideNav />
    <section>
      <form class="container">
        <h2>
          Login!
        </h2>
        <p v-html="errorMessage" v-if="errorMessage != ''" style="margin-bottom: .5em;"></p>
        <table class="box">
          <tr>
            <td>
              <label for="email">Email:&nbsp;</label>
            </td>
            <td>
              <input type="text" v-model="email" id="email">
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">Password:&nbsp;</label>
            </td>
            <td>
              <input type="password" v-model="password" id="password">
            </td>
          </tr>
        </table>
        <p class="signupLink">
          <router-link to="/signup">
            Don't have an account? Sign up here!
          </router-link>
        </p>
        <button class="button" @click="login">Enter!</button>
      </form>
    </section>
  </main>
  <Footer />
</template>

<style lang="sass" scoped>
        
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

.signupLink
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