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
      Create Company
    </button>
    <div class="popup off" @click="createPopup">
      <div class="popupForm" @click.stop>
        Meep moop!
      </div>
    </div>
    
  </main>
</template>

<style lang="sass">
    
</style>
