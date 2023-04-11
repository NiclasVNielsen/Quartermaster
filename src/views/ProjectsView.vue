<script setup>
import Header from '../components/HeaderComponent.vue'
</script>

<template>
  <Header />
  <main>
    <button>
      Create Project
    </button>
    <ul>
      <li>
        <p>
          Morgans long lost rom vault!
        </p>
        <p>
          <RouterLink to="/company/id"> <!-- /company/id -->
            <!-- Part of -->Company
          </RouterLink>
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
