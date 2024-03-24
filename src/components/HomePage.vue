<template>
    <div class="introduction-home">
      <div class="introduction-text">
        <h1>Hello, I'm Iris van den Boomen</h1>
    
        <p>I am a passionate front-end developer and AI enthusiast. I am focused on enhancing user experiences through front-end development and exploring the integration of intelligent solutions. Discover my selected projects that highlight my journey in front-end innovation and AI application.</p>
        </div>
        <div class="introduction-image">
          <img :src="require('@/assets/white-flowers.jpg')" alt="White flowers">
        </div>
      </div> 
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.introduction-home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  }

.introduction-home h1 {
  font-size: 3rem;
  margin-bottom: 140px;
}

.introduction-home p {
  font-size: 1.2rem;
}

.introduction-text {
  width: 50vw;
  padding: 0 50px;
}

.introduction-image {
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.introduction-image img {
  width: 80%;
  height: 597px;
  object-fit: cover;
}

@media only screen and (max-width: 744px) {
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
    font-size: 1.25rem;
  }

  .introduction-text {
    width: 100%;
    padding: 0;
  }

  .introduction-image {
    display: none;
  }
}
</style>