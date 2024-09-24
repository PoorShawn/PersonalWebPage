<script lang="ts" setup>

</script>
<template>
    <nav class="nav">
        <h1 class="logo">
            <a href="/Home">Personal Webite</a>
        </h1>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Articles</a>
            </li>
            <li>
                <a href="#">Tags</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
    nav {
        display: flex;
        justify-content: space-around;
        background-color: blanchedalmond;
        padding: 20px;
        margin-bottom: 30px;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
    }

    nav a {
        margin: 20px;
        text-decoration: none;
        color:cadetblue;
    }

    .logo {
        font-size: 36px;
    }

    nav ul a {
        font-size: 24px;
    }

</style>