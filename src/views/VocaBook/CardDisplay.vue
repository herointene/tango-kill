<template>
  <div class="sm:p-8 p-3">
    <div class="h-8 mb-4">
      <div
        id="CardTypeSwitch"
        class="
          absolute
          right-3
          sm:right-8
          w-16
          h-8
          rounded-md
          bg-slate-700
          opacity-50
          grid grid-cols-2
        "
      >
        <div
          class="rounded-l-md bg-slate-700 cursor-pointer"
          :class="{ 'bg-slate-900': !gridActive }"
          @click="toggleGridView(false)"
        >
          <ViewListIcon
            class="text-gray-200 w-6 pt-1 m-auto"
            :class="{ '!text-gray-500': gridActive }"
          />
        </div>
        <div
          class="rounded-r-md bg-slate-700 cursor-pointer"
          :class="{ 'bg-slate-900': gridActive }"
          @click="toggleGridView(true)"
        >
          <ViewGridIcon
            class="text-gray-200 w-6 pt-1 m-auto"
            :class="{ '!text-gray-500': !gridActive }"
          />
        </div>
      </div>
    </div>
    <div id="CardDisplay" v-if="gridActive === false" class="flex flex-wrap">
      <template v-for="(w, index) in bookShelf[0].content" key="index">
        <WordCard
          @star="recordStar"
          @unstar="delStar"
          :word="w"
          :wKey="index"
        />
      </template>
    </div>
    <div id="MiniCardDisplay" v-if="gridActive === true" class="flex flex-wrap">
      <template v-for="(w, index) in bookShelf[0].content" key="index">
        <MiniWordCard
          @star="recordStar"
          @unstar="delStar"
          :word="w"
          :wKey="index"
        />
      </template>
    </div>
  </div>
</template>

<script>
import WordCard from "../../components/WordCard.vue";
import MiniWordCard from "../../components/MiniWordCard.vue";
import vocaJson from "../../VocabularyJson.json";
import { ViewListIcon } from "@heroicons/vue/outline";
import { ViewGridIcon } from "@heroicons/vue/outline";
export default {
  components: { WordCard, MiniWordCard, ViewListIcon, ViewGridIcon },
  data() {
    return {
      vocaJson,
      gridActive: (localStorage.getItem("GridView") == 'true') || false,
    };
  },

  computed: {
    bookShelf() {
      return vocaJson.vocabulary.book;
    },
  },

  methods: {
    toggleGridView(flag) {
      localStorage.setItem("GridView", flag)
      this.gridActive = flag
    },
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
      starredArray = starredArray.filter((i) => i !== wKey)
      localStorage.setItem("Starred", JSON.stringify(starredArray))
    },
  },
};
</script>

<style>
</style>