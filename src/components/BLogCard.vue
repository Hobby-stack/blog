<template>
  <section>
    <div class="blog-card">
      <!-- Zone de texte -->
      <div class="blog-text">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </div>

      <!-- Zone d'image (optionnelle) -->
      <div class="blog-image" v-if="imageUrl">
        <img :src="imageUrl" alt="Image du poste">
      </div>

      <!-- Zone d'interaction -->
      <div class="blog-actions">
        <button class="action-btn comment-btn" @click="toggleComments">
          <v-icon icon="mdi-comment-outline" size="25"></v-icon>
          <span class="comment-count">{{ comments.length }}</span>
        </button>
        <button class="action-btn like-btn" @click="toggleLike">
          <v-icon icon="mdi-heart" :class="{ liked: isLiked }" size="25"></v-icon>
          <span class="like-count">{{ likeCount }}</span>
        </button>
        <v-card-actions class="pa-4">
          Rate this post
          <v-spacer></v-spacer>
          <span class="text-grey-lighten-2 text-caption me-2">
            ({{ rating }})
          </span>
          <v-rating
            v-model="rating"
            active-color="yellow-accent-4"
            color="#e0dede"
            size="18"
            half-increments
            hover
          ></v-rating>
        </v-card-actions>
      </div>

      <!-- Zone de commentaires (cachée par défaut) -->
      <div class="blog-comments" :class="{ hidden: !showComments }">
        <h3>Commentaires</h3>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">
            <div class="comment-content">
              {{ comment.text }}
              <button class="reply-btn" @click="toggleReply(index)">Répondre</button>
            </div>
            <!-- Zone de réponse (cachée par défaut) -->
            <div v-if="comment.showReply" class="reply-section">
              <textarea
                v-model="comment.replyText"
                placeholder="Votre réponse..."
                rows="2"
              ></textarea>
              <button class="send-reply-btn" @click="sendReply(index)">Envoyer</button>
            </div>
            <!-- Affichage des réponses -->
            <ul v-if="comment.replies && comment.replies.length > 0" class="replies-list">
              <li v-for="(reply, replyIndex) in comment.replies" :key="replyIndex">
                {{ reply }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const rating = ref(4.5)
</script>

<script>
export default {
  name: 'BlogCard',
  data() {
    return {
      title: 'Categorie  du Poste',
      content: 'Ceci est un exemple de texte pour le poste de blog. Il peut contenir des informations, des idées ou des réflexions.',
      imageUrl: 'https://via.placeholder.com/600x400', // Mettez à `null` si aucune image
      isLiked: false,
      likeCount: 12,
      isFavorited: false,
      showComments: false,
      comments: [
        {
          text: 'Super poste !',
          showReply: false,
          replyText: '',
          replies: [],
        },
        {
          text: 'J\'adore ce contenu.',
          showReply: false,
          replyText: '',
          replies: [],
        },
        {
          text: 'Très instructif.',
          showReply: false,
          replyText: '',
          replies: [],
        },
      ],
    };
  },
  methods: {
    // Bascule l'affichage des commentaires
    toggleComments() {
      this.showComments = !this.showComments;
    },
    // Bascule le like
    toggleLike() {
      this.isLiked = !this.isLiked;
      this.likeCount += this.isLiked ? 1 : -1;
    },
    // Bascule les favoris
    toggleFavorite() {
      this.isFavorited = !this.isFavorited;
    },
    // Bascule l'affichage de la zone de réponse
    toggleReply(index) {
      this.comments[index].showReply = !this.comments[index].showReply;
    },
    // Envoie une réponse à un commentaire
    sendReply(index) {
      const reply = this.comments[index].replyText.trim();
      if (reply) {
        this.comments[index].replies.push(reply);
        this.comments[index].replyText = ''; // Réinitialise le champ de texte
        this.comments[index].showReply = false; // Cache la zone de réponse
      }
    },
  },
};
</script>
<style scoped>
/* Styles généraux */
.blog-card {
  background-color: #fff;
  border: solid 1px #e0dede;
  width: 100%; /* Largeur à 100% pour s'adapter au conteneur parent */
  max-width: 650px; /* Largeur maximale pour les grands écrans */
  margin: auto; /* Centrage horizontal */
  overflow: hidden;
}

/* Zone de texte */
.blog-text {
  padding: 20px;
}

.blog-text h2 {
  margin: 0 0 10px;
  font-size: 24px;
}

.blog-text p {
  margin: 0;
  color: #555;
}

/* Zone d'image */
.blog-image {
  border: solid 0px;
  border-radius: 5px;
  display: flex;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  height: 300px; /* Définissez une hauteur fixe ou ajustez selon vos besoins */
  overflow: hidden; /* Pour éviter que l'image ne dépasse */
}

.blog-image img {
  max-width: 100%; /* Assure que l'image ne dépasse pas la largeur du conteneur */
  max-height: 100%; /* Assure que l'image ne dépasse pas la hauteur du conteneur */
  object-fit: cover; /* Ajuste l'image pour couvrir la zone sans déformation */
  border-radius: 5px; /* Optionnel : pour conserver les coins arrondis */
}

/* Zone d'interaction */
.blog-actions {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-top: 1px solid #eee;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 5px;
}

.action-btn:hover {
  color: #1565C0;
}

.action-btn .v-icon.liked {
  color: #db1323;
}

.action-btn .v-icon {
  color: #555; /* Couleur grise par défaut */
  transition: color 0.3s ease, transform 0.3s ease; /* Animation fluide */
}

/* Zone de commentaires */
.blog-comments {
  padding: 20px;
  border-top: 1px solid #eee;
}

.blog-comments.hidden {
  display: none;
}

.blog-comments h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

.blog-comments ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.blog-comments li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.blog-comments li:last-child {
  border-bottom: none;
}

.comment-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reply-btn {
  background: none;
  border: none;
  color: #1565C0;
  cursor: pointer;
  font-size: 14px;
}

.reply-btn:hover {
  text-decoration: underline;
}

.reply-section {
  margin-top: 10px;
}

.reply-section textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

.send-reply-btn {
  margin-top: 8px;
  padding: 6px 12px;
  background-color: #1565C0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.send-reply-btn:hover {
  background-color: #0d47a1;
}

.replies-list {
  margin-top: 10px;
  padding-left: 20px;
  list-style: none;
}

.replies-list li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

.replies-list li:last-child {
  border-bottom: none;
}

/* Media Queries pour la responsivité */
@media (max-width: 768px) {
  .blog-card {
    max-width: 450px; /* Pleine largeur sur les petits écrans */
    border-radius: 10px; /* Supprimer les bordures arrondies sur les petits écrans */
  }

  .blog-text h2 {
    font-size: 20px; /* Taille de police réduite pour les petits écrans */
  }

  .blog-text p {
    font-size: 14px; /* Taille de police réduite pour les petits écrans */
  }

  .blog-actions {
    padding: 8px; /* Espacement réduit */
  }

  .action-btn {
    font-size: 16px; /* Taille des icônes réduite */
  }
}

@media (max-width: 480px) {
  .blog-text {
    padding: 15px; /* Espacement réduit */
  }

  .blog-text h2 {
    font-size: 18px; /* Taille de police réduite */
  }

  .blog-text p {
    font-size: 12px; /* Taille de police réduite */
  }

  .blog-actions {
    padding: 5px; /* Espacement réduit */
  }

  .action-btn {
    font-size: 14px; /* Taille des icônes réduite */
  }
}
</style>