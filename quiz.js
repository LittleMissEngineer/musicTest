let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title:"Which singer has not dyed their hair pink?",
        answers:['Iggy Azalea','Katy Perry', 'Zayn', 'Selena Gomez'],
        correct: 3
    },

    {
        title:"Which celebrity wrote Tupac while he was in jail?",
        answers:['James Brown','Jim Carrey', 'Oprah', 'Avril Lavigne'],
        correct: 1
    },

    {
        title:"Whose real name is Stefani Joanne Angelina Germanotta? ",
        answers:['Mariah Carey','Taylor Swift', 'Remy Ma', 'Lady Gaga'],
        correct: 3
    },

    {
        title:"Which singer has not fallen on stage(yet)?",
        answers:['Harry Styles','Katy Perry', 'Pink', 'Bruno Mars'],
        correct: 3
    },
];

$(document).ready(function(){
$('.start a').click(function(e){
    e.preventDefault();
    $('.start').hide();
    $('.quiz').show();
    showQuestion();
});

$('.quiz ul').on('click', 'li', function(){
    $('.selected').removeClass('selected');
$(this).addClass('selected');

});

$('.quiz a').click(function(e){
e.preventDefault();
if($('li.selected').length){
let guess = parseInt($('li.selected').attr('id'));
checkAnswer(guess);
}else{
    alert('Psssssss.... you forgot to pick an answer');
}

});

$('.summary a').click(function(e){
    e.preventDefault();
    restartQuiz();
})

});




function showQuestion(){
let question = questions[currentQuestion];
$('.quiz h2').text(question.title);
$('.quiz ul').html(' ');
for (var i = 0; i <question.answers.length; i++){
    $('.quiz ul').append("<li id ='"+ i+"'>"+ question.answers[i]+ "</li>");
}

}

function checkAnswer(){
    let guess = parseInt($('li.selected').attr('id'));
    let question = questions[currentQuestion];
    if(question.correct === guess){
        score++;
    }
    currentQuestion++; //moves on to the next question
    if(currentQuestion >= questions.length){
        showSummary();
    }else{
        showQuestion();
    }
 
}

function showSummary(){
$('.quiz').hide();
$('.summary').show();
$('.summary p').text("Congrats you scored "+score+" out of "+ questions.length + " correct!");
}

function restartQuiz(){
    $('.summary').hide();
    $('.quiz').show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
}