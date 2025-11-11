// En variant av uppgift 7 där jag har ledtrådar till talet //

let secretNumber = 25



function updateSlider() {
    let sliderValue = parseInt(document.getElementById('valueSlider').value)

    document.getElementById('selectedNumber').innerHTML = sliderValue;

    let distance = Math.abs(sliderValue-secretNumber);

    if (distance === 0)  {
        document.getElementById('hint').innerHTML = 'Correct';

    }else if(distance <= 5){
        document.getElementById('hint').innerHTML = 'Very warm';

    }else if(distance <= 10){
        document.getElementById('hint').innerHTML = 'Warm';

    }else if(distance <= 15){
        document.getElementById('hint').innerHTML = 'Quite warm';

    }else if(distance <= 25){
        document.getElementById('hint').innerHTML = 'A little cold';

    }else if(distance <= 35){
        document.getElementById('hint').innerHTML = 'Quite cold'
    
    }else if(distance <= 45){ 
        document.getElementById('hint').innerHTML = 'Cold'
    

    }else if(distance <= 55){ 
        document.getElementById('hint').innerHTML = 'Very cold'
    
    
    }else{
        document.getElementById('hint').innerHTML = 'Coldest'
    }

}


updateSlider();