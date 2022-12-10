<template>
  <div class="w-[540px] h-[365px] flex items-center">
    <img
      alt="movie"
      :src="
        data.img_url ||
        'https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/infadel171200119.jpg?ver=6'
      "
      class="w-[243px] h-[365px]"
    />
    <div class="flex-1 h-[324px] bg-black p-6">
      <div class="flex items-center">
        <img
          class="h-4 w-4 mr-2"
          fetchPriority="high"
          alt="star"
          src="~/assets/images/star_icon.svg"
        />
        <p class="text-white font-bold text-lg">
          {{ data.vote_average?.toFixed(1) }}
        </p>
      </div>
      <p class="text-white font-semibold text-[28px] text-start">
        {{ data.title }}
      </p>
      <div class="my-3 flex items-center">
        <p class="text-white text-base text-start">
          {{ data.release_date.split("-")[0] }}
        </p>

        <div class="w-2 h-2 mx-2 rounded-full bg-[#FFFFFF80]" />
        <p class="text-white text-base text-start">Action</p>
      </div>
      <p class="text-white text-xs text-start">
        {{ data.overview }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeBannerCard",
  components: {},
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  emits: [],
  setup() {
    return {};
  },
});
</script>
