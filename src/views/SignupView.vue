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
      console.log("Ehhh error!...")
      console.log(response)
    }
  })
}

</script>

<template>
  <main>
    <SideNav />
    <form>
      Sign up!
      <p v-text="result"></p>
      <input type="text" placeholder="Name" v-model="name">
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="password" placeholder="Repeat Password!" v-model="repeatPassword">
      <button @click="prepareRegister">Register!</button>
    </form>
  </main>
</template>

<style lang="sass">
    
</style>
