<script setup>
//! Be warned the software architecture in this file is a mess 

import SideNav from '../components/SideNav.vue'
import Footer from '../components/FooterComponent.vue'
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const board = ref([])
const boardData = ref([])

const boardId = route.params.id
console.log(boardId)

//* Test Data
/* const boardData = ref([
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
              3, 8, 6
            ],
            time: 600 // in minutes
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
              
            ],
            time: 600 // in minutes
          },
          {
            id: 8,
            order: 2,
            title: "Im a extra great title",
            desc: "Get the treasure map for captain Morgans long lost rum vault",
            assigned: "64350f1e176e8ddbc40d37f4",
            require: [
              
            ],
            time: 600 // in minutes
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
              
            ],
            time: 1200 // in minutes
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
              
            ],
            time: 600 // in minutes
          }
        ]
      },
    ]
  },
])
 */

const boardMembersId = ref([])
const boardMembersName = ref([])

const getNamesFromBoardMembers = () => {
  boardMembersId.value = board.value.members
  boardMembersId.value.forEach(memberId => {
    fetch("https://quartermasterapi.onrender.com/api/users/" + memberId,{
      headers: {
        "auth-token": localStorage.getItem("token")
      }
    }).then(data => {
      data.json().then(x => {
        boardMembersName.value.push(x.name)
      })
    })
  })
}

const turnUserIdToName = (id) => {
  return boardMembersName.value[boardMembersId.value.indexOf(id)]
}


const findCardInBoardData = (cardId) => {
  let theNeededCard
  boardData.value.forEach(lane => {
    lane.subLanes.forEach(subLane => {
      subLane.cards.forEach(card => {
        if(cardId == card.id){
          theNeededCard = card
        }
      })
    })
  })
  return theNeededCard
}

const findCardInFrontend = (cardId) => {
  const cards = document.querySelectorAll(".card")
  let theNeededCard

  cards.forEach(card => {
    if(card.querySelector(".cardId").innerHTML == cardId){
      theNeededCard = (card)
    }
  })

  return theNeededCard
}

const getAllCardIds = () => {
  let allCards = []
  boardData.value.forEach(lane => {
    lane.subLanes.forEach(subLane => {
      subLane.cards.forEach(card => {
        allCards.push(card.id)
      })
    })
  })
  return allCards
}



const checkForReliance = (cardId) => {
  let requiredCardsIds = []
  const results = []

  //? find the card in array and get the required list
  requiredCardsIds = findCardInBoardData(cardId).require
  
  //? find the required cards and check lane categories
  const subLanes = document.querySelectorAll(".laneSection")
  subLanes.forEach(subLane => {
    const category = subLane.querySelector(".laneCategory")
    const cards = subLane.querySelectorAll(".card")

    //? goes through each card and check if their id match any in
    //? of the ones in requiredCardsIds, when it finds a match
    //? insert true or false into results depending on the
    //? lane category is "done" or not
    cards.forEach(card => {
      requiredCardsIds.forEach(requiredCardId => {
        if(card.querySelector(".cardId").innerHTML == requiredCardId){
          console.log(category)
          results.push(category.innerHTML == "done")
        }
      })
    })
  })
  
  //? Disable if needed
  let positiveResult = true
  results.forEach(result => {
    if(result == false){
      positiveResult = false
    }
  })

  let card = findCardInFrontend(cardId)
  if(positiveResult == false){
    card.classList.add("disabled")
    card.setAttribute('draggable', false)


    card.querySelectorAll(".completeList > p").forEach((listItem, index) => {
      console.log(results)
      if(results[index] == true){
        listItem.classList.add("checked")
      }else{
        listItem.classList.remove("checked")
      }
    })
  }else{
    card.classList.remove("disabled")
    card.setAttribute('draggable', true)

    card.querySelectorAll(".completeList > p").forEach(listItem => {
      listItem.classList.remove("checked")
    })
  }
}


