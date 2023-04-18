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
      Create Project
    </button>
    <div class="popup off" @click="createPopup">
      <div class="popupForm" @click.stop>
        Meep moop!
      </div>
    </div>
    
  </main>
</template>

<style lang="sass">

.popup.off
  display: none

.popup
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: #000
  opacity: 0.3
  .popupForm
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 500px
    height: 400px
    background: #fff

</style>
