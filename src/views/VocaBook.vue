<template>
  <div class="bg-slate-800 min-h-screen pt-2">
    <div class="w-full flex">
      <router-link
        class=" bg-slate-700 text-white text-3xl text-center rounded-t-md hover:bg-slate-500 transition duration-200 w-48"
        active-class="active"
        to="/VocaBook/Display"
        >&#128214;</router-link
      >
      <router-link
        class="bg-slate-700 text-white text-3xl text-center rounded-t-md hover:bg-slate-500 transition duration-200 w-48"
        active-class="active"
        to="/VocaBook/Starred"
        >&#11088;</router-link
      >
    </div>
    <router-view class="shadow-lg shadow-slate-900 bg-slate-600 " />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.active{
  background: rgb(71,85,105);
}

</style>
