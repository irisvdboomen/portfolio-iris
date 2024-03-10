<template>
  <div class="home-page" id="home">
    <NavigationBar />
    <HomePage />
    <ProjectsSection />
    <AboutMeSection />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import HomePage from './components/HomePage.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AboutMeSection from './components/AboutMeSection.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    HomePage,
    ProjectsSection,
    AboutMeSection
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

}

</style>