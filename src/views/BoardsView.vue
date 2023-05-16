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
      <button class="create" @click="createPopup">
        + Create Board
      </button>
      <div class="popup off" @click="createPopup">
        <div class="popupForm" @click.stop>
          Meep moop!
        </div>
      </div>
      <ul class="listView">
        <h2>
          Company
        </h2>
        <h3>
          - Project
        </h3>
        <li>
          <p class="big">
            <RouterLink to="/board/64632967ecf9a5103ad33e11"> <!-- /board/id -->
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
          - Project
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
        <h2>
          Company
        </h2>
        <h3>
          - Project
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
          - Project
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

</style>
