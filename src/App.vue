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
  padding-left: 100px
  >section
    min-width: calc( 100% - 100px )
    min-height: 100vh
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
  position: fixed
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
    max-width: 90%
    max-height: 90vh
    background: var(--sandBg) /* radial-gradient(farthest-corner at 5% 5%, var(--neutralBg) 0%, var(--waterBg) 250%), var(--neutralBg) */
    border-radius: 20px
    padding: 20px
    border-bottom: 3px solid var(--darkSandBg)
    border-left: 3px solid var(--darkSandBg)
    transition: 100ms
    &:hover
      border-left: 3px solid var(--waterText)
      border-bottom: 3px solid var(--waterText)


.create
  position: fixed
  bottom: 1em
  right: 1em
  background: radial-gradient(farthest-corner at 5% 5%, var(--neutralBg) 0%, var(--waterBg) 250%), var(--neutralBg)
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

.listView
  width: calc(100% - 100px)
  margin: 0 auto
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
    background:  var(--sandBg)
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

/* Make little thing that peaks out */

</style>
