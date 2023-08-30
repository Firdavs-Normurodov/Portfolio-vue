<template>
<div class="skill">
  <div class="row">
    <div class="col-lg-6 box-left">
      <div class="skill-header">
        <h4><span>#</span>skills</h4>
        <img src="./imgs/line-2.png" alt="">
      </div>
      <img src="./imgs/group.png" alt="">
    </div>
    <div class="right-box col-lg-6">
      <div class="skill-card">
        <h4>Languages</h4>
        <p>
          <span>
            Javascript
          </span>
          <span>Node.Js</span>
        </p>
      </div>
      <div class="skill-card">
        <h4>Tools</h4>
        <p>
          <span>VSCode</span>
          <span>Linux</span>
          <span>Ubuntu</span>
          <span>Figma</span>
          <span>Git</span>
          <span>Xampp</span>
          <span>Postman</span>
          <span>Docker</span>
          <span>Font Awesome</span>
        </p>
      </div>
      <div class="skill-card">
        <h4>Frameworks</h4>
        <p>
          <span>Vue</span>
          <span>VueX</span>
          <span>Express.Js</span>
        </p>
      </div>
      <div class="skill-card">
        <h4>Other</h4>
        <p>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>SASS</span>
          <span>SCSS</span>
          <span>BOOTSTRAP</span>
          <span></span>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.skill {
  height: auto;
  padding-top: 5rem;
  margin-bottom: 2rem;
}

.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.skill-header h4 {
  color: #ffffff;
}

.skill-header h4 span {
  color: #23d94b;
}

.skill-header img {
  margin-left: 2rem;
  width: 55%;
}

.right-box .skill-card {
  color: #ffffff;
  box-sizing: border-box;
  padding: 0.5rem;
}

.right-box .skill-card h4 {
  border-bottom: 2px solid #23d94b;
  width: 35%;
  padding: 0.3rem;
  transition: all 0.5s ease;
  font-size: 1.4rem;
}

.right-box .skill-card h4:hover {
  width: 45%;
  font-size: 1.6rem;
}

.right-box .skill-card p {
  padding: 0.5rem 0;
  font-size: 1rem;
}

.right-box .skill-card p span {
  margin-right: 0.5rem;
  color: #ABB2BF;
}
</style>
