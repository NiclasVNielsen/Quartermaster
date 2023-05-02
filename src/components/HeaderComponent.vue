<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from "vue"

const isLoggedIn = localStorage.getItem("isLoggedIn")
const email = localStorage.getItem("email")

const logout = () => {
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("email")
  localStorage.removeItem("token")
  window.location.reload()
}

//! Needs to work better/Rework
//! Should be stored as local data
//? Your preferred layout
//? false = Aside view
//? true  = Header view
let pref = true

//? if only header is allowed on the page
let onlyOneNav = false

//? Initiate variables to make them global
let header
let aside

console.log("working! Global")
console.log(document.querySelector('header'))

onMounted(() => {
    //? Gets nav panels
    console.log("working! Mounted")
    header = document.querySelector('header')
    aside = document.querySelector('aside')

    if(header == undefined){
        //? If the aside nav doesn't exist use the header
        onlyOneNav = true
    }else{
        //? Sets up your preferred navigation
        if(pref == true){
            header.classList.add("off")
        }else{
            aside.classList.add("off")
        }
    }
})

//? Swaps between the two navigation types
const navSwap = () => {
    if(onlyOneNav == false){
        header.classList.toggle("off")
        aside.classList.toggle("off")
    }
}

</script>

<template>
  <header>
    <nav>
      <figure @click="navSwap" class="burger">
        Burg
      </figure>
      <div>
        <RouterLink to="/">Home</RouterLink>
      </div>
      
      <!-- If logged in { -->
      <template v-if="isLoggedIn">
        <ul>
          <li>
            <!-- Companies -->
            <RouterLink to="/companies">Companies</RouterLink>
          </li>
          <li>
            <!-- Projects -->
            <RouterLink to="/projects">Projects</RouterLink>
          </li>
          <li>
            <!-- Boards -->
            <RouterLink to="/boards">Boards</RouterLink>
          </li>
        </ul>
        <div>
          
          <div>
            {{ email }}
          </div>
          <button @click="logout">
            log out
          </button>
        </div>
      <!-- } -->
      </template>

      <!-- else { -->
      <template v-else>
        <div>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/signup">Sign up</RouterLink>
        </div>
      <!-- } -->
      </template>
    </nav>
  </header>
</template>

<style lang="sass" scoped>

header
  background: #faf2dc
  nav
    display: flex
  &.off
    display: none

</style>