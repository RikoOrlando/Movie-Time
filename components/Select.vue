<template>
  <div class="relative">
    <div
      @click="isShow = !isShow"
      class="bg-[#E0E0E021] rounded h-9 pl-[18px] flex items-center pr-2 cursor-pointer"
    >
      <Text class="text-sm"> {{ selected.label }} </Text>
      <img
        class="w-2.5 h-2.5 ml-auto"
        fetchPriority="high"
        alt="movie"
        src="~/assets/images/arrow_down_icon.svg"
      />
    </div>
    <div v-if="isShow">
      <div
        @click="isShow = false"
        class="fixed h-screen w-screen bg-white top-0 left-0 z-10 opacity-0"
      />
      <div class="absolute rounded w-full bg-[#111419] overflow-hidden z-20">
        <div
          v-for="item in options"
          :key="item.value"
          class="px-[18px] py-2 text-white text-xs cursor-pointer"
          @click="$emit('select', item)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
interface IOption {
  value: String;
  label: String;
}
export default defineComponent({
  name: "Select",
  components: {},
  emits: [],
  props: {
    options: {
      type: Array,
      default: () => [],
      required: false,
    },
    value: {
      type: String,
      default: () => "",
      required: false,
    },
  },
  setup(props: any) {
    const isShow = ref(false);
    const selected = computed(
      () => props.options.find((el: IOption) => el.value === props.value) || {}
    );
    return { isShow, selected };
  },
});
</script>
