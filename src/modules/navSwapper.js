import { onMounted } from "vue"

//! Should be stored as local data
//? Your preferred layout
//? false = Aside view
//? true  = Header view
let pref = true

//? if only header is allowed on the page
let onlyOneNav = false

//? Initiate variables to make them global
let header
let aside

console.log("working! Global")

onMounted(() => {
    //? Gets nav panels
    console.log("working! Mounted")
    header = document.querySelector('header')
    aside = document.querySelector('aside')

    if(header == undefined){
        //? If the aside nav doesn't exist use the header
        onlyOneNav = true
    }else{
        //? Sets up your preferred navigation
        if(pref == true){
            header.classList.add("off")
        }else{
            aside.classList.add("off")
        }
    }
})

//? Swaps between the two navigation types
const navSwap = () => {
    if(onlyOneNav == false){
        header.classList.toggle("off")
        aside.classList.toggle("off")
    }
}