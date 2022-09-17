import {repo , questionsList , array} from "./quizRepo.js"
const item = JSON.parse(localStorage.getItem('userRepo'))
let point = 0
const btn = document.querySelector(".show-score")

item.forEach((e) => {
    const userAnswer = Object.values(e)[0].answer
    for(let i = 0 ; i <= questionsList.length - 1 ; i++){
        if(userAnswer === questionsList[i].answer){
            console.log("haaaaaaaaaaaaaaa");
            point += 1
        }
    }
})

function showScore(){
    const target = document.querySelector('.score')
    target.innerHTML = `your score is ${point} out of ${questionsList.length}`
    localStorage.clear()
}

btn.addEventListener('click' , showScore)










// const show = document.querySelector('show-score')
// show.addEventListener('click' , showScore)
// // const showBtn = document.querySelector('.show-score')
// // const target = document.querySelector('.score')
// function showScore(){
//     console.log('salam');
// }
// console.log(test);
// console.log(repo);
// console.log(questionList);


// function showScore(){
//     document.querySelector('.show-score').remove()
//  let finalScore = 0
//  for(let i = 0 ; i <= questionsList.length ; i++){
//      const now = repo
//      console.log(now);
//      // const test = JSON.parse(localStorage.getItem(`answers${i}`))
//      const finded = questionsList.find((e) => {
//          return e.id == test.id
//      })
//      console.log(finded);
//      if(finded.answer == test.answer){
//          finalScore += 1
//      }
     
//     //  console.log(test);
//  }   
//  console.log(finalScore);
//  const scoreBase = document.querySelector('.score')
//  scoreBase.innerHTML = `your score is ${finalScore} out of ${questionsList.length}`

// }