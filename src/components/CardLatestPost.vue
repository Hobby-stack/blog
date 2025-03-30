<template>
    <div class="latest-post">
      <div class="latest-post-card" v-for="(post, index) in posts" :key="index">
        <div class="img-post">
          <img :src="post.image" :alt="'Image du post ' + (index + 1)" />
        </div>
        <div>
          <div class="img-profil-user">
            <div class="img"><img :src="post.userAvatar" alt="profil" /></div>
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
    </div>
  </template>
  
  <script setup>
  import logo1 from '../assets/details2.jpg';
  import user1 from '../assets/profile.jpg';
  import logo2 from '../assets/details1.jpg';
  import logo3 from '../assets/details4.jpg';
  import logo4 from '../assets/details3.jpg';
  import logo5 from '../assets/details5.jpg';

 
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
    {
      image: logo3,
      userAvatar: user1,
      title: 'Titre du post 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '#'
    },
    {
      image: logo4,
      userAvatar: user1,
      title: 'Titre du post 4',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '#'
    },
    {
      image: logo5,
      userAvatar: user1,
      title: 'Titre du post 5',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '#'
    },
    
  ];
  </script>
  
  <style scoped>
.latest-post {
  border: #e1e1e3 solid 2px;
  border-radius: 10px;
  width: 550px;
  padding: 10px;
  margin-top: 15px;
}

.latest-post-card {
  display: flex;
  border-bottom: #e1e1e3 solid 1px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.img-post {
  margin-top: 15px;
  width: 200px;
  height: 100px;
  border: solid 0px;
  border-radius: 5px;
  margin-right: 20px; /* Ajout de l'espace entre img-post et img-profil-user */
}

.img-post img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Conserve les proportions et couvre la zone */
  border: solid 0px;
  border-radius: 5px;
}

.img-profil-user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.post-title h3 {
  color: #512da8;
  margin: 0;
}

.contain-post {
  width: 250px;
  height: 70px;
  font-size: 0.8em;
  color: #666;
}

.link-more a {
  text-decoration: none;
  color: #512da8;
  margin-top: 5px;
}

.link-more a:hover {
  text-decoration: underline;
}

.img {
 
  height: 15px;
  width: 15px;
  border: 0px solid;
  border-radius: 50%;
  object-fit: cover;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>