const postDataToDB = () => {
  console.log(board.value.members)
  console.log("i am sending to db: ", JSON.stringify({
    members: board.value.members
  }))
  
  fetch("https://quartermasterapi.onrender.com/api/boards/" + boardId, {
    method: "PUT",
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
  /* console.log("Would have been send to db" + JSON.stringify({ 
    title: board.value.title,
    members: board.value.members,
    cardId: board.value.cardId,
    board: board.value.board
  })) */
}

onMounted(() => {
  const loadData = () => {
    fetch("https://quartermasterapi.onrender.com/api/boards/" + boardId, {
      headers: {
        "auth-token": localStorage.getItem("token")
      }
    })
    .then(data => data.json())
    .then(data => {
      board.value = data
      boardData.value = data.board

      const compareOrdersAsc = (a, b) => {
        if(a.order < b.order){
          return -1
        }
        if(a.order > b.order){
          return 1
        }
        return 0
      }
      boardData.value.sort(compareOrdersAsc)

      //? Board setup
      setTimeout(() => {
        getNamesFromBoardMembers()
        laneSecs = document.querySelectorAll(".laneSection")
  
        getAllCardIds().forEach(cardId => {
          checkForReliance(cardId)
        })
        
        addEventListeners()
      }, 0);
    })
  }

  //? reloads the data every 5 min
  loadData()
  setInterval(() => {
    loadData()
  }, 3000000); //? 5 min

  let laneSecs

  let cardBeingDragged;
  let cardBeingDraggedLocation;
  

  const transferCardToNewBoard = async (cardId, subLaneId) => {
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

          //? Just don't question it - it doesn't work without the setTimeout
          setTimeout(() => {
            findCardInFrontend(cardCopy.id).addEventListener("dragstart", startDrag)
          }, 0);
        }
      })
    });
    resetEventListeners()
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

                    setTimeout(() => {
                      getAllCardIds().forEach(cardId => {
                        checkForReliance(cardId)
                      })
                    }, 0);

                    //? Auto update db here
                    postDataToDB()

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
      
      //? Auto update db here
      postDataToDB()

      resetEventListeners()

      setTimeout(() => {
        getAllCardIds().forEach(cardId => {
          checkForReliance(cardId)
        })
      }, 0);
    }

  }


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
})

const fillOutPopup = (card) => {
  currentCardIds = Array.from(document.querySelectorAll(".card .cardId")).map(x => x.innerHTML)
  currentCardTitles = Array.from(document.querySelectorAll(".card > section > p:first-of-type")).map(x => x.innerHTML)

  popupCardData.value.new = false
  popupCardData.value.id = card.id
  popupCardData.value.title = card.title
  popupCardData.value.desc = card.desc
  popupCardData.value.time = card.time
  popupCardData.value.require = card.require
  popupCardData.value.assigned = card.assigned

  popupCardData.value.hours = Math.floor(popupCardData.value.time / 60)
  popupCardData.value.minutes = Math.floor(popupCardData.value.time % 60)
}

let currentCardIds = []
let currentCardTitles = []

const popupCardData = ref({
  id: "",
  title: "Title",
  desc: "Description",
  time: 0, /* in minutes */
  hours: 0, /* only for calculating time and displaying things cleaner on frontend */
  minutes: 0, /* -//- */
  require: [],
  assigned: "",
  new: true
})

const togglePopup = async (e, card = false) => {
  const popup = document.querySelector(".popup")

  if(card != false){
    fillOutPopup(card)
    popupCardData.value.new = card.new
    popup.classList.remove("off")
  }else{
    popup.classList.add("off")
  }
}

const popupSubmit = (e) => {
  //e.preventDefault()
  if(popupCardData.value.new == true){
    createNewCard()
  }else{
    updateCard()
  }
  postDataToDB()
  togglePopup()
}

const createNewCard = () => {
  let laneFound = false
  boardData.value.forEach(lane => {
    if(lane.category == "todo" && laneFound == false){
      laneFound = true
      board.value.cardId = parseInt(board.value.cardId) + 1

      lane.subLanes[0].cards.push({
        id: board.value.cardId,
        order: 0,
        title: popupCardData.value.title,
        desc: popupCardData.value.desc,
        assigned: popupCardData.value.assigned,
        require: popupCardData.value.require,
        time: (parseInt(popupCardData.value.hours * 60) + parseInt(popupCardData.value.minutes)) // hours * 60 + minutes
      })
    }
  })

  if(laneFound == false){
    // ehh no todo lane found
  }
}

const updateCard = () => {
  const card = findCardInBoardData(popupCardData.value.id)
  
  card.title = popupCardData.value.title
  card.desc = popupCardData.value.desc
  card.assigned = popupCardData.value.assigned
  card.require = popupCardData.value.require
  card.time = (parseInt(popupCardData.value.hours * 60) + parseInt(popupCardData.value.minutes))
}

