
import {questionsList , repo} from "./quizRepo.js"
const btn = document.querySelectorAll('.question')
const container = document.querySelector('.question-container')
const goBack = document.querySelector('.back-question')




let question_count = 0




window.onload = function(){
    show(question_count)
}

function show(count){
    if(question_count == questionsList.length - 1){
        document.querySelector('.next-question').innerText = "submit"
    }
    else{
        document.querySelector('.next-question').innerText = "Next"
    }
    if(question_count == 0){
        goBack.style.display = "none"
    }
    let question = document.querySelector(".question-container")
    // console.log(questionsList[count]);
    let[first , second , third , fourth] = questionsList[count].option
    question.innerHTML = `<h2>Q${count + 1}.${questionsList[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`
    if(questionsList[count].id > 1){
        goBack.style.display = "block"
    }
    toggleActive()

}

// function addToRepo(objKey , objValue){
    
//     console.log(index);
//     repo.splice(index , 1)
// }

function checkAnswer(obj , objKey){
    const index2 = repo.find((e) => {
        return Object.keys(e)[0] == objKey
    })
    let fortest
    if(index2){
        
        const index = repo.findIndex((obj) => {
          
            return Object.keys(obj)[0] == objKey
        })
        if (index !== -1) {
           
            fortest = index
            repo[index] = obj;
           
          }
    }
    else{
        repo.push(obj)
        localStorage.setItem( 'userRepo' , JSON.stringify(repo))
    }
    
}

function toggleActive(){
    let option = document.querySelectorAll("li.option")
    const lookingFor = repo.find((e) => {
        return Object.keys(e) == `answers${question_count + 1}`
    })
    if(lookingFor){
        const object = lookingFor
        
        // total.option.find((e) => {
            
        // })
    
        const newOption = [...option].find((op) => {
           
            const targetKey = Object.keys(object)[0]
           return  op.innerHTML == object[targetKey].answer
        })
        newOption.classList.toggle("active")
    }

    for(let i=0; i < option.length ; i++){
        option[i].onclick = function(){
            if(option[i].classList.contains('active')){
                option[i].classList.remove('active')
            }else{
            for(let i=0; i < option.length ; i++){
                if(option[i].classList.contains('active')){
                    option[i].classList.remove("active")
                }
            }
            option[i].classList.toggle("active")
        }
    }
    }
}

const nextBtn = document.querySelector('.next-question')
nextBtn.addEventListener('click' , next)


function next(){
    
  
    if(question_count == questionsList.length - 1){
       
        location.href = "final.html"
        
    }
    
    const newe = document.querySelectorAll("li.option")
    const isTrue = [...newe].find((e) => {
        const TrueOrFalse =  e.classList.contains('active')
        if(TrueOrFalse){
            return true
        }else{
            return false
        }
    })
    if(isTrue){


    let user_answer = document.getElementsByClassName("active")[0].innerHTML
    if(user_answer == questionsList[question_count].answer){
        
    }else{
    
    }
    let objValue = {id : questionsList[question_count].id , answer : user_answer}
    let testObj = {}
    let objKey = `answers${questionsList[question_count].id}`
    
    testObj[objKey] = objValue
    // if(has){
    //     const index = repo.findIndex(o => Object.keys(has)[0] == Object.keys(o)[0])
    //     console.log(index);
    //     repo.splice(index , 1)


    // }
    checkAnswer(testObj , objKey)
   
    
    
    
    // localStorage.setItem(`answers${questionsList[question_count].id}` , JSON.stringify(myObj))
    question_count++
    show(question_count)
}else{
    question_count++
    show(question_count)
}
console.log(repo);
}


goBack.addEventListener("click" , goBackk)

function goBackk(){
    
    const newe = document.querySelectorAll("li.option")
    const isTrue = [...newe].find((e) => {
        const TrueOrFalse =  e.classList.contains('active')
        if(TrueOrFalse){
            return true
        }else{
            return false
        }
    })
    if(isTrue){

    let user_answer = document.getElementsByClassName("active")[0].innerHTML
    if(!user_answer){
    
    }
    let objValue = {id : questionsList[question_count].id , answer : user_answer}
    let testObj = {}
    let objKey = `answers${questionsList[question_count].id}`
    testObj[objKey] = objValue



    let option = document.querySelectorAll("li.option")
    const has = [...option].find((op) => {
        return op.classList.contains('active')
    })

    if(has){
        checkAnswer(testObj , objKey)
    }

    question_count--
    show(question_count)
    }else{
        question_count--
    show(question_count)
    }
}



