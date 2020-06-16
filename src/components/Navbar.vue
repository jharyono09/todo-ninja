<template>
  <nav>
    <v-snackbar 
      v-model="snackbar" 
      color="success" 
      top 
      :timeout="4000" 
      elevation="24"
    >
      Project has been added to database.
      <v-btn
        color="white"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    

    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="grey"
            dark
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span> 
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>


      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>      
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="indigo lighten-1">
      <v-row>
        <v-col class="mt-5" >
          <v-row justify="center">
            <v-avatar size="100">
              <img src="/avatar-1.png" alt="">
            </v-avatar>
          </v-row>
          <p class="text-center subtitle-1 white--text mt-1">The Net Ninja</p>
          <v-row class="pt-4 mb-3">
            <Popup @projectAdded="snackbar = true"/>
          </v-row>
        </v-col>
      </v-row>
      
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> 
  
  </nav>
</template>

<script>
import Popup from '@/components/Popup'
export default {
  data() {
    return {
      drawer : false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
        {icon: 'mdi-account', text: 'Team', route: '/team'}
      ],
      snackbar: false
      }
  },
  components: {
    Popup
  }
}
</script>

<style>

</style>