<script setup>
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoggedIn = localStorage.getItem("isLoggedIn")

/* const email = localStorage.getItem("email") */
const logout = () => {
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("email")
  localStorage.removeItem("token")
  localStorage.removeItem("id")
  
  router.push("/")
  //location.reload();
}

</script>

<template>
  <aside>
    <nav>
      <section>
        <div v-if="isLoggedIn">
          <RouterLink to="/companies">
            <span class="material-symbols-rounded">
              apartment
            </span>
            <span>
              Companies
            </span>
          </RouterLink>
          <RouterLink to="/projects">
            <span class="material-symbols-rounded">
              emoji_objects
            </span>
            <span>
              Projects
            </span>
          </RouterLink>
          <RouterLink to="/boards">
            <span class="material-symbols-rounded">
              inventory
            </span>
            <span>
              Boards
            </span>
          </RouterLink>
        </div>
        <div v-else>
          <RouterLink to="/">
            <span class="material-symbols-rounded">
              home
            </span>
            <span>
              Home
            </span>
          </RouterLink>
        </div>
        <div v-if="isLoggedIn">
          <a @click="logout">
            <span class="material-symbols-rounded">
              lock
            </span>
            <span>
              Log out
            </span>
          </a>
        </div>
        <div v-else>
          <RouterLink to="/signup">
            <span class="material-symbols-rounded">
              person_add
            </span>
            <span>
              Sign up
            </span>
          </RouterLink>
          <RouterLink to="/login">
            <span class="material-symbols-rounded">
              lock_open
            </span>
            <span>
              Login
            </span>
          </RouterLink>
        </div>
      </section>
      <!-- <ul>
        <template v-if="isLoggedIn">
          <li>
            <RouterLink to="/companies">Companies</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects">Projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/boards">Boards</RouterLink>
          </li>
        </template>
        <template v-else>
          <li>
            <RouterLink to="/home">Home</RouterLink>
          </li>
        </template>
      </ul> -->
    </nav>
  </aside>
</template>

<style lang="sass" scoped>

aside
  position: fixed
  top: 0
  left: 0
  max-width: 100px
  width: 100%
  height: 100vh
  >nav
    display: flex
    >section
      position: absolute
      background: var(--sandBg)
      z-index: 5
      width: 100px
      height: 100%
      border-right: solid 3px var(--darkSandBg)
      border-bottom: solid 3px var(--darkSandBg)
      box-shadow: var(--darkText) 0 0 18px -10px
      display: flex
      flex-direction: column
      justify-content: space-between
      border-radius: 0 20px 20px 0
      >div
        >a
          color: var(--darkText)
          transition: 100ms
          >span
            display: block
            text-align: center
            cursor: pointer
            &:first-of-type
              font-size: 3.5em
              margin-top: 25px
              font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48
            &:last-of-type
              font-weight: 700
              margin-top: 5px
              margin-bottom: 25px
          &:hover
            color: var(--darkTextHighlight)
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48
    /* >ul - For a slide in nav when hovering side bar
      position: absolute
      z-index: 4
      width: 240px
      height: 100%
      padding: 25px 10px
      left: 100%
      transform: translateX(-100%)
      transition: 100ms
      border-radius: 0 var(--br) var(--br) 0
      background: var(--sandBg)
      >li
        padding: 0 10px 0 10px */
    /* &:hover
      >ul
        transform: translateX(0%) */

</style>