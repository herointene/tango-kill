<template>
  <div class="max-w-fit p-8 mr-8 shadow-md rounded-xl bg-white">
    <div class="flex">
      <div class="text-7xl font-bold mr-6">{{ word[0] }}</div>
      <div>
        <div class="text-3xl">{{ word[2] }}</div>
        <div class="text-3xl">{{ word[1] }}</div>
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
  props: ["word"],
  data() {
    return {
      starred: false,
    };
  },
  methods: {
    handleStar() {
      this.$emit("star", this.word);
      this.starred = true;
    },
    removeStar() {
      this.starred = false;
    },
  },
};
</script>

<style>
</style>