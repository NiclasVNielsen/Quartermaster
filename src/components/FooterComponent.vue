<script setup>
import { RouterLink } from 'vue-router'

const isLoggedIn = localStorage.getItem("isLoggedIn")

const logout = () => {
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("email")
  localStorage.removeItem("token")
  window.location.reload()
}

</script>

<template>
  <footer>
    <nav>
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
  </footer>
</template>

<style lang="sass" scoped>

footer
  background: #dcfaf8
  nav
    display: flex

</style>