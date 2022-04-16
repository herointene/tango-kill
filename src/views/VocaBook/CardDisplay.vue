<template>
  <div id="CardDisplay" class="sm:p-16 p-3 flex flex-wrap ">
    <template v-for="(w, index) in bookShelf[0].content" key="index">
      <WordCard @star="recordStar" @unstar="delStar" :word="w" :wKey="index" />
    </template>
  </div>
</template>

<script>
import WordCard from "../../components/WordCard.vue";
import vocaJson from "../../VocabularyJson.json";
export default {
  components: { WordCard },
  data() {
    return {
      vocaJson,
    };
  },

  computed: {
    bookShelf() {
      return vocaJson.vocabulary.book
    },
  },

  methods: {
    recordStar(wKey) {
      //JSON stringfy
      if (!localStorage.getItem("Starred")) {
        localStorage.setItem("Starred", JSON.stringify([]))
      }
      let starredArray = JSON.parse(localStorage.getItem("Starred"))
      starredArray.push(wKey)
      localStorage.setItem("Starred", JSON.stringify(starredArray))
    },
    delStar(wKey) {
      let starredArray = JSON.parse(localStorage.getItem("Starred"))
      starredArray = starredArray.filter(i => i !== wKey)
      localStorage.setItem("Starred", JSON.stringify(starredArray))
    },
  },
};
</script>

<style>
</style>