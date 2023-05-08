<script setup>
import { RouterLink } from 'vue-router'

const isLoggedIn = localStorage.getItem("isLoggedIn")

/* const email = localStorage.getItem("email") */
/* const logout = () => {
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("email")
  localStorage.removeItem("token")
  window.location.reload()
} */

</script>

<template>
  <aside>
    <nav>
      <section>
        <RouterLink to="/login">
          <span class="material-symbols-rounded">
            lock
          </span>
          <span>
            Login
          </span>
        </RouterLink>
        <RouterLink to="/login">
          <span class="material-symbols-rounded">
            avg_pace
          </span>
          <span>
            Meep
          </span>
        </RouterLink>
        <RouterLink to="/login">
          <span class="material-symbols-rounded">
            cake
          </span>
          <span>
            Uhhh
          </span>
        </RouterLink>
        <RouterLink to="/login">
          <span class="material-symbols-rounded">
            ecg_heart
          </span>
          <span>
            Moop
          </span>
        </RouterLink>
        <RouterLink to="/login">
          <span class="material-symbols-rounded">
            battery_low
          </span>
          <span>
            Aaaah
          </span>
        </RouterLink>
      </section>
      <ul>
        <template v-if="isLoggedIn">
          <li>
            <!-- Companies -->
            <RouterLink to="/companies">Companies</RouterLink>
            <!-- Print all the companies here -->
          </li>
          <li>
            <!-- Projects -->
            <RouterLink to="/projects">Projects</RouterLink>
            <!-- Print all the projects here -->
          </li>
          <li>
            <!-- Boards -->
            <RouterLink to="/boards">Boards</RouterLink>
            <!-- Print all the boards here -->
          </li>
          <!-- } -->
        </template>
        <template v-else>
          <li>
            <!-- Companies -->
            <RouterLink to="/home">Home</RouterLink>
            <!-- Print all the companies here -->
          </li>
          <!-- } -->
        </template>
      </ul>
    </nav>
  </aside>
</template>

<style lang="sass" scoped>

aside
  position: relative
  max-width: 100px
  width: 100%
  min-height: 100vh
  >nav
    display: flex
    >section
      position: absolute
      background: var(--sandBg)
      z-index: 5
      width: 100px
      height: 100%
      border-right: solid 2px var(--neutralBg)
      >a
        color: var(--darkText)
        transition: 100ms
        >span
          display: block
          text-align: center
          &:first-of-type
            font-size: 3.5em
            margin-top: 25px
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48
          &:last-of-type
            font-weight: 700
            margin-top: 5px
            margin-bottom: 25px
        &:hover
          color: var(--darkTextHighlight)
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48
    >ul
      position: absolute
      z-index: 4
      width: 240px
      height: 100%
      padding: 25px 10px
      left: 100%
      transform: translateX(-100%)
      transition: 100ms
      border-radius: 0 var(--br) var(--br) 0
      background: var(--sandBg)
      >li
        padding: 0 10px 0 10px
    &:hover
      >ul
        transform: translateX(0%)

</style>