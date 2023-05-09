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
    <button class="create" @click="createPopup">
      + Create Company
    </button>
    <section>
      <button class="create" @click="createPopup">
        + Create Company
      </button>
      <div class="popup off" @click="createPopup">
        <div class="popupForm" @click.stop>
          Meep moop!
        </div>
      </div>
      <ul class="listView">
        <h2>
          Your Companies
        </h2>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Captain Morgan
            </RouterLink>
          </p>
        </li>
        <h2>
          Affiliated Companies
        </h2>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              The Caribbean Rum Factory
            </RouterLink>
          </p>
        </li>
      </ul>
    </section>
  </main>
  <Footer />
</template>

<style lang="sass" scoped>

h2
  margin-bottom: .5rem

</style>
