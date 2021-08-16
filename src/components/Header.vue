<template>
    <p class="font-bold text-3xl">{{text}}</p>
</template>

<script>
    export default {
        name: "Header",
        props: {
            text: String
        }
    }
</script>