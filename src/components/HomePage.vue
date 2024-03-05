<template>
    <div class="introduction-home">
        <h1>Hello, I'm Iris van den Boomen</h1>
    
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel harum repellat assumenda fuga, ea aliquid minima hic quidem nisi perferendis explicabo, rerum nostrum, vitae optio nam magnam porro. Vel laboriosam ratione modi! Dolorum cum aperiam qui unde odio sapiente voluptatem sed doloribus corrupti tempora non maxime iste, laboriosam, amet nostrum.</p>
      </div> 
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
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
    font-size: 1.375rem;
  }
}
</style>