<template>
  <div>
    <div class="w-[220px] h-[330px] bg-white relative">
      <img
        alt="movie"
        :src="
          data.img_url ||
          'https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/infadel171200119.jpg?ver=6'
        "
        class="absolute w-[220px]"
      />

      <div
        class="text-white100 text-lg font-bold w-12 h-8 bg-[#1E232BCC] right-0 absolute flex items-center justify-center"
      >
        {{ data.vote_average?.toFixed(1) }}
      </div>

      <!-- over layer -->
      <div
        class="w-[220px] h-[330px] absolute opacity-0 hover:opacity-100 bg-[#000000CC] ease-in-out duration-300 flex flex-col justify-evenly items-center"
      >
        <div class="flex items-center">
          <img
            class="h-8 w-8 mr-2"
            fetchPriority="high"
            alt="star"
            src="~/assets/images/star_icon.svg"
          />
          <p class="text-white font-semibold text-2xl">
            {{ data.vote_average?.toFixed(1) }}
          </p>
        </div>
        <p class="text-white font-semibold text-lg">ACTION</p>
        <NuxtLink :to="`/detail/${data.id}`">
          <Button class="w-[107px]">VIEW</Button>
        </NuxtLink>
      </div>
    </div>
    <Text
      class="mt-3 text-base text-ellipsis max-w-[200px] overflow-hidden whitespace-nowrap"
      >{{ data.title }}</Text
    >
    <Text class="mt-1 text-sm" color="secondary">{{
      data.release_date.split("-")[0]
    }}</Text>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MovieCard",
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
