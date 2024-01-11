<script setup>
import { ref, watch } from "vue";
const firstInputValue = ref("");
const secondInputValue = ref("");
const thirdInputValue = ref("");
const fourthInputValue = ref("");
const secondInput = ref(null);
const thirdInput = ref(null);
const fourthInput = ref(null);

const handleInput = () => {
  secondInput.value.focus();
};
const handleInput2 = () => {
  thirdInput.value.focus();
};
const handleInput3 = () => {
  fourthInput.value.focus();
};

const countdown = ref(10);
watch(countdown, (newValue) => {
  if (newValue > 0) {
    setTimeout(() => {
      countdown.value--;
    }, 1000);
  }
});
</script>

<template>
  <img
    class="w-16 mt-12 ml-24 inline-block"
    src="/src/assets/imgs/gallery/arrow-circle-left-svgrepo-com 3.png"
    alt=""
  />

  <div class="bg-[#EFEFEF] w-8/12 mx-auto h-96">
    <div class="flex justify-center">
      <h2></h2>
      <div class="flex gap-x-3 items-center justify-center">
        <input
          class="border-[1px] border-black w-7 rounded-md text-center"
          :maxlength="1"
          v-model="firstInputValue"
          @input="handleInput"
        />
        <input
          class="border-[1px] border-black w-7 rounded-md text-center"
          :maxlength="1"
          v-model="secondInputValue"
          @input="handleInput2"
          ref="secondInput"
        />
        <input
          class="border-[1px] border-black w-7 rounded-md text-center"
          :maxlength="1"
          v-model="thirdInputValue"
          @input="handleInput3"
          ref="thirdInput"
        />
        <input
          class="border-[1px] border-black w-7 rounded-md text-center"
          :maxlength="1"
          v-model="fourthInputValue"
          @input="handleInput4"
          ref="fourthInput"
        />
      </div>
    </div>
  </div>
</template>
