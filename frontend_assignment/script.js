 
//Assignment for 90 north
//Toggle functionality for responsive web page

document.getElementById('collapse-btn').addEventListener('click',() =>{
    const leftMenu = document.querySelector('.left-menu');
    leftMenu.classList.toggle('collapsed');
})

function adjustPageScale(){

    const screenWidth = window.innerWidth;
    let scale = 1;

    if(screenWidth <= 600){
        scale = 0.5;
    }
    else if(screenWidth > 600 && screenWidth <= 700){
        scale = 0.75;
    }
    else if(screenWidth > 700 && screenWidth <= 767){
        scale = 0.8;
    }
    else if(screenWidth > 992 && screenWidth <= 1600){
        scale = 0.9;
    }
    else{
        scale = 1;
    }

    const container = document.querySelector('.container');
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = "top left"; 
    container.style.width = `${100 / scale}%`;;
}

adjustPageScale();

window.addEventListener("resize", adjustPageScale);