const deleteCard = (id) => {
  const card = findCardInBoardData(id)

  boardData.value.forEach(lane => {
    lane.subLanes.forEach(subLane => {
      if(subLane.cards.indexOf(card) != -1){
        console.log(true)
        subLane.cards.splice(subLane.cards.indexOf(card), 1)
      }
    })
  })

  postDataToDB()  
}


const newBoardName = ref(board.value.title)
const addMembers = ref([])
const amountOfMembersToAdd = ref(3)

const membersToRemove = ref([])

const lanesToRemove = ref([])

const toggleEditBoardPopup = (clear = false) => {
  const popup = document.querySelector(".editBoardPopup")

  popup.classList.toggle("off")

  if(clear){
    addMembers.value = []
    amountOfMembersToAdd.value = [0]
  }
}

const EditBoardPopupSubmit = async () => {
  console.log(board.value.title) //! find a way to make this not auto update
  
  //? [] find id by email and add the user to members
  //* i have to use a for loop here instead of forEach
  //* because forEach does not support "await"
  //! i had issues making the postDataToDB() wait for the fetching
  const x = async () => { for(let i = 0; i < addMembers.value.length; i++){
    const member = addMembers.value[i]

    //! Does this mannage to fetch before the postDataDB()?
    await fetch("https://quartermasterapi.onrender.com/api/users/email/" + member, { //http://localhost:4000
      headers: {
        "auth-token": localStorage.getItem("token"),
        'Content-Type': 'application/json'
      }
    }).then(data => {
      data.json().then(x => {
        if(board.value.members.indexOf(x.data._id) == -1){
          board.value.members.push(x.data._id)

          //! not optimal      
          postDataToDB()
          //! -----------
        }
      })
    })
    console.log("meep")
  }}

  await x()

  //? [] remove from members
  membersToRemove.value.forEach(memberToRemove => {
    board.value.members.forEach(memberInArray => {
      if(memberInArray == memberToRemove){
        board.value.members.splice(board.value.members.indexOf(memberToRemove), 1)
      }
    })
  })

  postDataToDB()
}

const deleteBoardValue = ref("")
const deleteBoard = () => {
  if(deleteBoardValue.value == "Delete board"){
    fetch("https://quartermasterapi.onrender.com/api/boards/" + board.value._id, {
      method: "DELETE",
      headers: {
        "auth-token": localStorage.getItem("token"),
        'Content-Type': 'application/json'
      }
    })
    router.push("/boards")
  }
}

</script>

