let currentQuestionIndex = 0; 
let barsHiddenCount = 0;     

const bars = document.querySelectorAll('.bar'); 
const questionElement = document.getElementById('question-text');


const questions = [
    "Have you become less sympathetic toward your colleagues lately?",
    "Do you feel that your accomplishments are insignificant?",
    "Are you experiencing physical symptoms like headaches due to stress?",
    "Do you feel that your work has lost its meaning or purpose?", 
    "Do you feel a strong desire to withdraw from your responsibilities?",
    "Do you find it increasingly difficult to concentrate or make simple decisions?"
];

function drainEnergy() {
    
    if (barsHiddenCount < bars.length) {
        bars[barsHiddenCount].style.opacity = "0"; 
        barsHiddenCount++;
        
        
        updateColors();
    }
    showNextQuestion();
}

function keepEnergy() {
    
    showNextQuestion();
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.innerText = questions[currentQuestionIndex];
        currentQuestionIndex++;
    }else{
        const quizArea= document.querySelector('.quiz-area');
        const buttons= quizArea.querySelectorAll('button');
        buttons.forEach(btn => btn.style.display='none')

        if(barsHiddenCount>=4){
            questionElement.innerText="ASSESSMENT COMPLETE: High Burnout Risk. Please prioritize your mental health.";
        }else{
            questionElement.innerText="ASSESSMENT COMPLETE: Your energy levels are stable. Keep practicing self-care!";
        }
    }
}

function updateColors() {
    if (barsHiddenCount >= 4) {
        bars.forEach(bar => {
            bar.style.background = "linear-gradient(90deg, #e74c3c, #c0392b)";
        });
    }
}