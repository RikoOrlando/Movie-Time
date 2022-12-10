<template>
  <div
    :class="{
      'bg-[#E74C3C]': check,
      'bg-[#FFFFFF33]': !check,
    }"
    class="border border-[#FFFFFF80] rounded w-[14px] h-[14px] cursor-pointer flex items-center justify-center"
  >
    <img
      v-if="check"
      class="h-[6px] w-[10px]"
      fetchPriority="high"
      alt="movie"
      src="~/assets/images/check_icon.svg"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Checkbox",
  components: {},
  props: {
    check: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  emits: [],
  setup() {
    return {};
  },
});
</script>

<style></style>
