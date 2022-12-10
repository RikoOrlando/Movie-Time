<template>
  <div class="bg-[#F9F9F9] p-6 flex-1">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="h-12 w-12 bg-[#1E232B36] rounded-full">
          <img
            v-if="data.author_details?.avatar_path"
            class="h-12 w-12 bg-[#1E232B36] rounded-full"
            alt="avatar"
            :src="`https://image.tmdb.org/t/p/original/${data.author_details.avatar_path}`"
          />
        </div>
        <div class="ml-[18px]">
          <p class="text-sm font-bold text-[#1E232A]">{{ data.author }}</p>
          <p class="text-xs text-[#666666]">December 18, 2020</p>
        </div>
      </div>
      <div class="bg-[#C4C4C447] rounded-lg flex px-3 py1">
        <img
          class="h-[17px] w-[17px] mt-2 mr-2"
          fetchPriority="high"
          alt="movie"
          src="~/assets/images/star_icon.svg"
        />
        <div class="text-[36px]">
          {{ data.author_details.rating.toFixed(1) }}
        </div>
      </div>
    </div>
    <div class="text-xs italic mt-8 leading-[150%]">
      {{ data.content }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DetailReview",
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
