<template>
  <div class="row contact">
    <div class="contact-header">
      <h4><span>#</span>contact</h4>
      <img src="./imgs/line-2.png" alt="" />
    </div>
    <div class="col-lg-6 left-box">
      <h2>Firdavs Normurodov </h2>
      <p>
        I'm a fullstack developer building websites and web apps, if you have <br>
        any questions or need more information, please message me and I'll trybr <br>
        to get back to you asap. <br>
      </p>
    </div>
    <div class="col-lg-6 right-box">
      <h3>Message me here</h3>
      <a><i class="fa-solid fa-phone"></i> +998(91)222-73-93</a>
      <a href="https://t.me/Star329293" target="_blank"><i class="fa-brands fa-telegram"></i>Star329293</a>
      <a href="https://firdavsnormurodov435@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i>firdavsnormurodov435@gmail.com</a>
      <a href="https://www.instagram.com/night_star0724/" target="_blank"><i class="fa-brands fa-instagram"></i>night_star0724</a>
      <a href="https://github.com/Firdavs-Normurodov"><i class="fa-brands fa-github"></i>firdavs-normurodov</a>
    </div>
    <div class="col-12 footer">
      <div class="row">
        <div class="col-lg-6 footer-card-left">
          <p>Firdavs <a href="https://firdavsnormurodov435@gmail.com" target="_blank">firdavsnormurodov435@gmail.com</a></p>
        </div>
        <div class="col-lg-6 footer-card-right">
          <p>Media</p>
          <a href="https://t.me/Star329293" target="_blank"><i class="fa-brands fa-telegram"></i></a>
          <a href="https://firdavsnormurodov435@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
          <a href="https://www.instagram.com/night_star0724/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/Firdavs-Normurodov"><i class="fa-brands fa-github"></i></a>
        </div>
        <div class="col-12 the-end">
          <p>&copy;All rights reserved || Firdavs Normurodov</p>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  .contact {
    padding-top: 5rem ;
  }
  
  .contact-header {
    display: flex;
    /* justify-content: center; */
    align-items: center !important;
    margin-bottom: 2rem;
  }
  
  .contact-header h4 {
    color: #ffffff;
  }
  
  .contact-header h4 span {
    color: #23d94b;
  }
  
  .contact-header img {
    margin-left: 2rem;
    width: 15%;
  }
  
  .left-box {
    color: #ABB2BF;
  }
  
  .left-box h2 {
    margin-bottom: 2rem;
  }
  
  .left-box p {
    line-height: 1.4;
  }
  
  .right-box {
    color: #ABB2BF;
    outline: 1px solid #23d94b;
    padding: 1rem;
  }
  
  .right-box a {
    text-decoration: none;
    color: #ABB2BF;
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }
  
  .right-box a i {
    margin-right: 1rem;
  }
  
  .footer {
    border-top: 1px solid #23d94b;
    margin-top: 4rem;
    padding-top: 2rem;
  }
  .footer-card-left{
    text-align: center;
  }
  .footer-card-left p {
    color: #ffffff;
  }
  
  .footer-card-left p a {
    text-decoration: none;
    color: #ABB2BF;
    margin-left: 1rem;
  }
  
  .footer-card-right {
    text-align: center  ;
  }
  
  .footer-card-right p {
    color: #ffffff;
    font-size: 1.3rem;
  }
  .footer-card-right a{
    color: #ABB2BF;
    margin-left:0.5rem;
  }
  .the-end{
    text-align: center;
    color: #ABB2BF;
  }
  
  </style>
  