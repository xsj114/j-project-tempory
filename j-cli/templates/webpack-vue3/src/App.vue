<template>
    <div>
        <p>Good Luck</p>
        <img :src="Logo">
    </div>
</template>

<script>
import Logo from './assets/images/logo.png';

export default {
    data() {
        return {
            Logo,
        };
    },
};
</script>

<style scoped>
div{
    color: blue;
    margin: 0 auto;
    text-align: center;
    padding-top: 100px;
}
p{
    margin-bottom: 20px;
}
</style>
