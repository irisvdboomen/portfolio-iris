<template>
  <div class="home-page">
    <NavigationBar />
    <div class="introduction-home">
      <h1>Hello, I'm Iris van den Boomen</h1>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel harum repellat assumenda fuga, ea aliquid minima hic quidem nisi perferendis explicabo, rerum nostrum, vitae optio nam magnam porro. Vel laboriosam ratione modi! Dolorum cum aperiam qui unde odio sapiente voluptatem sed doloribus corrupti tempora non maxime iste, laboriosam, amet nostrum.</p>
    </div>
    <div class="projects-page">
      <h2 class="projects">My projects</h2>
      <div class="project">
        <div class="image-project"></div>
        <div class="text-content">
          <h3>Project 1</h3>
          <p>Short description about the project, read more...</p>
          <div class="project-tag">Tag</div>
        </div>
      </div>
      <div class="project">
        <div class="image-project"></div>
        <div class="text-content">
          <h3>Project 2</h3>
          <p>Short description about the project, read more...</p>
          <div class="project-tag">Tag</div>
        </div>
      </div>
      <div class="project">
        <div class="image-project"></div>
        <div class="text-content">
          <h3>Project 3</h3>
          <p>Short description about the project, read more...</p>
          <div class="project-tag">Tag</div>
          <div class="project-tag">Data Visualization</div>
          <div class="project-tag">Data Visualization</div>
        </div>
      </div>
    </div>
    <div class="about-page">
      <h2 class="about">About</h2>
      <div class="profile-image"></div>
      <div class="about-introduction">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem provident fugit amet et rem asperiores ea assumenda accusantium blanditiis ipsam natus eligendi distinctio ratione eos quod labore, doloribus earum delectus?
      </div>
      <div class="about-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio earum dolorum labore placeat nisi fuga, veritatis consectetur! Explicabo ex praesentium, dolores laboriosam atque adipisci voluptatem vel consequatur omnis cum, nulla voluptatibus iusto architecto consectetur mollitia natus incidunt, provident harum illo ratione iure quas voluptate eveniet. Animi, accusamus? Totam, illo beatae!
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #F6FBFB;
}

@media only screen and (max-width: 744px) {
    /* Styles for tablets and small desktops */
  .home-page {
    background-image: url('./assets/white-flowers.jpg');
    background-size: cover;
    background-position: center; 
    height: 100vh;
  }

  .introduction-home {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 40px;
  }

  .introduction-home h1 {
    margin-bottom: 80px;
    margin-top: 150px;
    font-size: 2rem;
  }

  .introduction-home p {
    margin-top: 10px;
    font-size: 1.375rem;
  }

  .projects {
    text-align: center;
    margin: 40px 0 10px 0;
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: center; 
    width: 100%;
    margin-bottom: 40px;
  }

  .image-project {
    width: 290px; 
    height: 200px;
    background-color: grey;
    border-radius: 10px;
    margin: 10px 0; 
  }
  
  .text-content {
    width: 290px; 
    align-self: center; 
    text-align: left; 
  }

  .text-content h3, .text-content p {
    margin-bottom: 6px;
  }

  .project-tag {
    background-color: pink;
    padding: 4px 8px; 
    display: inline-block; 
    border-radius: 6px;
    margin-right: 6px;
    margin-bottom: 6px;
  }

  .about-page {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .about {
    margin: 40px 0 10px 0;
  }

  .profile-image {
    width: 136px;
    height: 136px;
    background-color: grey;
    border-radius: 70px;
    margin: 20px 0;
  }

  .about-introduction {
    width: 290px;
    margin: 20px 0 0 0;
    font-weight: bold
  }

  .about-text {
    width: 290px;
    margin: 10px 0;
  }
}

</style>