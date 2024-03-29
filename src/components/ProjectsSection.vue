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
            { title: "AI Text Summarizer and Translator", description: "For my 6th semester Advanced AI for NLP assignment, I developed an app to summarize and translate text. This project, built with OpenAI's API, helps users quickly understand and translate texts into various languages. It's a handy tool for students, researchers, and anyone working in multilingual settings. Just remember, you'll need an OpenAI API key.", tags: ["Streamlit", "NLP", "AI applications"], url: 'https://nlp-assignment-iris.streamlit.app/', imageUrl: '/img/languages.jpg'},
            { title: "Exploring geospatial data with interactive maps", description: "For my Data Driven Business Lab minor, I worked with geospatial data for the first time. I first used Jupyter Notebook, to gain understanding of geospatial data in general and then used Streamlit to add interactivity to the project. It is still a work in progress, but the first results can already be explored.", tags: ["Streamlit", "Data Visualization", "Python", "Geospatial Analysis"], url: 'https://visualizing-infrastructure-iris.streamlit.app/', imageUrl: '/img/world-map.png'},
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