<template>
  <main>
    <div class="popup off" @click="togglePopup">
      <div class="popupBlock" @click.stop>
        <form class="popupForm" @click.stop>
          <input type="text" v-model="popupCardData.title">
          <textarea type="text" v-model="popupCardData.desc"></textarea>
          <div>
            Close
          </div>
          <!-- Have a converter to H/M -->
          <div class="timePannel">
            <p>
              Hours / Minutes
            </p>
            <input style="margin-bottom: 1em" type="text" v-model="popupCardData.hours">
            <input type="text" v-model="popupCardData.minutes">
          </div>

          <select multiple v-model="popupCardData.require">
            <template v-for="currentCardId in currentCardIds" :key="currentCardId">  
              <template v-if="popupCardData.id != currentCardId">
                
                <template v-if="popupCardData.require.indexOf(currentCardId) != -1">
                  <option selected :value="currentCardId">{{ currentCardTitles[currentCardIds.indexOf(currentCardId)] }}</option>
                </template>
                <template v-else>
                  <option :value="currentCardId">{{ currentCardTitles[currentCardIds.indexOf(currentCardId)] }}</option>
                </template>

              </template>
            </template>
          </select>
          
          
          <select v-model="popupCardData.assigned">
            <option value="">None</option>
            <template v-for="boardMemberId in boardMembersId" :key="boardMemberId">
              <!-- popupCardData.assigned == boardMemberId ? "selected" : "" -->
              <template v-if="popupCardData.assigned == boardMemberId">
                <option selected :value="boardMemberId">{{ turnUserIdToName(boardMemberId) }}</option>
              </template>
              <template v-else>
                <option :value="boardMemberId">{{ turnUserIdToName(boardMemberId) }}</option>
              </template>
              <!--  -->
            </template>
          </select>
          <template v-if="popupCardData.new == true">
            <input @click="popupSubmit()" class="submitButton" disabled value="Create!">
          </template>
          <template v-else>
            <input @click="popupSubmit()" class="submitButton" disabled value="Update!">
            <input @click="deleteCard(popupCardData.id)" disabled class="deleteButton" value="Delete!">
          </template>
        </form>
      </div>
    </div>

    <div class="editBoardPopup off" @click="toggleEditBoardPopup(true)">
      <div class="popupBlock" @click.stop>
        <form class="popupForm" @click.stop>
          <input type="text" style="margin-bottom: 1em" v-model="board.title">

          <p class="button" @click="amountOfMembersToAdd++">
            + Add member
          </p>
          <template v-if="amountOfMembersToAdd != 0">
            <template  v-for="index in amountOfMembersToAdd" :key="index">
              <input type="text" v-model="addMembers[index - 1]" placeholder="QmUser@email.com">
            </template>
          </template>
          <p>
            Remove members
          </p>
          <template v-for="member in board.members" :key="member">
            <div class="deleteRow">
              <input type="checkbox" :value="member" v-model="membersToRemove">
              <label>{{ turnUserIdToName(member) }}</label>
            </div>
          </template>
          
          <!-- <p>
            Remove lanes
          </p>
          <template v-for="lane in board.board" :key="lane">
            <input type="checkbox" :value="lane.id" v-model="lanesToRemove">
            <label>{{ lane.title }}</label>
            <br>
          </template> -->
        
          <input @click="EditBoardPopupSubmit()" class="submitButton" disabled value="Update!">
          <input v-model="deleteBoardValue" placeholder='Type "Delete board" in this field to activate delete button'>
          <input @click="deleteBoard()" disabled class="deleteButton" value="Delete Board!">
        </form>
      </div>
    </div>
    <SideNav />
    <figure class="editBoard" @click="toggleEditBoardPopup">
      <span class="material-symbols-rounded">
        settings
      </span>
    </figure>
    <button class="create" @click='togglePopup(null, {
        id: "",
        title: "Title",
        desc: "Description",
        time: 0,
        hours: 0,
        minutes: 0,
        require: [],
        assigned: "",
        new: true
      })'>
      + Create Card
    </button>
    <section class="boardContainer">
      <div class="lane" :style="{ '--laneColor': lane.color }" v-for="lane in boardData" :key="lane">
        <i class="laneId" style="display: none">{{ lane.id }}</i>
        <h3>{{ lane.title }}</h3>
        <div>
          <section class="laneSection" v-for="subLane in lane.subLanes" :key="subLane">
            <i class="laneSecId" style="display: none">{{ subLane.id }}</i>
            <i class="laneCategory" style="display: none">{{ lane.category }}</i>
            <h4 v-if="subLane.title != ''">{{ subLane.title }}</h4>
            <div class="card" ondragover="this.classList.add('hover')" ondragleave="this.classList.remove('hover')" draggable="true" v-for="card in subLane.cards" :key="card">
              <figure class="settings" @click="togglePopup(e, card)">
                <span class="material-symbols-rounded">
                  open_in_full
                </span>
              </figure>
              <section style="pointer-events: none;">
                <i class="cardId" style="display: none">{{card.id}}</i>
                <i class="cardOrder" style="display: none">{{card.order}}</i>
                <p style="padding-right: 1em">
                  {{card.title}}
                </p>
                <div class="completeList">
                  <br>
                  Complete before this:
                  <p v-for="required in card.require" :key="required">
                    *&nbsp;{{ findCardInBoardData(required).title }}
                  </p>
                </div>
                <p>
                  <br>
                  Assigned to: {{ card.assigned == "" ? "none" : turnUserIdToName(card.assigned) }}
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
      height: calc(100% - 2em - 14px)
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
        position: relative
        color: var(--darkText)
        background: var(--sandBg)
        border-bottom: solid 3px var(--laneColor)
        border-left: solid 3px var(--laneColor)
        margin-bottom: 4px
        box-shadow: var(--darkText) 0 0 18px -10px
        border-radius: 20px
        padding: 10px
        transition: 300ms
        .completeList
          display: none
        &.hover
          margin-top: 3em
        &:nth-of-type(even)
          background: #fcfbf8
        &.disabled
          opacity: 0.66
          .completeList
            display: block
            color: var(--darkTextHighlight)
            p
              color: var(--darkTextHighlight)
              &.checked
                text-decoration: line-through
          
      //&:nth-of-type(odd)
        //background: var(--neutralBg)
      p
        pointer-events: none
        
.settings
  position: absolute
  top: .4em
  right: .4em
  cursor: pointer
  span
    font-size: 1em

