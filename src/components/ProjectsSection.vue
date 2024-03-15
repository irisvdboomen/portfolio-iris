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
            { title: "Project 1", description: "Short description about the project", tags: ["Tag"], url: 'https://trendy-eindhoven-iris.streamlit.app/ '},
            { title: "Project 2", description: "Short description about the project", tags: ["Tag"] },
            { title: "Project 3", description: "Short description about the project", tags: ["Tag", "Data Visualization", "Data Visualization"] },
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