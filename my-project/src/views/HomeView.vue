<script >
import Block from '../components/Block.vue'
import Results from '../components/Results.vue'
export default {
  name: 'App',
  components: {Block, Results},
  data(){
      return{
        isPlaying: false,
        delay: null,
        score: null,
        showResults: false
      }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000,
      this.isPlaying = true 
      this.showResults = false

    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<template>
 <div class="text-red-700 text-center pt-12 text-4xl">მოდი შევამოწმოთ რამდენად ყლეხარ</div>
 <div class="flex flex-ro justify-center mt-12 mb-6"> 
  <button @click="start" :disabled="isPlaying" class=" py-1 px-4 bg-green-600 rounded-2xl text-white text-2xl">დეიწყე</button>
</div>


 <div v-if="isPlaying" class=" flex flex-row justify-center mt-24">
   <Block :delay="delay" @end="endGame" />
 </div>
 <Results v-if="showResults" :score="score" />


</template>

