<script setup>
import SideNav from '../components/SideNav.vue'

const createPopup = () => {
  const popup = document.querySelector(".popup")

  popup.classList.toggle("off");
}
</script>

<template>
  <main>
    <SideNav />
    <button @click="createPopup">
      Create Project
    </button>
    <div class="popup off" @click="createPopup">
      <div class="popupForm" @click.stop>
        Meep moop!
      </div>
    </div>
    
    <ul>
      <li>
        <p>
          Morgans long lost rum vault!
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

<style scoped lang="sass">

</style>
