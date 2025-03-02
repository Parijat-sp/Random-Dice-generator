let randomNumber1 = Math.floor(Math.random()*6+1);

let randomNumber2 = Math.floor(Math.random()*6+1);

const imageChange = document.querySelector('.dice .img1');
imageChange.setAttribute('src','images/dice2.png');

const imagePath = `images/dice${randomNumber1}.png`;

const imagePath2 = `images/dice${randomNumber2}.png`;

imageChange.src=imagePath;

const imageChange2 = document.querySelector('.dice .img2')
imageChange2.src=imagePath2;

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="Player 1 wins.";
} else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML="Player 2 wins.";
}else {
    document.querySelector('h1').innerHTML="Draw";
} 
