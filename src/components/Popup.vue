<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text 
          class="cyan"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add a New Project</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12" >
                  <v-text-field 
                    label="Title" 
                    v-model="title" 
                    prepend-icon="mdi-subtitles"
                    :rules="inputRules"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea 
                    label="More Information" 
                    v-model="content" 
                    prepend-icon="mdi-folder-information"
                    :rules="inputRules"
                  >                
                  </v-textarea>
                </v-col>
                <!-- <v-col cols="12">
                  <v-text-field label="Person" v-model="person" prepend-icon="mdi-account"></v-text-field>
                </v-col> -->
                <v-col cols="12">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        label="Due date"
                        prepend-icon="mdi-calendar-range"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        v-model="due"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="due" @input="menu = false"></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="submit" :loading="loading">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import db from '@/fb'
import moment from 'moment'

export default {
  data: () => ({
      dialog: false,
      title: '',
      content: '',
      person: '',
      status: '',
      due: null,
      // due: new Date().toISOString().substr(0, 10),
      menu: false,
      inputRules: [
        v => v.length >= 5 || 'Minimum lengt is 5 character'
      ],
      loading: false
    }),
    methods: {
      submit () {
        if(this.$refs.form.validate()) {
          this.loading = true;
          const project = {
            title: this.title,
            content: this.content,
            due: moment(this.due).format('Do MMM YYYY'),
            person: 'The Net Ninja',
            status: 'ongoing'
          }
          db.collection('projects').add(project).then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded')
          })
        }
      },
    }
}
</script>

<style>

</style>