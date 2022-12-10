<template>
  <div
    class="h-[468px] bg-slate-800 mt-[-66px] flex flex-col justify-end relative"
  >
    <img
      v-if="dataMovie.backdrop_path"
      class="h-[468px] w-screen absolute"
      alt="backdrop"
      :src="`https://image.tmdb.org/t/p/original/${dataMovie.backdrop_path}`"
    />
    <div class="justify-center flex relative">
      <div class="max-w-[1200px] flex-1 flex mb-[30px]">
        <div class="w-[220px] mr-[38px]" />
        <div class="flex-1">
          <Text class="text-white text-lg">{{
            dataMovie.release_date && dataMovie.release_date.split("-")[0]
          }}</Text>
          <Text class="text-[36px] font-semibold">{{ dataMovie.title }}</Text>
          <Text class="text-white text-sm">{{ genre }}</Text>
        </div>
      </div>
    </div>
    <div class="bg-[#00000080] h-20 justify-center flex relative">
      <div class="flex items-center max-w-[1200px] h-20 flex-1 relative">
        <img
          class="absolute w-[220px] h-[330px]"
          alt="banner"
          :src="
            dataMovie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${dataMovie.poster_path}`
              : 'https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/infadel171200119.jpg?ver=6'
          "
        />
        <div class="w-[220px] mr-[38px]" />
        <img
          class="h-9 w-9 mr-4"
          fetchPriority="high"
          alt="star"
          src="~/assets/images/star_icon.svg"
        />
        <Text class="text-[36px] font-semibold">{{
          dataMovie.vote_average?.toFixed(1)
        }}</Text>
        <div class="ml-3 border-r pr-[33px] border-[#FFFFFF33]">
          <Text color="secondary" class="text-xs">USER SCORE</Text>
          <Text class="text-xs">{{ dataMovie.vote_count }} VOTES</Text>
        </div>
        <div class="ml-[33px] border-r pr-[33px] border-[#FFFFFF33]">
          <Text color="secondary" class="text-xs">STATUS</Text>
          <Text class="text-xs uppercase">{{ dataMovie.status }}</Text>
        </div>
        <div class="ml-[33px] border-r pr-[33px] border-[#FFFFFF33]">
          <Text color="secondary" class="text-xs">LANGUAGE</Text>
          <Text class="text-xs uppercase">{{
            dataMovie?.spoken_languages && dataMovie?.spoken_languages[0]?.name
          }}</Text>
        </div>
        <div class="ml-[33px] border-r pr-[33px] border-[#FFFFFF33]">
          <Text color="secondary" class="text-xs">BUDGET</Text>
          <Text class="text-xs">${{ dataMovie.budget }}</Text>
        </div>
        <div class="ml-[33px] pr-[33px]">
          <Text color="secondary" class="text-xs">PRODUCTION</Text>
          <Text class="text-xs">{{
            dataMovie?.production_companies &&
            dataMovie?.production_companies[0]?.name
          }}</Text>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "DetailBanner",
  components: {},
  props: {
    dataMovie: {
      type: Object,
      required: true,
    },
  },
  emits: [],
  setup(props) {
    const genre = computed(() => {
      const data = props.dataMovie?.genres || [];
      const formated = data.map((el: any) => el.name);
      return formated.join(", ");
    });
    return { genre };
  },
});
</script>
