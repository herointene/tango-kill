<template>
  <div class=" w-full grid grid-cols-2 gap-2 mt-2">
    <router-link class=" bg-slate-100 text-3xl text-center rounded-t-md" to="/VocaBook/Display">Words</router-link>
    <router-link class=" bg-slate-300 text-3xl text-center rounded-t-md" to="/VocaBook/Starred">Starred</router-link>
  </div>
  <router-view class="shadow-md"/>
</template>

<script>

export default {

}
</script>

<style>

</style>
