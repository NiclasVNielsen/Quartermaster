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
    boards.value = x
  })
})


const board = ref({
  title: "",
  members: [],
  board: [
    {
      id: 1,
      title: "ToDo",
      category: "todo",
      order: 1,
      color: "red",
      subLanes: [
        {
          id: 1,
          order: 1,
          title: "",
          cards: [
          
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Doing",
      category: "doing",
      order: 2,
      color: "yellow",
      subLanes: [
        {
          id: 2,
          order: 1,
          title: "Me",
          cards: [
            
          ]
        },
        {
          id: 3,
          order: 2,
          title: "Others",
          cards: [
            
          ]
        },
      ]
    },
    {
      id: 3,
      title: "Done",
      category: "done",
      order: 3,
      color: "green",
      subLanes: [
        {
          id: 4,
          order: 1,
          title: "",
          cards: [
            
          ]
        },
      ]
    },
  ],
  cardId: 1
})
board.value.members.push(localStorage.getItem("id"))

const popupSubmit = () => {
  console.log(JSON.stringify({ 
    title: board.value.title,
    members: board.value.members,
    cardId: board.value.cardId,
    board: board.value.board
  }))
  
  fetch("http://localhost:4000/api/boards/",{
    method: "POST",
    headers: {
      "auth-token": localStorage.getItem("token"),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      title: board.value.title,
      members: board.value.members,
      cardId: board.value.cardId,
      board: board.value.board
    })
  })
}

</script>

<template>
  <main>
    <SideNav />
    <section>
      <button class="create" @click="createPopup">
        + Create Board
      </button>
      <div class="popup off" @click="createPopup">
        <form class="popupForm" @click.stop>
          <input type="text" placeholder="Title" v-model="board.title">
          <input @click="popupSubmit()" value="Create!  (Yes i am a button!)">
        </form>
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
