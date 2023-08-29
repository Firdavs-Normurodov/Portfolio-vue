<template>
<div class="container home">
  <div class="row">
    <div class="col-lg-7 col-md-12 card-left">
      <div class="line-icons ">
        <a>
          <img src="./imgs/Line.png" alt="">
        </a>
        <a href="https://github.com/Firdavs-Normurodov" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://t.me/Star329293" target="_blank">
          <i class="fa-brands fa-telegram"></i>
        </a>
        <a href="https://www.instagram.com/night_star0724/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <h1>Hello, my name is Firdavs and <br> I am a <span class="web-dev-color">
          Fullstack developer
        </span></h1>
      <p>He crafts responsive websites where technologies <br> meet creativity</p>
      <RouterLink class="contact-link " :to="{name:'about'}">Contact Me !!</RouterLink>

    </div>
    <div class="col-lg-5 col-md-12 card-right ">
      <img src="./imgs/developer.png" alt="" class="img-fluid">
    </div>
    <!-- <div class="col-12 footer">
      <p> &copy;All rights reserved || Firdavs Normurodov</p>
    </div> -->
  </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home {
  /* height: 80vh; */
  padding-top: 5rem;
  display: flex;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}



.line-icons {
  height: 3rem;
  width: 1rem;
  position: absolute;
  left: 1rem;
  text-align: center;
  margin: 0;
  padding: 0;
}

.line-icons a {
  display: block;
  text-decoration: none;
  margin: 0.5rem 0;
  color: #ABB2BF;
}



.home .row .card-left .web-dev-color {
  color: #23d94b;
}

.home .row .card-left h1 {
  font-weight: 600;
  color: #ffffff;
  font-size: 2.5rem;
  line-height: 1.5;
}

.home .row .card-left p {
  color: #ABB2BF;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.home .row .card-left .contact-link {
  cursor: pointer;
  text-decoration: none;
  outline: 1.5px solid #23d94b;
  padding: 0.5rem 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
  font-weight: bold;
}

.card-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer p{
  color: #ABB2BF;
  transform: translateY(2rem);
}
</style>
