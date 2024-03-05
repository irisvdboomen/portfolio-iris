<template>
    <div class="project">
        <div class="image-project"></div>
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
}
</style>