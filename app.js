const correctAnswers = ['C','A','C','B'];

const form = document.querySelector('.quiz-form');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //Check answers
    userAnswers.forEach((answer, index) =>{
        if (answer === correctAnswers[index]) {
            //the value is correct
            score++;
        }
    });

    score = (score/correctAnswers.length)*100;
    
    
    let result = document.querySelector('.percentage');
    let resultDiv = document.querySelector('.resultDiv');
    
    scrollTo(0,0);
    resultDiv.classList.remove("d-none");
    


    let output = 0;
    const timer = setInterval(()=>{
        result.textContent = output+'%';
        if (output === score) {
            clearInterval(timer);
        } else {
            output++
        }
    }) 
},10);

