<template>
    <div class="top-blog">
      <div class="post-card" v-for="(post, index) in posts" :key="index">
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
          <a :href="post.link">Plus...</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import logo1 from '../assets/details2.jpg';
  import logo2 from '../assets/details3.jpg';
  import user1 from '../assets/profile.jpg';
  
  
  
  const posts = [
    {
      image: logo1,
      userAvatar: user1,
      title: 'Titre du post 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '#'
    },
    {
      image: logo2,
      userAvatar: user1,
      title: 'Titre du post 2',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '#'
    },
    
  ];
  </script>
<style scoped>
.img-post {
  margin-top: 15px;
  margin-bottom: 20px; /* Ajoute une marge en bas */
  width: 200px;
  height: 100px;
  border: solid 0px;
  border-radius: 5px;
}

.img-post img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Conserve les proportions et couvre la zone */
  border: 0px solid;
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

.link-more a {
  text-decoration: none;
  color: #512da8;
  margin-top: 5px;
}

.img {
  
  height: 15px;
  width: 15px;
  border: 0px solid;
  border-radius: 50%;
}

.img img {
  border: 0px solid;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.top-blog {
  display: flex;
  justify-content: flex-start;
  gap: 20px; /* Espace entre les cartes */
}
</style>