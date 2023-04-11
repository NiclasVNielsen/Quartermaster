<script setup>
import Header from '../components/HeaderComponent.vue'
</script>

<template>
  <Header />
  <main>
    <button>
      Create Company
    </button>
    <ul>
      <li>
        <p>
          Captain Morgans
        </p>
        <p>
          <RouterLink to="/board/id"> <!-- /board/id -->
            Open!
          </RouterLink>
        </p>
      </li>
    </ul>
  </main>
</template>

<style lang="sass">
    
</style>
