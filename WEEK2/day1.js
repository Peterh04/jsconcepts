// /**
//  * @DOM (manipulation) 
//  * @ACCESSING 
//  * Query selctor
//  * document.querySelector
//  * 
//  * ID SELECTOR
//  * get.elementbyId('headinh')
//  * 
//  * class SELECTOR
//  * get.elementByClassName('heading')
//  * 
//  *  */ 

// // let searchbox = document.querySelector('.input')
// // let ClickMeButton = document.querySelector('.click-me-button')
// // ClickMeButton.addEventListener('click', () => {
// // document.body.style.backgroundColor = 'black'
// // })

// document.body.style.backgroundColor ='white'
// const initialBackGround = document.body.style.backgroundColor 
// console.log(initialBackGround)

// const parentContainer = document.querySelector('.parent-container')
// let paragraph = document.querySelector('.paragraph')
// let ClickMeButton =document.querySelector('.click-me-button')
// let changeColor1 = document.querySelector('.change-my-color1')
// let changeColor2 = document.querySelector('.change-my-color2')
// let initialText = paragraph.innerText


// // ClickMeButton.addEventListener('click', (e)=>{
// //     e.stopPropagation()
// //     if (paragraph.innerText=== initialText){
// //         paragraph.innerText= "Hello world"
// //     }else{
// //         paragraph.innerText =initialText
// //     }

   
// // })

// // changeColor1.addEventListener('click', (e) =>{
// //     e.stopPropagation()
// //  document.body.style.backgroundColor = 'red'

// // })

// // changeColor2.addEventListener('click', (e) =>{
// //     e.stopPropagation()
// //     document.body.style.backgroundColor = 'green'
// // })

// // document.body.addEventListener('click', ()=>{
// //     if (document.body.style.backgroundColor !== initialBackGround){
// //         document.body.style.backgroundColor= initialBackGround
        

// //     }
    
// // })

// parentContainer.addEventListener('click', (e)=>{
//     console.log (e)
//     if(e.target.tagName === 'SPAN'){
//         let subContainer = e.target.nextElementSibling
//         subContainer.classList.toggle('hidden')
//     }
// })

