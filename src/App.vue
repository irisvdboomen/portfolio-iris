<template>
  <div class="home-page">
    <nav class="nav-bar">
      <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
    <div class="introduction-home">
      <h1>Hello, I'm Iris van den Boomen</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt repudiandae non, vero atque similique recusandae ullam porro cupiditate pariatur minima nam suscipit dolores repellat placeat ducimus nisi architecto ut dolorem.</p>
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
      <div class="about-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem provident fugit amet et rem asperiores ea assumenda accusantium blanditiis ipsam natus eligendi distinctio ratione eos quod labore, doloribus earum delectus?
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

@media only screen and (max-width: 744px) {
    /* Styles for tablets and small desktops */
  .home-page {
    background-image: url('./assets/white-flowers.jpg');
    background-size: cover; /* Cover the entire size of the div */
    background-position: center; /* Center the background image */
    height: 100vh;
  }

  .nav-bar {
    position: fixed;
    width: 100%;
    height: 75px;
    background-color: #F6FBFB;
  }

  .hamburger {
    position: absolute;
    top: 50%;
    right: 20px; 
    transform: translateY(-50%);
    width: 26px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
  }

  .line1, .line2, .line3 {
    width: 100%; 
    border: 2px solid #000000;
    border-radius: 4px;
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
    margin-top: 100px;
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

  .profile-image {
    width: 120px;
    height: 120px;
    background-color: grey;
    border-radius: 60px;
  }

  .about-text {
    width: 290px;
  }
}

</style>