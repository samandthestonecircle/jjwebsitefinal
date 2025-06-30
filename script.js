
// FULL SCREEN MENU BEHAVIOUR

function hideAllMenus(){
    document.getElementById("sub-menu-left").style.opacity = "0";
    document.getElementById("sub-menu-right").style.opacity = "0";
  
}



function showSoundDesignMenu(){
    document.getElementById("sub-menu-left").style.opacity = "1";     
    document.getElementById("sub-menu-right").style.opacity = "0";   

}


function showAudioEngineerMenu(){
    document.getElementById("sub-menu-left").style.opacity = "0";     
    document.getElementById("sub-menu-right").style.opacity = "1";   
}

// MOBILE MENU BEHAVIOUR

function sdDropdown(){
    document.getElementById("sub-menu-mobile-s").classList.toggle("show");

    let x = document.getElementById("sub-menu-mobile-a");

    let xDisplay = window.getComputedStyle(x).display;

    if (xDisplay === "flex") {
        x.classList.toggle("show");
    }
   
    }

function aeDropdown(){
    document.getElementById("sub-menu-mobile-a").classList.toggle("show");

    let x = document.getElementById("sub-menu-mobile-s");

    let xDisplay = window.getComputedStyle(x).display;

    if (xDisplay === "flex") {
        x.classList.toggle("show");
    }
}


//PAGE DISPLAY BEHAVIOUR

function homePage(){  
    
    // Close mobile menus

    let x = document.getElementById("sub-menu-mobile-a");
    let y = document.getElementById("sub-menu-mobile-s");
    let xDisplay = window.getComputedStyle(x).display;
    let yDisplay = window.getComputedStyle(y).display;
    if (xDisplay === "flex") {
        x.classList.toggle("show");
    }
    if (yDisplay === "flex") {
        y.classList.toggle("show");
    }

    // Homepage
    document.getElementById("landing-page").style.display = "flex";

    document.getElementById("sd-portfolio").style.display = "none";
    document.getElementById("sd-services").style.display = "none";
    document.getElementById("sd-about").style.display = "none";
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}


function rainbowAnim(){

    function turnBack(){
        document.getElementById("rainbow").src= "rainbow.png";
    }


    document.getElementById("rainbow").src= "rainbow.gif";
    
    setTimeout(turnBack, 1000);
}

function stopRainbow(){
    document.getElementById("rainbow").src= "rainbow.png";
}




function sdPortfolio(){    
    document.getElementById("sd-portfolio").style.display = "block";    

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-services").style.display = "none";
    document.getElementById("sd-about").style.display = "none";
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}

function sdServices(){    
    document.getElementById("sd-services").style.display = "block";

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none";   
    document.getElementById("sd-about").style.display = "none";
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}

function sdAbout(){    
     document.getElementById("sd-about").style.display = "flex";

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none"; 
    document.getElementById("sd-services").style.display = "none";      
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}



function aeDiscography(){    
    document.getElementById("ae-discography").style.display = "flex";

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none"; 
    document.getElementById("sd-services").style.display = "none"; 
    document.getElementById("sd-about").style.display = "none";        
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}

function aeServices(){    
    document.getElementById("ae-services").style.display = "block";   

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none"; 
    document.getElementById("sd-services").style.display = "none"; 
    document.getElementById("sd-about").style.display = "none";        
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}

function aeAbout(){    
    document.getElementById("ae-about").style.display = "flex";   

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none"; 
    document.getElementById("sd-services").style.display = "none"; 
    document.getElementById("sd-about").style.display = "none";    
    document.getElementById("ae-services").style.display = "none";     
    document.getElementById("ae-discography").style.display = "none";
     
}

// SD PORTFOLIO

function showIcon(icon) {
    document.getElementById(icon).style.opacity = "1";
}

function hideIcon(icon) {
    document.getElementById(icon).style.opacity = "0";
}

// SD SERVICES



function startAnimation(sprite) {
    document.getElementById(sprite).src = sprite + ".gif";
}
function stopAnimation(sprite) {
    document.getElementById(sprite).src = sprite + ".png";
}

// AE DISCOG

function showCredit(album) {   
    document.getElementById(album).style.opacity = "1";    
}

function hideCredit(album) {  
    document.getElementById(album).style.opacity = "0";
}

// AE SERVICES

function showGear(icon) {
    document.getElementById(icon).style.opacity = "1";
}
function hideGear(icon) {
    document.getElementById(icon).style.opacity = "0";
}

