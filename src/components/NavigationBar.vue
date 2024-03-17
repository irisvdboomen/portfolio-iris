<template>
    <nav class="nav-bar">
      <ul class="nav-item" :class="{ 'show': menuOpen }">
        <li @click="scrollToSection('home')">Home</li>
        <li @click="scrollToSection('projects')">Projects</li> 
        <li @click="scrollToSection('about')">About</li>
      </ul>
      <div class="hamburger" @click="toggleMenu">
        <div :class="['line', 'line1', { 'rotate45': menuOpen }]"></div>
        <div :class="['line', 'line2', { 'hide': menuOpen }]"></div>
        <div :class="['line', 'line3', { 'rotate-45': menuOpen }]"></div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      this.toggleMenu(); 
    }
  }
}

</script>

<style scoped>
.nav-bar {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #F6FBFB;
  align-items: center;
}

.nav-item {
  display: flex;
  justify-content: end;
  align-items: center; 
  list-style: none;
  padding: 0 60px;
  height: 100%;
}

.nav-item li {
  padding: 0 20px;
  cursor: pointer;
}

@media only screen and (max-width: 744px) {
  .nav-bar {
    position: fixed;
  }

  .nav-item {
    display: flex;
    justify-content: start;
    position: fixed;
    right: 0;
    top: 0;
    height: 100dvh; /* dvh stands for dynamic viewport height */
    flex-direction: column;
    background-color: #F6FBFB;
    width: 60%;
    margin-top: 60px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
  }

  .nav-item li {
    padding: 20px;
    /* margin-top: 20px; */
  }

  .nav-item.show {
    transform: translateX(0);
  }

  .hamburger {
    position: absolute;
    top: 38%;
    right: 20px; 
    width: 26px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .line {
    width: 100%; 
    height: 1.6px;
    background-color: #000000;
    border-radius: 4px;
  }

  .rotate45 {
    transform: rotate(45deg) translate(5px, 8px);
  }

  .rotate-45 {
    transform: rotate(-45deg) translate(5px, -8px);
  }

  .hide {
    display: none;
  }

}
</style>