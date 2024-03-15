<template>
    <div class="project">
      <a :href="project.url" target="_blank">
        <div class="image-project"></div>
      </a>
        <div class="text-content">
            <h3>{{ project.title }}</h3> 
            <p>{{ project.description }}</p>
            <div v-for="(tag, index) in project.tags" :key="index" class="project-tag">{{ tag }}</div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsItem',
  props: ['project'],
}
</script>

<style scoped>
  .image-project {
    width: 380px; 
    height: 250px;
    background-color: grey;
    border-radius: 10px;
    margin: 20px 0 10px 0; 
    cursor: pointer;
  }

  .project-tag {
    background-color: rgb(56, 161, 168);
    padding: 4px 8px; 
    display: inline-block; 
    border-radius: 6px;
    margin-right: 6px;
    margin-bottom: 6px;
  }

  .text-content h3, .text-content p {
    margin-bottom: 6px;
  }

@media only screen and (max-width: 744px) {
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
}
</style>