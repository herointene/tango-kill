<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
</script>

<template>
  <div class="bg-slate-800 min-h-screen">
    <div
      class="
        mx-auto
        max-w-screen-xl
        px-4
        py-12
        sm:px-6
        lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8
      "
    >
      <h2
        class="
          text-3xl
          font-extrabold
          leading-9
          tracking-tight
          text-white
          sm:text-4xl sm:leading-10
        "
      >
        &#127754; Ready to dive in?
        <br />
        <span class="text-slate-400"> Learn Japanese vocabulary with me </span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/VocaBook/Display"
            class="
              inline-flex
              items-center
              justify-center
              rounded-md
              border border-transparent
              bg-sky-800
              px-5
              py-3
              text-base
              font-medium
              leading-6
              text-white
              transition
              duration-150
              ease-in-out
              hover:bg-sky-600
              focus:outline-none
            "
            >Dive in</router-link
          >
        </div>
        <ButtonRepo />
      </div>
    </div>
  </div>
</template>
