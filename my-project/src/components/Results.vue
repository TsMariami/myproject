<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'კაი ხარ '

        } else if (this.score < 450) {
            this.rank = 'წაუყლევებ პაწია'
        } else {
            this.rank = 'პადობნი ყლე'
        }
    }
}
</script>
<template>
    <p class=" text-red-600 text-xl mb-52 text-center">სიყლევის საზომი: {{ score }}ms</p>
    <div class="flex flex-row justify-center">
        <p class="text-green-600 text-5xl font-semibold">{{ rank }}</p>
    </div>
</template>