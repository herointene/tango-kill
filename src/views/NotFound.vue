<script setup>
import { HomeIcon } from "@heroicons/vue/outline";
</script>
<template>
  <header class="bg-black shadow">
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
      <h1 class="text-3xl font-bold leading-tight text-white">Not Found</h1>
      <router-link
        to="/"
        class="
          text-white
          inline-flex
          my-auto
          rounded-sm
          h-8
          w-10
          mx-4
          hover:drop-shadow-md
        "
      >
        <HomeIcon />
      </router-link>
    </div>
  </header>
</template>
