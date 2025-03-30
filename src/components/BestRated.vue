<template>
    <v-card
      class="mx-auto rounded-0 border-thin"
      color="#512da8"
     
      width="100%"
    >
      <div class="d-flex justify-between">
        <v-card-title class="flex-grow-1 flex-column align-start">
          <div class="text-h6">
            Categorie du poste
          </div>
          <div>
            <p class="text-body-2">Extrait contenu</p>
        </div>
  
          
        </v-card-title>
  
      </div>
  
      <v-divider></v-divider>
  
      <v-card-actions class="pa-4">
  
        <span class="text-grey-lighten-2 text-caption ">
          ({{ rating }})
        </span>
  
        <v-rating
          v-model="rating"
          active-color="yellow-accent-4"
          color="white"
          size="15"
          half-increments
          
        ></v-rating>
      </v-card-actions>
    </v-card>
  </template>
  <script setup>
    import { ref } from 'vue'
  
    const rating = ref(4.5)
  </script>