<script setup>
import Header from '../components/HeaderComponent.vue'
import SideNav from '../components/SideNav.vue'
import Footer from '../components/FooterComponent.vue'

const createPopup = () => {
  const popup = document.querySelector(".popup")

  popup.classList.toggle("off");
}
</script>

<template>
  <Header />
  <main>  
    <SideNav />
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
  <Footer />
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
