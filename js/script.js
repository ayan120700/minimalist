let addButton = document.getElementsByClassName('add')
let container = document.getElementsByClassName('cont-down')
let rightContainer = document.getElementsByClassName('container-2')
let listDiv = document.getElementsByClassName('list-div')
let icon = document.getElementsByClassName('reload')
let inputDiv = document.getElementsByClassName('input')
let input = document.getElementsByClassName('list-input')
let sendButton = document.getElementsByClassName('fa-sign-in-alt')
let count = 0

icon[0].addEventListener('click',function(){
icon[0].style.transform = 'rotate(720deg)'
icon[0].style.transition = '.5s'

})
addButton[0].addEventListener('click',function(){
    listDiv[0].style.display = 'block'
    rightContainer[0].style.backgroundColor = '#f1f2f5'

    let list = document.createElement('div')
    list.classList.add('list')
    list.innerText = "Untitled List"
    container[0].appendChild(list)

    let close = document.createElement('i')
    close.classList.add('fas','fa-times')
    list.appendChild(close)

    
    list.addEventListener('click',function(){
        rightContainer[0].style.backgroundColor = '#f1f2f5'
        listDiv[0].style.display = 'block'
    })
    close.addEventListener('click',function(){
        container[0].removeChild(list)
    })
    
})
// input[0].addEventListener("keyup", function(e){
//     if(e.keyCode == 13){  
sendButton[0].addEventListener('click',function(){
    let newList = document.createElement('div')
    newList.innerText = input[0].value
    listDiv[0].appendChild(newList)
    newList.classList.add('new-list')
    
    let checkBox = document.createElement('i')
    checkBox.classList.add('far','fa-square')
    let checked = document.createElement('i')
    checked.classList.add('fas','fa-check')
    newList.appendChild(checkBox)
    
    checkBox.addEventListener('click',function(){
        newList.replaceChild(checked,checkBox)
        newList.classList.add('new-list-checked')
    })
    checked.addEventListener('click',function(){
        newList.replaceChild(checkBox,checked)
        newList.classList.remove('new-list-checked')

    })
    input[0].value = "";
    let clearClick = document.getElementsByClassName('click-text')
    
    // clearClick[0].addEventListener('click',function(){
    //     if(newList.appendChild(checked)){
    //         clearClick[0].style.backgroundColor = 'red'
    //     }
    // })
})





