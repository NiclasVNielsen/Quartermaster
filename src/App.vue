<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style lang="sass">
:root
  --br: 20px
  --darkText: #733
  --darkTextHighlight: #C44
  --neutralBg: #FDFEFF
  --sandBg: #fcf8ed
  --darkSandBg: #e6d5a8
  --waterText: #00a4b3
  --waterTextHighlight: #00dcf0
  --waterBg: #e6fdff

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-size: 16px
  font-family: Arial, Helvetica, sans-serif

main
  display: flex
  align-items: stretch
  >section
    min-width: calc( 100% - 100px )
    padding-bottom: 4em

body
  background: radial-gradient(farthest-corner at 5% 5%, var(--neutralBg) 0%, var(--waterBg) 250%), var(--neutralBg)

li
  list-style: none

a
  text-decoration: none
  color: var(--darkTextHighlight)
  transition: 100ms
  &:hover
    color: var(--darkText)

p
    color: var(--darkText)

.popup.off
  display: none

.popup
  z-index: 1000
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: rgba(0, 0, 0, 0.3)
  .popupForm
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 500px
    height: 400px
    background: var(--neutralBg)

/* Make little thing that peaks out */

</style>
