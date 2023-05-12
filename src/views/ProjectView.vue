<script setup>
import SideNav from '../components/SideNav.vue'
</script>

<template>
  <main>
    <SideNav />
    <section>
      <ul class="listView">
        <div>
          <h1>
            Project Title
          </h1>
          <div>
            <p>
              Project description
            </p>
          </div>
        </div>
        <h2>
          Boards
        </h2>
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

h2
  margin-bottom: .5em
  font-size: 1.8em
.listView
  >div
    max-width: 1260px
    margin: 0 auto
    h1
      color: var(--waterText)
      font-size: 2rem
      margin: 1em 0 .5em 0
    >div
      max-width: 600px
      background: var(--sandBg)
      border-radius: 20px
      padding: 10px 15px
      border-bottom: solid 3px var(--darkSandBg)
      border-left: solid 3px var(--darkSandBg)
      p
        color: var(--darkText)

</style>
