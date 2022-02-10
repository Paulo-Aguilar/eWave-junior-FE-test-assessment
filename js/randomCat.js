// random cat button
const catResult = document.getElementById('catResult');
const catBtn = document.getElementById('catBtn');

catBtn.addEventListener('click', getRandomCat)


function getRandomCat(){
  fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data=>{
        let htmlString = `<img src="${data.file}"/>`;
        var htmlObject=document.createElement("div");
        htmlObject.innerHTML=htmlString;
        document.querySelector("#catResult").insertAdjacentElement('beforeend',htmlObject);
    })
}

