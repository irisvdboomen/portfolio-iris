<template>
  <div class="about-page" id="about">
    <h2 class="about">About</h2>
    <div class="content-container">
      <div class="profile-image">
      <img src="/img/me.JPG" alt=""></div>
      <div class="text-content">
        <div class="about-text">
          Hi, I'm Iris, an ICT student interested in Front-End Development and Artificial Intelligence. My studies in ICT & Media Design have really helped me get a good grip on key web technologies like HTML, CSS, JavaScript, Vue, and React, which I use to build easy-to-use and engaging websites.
        </div>
        <div class="about-text">
          I've also gotten into AI, drawn by how it can analyze and predict things in ways that really fascinate me. That's why I chose to specialize in it, learning about Python, data visualization, and deep learning to creatively solve tough problems.
        </div>
        <div class="about-text">
          I'm particularly interested in working with front-end tech, data analysis, or data science because I love making things that are not only cool but also really useful for people. I'm always up for learning more and taking on new challenges, hoping to push the boundaries of what I can create with my skills.
        </div>
          <div class="links">
            <p class="mail"><a href="mailto:iris_v.d.boomen@hotmail.com"><img src="img/mail.png" alt=""></a></p>
            <p><a href="https://www.linkedin.com/in/iris-van-den-boomen-391841162/" target="_blank"><img src="img/linkedin.png" alt=""></a></p>
            <p><a href="https://github.com/irisvdboomen" target="_blank"><img src="img/github.png" alt=""></a></p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutMeSection'
}
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 100vh;
  padding-top: 100px;
}

.about {
  margin-top: 40px;
  margin-bottom: 20px;
  padding-left: 80px;
}

.content-container {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row-reverse;
}

.profile-image {
  margin: 20px;
  width: 30%;
  display: flex;
  justify-content: center;
}

.profile-image img {
  border-radius: 10px;
  width: 250px; 
  height: 400px;
  object-fit: cover;
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;  
}

.text-content {
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 80px;
  font-size: 1.2rem;
}

.about-text {
  margin-bottom: 20px; 
}

.links {
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
}

.links h5 {
  margin-bottom: 10px;
}

.links p {
  padding: 0 20px;
}

.links .mail {
  padding-left: 0;
}

.links img {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

@media only screen and (max-width: 744px) {
  .about-page {
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .about {
    text-align: center;
    margin: 40px 0 10px 0;
    padding-left: 0;  
  }

  .profile-image {
    margin: 20px 0;
    width: 100%;
  }

  .profile-image img {
    width: 136px;
    height: 136px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  .text-content {
    width: 100%;
    padding-left: 0;
    text-align: left;
    display: flex;
    justify-content: center;
    font-size: 1rem;
  }

  .about-text {
    margin-top: 10px;
    width: 100%;
    padding: 0 40px;
  }

  .links {
    margin: 20px 0 40px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>