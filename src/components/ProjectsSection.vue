<template>
    <div class="projects-page">
      <h2 class="projects">My projects</h2>
      <ProjectsItem 
        v-for="(project, index) in projects" 
        :key="index" 
        :project="project"/>
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
            { title: "Project 1", description: "Short description about the project", tags: ["Tag"] },
            { title: "Project 2", description: "Short description about the project", tags: ["Tag"] },
            { title: "Project 3", description: "Short description about the project", tags: ["Tag", "Data Visualization", "Data Visualization"] },
        ]
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 744px) {
 .projects {
    text-align: center;
    margin: 40px 0 10px 0;
  }

}
</style>