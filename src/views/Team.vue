<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="grey lighten-4 my-5">
      <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card 
            warp
            class="mx-auto"
            max-width="344"
            outlined  
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">""</div>
                <v-list-item-title class="headline mb-1">{{ person.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ person.role }}</v-list-item-subtitle>
              </v-list-item-content>

      <v-list-item-avatar
        size="100"
        class="grey lighten-2"
      >
      <img :src="person.avatar" alt="">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text color="grey">
        <v-icon small left>mdi-message</v-icon>
        <span>Message</span>
      </v-btn>
    </v-card-actions>
  </v-card>
          <!-- <v-card text class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              image goes here
            </v-responsive>
            <v-card-text>
              <div class="subtitle-2">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card> -->

        </v-col>
      </v-row>
    </v-container>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
      ]
    }
  }
}
</script>
