<template>
    <div class="introduction-home">
      <div class="introduction-text">
        <h1>Hello, I'm <span class="name">Iris van den Boomen</span></h1>
        </div>
        <p class="introduction-text-mobile">Scroll down or use the navigation to check some of my projects or read more about me.</p>
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
  align-items: flex-start;
  }

.introduction-home h1 {
  font-size: 6rem;
  margin-top: 200px;
  font-weight: 600;
}

.introduction-text {
  width: 60vw;
  padding: 0 50px;
}

.introduction-text-mobile {
  display: none;
}

span.name {
  font-style: italic;
}

.introduction-image {
  width: 40vw;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.introduction-image img {
  width: 100%;
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

  .introduction-text {
    width: 100%;
    padding: 0;
  }

  .introduction-text-mobile {
    display: block;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 40px;
  }

  .introduction-image {
    display: none;
  }
}
</style>