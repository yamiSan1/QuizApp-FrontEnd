<script setup>
    import TrendBox from './TrendBox.vue'
</script>
<template>
    <div class="trend-container">
        <TrendBox />
    </div>
</template>
<style scoped>
@media screen and (max-width: 768px) {
    .trend-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>