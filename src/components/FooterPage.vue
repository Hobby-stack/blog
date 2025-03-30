<template>
    <div class="footer">
        <div class="footer-text">
            &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block"> Blog. all rights reserved</span>
        </div>
    </div>
</template>
<style scoped>
.footer {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(235, 230, 230);
    color: black;
    font-size: 15px;
}
.footer .footer-text {
    padding: 5px;
}
</style>
