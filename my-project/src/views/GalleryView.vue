<script setup>
import NavBar from '../components/NavBar.vue'
import { ref } from 'vue'
const card = ref([
    {
        img: 'src/assets/imgs/gallery/image 2 (2).png',
        name: 'მონა ლიზა',
        price: '5000$',
        button: 'ყიდვა'
    },
    {
        img: 'src/assets/imgs/gallery/image 3 (2).png',
        name: 'ქალბატონი ერმინით',
        price: '3500$',
        button: 'ყიდვა',
    },
    {
        img: 'src/assets/imgs/gallery/image 6 (3).png',
        name: 'სალვატორ მუნდი',
        price: '4599$',
        button: 'ყიდვა',
    },
])
const svgs = ref([
    { img: 'src/assets/imgs/cards/Group 35 (1).png' },
    { img: 'src/assets/imgs/cards/Group 35.png' },
])
</script>
<template>
    <div class="flex justify-end mt-6">
<NavBar/>
    </div>
    <div>
        <h2 class="text-6xl font-semibold flex justify-center my-16">გალერეა</h2>

        <div class="flex mx-20 gap-32 justify-end">
        <div v-for="item in card " :key="item.index" class="max-w-sm bg-white rounded-lg ">
            <a href="#">
                <img :src="item.img" alt="" />
            </a>
            <div class="flex justify-between ">
                <div class="my-5">
                    <a href="#">
                        <h5 class="mb-4 tracking-tight text-gray-900 ">{{ item.name }}
                        </h5>
                    </a>
                    <p class="mb-4 font-medium text-black">{{ item.price }}</p>
                    <button class="border py-1 px-5 bg-[#1C5178] text-gray-300">{{ item.button }}</button>
                </div>
                <div class="flex flex-col gap-y-1 mt-1 ">
                    <div v-for="icon in svgs" :key="icon.index">
                        <img :src="icon.img" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
</template>
