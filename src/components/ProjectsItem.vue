<template>
    <div class="project">
      <a :href="project.url" target="_blank">
        <div class="image-project" :style="{ backgroundImage: 'url(' + project.imageUrl + ')'}"></div>
      </a>
        <div class="text-content">
            <h3>{{ project.title }}</h3> 
            <p>{{ project.description }}</p>
            <div v-for="(tag, index) in project.tags" :key="index" :class="['project-tag', 'tag-' + tag.replace(/\s+/g, '-')]">{{ tag }}</div>
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
    width: 400px; 
    height: 250px;
    border-radius: 10px;
    margin: 20px 0 10px 0; 
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    overflow: hidden;
  }

  .image-project:hover {
    filter: grayscale(0%);
  }

  .project-tag {
    padding: 4px 8px; 
    display: inline-block; 
    border-radius: 6px;
    margin-right: 6px;
    margin-bottom: 6px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .tag-Python {
    background-color: #A3CCE7;
  }

  .tag-Data-Visualization {
    background-color: #E6C79C;
  }

  .tag-Streamlit {
    background-color: #FFA3A3;
  }

  .tag-Vue {
    background-color: #A3D9B1;
  }

  .tag-React {
    background-color: #7EC8E3;
  }

  .text-content h3, .text-content p {
    margin-bottom: 10px;
    width: 400px;
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

  .text-content h3, .text-content p {
    width: 290px;
  }
}
</style>