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
    <p>
      This footer currently serves no purpose :3
    </p>
  </footer>
</template>

<style lang="sass" scoped>

footer
  padding: 40px 5% 40px calc( 100px + 5% )
  background: var(--darkSandBg)
  nav
    display: flex

</style>