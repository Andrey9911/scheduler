<script setup>
    import { useCounterStore } from "../stores";

    const st = useCounterStore();


</script>

<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
</style>