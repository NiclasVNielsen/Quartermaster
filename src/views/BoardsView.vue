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
    <section>
      <section class="searchBar">
        <div>
          <button @click="createPopup">
            Create Board
          </button>
        </div>
      </section>
      <div class="popup off" @click="createPopup">
        <div class="popupForm" @click.stop>
          Meep moop!
        </div>
      </div>
      <ul>
        <h2>
          Company
        </h2>
        <h3>
          Project
        </h3>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Find Morgans rum vault!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <h3>
          Project
        </h3>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li><h2>
          Company
        </h2>
        <h3>
          Project
        </h3>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Find Morgans rum vault!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <h3>
          Project
        </h3>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Open!
            </RouterLink>
          </p>
        </li>
        <li>
          <p class="big">
            <RouterLink to="/board/id"> <!-- /board/id -->
              Drink all Morgans rum!
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/project/id"> <!-- /project/id -->
              <!-- Assigned to -->Project
            </RouterLink>
          </p>
          <p class="medium">
            <RouterLink to="/company/id"> <!-- /company/id -->
              <!-- Part of -->Company
            </RouterLink>
          </p>
          <p class="small">
            <RouterLink to="/board/id"> <!-- /board/id -->
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

.searchBar
  width: calc(100% - 100px)
  >div
    max-width: 1260px
    margin: 1.5em auto
    display: flex
    >button
      background: transparent
      padding: .4em .6em
      border-radius: 20px
      border: solid 3px var(--waterText)
      color: var(--waterText)
      font-weight: 700
      transition: 100ms
      cursor: pointer
      &:hover
        border: solid 3px var(--waterTextHighlight)
        color: var(--waterTextHighlight)
ul
  width: calc(100% - 100px)
  >h2,>h3
    max-width: 1260px
    margin: 0 auto
    color: var(--waterText)
  >h2
    margin-top: 2rem
    margin-bottom: -.25rem
    font-size: 2em
  >h3
    margin-top: 1rem
    margin-bottom: .5rem
    font-size: 1.5em
  >li
    display: flex
    max-width: 1260px
    margin: 0 auto
    border-bottom: 3px solid var(--darkSandBg)
    border-left: 3px solid var(--darkSandBg)
    background:  var(--sandBg) /* linear-gradient(to right, var(--sandBg), transparent) */
    padding: 25px
    border-radius: var(--br)
    transition: 100ms
    box-shadow: var(--darkText) 0 0 18px -10px
    &:nth-of-type(even)
      background: #fcfbf8
    &:hover
      border-left: 3px solid var(--waterText)
      border-bottom: 3px solid var(--waterText)
      a
        color: var(--waterText)
        &:hover
          color: var(--waterTextHighlight)
    >p
      &.small
        flex: 2
        &:last-of-type
          text-align: center
      &.medium
        flex: 3
      &.big
        flex: 4
        a
          font-weight: bold

</style>
