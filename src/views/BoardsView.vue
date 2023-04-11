<script setup>
import Header from '../components/HeaderComponent.vue'
</script>

<template>
  <Header />
  <main>
    <button>
      Create Board
    </button>
    <ul>
      <li>
        <p>
          Find Morgans rom vault!
        </p>
        <p>
          <RouterLink to="/project/id"> <!-- /project/id -->
            <!-- Assigned to -->Project
          </RouterLink>
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
      <li>
        <p>
          Drink all Morgans rom!
        </p>
        <p>
          <RouterLink to="/project/id"> <!-- /project/id -->
            <!-- Assigned to -->Project
          </RouterLink>
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
