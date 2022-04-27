const start_btn = document.querySelector(".start_btn button");
const home_screen = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const country_advise_text = document.getElementById("country-advise-text");

start_btn.onclick = ()=>{
    showQuetions(0);
    info_box.classList.add("activeInfo");
    home_screen.style.visibility='hidden';
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    home_screen.style.visibility='visible';
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
}

let que_count = 0;
let que_numb = 1;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    showQuetions(que_count);
    questionCounter(que_numb);
    next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
bottom_ques_counter.innerHTML = '<span><p>'+ 1 +'</p> of <p>'+ questions.length +'</p> Questions</span>';

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuetions(que_count);
        questionCounter(que_numb);
        next_btn.classList.remove("show");
    }else{
        showResult();
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for(let i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';

function optionSelected(answer){
    let userAns = answer.textContent;
    const allOptions = option_list.children.length;

    let key = "answer_" + questions[que_count].numb;
    localStorage.setItem(key, userAns);
    answer.setAttribute("class", "option correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);

    for(let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResult(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    adviceLocation();
}

function questionCounter(index){
    let questionNumber = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = questionNumber;
}

let countries = [];
initializeEuropeanCountries();

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

function adviceLocation() {
    let answer1 = localStorage.getItem("answer_1");
    let answer2 = localStorage.getItem("answer_2");
    let answer3 = localStorage.getItem("answer_3");
    let answer4 = localStorage.getItem("answer_4");
    let answer5 = localStorage.getItem("answer_5");

    let possibleCountries = countries
        .filter(country => String(country.climate) === answer1)
        .filter(country => String(country.continent) === answer2)
        .filter(country => String(country.geo) === answer3)
        .filter(country => String(country.mood) === answer4)
        .filter(country => String(country.tours) === answer5);

    let randomCountry = random_item(possibleCountries);
    country_advise_text.innerHTML = randomCountry.name;
}