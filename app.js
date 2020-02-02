const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ihurtuhurt</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  
    <!-- background-color: #a399b2;
  background-image: linear-gradient(147deg, #a399b2 0%, #4d4855 74%);
   -->
  
    <!-- Font Awesome if you need it
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    -->
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css">
    <!--Replace with your tailwind.css once created-->
  
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet">
  
      <style>
          html {
              background-color: #a399b2;
          }
          img {
              border: 2px solid #4d4855;
      height: 50%;
      border-radius:50%;
      width: 50%;
  
          }
          
          .gradient {
              background:  linear-gradient(147deg, #a399b2 0%, #4d4855 74%);
          }
      </style>
  
  </head>
  
  <body class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">
  
  <!--Nav-->
  <nav id="header" class="fixed w-full z-30 top-0 text-white">
  
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
              
          <div class="pl-4 flex items-center">
              <a class="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
              <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
              <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
              <path class="plane-take-off" d="M369.75,21.675c-43.35,0-86.7,20.4-114.75,53.55c-28.05-33.15-71.4-53.55-114.75-53.55C61.2,21.675,0,82.875,0,161.925
              c0,96.9,86.7,175.95,219.3,293.25l35.7,33.15l35.7-33.15c130.05-119.85,219.3-198.9,219.3-293.25
              C510,82.875,448.8,21.675,369.75,21.675z M257.55,419.475H255l-2.55-2.55C130.05,307.274,51,235.875,51,161.925
              c0-51,38.25-89.25,89.25-89.25c38.25,0,76.5,25.5,91.8,61.2h48.45c12.75-35.7,51-61.2,89.25-61.2c51,0,89.25,38.25,89.25,89.25
              C459,235.875,379.95,307.274,257.55,419.475z"/>
              </svg> ihurtuhurt
          </a>
          </div>
  
          <div class="block lg:hidden pr-4">
              <button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
                  <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
          </div>
  
          <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
              <ul class="list-reset lg:flex justify-end flex-1 items-center">
                  <li class="mr-3">
                      <a class="inline-block py-2 px-4 text-black font-bold no-underline" target="blank" href="https://soundcloud.com/5150_150">Soundcloud</a>
                  </li>
                  <li class="mr-3">
                      <a class="inline-block py-2 px-4 text-black font-bold no-underline" target="blank" href="https://twitter.com/ihurtuhurt">Twitter</a>
                  </li>
                  <li class="mr-3">
                      <a class="inline-block py-2 px-4 text-black font-bold no-underline" target="blank" href=https://www.instagram.com/ihurtuhurt/?hl=en">IG</a>
                  </li>
              </ul>
          </div>
      </div>
      
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
  
  
  
  
  <!--Hero-->
  <div class="pt-24">
  
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <!--Left Col-->
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/746160853&color=%23282b32&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><br>
  
              <h1 class="uppercase leading-normal text-bold text-5xl w-full">Cat Pic Avi</h1>
              <p class="leading-normal text-0.5xl mb-8">Cat Pic Avi, I hate my fucking face. <br> Cat Pic Avi, I hate my fucking face.</br> <br> Cat Pic Avi, I hate my fucking face. </br>I turned on my mic, to document my pain. <br>This life is finite, why does it feel the same?</br> It hurts, but I work and that will never change.<br> <br>I unload the piece, ASMR, empty clip.</br> My hands, like the beyblades, I'm going to let it rip.</br> I think I fell in love with my psychiatrist... <br> Eye hand coordinated, baby, I don't trip. </br> I don't trip, No, I don't sip. <br> Dudes don't really have content, why they on my dick?</br> No one's shown her love, that's why she sells her pics. <br> Cat Pic Avi, because they steal my drip. </br> Steal my drip, I get the bag then dip. <br> Boy, I'm so apathetic man, I can't feel shit. </br> I can't even feel the rolex on my wrist. <br> The dude with the Cat Pic Avi, he stole my bitch. </br> I know it's hard to live, I know it's hard to live. <br> It feels like everything is either take or give. <br> Wake up early in the morning, drink a fifth. </br> You know that I love you, I wish that you'd quit. <br> I wish that you'd quit, but I know how it is. </br> I used to live for it, I used to need a fix. <br> I used to love the smoke in my lungs, it felt so crisp. </br> I used to love the way you smiled, before I got so sick, so sick. <br><br> Cat Pic Avi, I hate my fucking face. </br>I turned on my mic, to document my pain. <br>This life is finite, why does it feel the same?</br> It hurts, but I work and that will never change.<br></br> Baby, call me waste, don't ever call me by my name. <br> I've been in bed for days, it's feeling like the black plague. <br> I shut the fuck down like Back Page, I still have bad days. </br> Cat Pic Avi, because real life is just a rat race <br> Cat Pic Avi, because real life is just a rat race </br> Cat Pic Avi, because real life is just a rat race <br> Cat Pic Avi, I hate my fucking face. </br>   </p>
              <p class="uppercase tracking-loose w-full">Produced by Wikid beats</p>
              <p class="uppercase tracking-loose w-full">Written by ihurtuhurt</p>
              <p class="uppercase tracking-loose w-full">Engineered by ihurtuhurt</p><br></br>
          </div>
          <!--Right Col-->
          <div class="w-full md:w-3/5 py-6 text-center">
              <br>
              <img class="w-full md:w-4/5 z-50" src="cat2.png"> <br>
              <img class="w-full md:w-4/5 z-50" src="cat.png">
          </div>
          
      </div>
  
  </div>
  
  <script>
  
      var scrollpos = window.scrollY;
      var header = document.getElementById("header");
      var navcontent = document.getElementById("nav-content");
      var navaction = document.getElementById("navAction");
      var brandname = document.getElementById("brandname");
      var toToggle = document.querySelectorAll(".toggleColour");
  
      document.addEventListener('scroll', function() {
  
      /*Apply classes for slide in bar*/
      scrollpos = window.scrollY;
  
      if(scrollpos > 10){
        header.classList.add("bg-white");
        navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("text-white");
        //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) {
           toToggle[i].classList.add("text-gray-800");
           toToggle[i].classList.remove("text-white");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
      }
      else {
        header.classList.remove("bg-white");
        navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("text-white");
        navaction.classList.add("text-gray-800");
        //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) {
           toToggle[i].classList.add("text-white");
           toToggle[i].classList.remove("text-gray-800");
        }
        
        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
        
      }
  
      });
  
      
  </script>
  
  <script>
      
      
      /*Toggle dropdown list*/
      /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/
      
      var navMenuDiv = document.getElementById("nav-content");
      var navMenu = document.getElementById("nav-toggle");
      
      document.onclick = check;
      function check(e){
        var target = (e && e.target) || (event && event.srcElement);
        
        //Nav Menu
        if (!checkParent(target, navMenuDiv)) {
          // click NOT on the menu
          if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("hidden")) {
              navMenuDiv.classList.remove("hidden");
            } else {navMenuDiv.classList.add("hidden");}
          } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("hidden");
          }
        }
        
      }
      function checkParent(t, elm) {
        while(t.parentNode) {
          if( t == elm ) {return true;}
          t = t.parentNode;
        }
        return false;
      }
  </script>
  
  
  </body>
  
  </html>`);
});

app.listen(5000, () => {
  console.log("App listening on port 5000!");
});
