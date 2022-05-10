<template>
  <div class="p-4">
    <div
      class="
        mx-auto
        mt-4
        max-w-screen-xl
        bg-slate-700
        dashed
        rounded-md
        p-4 pb-6
        w-full
        text-white
      "
    >
      <slot>
        Fallback Content
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dashed {
  border-radius: 10px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%2394A3B8FF' stroke-width='2' stroke-dasharray='12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>