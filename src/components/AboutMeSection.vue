<template>
  <div class="about-page" id="about">
    <h2 class="about">About</h2>
    <div class="content-container">
      <div class="profile-image">
      <img src="/img/me.jpeg" alt=""></div>
      <div class="text-content">
        <div class="about-text">
          My name is Iris, and I am exploring the fields of Front-End Development and Artificial Intelligence as an ICT student. My education in ICT & Media Design has not only equipped me with a comprehensive understanding of essential web technologies like HTML, CSS, JavaScript, Vue, and React, but also enabled me to develop dynamic, intuitive, and accessible user interfaces. This solid foundation allows me to create engaging and user-friendly digital experiences.
        </div>
        <div class="about-text">
          Besides my affinity for front-end design, I'm deeply interested by the analytical and predictive capabilities of AI, which is why I decided to specialize in AI within my studies. Here, I engage with Python, data visualization, deep learning, and other innovative tools to creatively tackle complex challenges. This unique blend of front-end development and AI fuels my ambition to develop solutions that are not just innovative but also focused on user needs.
        </div>
        <div class="about-text">
          My ultimate goal is to blend the precision and capabilities of AI with the creative and user-centric approach of front-end design. I am committed to contributing to the creation of advanced, meaningful, and accessible technology, focusing on crafting user-focused solutions that address real-world challenges. As someone who is always eager to learn and grow, I look forward to expanding my knowledge and skills in ICT.
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
  /* justify-content: space-between; */
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
  /* border-radius: 10px; */
  width: 200px; 
  height: 320px;
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