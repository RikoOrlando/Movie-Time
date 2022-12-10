<template>
  <div
    class="bg-[#FFFFFF0D] h-[66px] flex justify-center items-center px-5 relative z-10"
  >
    <div class="flex justify-center items-center flex-1 max-w-[1200px]">
      <NuxtLink to="/">
        <img
          class="h-[31px] w-[112px] mr-[36px]"
          fetchPriority="high"
          alt="movie"
          src="~/assets/images/logo.svg"
        />
      </NuxtLink>
      <div class="flex-1">
        <Search />
      </div>
      <div class="flex gap-[38px] ml-[45px] items-center">
        <div class="flex items-center">
          <img
            class="w-5 h-5 mr-3"
            fetchPriority="high"
            alt="movie"
            src="~/assets/images/grid_icon.svg"
          />
          <Text class="text-sm font-semibold">Categories</Text>
        </div>
        <NuxtLink to="/movie">
          <Text class="text-sm font-semibold">Movies</Text>
        </NuxtLink>
        <Text class="text-sm font-semibold">TV Shows</Text>
        <Text class="text-sm font-semibold">Login</Text>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  components: {},
  props: {},
  emits: [],
  setup() {
    return {};
  },
});
</script>
