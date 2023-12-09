<script>
export default{
    props: ['delay'],
    data(){
        return{
            showblock: false,
            timer: null,
            reactionTime: 0
        }
    },
    mounted(){
        setTimeout(() => {
           this.showblock = true
           this.startTimer()
           console.log(this.delay) 
        }, this.delay)
    },
    methods:{
        startTimer(){
            this.timer= setInterval(() =>  {
                this.reactionTime += 10
            }, 10) 
        },
        stopTimer(){
            clearInterval(this.timer)
            console.log(this.reactionTime)
            this.$emit('end', this.reactionTime)
        },
    }
}
</script>


<template>
<div class='block' v-if="showblock">
    <span @click="stopTimer" class="p-44  bg-blue-800 justify-center text-white rounded-2xl">დამაწკაპუნე სირო</span>
</div>
</template>