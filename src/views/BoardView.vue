<script setup>
import SideNav from '../components/SideNav.vue'
import { onMounted, ref } from 'vue';

const boardData = ref([
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
        title: "Me",
        cards: [
          {
            id: 1,
            order: 1,
            title: "Im a great title",
            desc: "Get the treasure map for captain Morgans long lost rum vault",
            assigned: "64350f1e176e8ddbc40d37f4",
            require: [
              3, 5, 6
            ],
            time: 600 /* in minutes */
          }
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
          {
            id: 3,
            order: 1,
            title: "Im a great title",
            desc: "Get the treasure map for captain Morgans long lost rum vault",
            assigned: "64350f1e176e8ddbc40d37f4",
            require: [
              15, 5, 6
            ],
            time: 600 /* in minutes */
          },
          {
            id: 8,
            order: 2,
            title: "Im a extra great title",
            desc: "Get the treasure map for captain Morgans long lost rum vault",
            assigned: "64350f1e176e8ddbc40d37f4",
            require: [
              3
            ],
            time: 600 /* in minutes */
          }
        ]
      },
      {
        id: 3,
        order: 2,
        title: "Others",
        cards: [
          {
            id: 4,
            order: 1,
            title: "Im an even greater title",
            desc: "Get MORE treasure maps for random stuff!",
            assigned: "64350f1e176e8ddbc40d37f4",
            require: [
              1
            ],
            time: 1200 /* in minutes */
          }
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
        title: "Me",
        cards: [
          {
            id: 6,
            order: 1,
            title: "Find out where the map is",
            desc: "Find captain morgans treassure map :3",
            assigned: "64350f1e176e8ddbc40d37f4",
            require: [
              3, 5, 6
            ],
            time: 600 /* in minutes */
          }
        ]
      },
    ]
  },
])

const transferCardToNewBoard = (cardId, subLaneId) => {
  //? CTRL X the card from its original position
  let cardCopy;
  boardData.value.forEach(lane => {
    lane.subLanes.forEach(subLane => {
      subLane.cards.forEach(card => {
        if(card.id == cardId){
          cardCopy = card
          const cardArrayId = subLane.cards.indexOf(card)
          subLane.cards.splice(cardArrayId, 1)
        }
      })
    })
  });

  //? Paste the card where it needs to go
  boardData.value.forEach(lane => {
    lane.subLanes.forEach(subLane => {
      if(subLane.id == subLaneId){
        subLane.cards.push(cardCopy)
      }
    })
  });

  //! array is not 2-way-binded, it works but the page dosent update
} 

onMounted(() => {
  let laneSecs = document.querySelectorAll(".laneSection")

  let cardBeingDragged;



  const resetEventListeners = () => {
    let cards = document.querySelectorAll(".card")
    let laneSecs = document.querySelectorAll(".laneSection")
    
    cards.forEach(card => {
      card.removeEventListener("dragstart", startDrag)
    })
    laneSecs.forEach(laneSec => {
      laneSec.removeEventListener("dragover", preventDef)
      laneSec.removeEventListener("drop", dropDrag)
    })
    addEventListeners()
  }



  const startDrag = (e) => {
    cardBeingDragged = e.target.querySelector(".cardId").innerHTML
  }
  const preventDef = (e) => {
    e.preventDefault()
  }
  const dropDrag = (e) => {
    e.preventDefault()

    let laneSecId = null 
    
    //? i could not pass laneSecId along with an event for some reason
    //? so i had to do this again...
    laneSecs.forEach(laneSec => {
      if(laneSec.contains(e.target)){
        laneSecId = laneSec.querySelector(".laneSecId").innerHTML
      }
    })
    
    if(laneSecId != null){
      transferCardToNewBoard(cardBeingDragged, laneSecId)
      resetEventListeners()
      //! Auto update db here
    }
  }



  const addEventListeners = () => {
    let cards = document.querySelectorAll(".card")
    let laneSecs = document.querySelectorAll(".laneSection")

    cards.forEach(card => {
      //? Drag Start
      card.addEventListener("dragstart", startDrag)
    })
  
    laneSecs.forEach(laneSec => {
      //? Drag Over
      laneSec.addEventListener("dragover", preventDef)
  
      //? Drop
      laneSec.addEventListener("drop", dropDrag)
    })
  }
  addEventListeners()
})



</script>

<template>
  <main>
    <SideNav />
    <section class="boardContainer">
      <div class="lane" :style="{ '--laneColor': lane.color }" v-for="lane in boardData" :key="lane">
        <i class="laneId" style="display: none">{{ lane.id }}</i>
        <h3>{{ lane.title }}</h3>
        <div>
          <section class="laneSection" v-for="subLane in lane.subLanes" :key="subLane">
            <i class="laneSecId" style="display: none">{{ subLane.id }}</i>
            <h4>{{ subLane.title }}</h4>
            <div class="card" draggable="true" v-for="card in subLane.cards" :key="card">
              <section>
                <i class="cardId" style="display: block">{{card.id}}</i>
                <i class="cardOrder" style="display: block">{{card.order}}</i>
                <p>
                  {{card.title}}
                </p>
                <p>
                  {{card.desc}}
                </p>
                <p>
                  {{card.assigned}}
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="sass">
    
.boardContainer
  display: flex
  .lane
    width: 300px
    background: #EEE
    margin: 10px
    padding: 10px
    >div
      height: calc(100% - .5em)
      display: flex
      flex-direction: column
      >section
        flex: 1
        overflow-y: scroll
    h3
      color: var(--laneColor)
    .laneSection
      .card
        border: solid 4px var(--laneColor)
        border-radius: 10px
        padding: 5px
      &:nth-of-type(odd)
        background: var(--neutralBg)
        

</style>
