<template>
<div class="About container">
  <div class="row">
    <img src="./imgs/Frame.png" alt="#" class="frame-img">
    <img src="./imgs/Rectangle.png" alt="#" class="rectangle-img">
    <div class="col-lg-6 box-left">
      <div class="about-header">
        <h4><span>#</span>about-me</h4>
        <img src="./imgs/line-2.png" alt="">
      </div>
      <p>
        Hello, i’m Elias! <br><br>

        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br><br>

        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
      </p>
      <RouterLink class="contact-link " :to="{name:'contact'}">Contact Me !!</RouterLink>
    </div>
    <div class="col-lg-6 box-right">
      <img src="./imgs/developer2.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.About {

  height: auto;
  padding-top: 5rem;
  margin-bottom: 2rem;
}

.box-left {
  padding: 1rem 0;
}
.frame-img{
  width: 6rem;
  height: 5rem;
  position: absolute;
  right: 0;
  bottom: 25%;
}
.rectangle-img{
  width: 3.5rem;
  height: 5rem;
  position: absolute;
  left: 0;
  top:55% ;
  padding: 0;
  margin: 0;
}
.about-header {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 2rem;
}

.about-header h4 {
  color: #ffffff;
}

.about-header h4 span {
  color: #23d94b;
}

.about-header img {
  margin-left: 2rem;
  width: 55%;
}

.box-left p {
  color: #ABB2BF;
  font-size: 1rem;
  margin-bottom: 3rem;
}

.contact-link {
  cursor: pointer;
  text-decoration: none;
  outline: 1.5px solid #23d94b;
  padding: 0.5rem 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
  font-weight: bold;
}

.box-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
