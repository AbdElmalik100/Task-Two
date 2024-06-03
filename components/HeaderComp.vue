<template>
    <header class="py-2">
        <div class="container d-flex align-items-center gap-5 h-100">
            <div class="logo d-flex align-items-center">
                <NuxtImg src="/images/menu.svg" class="me-2 d-none mobile-menu" width="25" />
                <NuxtLink to="/">
                    <NuxtImg src="/images/Layer 1.svg" width="150" />
                </NuxtLink>
            </div>
            <ul class="links d-flex align-items-center gap-3 h-100">
                <li>
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog">
                        Blog
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/gifts">
                        Gifts
                    </NuxtLink>
                </li>
            </ul>
            <div class="right-side ms-auto d-flex align-items-center gap-4">
                <NuxtImg src="/images/search-normal.svg" width="25" />
                <NuxtImg class="notification px-3" src="/images/notification.svg" width="60"/>
                <NuxtImg src="/images/Rectangle 12.svg" class="rounded-circle" width="35" />
                <button class="main-btn d-flex align-items-center gap-2">
                    <NuxtImg src="/images/add-circle.svg" width="25" />
                    <span>Add New Project</span>
                </button>
                <button class="d-flex align-items-center gap-2">
                    <NuxtImg class="global pe-2" width="32" src="/images/global.svg" />
                    <span class="fw-bold fs-5">EN</span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header {
    background-color: var(--white-color);
    height: 90px;
    .links {
        li {
            position: relative;
            height: 100%;
            a {
                display: grid;
                place-items: center;
                height: 100%;
                transition: 0.2s;

                &::before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 5px;
                    background-color: var(--main-color);
                    border-radius: 5px 5px 0px 0px;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: 0.2s;
                }
                &:hover {
                    &::before {
                        width: 100%;
                    }
                    color: var(--main-color);
                }
                &.router-link-active {
                    color: var(--main-color);
                    font-weight: bold;
                    &::before {
                        width: 100%;
                    }
                }
            }
        }
    }
    .right-side {
        img {
            cursor: pointer;
        }
        .notification {
            border-right: 1px solid var(--light-orange-color);
            border-left: 1px solid var(--light-orange-color);
        }
        .global {
            border-right: 1px solid var(--light-grey-color);
        }
    }
    @media (max-width: 991px) {
        .links, button {
            display: none !important;
        }
        .mobile-menu {
            display: block !important;
        }
        .right-side {
            gap: 5px !important;
        }
        .notification {
            border: none !important;
        }    
    }
    @media (max-width: 767px) {
        .logo {
            img:last-child {
                width: 100px;
            }
        }
    }
}
</style>