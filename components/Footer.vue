<template>
  <div class="bg-[#0000004A] h-[160px] flex justify-center items-center px-5">
    <div class="flex items-center justify-between flex-1 max-w-[1200px]">
      <Text color="secondary" class="text-[13px]"
        >© 2021 MoovieTime. All rights reserved.</Text
      >
      <img
        class="h-[24px] w-[88px]"
        fetchPriority="high"
        alt="movie"
        src="~/assets/images/logo_transparant.svg"
      />
      <div>
        <Text color="secondary" class="text-[13px]">Made with</Text>
        <div class="flex mt-2">
          <img
            class="h-6 w-6"
            fetchPriority="high"
            alt="movie"
            src="~/assets/images/nuxt.png"
          />
          <img
            class="h-6 w-6 ml-2"
            fetchPriority="high"
            alt="movie"
            src="~/assets/images/tailwind.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  components: {},
  props: {},
  emits: [],
  setup() {
    return {};
  },
});
</script>
