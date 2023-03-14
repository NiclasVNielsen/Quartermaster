<script setup>
import { RouterLink } from 'vue-router'

console.log(localStorage)
const isLoggedIn = localStorage.getItem("isLoggedIn")
const name = localStorage.getItem("name")
const email = localStorage.getItem("email")

</script>

<template>
  <header>
    <nav>
      <div>
        <RouterLink to="/">Home</RouterLink>
      </div>
      
      <!-- If logged in { -->
      <template v-if="isLoggedIn">
        <div>
          {{ name }}, 
          {{ email }}
        </div>
        <div>
          <!-- Companies -->
          <!-- Projects -->
          <!-- Boards -->
        </div>
        <div>
          <!-- Log out -->
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