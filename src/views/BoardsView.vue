<script setup>
import Header from '../components/HeaderComponent.vue'

const createPopup = () => {
  const popup = document.querySelector(".popup")

  popup.classList.toggle("off");
}
</script>

<template>
  <Header />
  <main>
    <button @click="createPopup">
      Create Board
    </button>
    <div class="popup off" @click="createPopup">
      <div class="popupForm" @click.stop>
        Meep moop!
      </div>
    </div>
    <ul>
      <li>
        <p>
          Find Morgans rum vault!
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
          Drink all Morgans rum!
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
