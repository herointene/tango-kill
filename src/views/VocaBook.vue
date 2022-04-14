<template>
  <div class="p-16 bg-slate-100 flex flex-wrap ">
    <template v-for="(w, index) in bookShelf[0].content" key="index">
      <WordCard @star="recordStar" :word="w" />
    </template>
  </div>
</template>

<script>
import WordCard from '../components/WordCard.vue'
import vocaJson from '../VocabularyJson.json'
export default {
  components: {WordCard},
  data() {
    return {
      vocaJson,

    }
  },

  computed: {
    bookShelf() {
      return vocaJson.vocabulary.book       
    }
  },

  methods: {
    recordStar(w){
      console.log(w);
      //JSON stringfy
      if(!localStorage.getItem('Starred')){
        localStorage.setItem('Starred', '')
      }



    }
  }
}
</script>

<style>

</style>
