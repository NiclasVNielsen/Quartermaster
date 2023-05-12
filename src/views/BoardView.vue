<script setup>
import SideNav from '../components/SideNav.vue'
import Footer from '../components/FooterComponent.vue'
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
        title: "",
        cards: [
          {
            id: 1,
            order: 1,
            title: "Im a greeeeeat title",
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
        title: "",
        cards: [
          {
            id: 6,
            order: 1,
            title: "Find out where the map is",
            desc: "Find captain morgans treasure map :3",
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
} 

onMounted(() => {
  let laneSecs = document.querySelectorAll(".laneSection")

  let cardBeingDragged;
  let cardBeingDraggedLocation;



  const resetEventListeners = () => {
    let cards = document.querySelectorAll(".card")
    let laneSecs = document.querySelectorAll(".laneSection")
    
    cards.forEach(card => {
      card.removeEventListener("dragstart", startDrag)
    })
    laneSecs.forEach(laneSec => {
      laneSec.removeEventListener("dragover", dragOver)
      laneSec.removeEventListener("drop", dropDrag)
    })
    addEventListeners()
  }



  const startDrag = (e) => {
    cardBeingDragged = e.target.querySelector(".cardId").innerHTML

    boardData.value.forEach(lane => {
      lane.subLanes.forEach(subLane => {
        subLane.cards.forEach(card => {
          if(cardBeingDragged == card.id){
            cardBeingDraggedLocation = {
              "laneId": lane.id,
              "subLaneId": subLane.id,
              "cardId": card.id
            }
          }
        })
      })
    })
  }
  const dragOver = (e) => {
    e.preventDefault()
  }
  const dropDrag = (e) => {
    e.preventDefault()

    //? To fix some issues with the hover
    document.querySelectorAll(".card.hover").forEach(card => {
      card.classList.remove("hover")
    })



    let laneSecId = null 
    let droppedOnCard = false;
    
    //? i could not pass laneSecId along with an event for some reason
    //? so i had to do this again...
    laneSecs.forEach(laneSec => {
      if(laneSec.contains(e.target)){
        laneSecId = laneSec.querySelector(".laneSecId").innerHTML
        

        const laneSecCards = laneSec.querySelectorAll(".card")
        laneSecCards.forEach(laneSecCard => {
          if(laneSecCard.contains(e.target)){
            const cardId = laneSecCard.querySelector(".cardId").innerHTML

            boardData.value.forEach(lane => {
              lane.subLanes.forEach(subLane => {
                subLane.cards.forEach(card => {
                  if(cardId == card.id){
                    /* console.log(cardId) */
                    const dropLocation = {
                      "laneId": lane.id,
                      "subLaneId": subLane.id,
                      "cardId": card.id,
                      "cardOrder": card.order
                    }

                    //? -1 order to all cards below the object dragged onto, to make space for a new card
                    subLane.cards.forEach(card => {
                      if(card.order < dropLocation.cardOrder){
                        card.order = card.order - 1
                        /* console.log("Worked") */
                      }
                    })


                    //? Change order of the dragged object to -1 of the object it's dragged onto
                    boardData.value.forEach(lane => {
                      if(lane.id == cardBeingDraggedLocation.laneId){
                        lane.subLanes.forEach(subLane => {
                          if(subLane.id == cardBeingDraggedLocation.subLaneId){
                            subLane.cards.forEach(card => {
                              if(card.id == cardBeingDraggedLocation.cardId){
                                card.order = dropLocation.cardOrder - 1
                              }
                            })
                          }
                        })
                      }
                    })

                    //? Transfer card
                    transferCardToNewBoard(cardBeingDragged, laneSecId)

                    //? Reorder the subLane
                    const compareOrdersAsc = (a, b) => {
                      if(a.order < b.order){
                        return -1
                      }
                      if(a.order > b.order){
                        return 1
                      }
                      return 0
                    }
                    subLane.cards.sort(compareOrdersAsc)
                    
                    //? Prettify the order numbers
                    subLane.cards.forEach((card, index) => {
                      card.order = index
                    })

                    resetEventListeners()
                    //! Auto update db here

                    droppedOnCard = true;
                  }
                })
              })
            })
          }
        })
      }
    })
    
    if(droppedOnCard == false && laneSecId != null){
      transferCardToNewBoard(cardBeingDragged, laneSecId)

      boardData.value.forEach(lane => {
        lane.subLanes.forEach(subLane => {
          if(subLane.id == laneSecId){
            //? Prettify the order numbers
            subLane.cards.forEach((card, index) => {
              card.order = index
            })
          }
        })
      })
      
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
      laneSec.addEventListener("dragover", dragOver)
  
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
            <h4 v-if="subLane.title != ''">{{ subLane.title }}</h4>
            <div class="card" ondragover="this.classList.add('hover')" ondragleave="this.classList.remove('hover')" draggable="true" v-for="card in subLane.cards" :key="card">
              <section style="pointer-events: none;">
                <i class="cardId" style="display: none">{{card.id}}</i>
                <i class="cardOrder" style="display: none">{{card.order}}</i>
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
  <Footer />
</template>

<style scoped lang="sass">

main
  >section
    width: 100%
    overflow-x: scroll
    overflow-y: hidden
    padding-bottom: 0
    height: 100vh

.boardContainer
  display: flex
  .lane
    width: 300px
    height: 100%
    >div
      height: calc(100% - .5em)
      display: flex
      flex-direction: column
      >section
        flex: 1
        overflow-y: scroll
    h3
      color: var(--laneColor)
      background: var(--sandBg)
      padding: 10px 10px
      margin-bottom: 5px
      border-bottom: solid 3px var(--darkSandBg)
    &:first-of-type
      margin-left: 10px
      >h3
        border-radius: 20px 0 0 20px
        border-left: solid 3px var(--darkSandBg)
    &:last-of-type
      >h3
        border-radius: 0 20px 20px 0
    .laneSection
      h4
        color: var(--darkText)
        background: var(--sandBg)
        border-radius: 20px
        padding: 5px 10px
        border-bottom: solid 3px var(--darkSandBg)
        border-left: solid 3px var(--darkSandBg)
        //box-shadow: var(--darkText) 0 0 18px -10px
        margin-bottom: 4px
      .card
        color: var(--darkText)
        background: var(--sandBg)
        border-bottom: solid 3px var(--laneColor)
        border-left: solid 3px var(--laneColor)
        margin-bottom: 4px
        box-shadow: var(--darkText) 0 0 18px -10px
        border-radius: 20px
        padding: 10px
        transition: 300ms
        &.hover
          margin-top: 3em
        &:nth-of-type(even)
          background: #fcfbf8
          
      //&:nth-of-type(odd)
        //background: var(--neutralBg)
      p
        pointer-events: none
        

</style>
