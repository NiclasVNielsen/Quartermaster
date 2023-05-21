<script setup>
import SideNav from '../components/SideNav.vue'
import Footer from '../components/FooterComponent.vue'
import { ref } from 'vue'

const createPopup = () => {
  const popup = document.querySelector(".popup")

  popup.classList.toggle("off");
}

const boards = ref([])

fetch("http://localhost:4000/api/boards/user/" + localStorage.getItem("id"),{
  headers: {
    "auth-token": localStorage.getItem("token")
  }
}).then(data => {
  data.json().then(x => {
    console.log(x)
    boards.value = x
    console.log(boards.value)
  })
})

</script>

<template>
  <main>
    <SideNav />
    <section>
      <button class="create" @click="createPopup">
        + Create Board
      </button>
      <div class="popup off" @click="createPopup">
        <div class="popupForm" @click.stop>
          Meep moop!
        </div>
      </div>
      <ul class="listView">
        <h2 style="margin-bottom: .5em">
          Personal Boards
        </h2>
        <li v-for="board in boards" :key="board">
          <p class="big">
            <RouterLink :to="'/board/' + board._id"> <!-- /board/id -->
              {{ board.title }}
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink :to="'/board/' + board._id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
      </ul>
    </section>
  </main>
  <Footer />
</template>

<style lang="sass" scoped>

</style>
