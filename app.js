const hel = document.getElementById('he')
const container = document.getElementById('container')
const maxContainer = document.getElementById('maxContainer')
const averageContainer = document.getElementById('averageContainer')
const minContainer = document.getElementById('minContainer')
const clo = document.getElementById('clo')
const max = document.getElementById('max')
const average = document.getElementById('average')
const min = document.getElementById('min')
const spectaclePower = document.getElementById('spectaclePower')
const vertexDistance = document.getElementById('vertexDistance')
const maxpersonAge = document.getElementById('maxpersonAge')
const averpersonAge = document.getElementById('averpersonAge')
const minpersonAge = document.getElementById('minpersonAge')
let maxAge = 100;
let minAge = 1;

    // function let(para){

    // }

    clo.addEventListener('click', ()=>{

      let input = spectaclePower.value;
      let distance = vertexDistance.value;
      

      if (input == "" && distance == ""){
        alert("Type Your Spectacle Power & vertex Distance!")
    }else{

        let calc = 1 - distance / 1000 * input
        let total = (input / calc)
        total = Math.round(total * 100) / 100;
        let p = document.createElement('p');
        container.innerText = total + " " + "D";
        spectaclePower.value = '';
        vertexDistance.value = '';
        container.classList.add('firstText')
        // container.appendChild(p)
    }
})

    max.addEventListener('click', ()=>{
      let maxinput = maxpersonAge.value;
      if (maxinput == "") {
        alert("Type Your Age!")
    }else if(maxinput > maxAge || maxinput < 1){
     alert("What The fUCk!")
     
 }else{
    let maxDistance = 25;
    let ageCalc =  0.4 * maxinput;
    let ageDistance = maxDistance - ageCalc;
    ageDistance = Math.round(ageDistance * 100) / 100;
    maxContainer.innerText = ageDistance + " " + "D";
    maxpersonAge.value = '';
    maxContainer.classList.add('text')
    
}

})

    average.addEventListener('click', ()=>{

      let averageinput = averpersonAge.value;
      
      if (averageinput == "") {
        alert("Type your age!")
    }else if(averageinput > maxAge || averageinput < 1){
     alert("What The fUCk!")
 }else{
    let averageDistance = 18.5;
    let averageAgeCalc =  0.3 * averageinput;
    let averageAgeDistance = averageDistance - averageAgeCalc;
    averageAgeDistance = Math.round(averageAgeDistance * 100) / 100;
    
    averageContainer.innerText = averageAgeDistance + " " + "D";
    averpersonAge.value = '';
    averageContainer.classList.add('text')
    
}


})

    min.addEventListener('click', ()=>{

      let mininput = minpersonAge.value;
      if (mininput == "") {
        alert("Type Your Age!")
    }else if(mininput > maxAge || mininput < 1){
     alert("What The fUCk!")
 }else{
    let minDistance = 15;
    let minageCalc =  0.25 * mininput;
    let minageDistance = minDistance - minageCalc;
    minageDistance = Math.round(minageDistance * 100) / 100;
    minContainer.innerText = minageDistance + " " + "D";
    minpersonAge.value = '';
    minContainer.classList.add('text')
    
}

})


    // const num = document.getElementById('num')
    // const clic = document.getElementById('clic')
    // const conta = document.getElementById('conta')

    // clic.addEventListener('click', ()=>{
    //     let averageText = document.createElement('p');
    //     averageText.innerText = num.value;
    //     num.value = '';
    //     document.querySelector('#conta').appendChild(averageText)
    // })
    
    

