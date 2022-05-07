<template>
  <div
    class="
      sm:max-w-fit
      p-2
      sm:mr-4
      mr-2
      mb-4
      shadow-xl shadow-slate-700
      rounded-xl
      bg-gray-200
      cursor-pointer
    "
    :class="{'bg-yellow-200':starred}"
    @click="toggleStar"
  >
    <div class="flex flex-wrap">
      <div id="kanjiDisplayMini" class="text-3xl font-bold">{{ word[0] }}</div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from "@heroicons/vue/outline";
import { StarIcon as SolidStar } from "@heroicons/vue/solid";
export default {
  name: "WordCard",
  components: { StarIcon, SolidStar },
  props: ["word", "wKey"],
  data() {
    return {
      starred: false,
      starredArr: JSON.parse(localStorage.getItem("Starred")) || [],
    };
  },
  mounted() {
    this.starredArr.includes(this.wKey)
      ? (this.starred = true)
      : (this.starred = false);

    //if localstorage contains this word, starred; vice versa
  },
  methods: {
    toggleStar() {
      if (this.starred === false) {
        this.$emit("star", this.wKey);
        this.starred = true;
      } else {
        this.$emit("unstar", this.wKey);
        this.starred = false;
      }
    },
  },
};
</script>

<style>
</style>