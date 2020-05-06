const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2")
const percentage=document.querySelector(".percentage")
const question= document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex=1;
let index=0;
let myArray=[];
let myArr=[];
let score=0;

//the quiz questions and answers



const questions=[
    {
    q: 'What does the "SCP" in SCP Foundation stand for?',
    options:['Secure Contain Protect', 'Special Containment Procedures', 'Secure Contained Protected','Securing Containing Protecting'],

answer:1
    },
    {
        q: ' Which of the following GoIs (Groups of Interest) is SCP 1007 associated with?',
        options:[' Doctor Wondertainment', 'The Global Occult Coalition', 'Oneiroi Collective','Church of The Broken God'],
    
    answer:0
    },
    {
        q: ' Which of these SCP classifications describe hard to contain anomalies that could cause a "world end" scenario if left uncontained?',
        options:['Safe', 'Thaumiel', 'Euclid','Keter'],
    
    answer:3
    },
    {
        q: 'Which SCP is called the "Tickle Monster"?',
        options:['SCP 2008', 'SCP 999', 'SCP 049','SCP 343'],
    
    answer:1
    },
{
    q: 'SPC 049 containment classification is...?',
    options:['Thaumiel', 'Euclid', 'Safe','Keter'],

answer:1
}
]

// questions and options
totalQuestionSpan.innerHTML=questions.length;
function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0]; 
    op2.innerHTML=questions[questionIndex].options[1]; 
    op3.innerHTML=questions[questionIndex].options[2]; 
    op4.innerHTML=questions[questionIndex].options[3]; 
    index++;
}
function check(element){
    if (element.id==questions[questionIndex].answer){
        element.classList.add("correct");
        updateAnswerTracker("correct")
        score++;
        console.log("score:"+score)

    }
    else{
        element.classList.add("wrong");
        updateAnswerTracker("wrong")
        
    }
   disabledOptions()
}

function disabledOptions(){
     for(let i=0; i<options.length; i++) { 
     options[i].classList.add("disabled");
     if(options[i].id==questions[questionIndex].answer){
         options[i].classList.add("correct");
     }
    }
    
}
function enabledOptions(){
for (let i=0; i<options.length;i++) {
   options[i].classList.remove("disabled", "correct", "wrong");
} 
}
function validate(){
 if(!options[0].classList.contains("disabled")){
     alert("Please Select an option")
 }
 else{
     enabledOptions();
     randomQuestion() 
 }
}
function next(){
    validate();
}

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0
    if(index==questions.length) {
        quizOver();
    } 
    else{
        if(myArray.length>0){
for(let i=0;i<myArray.length;i++){
   if(myArray[i]==randomNumber){
       hitDuplicate=1;
       break;
      }
     }
     if(hitDuplicate==1){
         randomQuestion();
     }
        else{
    questionIndex=randomNumber;
    load();
    myArr.push(questionIndex);

  }
}
        if(myArray.length==0){
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
        }
    
    myArray.push(randomNumber);
    
       }
}
  
function answerTracker(){
  for(let i=0;i<questions.length;i++){
      const div=document.createElement("div")
         answerTrackerContainer.appendChild(div);
  } 
}
      function updateAnswerTracker(classNam){
         answerTrackerContainer.children[index-1].classList.add(classNam);
      }
       function quizOver(){
        document.querySelector(".quiz-over").classList.add("show");
         correctAnswerSpan.innerHTML=score;
          totalQuestionSpan2.innerHTML=questions.length;

               percentage.innerHTML=(score/questions.length)*100 +"%";

}
    function tryAgain(){
        window.location.reload(); 
    }

    window.onload=function(){
     randomQuestion();  
     answerTracker();
    }