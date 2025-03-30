<template>
    <div class="post-card">
      <swiper
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(post, index) in posts" :key="index">
          <div class="swiper-card">
            <div class="img-post">
              <img :src="post.image" :alt="'Image du post ' + (index + 1)" />
            </div>
            <div class="img-profil-user">
              <div class="img"><img :src="post.userAvatar" alt="Avatar de l'utilisateur" /></div>
              <div class="post-title"><h3>{{ post.title }}</h3></div>
            </div>
            <div class="contain-post">
              <p>{{ post.content }}</p>
            </div>
            <div class="link-more">
              
              <router-link :to="post.link" class="lien" >plus...</router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  // import de router link
  import { RouterLink } from 'vue-router';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  
  // Import required modules
  import { Pagination } from 'swiper/modules';
  
  // Import des images
  import logo1 from '../assets/details1.jpg';
  import logo2 from '../assets/details6.jpg';
  import user1 from '../assets/profile.jpg';
  import logo3 from '../assets/details7.jpg';

  
  // Données des posts
  const posts = [
    {
      image: logo1,
      userAvatar: user1,
      title: 'Titre du post 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '/login'
    },
    {
      image: logo2,
      userAvatar: user1,
      title: 'Titre du post 2',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '/login'
    },
    {
      image: logo3,
      userAvatar: user1,
      title: 'Titre du post 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '/login'
    },
  ];
  
  // Modules Swiper
  const modules = [Pagination];
  </script>
  
  <style scoped>
/* Styles pour la carte de post */
.post-card {
  padding: 10px;
  border: 1px solid #e1e1e3;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 5px;
  width: 550px;
  display: flex;
  justify-content: center; /* Centre horizontalement le contenu */
  align-items: center; /* Centre verticalement le contenu */
}

/* Styles pour le Swiper */
.mySwiper {
  width: 100%; /* Prend toute la largeur de la carte */
  height: 100%; /* Prend toute la hauteur de la carte */
  padding-bottom: 30px; /* Espace pour la pagination */
}

/* Styles pour les cartes à l'intérieur du Swiper */
.swiper-card {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre horizontalement le contenu */
  text-align: center; /* Centre le texte */
  
}

.img-post {
  margin-top: 15px;
  width: 200px;
  height: 100px;
  border: solid 0px;
  border-radius: 5px;
  margin-bottom: 20px; /* Ajoute une marge en bas */
}

.img-post img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Conserve les proportions et couvre la zone */
  border: solid 0px;
  border-radius: 5px;
}

.post-title {
  margin-bottom: 5px;
}

.post-title h3 {
  color: #512da8;
}

.contain-post {
  width: 250px;
  height: 70px;
  font-size: 0.8em;
}

.link-more .lien {
  text-decoration: none;
  color: #512da8;
  margin-top: 5px;
}

.img {
  
  height: 15px;
  width: 15px;
  border: 0px solid;
  border-radius: 50%;
  object-fit: cover;
}

.img img {
  border: 0px solid;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Styles pour la pagination Swiper */
.swiper-pagination-bullet {
  background-color: #512da8;
}

.swiper-pagination-bullet-active {
  background-color: #fca90f;
}
</style>