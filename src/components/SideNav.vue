<script setup>
import { RouterLink } from 'vue-router'

const isLoggedIn = localStorage.getItem("isLoggedIn")

</script>

<template>
  <aside>
    <nav>
      <template v-if="isLoggedIn">
        <ul>
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
        </ul>
      <!-- } -->
      </template>

      <!-- else { -->
      <template v-else>
        <p>
            Ehh something wrong
        </p>
      <!-- } -->
      </template>
    </nav>
  </aside>
</template>

<style lang="sass" scoped>

aside
    background: #faf2dc
    max-width: 240px
    width: 100%
    min-height: 100vh
    &.off
        display: none

</style>