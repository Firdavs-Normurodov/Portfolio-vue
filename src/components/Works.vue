<template>
<div class="row works">
  <div class="works-header">
    <h4><span>#</span>project</h4>
    <img src="./imgs/line-2.png" alt="">
  </div>
  <div class="col-lg-4">
    <div class="work-card">
      <img src="./imgs/Rectangle.jpg" alt="" class="img-fluid">
      <p class="p-card">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
        <span>VUE</span>
      </p>
      <h3>Vue App</h3>
      <p class="text">Minecraft servers hosting </p>
      <div class="links">
        <a href="#" class="live">Live <i class="fa-solid fa-arrows-left-right"></i></a>
        <a href="#" class="code">Code <i class="fa-solid fa-code"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="work-card">
      <img src="./imgs/Rectangle.jpg" alt="" class="img-fluid">
      <p class="p-card">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
        <span>VUE</span>
      </p>
      <h3>Vue App</h3>
      <p class="text">Minecraft servers hosting </p>
      <div class="links">
        <a href="#" class="live">Live <i class="fa-solid fa-arrows-left-right"></i></a>
        <a href="#" class="code">Code <i class="fa-solid fa-code"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="work-card">
      <img src="./imgs/Rectangle.jpg" alt="" class="img-fluid">
      <p class="p-card">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
        <span>VUE</span>
      </p>
      <h3>Vue App</h3>
      <p class="text">Minecraft servers hosting </p>
      <div class="links">
        <a href="#" class="live">Live <i class="fa-solid fa-arrows-left-right"></i></a>
        <a href="#" class="code">Code <i class="fa-solid fa-code"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="work-card">
      <img src="./imgs/Rectangle.jpg" alt="" class="img-fluid">
      <p class="p-card">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
        <span>VUE</span>
      </p>
      <h3>Vue App</h3>
      <p class="text">Minecraft servers hosting </p>
      <div class="links">
        <a href="#" class="live">Live <i class="fa-solid fa-arrows-left-right"></i></a>
        <a href="#" class="code">Code <i class="fa-solid fa-code"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="work-card">
      <img src="./imgs/Rectangle.jpg" alt="" class="img-fluid">
      <p class="p-card">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
        <span>VUE</span>
      </p>
      <h3>Vue App</h3>
      <p class="text">Minecraft servers hosting </p>
      <div class="links">
        <a href="#" class="live">Live <i class="fa-solid fa-arrows-left-right"></i></a>
        <a href="#" class="code">Code <i class="fa-solid fa-code"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="work-card">
      <img src="./imgs/Rectangle.jpg" alt="" class="img-fluid">
      <p class="p-card">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
        <span>VUE</span>
      </p>
      <h3>Vue App</h3>
      <p class="text">Minecraft servers hosting </p>
      <div class="links">
        <a href="#" class="live">Live <i class="fa-solid fa-arrows-left-right"></i></a>
        <a href="#" class="code">Code <i class="fa-solid fa-code"></i></a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.works {
  text-align: center;
  padding: 6rem 0;
}

.works-header {
  display: flex;
  /* justify-content: center; */
  align-items: center !important;
  margin-bottom: 2rem;
}

.works-header h4 {
  color: #ffffff;
}

.works-header h4 span {
  color: #23d94b;
}

.works-header img {
  margin-left: 2rem;
  width: 35%;
}

.works .work-card {
  padding: 0;
  margin: 2rem 0;
  outline: 2px solid #23d94b;
}

.works .work-card img {
  width: 100%;
}

.work-card .p-card {
  color: #ABB2BF;
  text-align: left;
  font-size: 1.2rem;
  outline: 2px solid #23d94b;
  padding: 0.2rem 0.5rem;
}

.work-card .p-card span {
  margin-right: 0.5rem;
}

.work-card h3 {
  color: #ffffff;
  padding-left: 1rem;
  text-align: left;
}

.work-card .text {
  color: #ABB2BF;
  text-align: left;
  font-size: 0.9rem;
  /* padding: 0.2rem 0.5rem; */
  padding-left: 1rem;
  ;
  padding-bottom: 1rem;
}

.work-card .links {
  display: flex;
  /* justify-content: space-around; */
  padding-left: 1rem;
  align-items: center;
  padding-bottom: 1rem;
}

.work-card .links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  text-decoration: none;
  margin-right: 1rem;
}

.work-card .links a i {
  padding-left: 0.5rem;
}

.work-card .links .live {
  outline: 2px solid #23d94b;
  padding: 0.3rem 1rem;
}

.work-card .links .code {
  outline: 2px solid #ABB2BF;
  padding: 0.3rem 1rem;
}
</style>
