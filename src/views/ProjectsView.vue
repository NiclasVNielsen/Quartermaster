<script setup>
import SideNav from '../components/SideNav.vue'
import Footer from '../components/FooterComponent.vue'

const createPopup = () => {
  const popup = document.querySelector(".popup")

  popup.classList.toggle("off");
}
</script>

<template>
  <main>
    <SideNav />
    <section>
      <button class="create" @click="createPopup">
        + Create Project
      </button>
      <div class="popup off" @click="createPopup">
        <div class="popupForm" @click.stop>
          Meep moop!
        </div>
      </div>
      <ul class="listView">
        <h2>
          Personal
        </h2>
        <li>
          <p class="big">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
        </li>
        <h2>
          Company
        </h2>
        <li>
          <p class="big">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
        </li>
      </ul>
    </section>
  </main>
  <Footer />
</template>

<style scoped lang="sass">

h2
  margin-bottom: .5rem

</style>
