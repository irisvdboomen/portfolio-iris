<template>
    <div class="projects-page" id="projects">
      <h2 class="projects">My projects</h2>
      <div class="all-projects">
        <ProjectsItem 
          v-for="(project, index) in projects" 
          :key="index" 
          :project="project"/>
        </div>
    </div>
</template>

<script>
import ProjectsItem from './ProjectsItem.vue'

export default {
  name: 'ProjectsSection', 
  components: {
    ProjectsItem
  },
  data() {
    return {
        projects: [
            { title: "Trends in Eindhoven", description: "In my Advanced AI class, I worked on visualizing Eindhoven's trends, choosing my own topics for the project. I created several visualizations that highlight these trends. You can see the results by clicking on the image linked to the website.", tags: ["Data Visualization", "Python", "Streamlit"], url: 'https://trendy-eindhoven-iris.streamlit.app/ ', imageUrl: '/img/data-visualization.png'},
            { title: "Project 2", description: "Short description about the project", tags: ["Vue", "React"], url: 'https://trendy-eindhoven-iris.streamlit.app/ ', imageUrl: '/img/data-visualization.png'},
            { title: "Project 3", description: "Short description about the project", tags: ["Tag", "Data Visualization", "Data Visualization"], url: 'https://trendy-eindhoven-iris.streamlit.app/ ', imageUrl: '/img/data-visualization.png'},
        ]
    }
  }
}
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  height: auto;
  padding-top: 100px;
}

.projects {
  margin-top: 40px;
  padding-left: 80px;
}

.all-projects {
  display: flex;
  flex-wrap: wrap;
  padding: 0 80px;
  justify-content: space-between;
}

@media only screen and (max-width: 744px) {
  .projects-page {
    min-height: 100vh;
    padding-top: 40px;
  }

 .projects {
    text-align: center;
    margin: 40px 0 10px 0;
    padding-left: 0;
  }

  .all-projects {
    padding: 0;
  }

}
</style>