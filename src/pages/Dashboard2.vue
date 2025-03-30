<template>
  <v-app id="inspire">
    <!-- Barre d'application fixe -->
    <v-app-bar
      class="px-3 sticky-top"
      density="compact"
      flat
    >
     <h1>Bl<span>o</span>g.</h1> 

      <v-spacer></v-spacer>

      <v-tabs
        align-tabs="center"
        color="#FFA500"
      >
        <v-tab
          v-for="link in links"
          :key="link"
          :text="link"
        ></v-tab>
        
      </v-tabs>

      <v-spacer></v-spacer>

      <v-avatar
        class="md-and-up"
        color="#1565C0"
        size="32"
      ></v-avatar>

    </v-app-bar>

    <v-main class="bg-grey-lighten-5">
      <v-container>
        <v-row>
          <!-- Colonne 1 fixe -->
          <v-col
            cols="12"
            md="3"
            class="sticky-col"
          >
            <h2>Les plus aimés</h2>
            <v-sheet
              min-height="268"
              rounded="lg"
              class="overflow-y-auto"
              style="height: 520px"
            >
              <BestRated class="mb-2"/>
              <BestRated class="mb-2"/>
              <BestRated class="mb-2"/>
              <BestRated class="mb-2"/>
              <BestRated class="mb-2"/>
            </v-sheet>
          </v-col>

          <!-- Colonne centrale (défilante) -->
          <v-col
            cols="12"
            md="6"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="d-flex flex-column align-center"
            >
              <BlogCard class=""/>
              <BlogCard class=""/>
              <BlogCard class=""/>
              <BlogCard class=""/>
              <BlogCard class=""/>
              <BlogCard class=""/>
            </v-sheet>
          </v-col>

          <!-- Colonne 3 fixe -->
          <v-col
            cols="12"
            md="3"
            class="sticky-col"
          >
            <h2>Mes favoris</h2>
            <v-sheet
              min-height="268"
              rounded="lg"
            >
              <FavoritePost/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import BlogCard from '@/components/BLogCard.vue';
import BestRated from '@/components/BestRated.vue';
import FavoritePost from '@/components/FavoritePost.vue';

const links = [
  'Acceuil',
  'Categories',
  'Profil',
];
</script>

<script>
export default {
  data: () => ({
    links: [
      'Acceuil',
      'Categories',
      'Profil',
    ],
  }),
};
</script>

<style scoped>
/* Barre d'application fixe */
.sticky-top {
  position: sticky;
  top: 600px;
  z-index: 1000; /* Assure que la barre reste au-dessus des autres éléments */
}

/* Colonnes fixes */
.sticky-col {
  position: sticky;
  top: 64px; /* Ajustez cette valeur en fonction de la hauteur de votre barre d'application */
  height: calc(100vh - 64px); /* Ajustez la hauteur pour éviter le débordement */
  overflow-y: auto; /* Permet le défilement interne si le contenu est trop long */
}
.custom-search-bar {
  max-width: 200px; /* Limite la largeur de la barre de recherche */
  height: 36px; /* Réduit la hauteur de la barre de recherche */
}

/* Styles pour le champ de saisie */
.custom-search-bar .v-input__control {
  min-height: 36px !important; /* Réduit la hauteur interne */
}

/* Styles pour l'icône */
.custom-search-bar .v-icon {
  font-size: 20px; /* Ajuste la taille de l'icône */
}
h1 {
  color: #512da8; /* Bleu */
  font-size: 2.3rem; /* Taille de police */
  font-weight: bold; /* Gras */
}

/* Style pour le span */
h1 span {
  color: #fca90f; /* Orange */
}

</style>