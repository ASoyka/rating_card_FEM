const card = document.querySelector('.card');
const submitBtn = document.getElementById('submit');
const ratingBtns = document.querySelectorAll('.rating__btn');
const score = document.querySelector('.score');
let starsScore = 3;

submitBtn.addEventListener('click', onSubmit);
ratingBtns.forEach(btn => {
  btn.addEventListener('click', handleRatingBtnClick);
  btn.addEventListener('mouseenter', addHover);
  btn.addEventListener('mouseleave', removeHover);
});

function onSubmit() {
  score.textContent = starsScore;
  ratingBtns.forEach(el => {
    if (el.classList.contains('active')) {
      card.classList.toggle('is-flipped');
    }
  });
};

function addHover(hover){
  ratingBtns.forEach(btn =>{
    btn.classList.remove('hover');
  });

  if (hover.target.classList.contains('rating__btn')){
    hover.target.classList.add('hover');
  }else{
    hover.target.parentElement.classList.add('hover');
  }

  if (hover.target.classList.contains('active')){
    hover.target.classList.remove('hover');
  }else{
    hover.target.parentElement.classList.remove('hover');
  }
}

function removeHover(hover){
  ratingBtns.forEach(btn =>{
    btn.classList.remove('hover');
  });
}

function handleRatingBtnClick(event){
  ratingBtns.forEach(btn =>{
    btn.classList.remove('active');
  });

  if (event.target.classList.contains('rating__btn')){
    event.target.classList.remove('hover');
    event.target.classList.add('active');
  }else{
    event.target.parentElement.classList.remove('hover');
    event.target.parentElement.classList.add('active');  
  }
  
  starsScore = event.target.textContent;
  console.log(starsScore);
};