.editBoard
  position: fixed
  top: .2em
  right: .2em
  cursor: pointer
  color: var(--waterText)
  z-index: 1000
  span
    transition: 400ms
  &:hover
    span
      transform: rotate(180deg)
      color: var(--waterTextHighlight)

.popupForm
  input, select
    width: 100%
    margin-bottom: 1em
  input:first-of-type  
    margin-bottom: 7em

.popupBlock
  height: 100vh
  width: 70vw
  margin: 0 auto

.button
  background: radial-gradient(farthest-corner at 5% 5%, var(--neutralBg) 0%, var(--waterBg) 250%), var(--neutralBg)
  padding: .4em .6em
  border-radius: 20px
  border: solid 3px var(--waterText)
  color: var(--waterText)
  font-weight: 700
  transition: 100ms
  cursor: pointer
  z-index: 1010
  margin-bottom: .5em
  &:hover
    border: solid 3px var(--waterTextHighlight)
    color: var(--waterTextHighlight)

textarea
  resize: none
  position: absolute
  height: 6em
  width: calc( 100% - 40px )
  left: 50%
  transform: translate(-50%, 0)
  top: 4em
  transition: 500ms
  cursor: pointer
  & + div
    transition: 500ms
    opacity: 0
    height: 0
    width: calc( 100% - 40px )
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: flex
    align-items: center
    justify-content: center
  &:focus
    top: calc(50% - 2.5vh)
    left: 50%
    transform: translate(-50%, -50%)
    width: 70vw
    height: 70vh
    z-index: 1001
    cursor: auto
    & + div
      top: calc(50% + 32.5vh)
      left: 50%
      transform: translate(-50%, -50%)
      opacity: 1
      padding-top: 5vh
      z-index: 1000
      width: 70vw
      height: 10vh
      cursor: pointer
      background: var(--sandBg)
      border-radius: 20px
      border-left: 3px solid var(--darkSandBg)
      border-bottom: 3px solid var(--darkSandBg)
      color: var(--darkText)
      font-weight: bold
      &:hover
        color: var(--darkTextHighlight)
        border-left: 3px solid var(--waterText)
        border-bottom: 3px solid var(--waterText)
      &:active
        color: var(--darkTextHighlight)
        border-left: 3px solid var(--waterText)
        border-bottom: 3px solid var(--waterText)
        background: var(--darkSandBg)

select  
  transition: 100ms

select option
  border-radius: 20px
  padding: 3px 1em
  &:checked
    border-radius: 0
    background: var(--sandBg) !important
    color: var(--darkText)
    border-left: solid 3px var(--darkSandBg)
    &:first-of-type
      border-radius: 10px 10px 0 0
    &:last-of-type
      border-radius: 0 0 10px 10px
      border-bottom: solid 3px var(--darkSandBg)
  &:focus
    background: var(--sandBg) !important
    color: var(--darkText)


textarea, select
  border-radius: 20px
  border: none
  border-bottom: 3px solid var(--darkSandBg)
  border-left: 3px solid var(--darkSandBg)
  padding: .5em
  background: radial-gradient(farthest-corner at 5% 5%, var(--neutralBg) 0%, var(--waterBg) 250%), var(--neutralBg)
  color: var(--waterText)
  &:focus
    outline: none
    border-bottom: 3px solid var(--waterText)
    border-left: 3px solid var(--waterText)
  &:hover
    border-bottom: 3px solid var(--waterText)
    border-left: 3px solid var(--waterText)
    
.timePannel
  display: flex
  justify-content: space-between
  p, input
    display: block
    width: 32%
  p
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 1em

.deleteRow
  display: flex
  margin: 10px 0
  >input
    width: 20px
    margin-right: 10px
    &:first-of-type
      margin-bottom: 0
    &:checked
      + label
        text-decoration: line-through

.submitButton
  cursor: pointer
  background: var(--waterTextHighlight)
  border-bottom: solid 3px var(--waterText)
  border-left: solid 3px var(--waterText)
  color: var(--darkText)
  &:hover
    background: var(--waterText)
    color: var(--waterTextHighlight)

.deleteButton
  cursor: pointer
  background: var(--darkTextHighlight)
  border-bottom: solid 3px var(--darkText)
  border-left: solid 3px var(--darkText)
  color: var(--darkText)
  &:hover
    background: var(--darkText)
    color: var(--darkTextHighlight)

</style>
