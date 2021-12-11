//alert("this page is connected");
window.onload = pageLoaded;

function pageLoaded(){




    //variables for HTML
    var firstArticle = document.getElementById("firstArticle");
    var briefIntro = document.getElementById("briefIntro");

    var SecondArticle = document.getElementById("SecondArticle");
    var briefIntro2 = document.getElementById("briefIntro2");
   
    var thirdArticle = document.getElementById("thirdArticle");
    var briefIntro3 = document.getElementById("briefIntro3");

    var fourthArticle = document.getElementById("fourthArticle");
    var briefIntro4 = document.getElementById("briefIntro4");



    //functions
    function displayArticle1(){
        firstArticle.style.display = "block";
        SecondArticle.style.display = "none";
        thirdArticle.style.display = "none";
        fourthArticle.style.display = "none";

        briefIntro.style.display ="none";
        briefIntro2.style.display ="block";
        briefIntro3.style.display="block";
        briefIntro4.style.display="block";

    }
 
    function displayArticle2(){
        firstArticle.style.display = "none";
        SecondArticle.style.display = "block";
        thirdArticle.style.display = "none";
        fourthArticle.style.display = "none";

        briefIntro.style.display ="block";
        briefIntro2.style.display ="none";
        briefIntro3.style.display="block";
        briefIntro4.style.display="block";

    }
    
    function displayArticle3(){
        firstArticle.style.display = "none";
        SecondArticle.style.display = "none";
        thirdArticle.style.display = "block";
        fourthArticle.style.display = "none";

        briefIntro.style.display ="block";
        briefIntro2.style.display ="block";
        briefIntro3.style.display="none";
        briefIntro4.style.display="block";
    }
 
    function displayArticle4(){
        firstArticle.style.display = "none";
        SecondArticle.style.display = "none";
        thirdArticle.style.display = "none";
        fourthArticle.style.display = "block";

        briefIntro.style.display ="block";
        briefIntro2.style.display ="block";
        briefIntro3.style.display="block";
        briefIntro4.style.display="none";
    }
  
     function displayArticle5(){
        firstArticle.style.display = "none";
        SecondArticle.style.display = "none";
        thirdArticle.style.display = "none";
        fourthArticle.style.display = "none";

        briefIntro.style.display ="block";
        briefIntro2.style.display ="block";
        briefIntro3.style.display="block";
        briefIntro4.style.display="block";
    }


    //listeners
    briefIntro.onclick = displayArticle1;
    briefIntro2.onclick = displayArticle2;
    briefIntro3.onclick = displayArticle3;
    briefIntro4.onclick = displayArticle4;

}


    






    //slide show
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    }

