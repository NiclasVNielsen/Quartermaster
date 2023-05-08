<script setup>
import { ref } from 'vue';
import SideNav from '../components/SideNav.vue'
import { useRouter } from 'vue-router';

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
      localStorage.setItem("email", email.value)
      localStorage.setItem("isLoggedIn", true) /* <- ? should be edited not made */
      localStorage.setItem("token", data)
      
      /* Wohooo! it worked :3 */
      //router.push('/')
      router.push('/boards')
      return "success"
    })
    .catch(error => {
      errorMessage.value = error
    })
}
</script>

<template>
  <main>
    <SideNav />
    <form>
      Login!
      <p v-html="errorMessage"></p>
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button @click="login">Login!</button>
    </form>
  </main>
</template>

<style lang="sass">
    
</style>