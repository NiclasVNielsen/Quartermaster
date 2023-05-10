<script setup>
import SideNav from '../components/SideNav.vue'
import { onMounted } from 'vue';

onMounted(() => {
  const cards = document.querySelectorAll(".card")
  const laneSecs = document.querySelectorAll(".laneSection")

  cards.forEach(card => {/* dragend */
    //? Drag Start
    card.addEventListener("dragstart", () => {
      console.log("Drag started")
    })
  })

  laneSecs.forEach(laneSec => {/* dragenter, dragleave */
    //? Drag Over
    laneSec.addEventListener("dragover", (e) => {
      e.preventDefault()
    })

    //? Drop
    laneSec.addEventListener("drop", (e) => {
      e.preventDefault()
      console.log("Card dropped")
      console.log(e)
    })
  })

})



</script>

<template>
  <main>
    <SideNav />
    <section class="boardContainer">
      <div class="lane" style="--laneColor: #e66">
        <h3>
          ToDo
        </h3>
        <section class="laneSection">
          <div class="card" draggable="true">
            <section>
              <p>
                Im a great title
              </p>
              <p>
                Get the treasure map for captain Morgans long lost rum vault
              </p>
              <p>
                Me
              </p>
            </section>
            <section style="display: none;">
              <p>
                Find out where the map is
              </p>
              <p>
                10h
              </p>
              <p>
                20/4/2023
              </p>
              <ul>
                <li>
                  <p>
                    Gather food for the trip
                  </p>
                  <p>
                    2h
                  </p>
                </li>
                <li>
                  <p>
                    Find friends for the trip
                  </p>
                  <p>
                    2h
                  </p>
                </li>
                <li>
                  <p>
                    Find the map
                  </p>
                  <p>
                    6h
                  </p>
                </li>
              </ul>
            </section>
          </div><!-- Card -->
        </section>
      </div>
      <div class="lane" style="--laneColor: #6e6">
        <h3>
          Doing
        </h3>
        <section class="laneSection">
          <h4>
            Me!
          </h4>
          <div class="card" draggable="true">
            <section>
              <p>
                Im a great title
              </p>
              <p>
                Get the treasure map for captain Morgans long lost rum vault
              </p>
              <p>
                Me
              </p>
            </section>
            <section style="display: none;">
              <p>
                Find out where the map is
              </p>
              <p>
                10h
              </p>
              <p>
                20/4/2023
              </p>
              <ul>
                <li>
                  <p>
                    Gather food for the trip
                  </p>
                  <p>
                    2h
                  </p>
                </li>
                <li>
                  <p>
                    Find friends for the trip
                  </p>
                  <p>
                    2h
                  </p>
                </li>
                <li>
                  <p>
                    Find the map
                  </p>
                  <p>
                    6h
                  </p>
                </li>
              </ul>
            </section>
          </div><!-- Card -->
        </section>
        <section class="laneSection">
          <h4>
            Other people
          </h4>
          <div class="card" draggable="true">
            <section>
              <p>
                Im a great title
              </p>
              <p>
                Get the treasure map for captain Morgans long lost rum vault
              </p>
              <p>
                Markus
              </p>
            </section>
            <section style="display: none;">
              <p>
                Find out where the map is
              </p>
              <p>
                10h
              </p>
              <p>
                20/4/2023
              </p>
              <ul>
                <li>
                  <p>
                    Gather food for the trip
                  </p>
                  <p>
                    2h
                  </p>
                </li>
                <li>
                  <p>
                    Find friends for the trip
                  </p>
                  <p>
                    2h
                  </p>
                </li>
                <li>
                  <p>
                    Find the map
                  </p>
                  <p>
                    6h
                  </p>
                </li>
              </ul>
            </section>
          </div><!-- Card -->
        </section>
      </div>
      <div class="lane" style="--laneColor: #66e">
        <h3>
          Done
        </h3>
        <section class="laneSection">
          <div class="card" draggable="true">
            <section>
              <p>
                Im a great title
              </p>
              <p>
                Get the treasure map for captain Morgans long lost rum vault
              </p>
              <p>
                Me
              </p>
            </section>
            <section style="display: none;">
              <p>
                Find out where the map is
              </p>
              <p>
                10h
              </p>
              <p>
                20/4/2023
              </p>
              <ul>
                <li>
                  <p>
                    Gather food for the trip
                  </p>
                  <p>
                    2h
                  </p>
                </li>
                <li>
                  <p>
                    Find friends for the trip
                  </p>
                  <p>
                    2h
                  </p>
                </li>
                <li>
                  <p>
                    Find the map
                  </p>
                  <p>
                    6h
                  </p>
                </li>
              </ul>
            </section>
          </div><!-- Card -->
        </section>
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
