<template>
  <div class="sm:max-w-fit w-full p-8 sm:mr-8 mb-8 shadow-xl shadow-slate-700 rounded-xl bg-gray-200">
    <div class="flex flex-wrap">
      <div class="text-7xl font-bold mr-6">{{ word[0] }}</div>
      <div>
        <div class="text-3xl">{{ word[1] }}</div>
        <div class="text-3xl">{{ word[2] }}</div>
      </div>
    </div>
    <hr class="my-4" />
    <div class="flex justify-between">
      <div class="text-3xl font-thin inline-block">{{ word[3] }}</div>
      <div class="inline-block w-10 transform duration-200 hover:scale-125">
        <StarIcon v-if="!starred" @click="handleStar" class="text-gray-100" />
        <SolidStar v-if="starred" @click="removeStar" class="text-yellow-300" />
      </div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from "@heroicons/vue/outline";
import { StarIcon as SolidStar } from "@heroicons/vue/solid";
export default {
  name: "WordCard",
  components: { StarIcon, SolidStar },
  props: ["word","wKey"],
  data() {
    return {
      starred: false,
      starredArr: JSON.parse(localStorage.getItem('Starred')) || []
    };
  },
  mounted() {
    this.starredArr.includes(this.wKey)?
    this.starred = true:
    this.starred = false
    
    
    //if localstorage contains this word, starred; vice versa
  },
  methods: {
    handleStar() {
      this.$emit("star", this.wKey)
      this.starred = true
    },
    removeStar() {
      this.$emit("unstar", this.wKey)
      this.starred = false
    },
  },
};
</script>

<style>
</style>