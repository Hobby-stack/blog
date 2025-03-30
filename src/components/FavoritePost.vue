<template>
    <v-card
      class="mx-auto rounded-0 border-thin"
      color="#FFA500"
     
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
  
      
    </v-card>
  </template>
  <script setup>
    import { ref } from 'vue'
  
    const rating = ref(4.5)
  </script>