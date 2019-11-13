<template>
  <div class="max-w-3xl text-xl bg-gray-800 text-gray-200 leading-loose italic py-4 px-16 mt-4 rounded">
    <blockquote class="relative">
      <slot />
    </blockquote>
  </div>
</template>

<style lang="postcss" scoped>
blockquote::before {
  @apply h-full w-1 bg-gray-400 content-none absolute left-0 top-0 -ml-8 ;
}
</style>
