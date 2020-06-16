<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container >
      <v-row class="ma-5">
        <v-expansion-panels>
          <v-expansion-panel v-for="project in myProjects" :key="project.title">
            <v-expansion-panel-header>
              {{ project.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="grey--text">
              <div class="font-weight-bold"> due by {{ project.due }} </div>
              <div> {{ project.content }} </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
import db from '@/fb'

export default {
   data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person === "The Net Ninja"
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
  }
}
</script>
