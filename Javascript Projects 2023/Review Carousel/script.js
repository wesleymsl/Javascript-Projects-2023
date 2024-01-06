class Reviews {
  constructor(reviewer, summary, review){
    this.reviewer = reviewer;
    this.summary = summary;
    this.review = review;
  };
};

let nextReview = document.getElementById('nextReview');
let previousReview = document.getElementById('previousReview');
let supriseMe = document.getElementById('supriseMe');
let review1 = new Reviews('Danny R', 'Horrendous organisation when it comes to flights being delayed/cancelled...', 'One of the worst airlines I have ever flown with. Today I finally received a response after submitting a complaint regarding the cancellation of flight SN2047 over a month ago only to be told I would not be getting any kind of refund or compensation.');
let review2 = new Reviews('Tammy B', 'Cancelled flight left us high and dry', 'Brussels Airlines cancelled the final leg of our flight to Florence two days before the flight. Although, I believe they actually cancelled us, as when I looked for alternate flights on their website, it said our flight was Sold Out.');
let review3 = new Reviews('Caterina C', 'Currently one of the worst carriers!', 'Currently one of worst carriers, with extremely unfavourable quality/price balance. Very high prices, continuous delays, average to low quality of personnel several times they could not even give me a receipt for in-flight services.');
let review4 = new Reviews('Philip P', 'All correct without anything more', 'Timely boarding, efficient and well. Good coffee (for 3€). Friendly crew. Leg space sufficient everywhere, but not more than that for my long legs.');
let review5 = new Reviews('Amy Anderson', 'Lost Luggage for 3 days, and cant get in touch with anyone to get reimbursed.', 'The flight was fine. Nothing more. My problem is that my luggage was left in Brussels, and I got it 3 days later.');
let reviewArray = [review1, review2, review3, review4, review5];
let i = 0;
document.getElementById('nameOfPerson').textContent = reviewArray[i].reviewer;
document.getElementById('summary').textContent = reviewArray[i].summary;
document.getElementById('review').textContent = reviewArray[i].review;

nextReview.addEventListener('click', function(){
  i+=1
  if(i> reviewArray.length - 1){
    i = 0;
  }
  document.getElementById('nameOfPerson').textContent = reviewArray[i].reviewer;
  document.getElementById('summary').textContent = reviewArray[i].summary;
  document.getElementById('review').textContent = reviewArray[i].review;
});

previousReview.addEventListener('click', function(){
  i-=1;
  if(i<0){
    i = 4;
  }
  document.getElementById('nameOfPerson').textContent = reviewArray[i].reviewer;
  document.getElementById('summary').textContent = reviewArray[i].summary;
  document.getElementById('review').textContent = reviewArray[i].review;
});

supriseMe.addEventListener('click', function(){
  i = Math.floor(Math.random() * reviewArray.length - 1);
  document.getElementById('nameOfPerson').textContent = reviewArray[i].reviewer;
  document.getElementById('summary').textContent = reviewArray[i].summary;
  document.getElementById('review').textContent = reviewArray[i].review;
});




