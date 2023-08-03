<template>
    <div class="container">
        <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
        <layout-header />
        <layout-sidebar :openSidebar="isOpenMenu" />
        <div :class="['content', { content_full: !isOpenMenu }]">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import LayoutHeader from '@/components/Layout/Header.vue';
import LayoutSidebar from '@/components/Layout/Sidebar.vue';
import { ref } from 'vue';

const isOpenMenu = ref(false);

const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
};
</script>

<style lang="scss">
@import '@/style.scss';

.content {
    max-width: 1400px;
    margin-left: 250px;
    padding: 30px 60px;
    transition: 0.2s;
    &_full {
        margin-left: 0;
    }
}

.sidebar-toggle {
    position: fixed;
    left: 0;
    width: 35px;
    background: var(--primary);
    height: 100%;
    top: 62px;
    z-index: 1;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 1023px) {
    .content {
        margin-left: 0;
    }
}
</style>
