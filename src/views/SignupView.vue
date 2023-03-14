<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()


const name = ref("")
const email = ref("")
const password = ref("")
const repeatPassword = ref("")

const errorMessage = ref()

const register = (e) => {
  e.preventDefault()

  if(password.value != repeatPassword.value){
    errorMessage.value = "Passwords dose'nt match 3:"

  }else{
    fetch(
      "http://localhost:4000/api/auth/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value
        })
      }
    )
    .then(data => {
      /* Login in user */
      localStorage.setItem("name", name.value)
      localStorage.setItem("email", email.value)
      localStorage.setItem("isLoggedIn", true) /* <- ? should be edited not made */
      localStorage.setItem("token", data)
      /* Wohooo! it worked :3 */
      router.push('/')

    })
    .catch(error => {
      errorMessage.value = error
    })
  }
}
</script>

<template>
  <Header />
  <main>
    <form>
      <p v-html="errorMessage"></p>
      <input type="text" placeholder="Name" v-model="name">
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="password" placeholder="Repeat Password!" v-model="repeatPassword">
      <button @click="register">Register!</button>
    </form>
  </main>
</template>

<style lang="sass">
    
</style>
