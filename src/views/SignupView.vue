<script setup>
import { ref } from 'vue';
import Header from '../components/HeaderComponent.vue'
import { register } from '../modules/AuthCrud';
import { useRouter } from 'vue-router';

const router = useRouter()

const name = ref("")
const email = ref("")
const password = ref("")
const repeatPassword = ref("")

const result = ref()

const prepareRegister = async (e) => {
  e.preventDefault()

  result.value = await register(
    name.value,
    email.value,
    password.value,
    repeatPassword.value
  )

  if(result.value == "success"){
    router.push('/')
  }

  //! This stuff does not wait for result...
  console.log(result.value)
}

</script>

<template>
  <Header />
  <main>
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
