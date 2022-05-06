<script setup>
import { ref } from "vue";
import { HomeIcon } from "@heroicons/vue/outline";
let counter = ref(0);
setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div>
    <header
      class="bg-black shadow flex justify-between"
      v-if="$route.meta.title"
    >
      <div class="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-white"
        >
          {{ $route.meta.title }} / {{ counter }}
        </h1>
      </div>
      <router-link
        to="/"
        class="
        text-white
          inline-flex
          my-auto
          rounded-sm
          h-12
          w-10
          mx-4
          hover:drop-shadow-md
        "
      >
        <HomeIcon />
      </router-link>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="bg-black shadow py-4 lg:py-12 sm:px-6 lg:px-8">
      <div class=" text-2xl text-white">
        TANGOKILL.
      </div>
      <div class="text-gray-500 ">
        Software Copyright (MIT) Ted WU @2022
      </div>
    </footer>
  </div>
</template>
