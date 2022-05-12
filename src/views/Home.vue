<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
import NoticeBlock from "../components/NoticeBlock.vue";
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

    <NoticeBlock>
      <h1 class="text-2xl font-bold leading-10">
        <img
          class="mr-2 inline"
          src="https://img.icons8.com/tiny-color/24/000000/experimental-adventures-tiny-color.png"
        />
        Add TangoKill to your Home Screen!
      </h1>
      <p class="text-slate-300 mt-2">
        If you are using iOS devices, just open this webapp in Safari then tap
        <img
          class="inline"
          src="https://img.icons8.com/color/24/000000/share-rounded.png"
        />
        and select "Add to Home Screen".<br />
        What is
        <a
          class="text-sky-200 underline"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
          >Progressive Web Apps(PWA)? &#129125;</a
        >
      </p>
    </NoticeBlock>

    <NoticeBlock>
      <h1 class="text-2xl font-bold leading-10">
        <img
          class="mr-2 inline"
          src="https://img.icons8.com/fluency/24/000000/star.png"
        />
        Save your "Star" words on your device! 
      </h1>
      <p class="text-slate-300 mt-2">
        TangoKill uses LocalStorage to record users data safely. Click &#11088; and save your important words.
      </p>
    </NoticeBlock>
  </div>
</template>
