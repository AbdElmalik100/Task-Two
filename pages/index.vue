<template>
    <div class="home-page min-vh-100 py-5">
        <div class="container d-flex gap-3 flex-lg-row flex-column">
            <div class="left-side">
                <div class="outer-box personal-info p-4 rounded-5">
                    <NuxtImg src="/images/Rectangle 12.svg" width="100" />
                    <h4 class="mt-3 fw-bold">Hala Ahmed</h4>
                    <p class="text-muted">
                        I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin
                        Care.
                    </p>
                    <div class="extra-info d-flex align-items-center gap-2">
                        <div class="box p-2 px-3 rounded-3 d-flex align-items-center gap-2">
                            <NuxtImg src="/images/user-tick.svg" width="25" />
                            <div class="info">
                                <span class="d-block fw-bold">5</span>
                                <span>Following</span>
                            </div>
                        </div>
                        <div class="box p-2 px-3 rounded-3 d-flex align-items-center gap-2">
                            <NuxtImg src="/images/profile-2user.svg" width="25" />
                            <div class="info">
                                <span class="d-block fw-bold">20</span>
                                <span>Followers</span>
                            </div>
                        </div>
                        <div class="box p-2 px-3 rounded-3 d-flex align-items-center gap-2">
                            <NuxtImg src="/images/magic-star.svg" width="25" />
                            <div class="info">
                                <span class="d-flex align-items-center gap-1 fw-bold">
                                    4.2
                                    <span class="counter text-black-50" style="font-size: 12px;">
                                        (15)
                                    </span>
                                </span>
                                <span>Rate</span>
                            </div>
                        </div>
                    </div>
                    <button class="main-btn w-100 mt-3">
                        Follow
                    </button>
                </div>
                <div class="outer-box qr-code p-4 rounded-5 mt-4 overflow-hidden" :class="openMenu ? 'active' : ''">
                    <div class="top d-flex align-items-center gap-3 justify-content-between">
                        <h4 class="fw-bold mb-0">QR Code</h4>
                        <div class="d-flex align-items-center gap-3">
                            <NuxtImg src="/images/eye.svg" width="25" />
                            <NuxtImg src="/images/document-download.svg" width="25" />
                            <NuxtImg src="/images/send-square.svg" width="25" />
                            <NuxtImg src="/images/arrow-down.svg" v-if="!openMenu" @click="openMenu = true" class="down mobile d-none" width="25" />
                            <NuxtImg src="/images/arrow-up.svg" v-else @click="openMenu = false" class="up mobile" width="25" />
                        </div>
                    </div>
                    <div class="banner p-3 px-4 mt-3 rounded-4 d-flex align-items-center gap-2">
                        <NuxtImg src="/images/document-download-colored.svg" width="25" />
                        <span class="">
                            Download the QR code or share it with your friends.
                        </span>
                    </div>
                    <div class="qr p-4 rounded-4 mt-3 text-center">
                        <div class="p-3 rounded-4">
                            <NuxtImg src="/images/Layer 1.svg" width="150" />
                            <h3 class="fw-bold my-2">Hala Ahmed</h3>
                            <NuxtImg src="/images/World-Static.svg" width="150" />
                            <span class="text-muted d-block mt-3">Follow Us On Mazaady</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <div class="outer-box p-4 rounded-5">
                    <div class="top d-flex align-items-start gap-3 justify-content-between">
                        <div class="tabs d-flex align-items-center gap-3">
                            <button class="active">
                                Products
                            </button>
                            <button>
                                Articles
                            </button>
                            <button>
                                Reviews
                            </button>
                        </div>
                        <button class="add-review main-btn d-flex align-items-center gap-3">
                            <NuxtImg src="/images/add-circle.svg" width="25" />
                            <span>Add Review</span>
                        </button>
                    </div>
                    <h2 class="mt-4">
                        Products
                        <span class="text-black-50 fs-6 fw-normal">
                            (12)
                        </span>
                    </h2>
                    <div class="products d-flex flex-column gap-4 mt-4">
                        <div class="box d-flex align-items-start">
                            <div class="image">
                                <NuxtImg src="/images/product1.svg" width="150" />
                                <span class="d-block live">Live Action</span>
                            </div>
                            <div class="info w-100 flex-fill ms-4">
                                <span class="name d-block fw-semibold">
                                    Six-piece clothing set (blouse - pants - hat and ...
                                </span>
                                <span class="price d-block text-muted my-2">
                                    Starting Price
                                    <span class="fw-bold fs-4">1000 EGP</span>
                                </span>
                                <div
                                    class="lot d-flex align-items-md-center align-items-start gap-3 flex-md-row flex-column">
                                    <span class="text-muted">Lot Starts In</span>
                                    <div class="d-flex align-items-center gap-3">
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">2</span>
                                            <span>Days</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">10</span>
                                            <span>Hours</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">50</span>
                                            <span>Minutes</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <NuxtImg class="like" src="/images/like.svg" width="25" />
                        </div>
                        <div class="box d-flex align-items-start">
                            <div class="image">
                                <NuxtImg src="/images/product2.svg" width="150" />
                                <span class="d-block live">Live Action</span>
                            </div>
                            <div class="info w-100 flex-fill ms-4">
                                <span class="name d-block fw-semibold">
                                    Six-piece clothing set (blouse - pants - hat and ...
                                </span>
                                <span class="price d-block text-muted my-2">
                                    Starting Price
                                    <span class="fw-bold fs-4">1000 EGP</span>
                                </span>
                                <div
                                    class="lot d-flex align-items-md-center align-items-start gap-3 flex-md-row flex-column">
                                    <span class="text-muted">Lot Starts In</span>
                                    <div class="d-flex align-items-center gap-3">
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">2</span>
                                            <span>Days</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">10</span>
                                            <span>Hours</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">50</span>
                                            <span>Minutes</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <NuxtImg class="like" src="/images/like.svg" width="25" />
                        </div>
                        <div class="box d-flex align-items-start">
                            <div class="image">
                                <NuxtImg src="/images/product3.svg" width="150" />
                                <span class="d-block hot">Hot Action</span>
                            </div>
                            <div class="info w-100 flex-fill ms-4">
                                <span class="name d-block fw-semibold">
                                    Jeep Car, new, used for only one time
                                </span>
                                <span class="price d-block text-muted my-2">
                                    Starting Price
                                    <span class="fw-bold fs-4">1000 EGP</span>
                                </span>
                                <div
                                    class="lot d-flex aalign-items-md-center align-items-start gap-3 flex-md-row flex-column">
                                    <span class="text-muted">Lot Starts In</span>
                                    <div class="d-flex align-items-center gap-3">
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">2</span>
                                            <span>Days</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">10</span>
                                            <span>Hours</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">50</span>
                                            <span>Minutes</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <NuxtImg class="like" src="/images/liked.svg" width="35" />
                        </div>
                        <div class="box d-flex align-items-start">
                            <div class="image">
                                <NuxtImg src="/images/product4.svg" width="150" />
                                <span class="d-block live">Live Action</span>
                            </div>
                            <div class="info w-100 flex-fill ms-4">
                                <span class="name d-block fw-semibold">
                                    Six-piece clothing set (blouse - pants - hat and ...
                                </span>
                                <span class="price d-block text-muted my-2">
                                    Starting Price
                                    <span class="fw-bold fs-4">1000 EGP</span>
                                </span>
                                <div
                                    class="lot d-flex align-items-md-center align-items-start gap-3 flex-md-row flex-column">
                                    <span class="text-muted">Lot Starts In</span>
                                    <div class="d-flex align-items-center gap-3">
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">2</span>
                                            <span>Days</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">10</span>
                                            <span>Hours</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">50</span>
                                            <span>Minutes</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <NuxtImg class="like" src="/images/like.svg" width="25" />
                        </div>
                        <div class="box d-flex align-items-start">
                            <div class="image">
                                <NuxtImg src="/images/product5.svg" width="150" height="150"
                                    class="object-fit-cover rounded-5" />
                                <span class="d-block hot">Hot Action</span>
                            </div>
                            <div class="info w-100 flex-fill ms-4">
                                <span class="name d-block fw-semibold">
                                    Jeep Car, new, used for only one time
                                </span>
                                <span class="price d-block text-muted my-2">
                                    Starting Price
                                    <span class="fw-bold fs-4">1000 EGP</span>
                                </span>
                                <div
                                    class="lot d-flex align-items-md-center align-items-start gap-3 flex-md-row flex-column">
                                    <span class="text-muted">Lot Starts In</span>
                                    <div class="d-flex align-items-center gap-3">
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">2</span>
                                            <span>Days</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">10</span>
                                            <span>Hours</span>
                                        </span>
                                        <span class="box d-block p-2 px-4 rounded-4">
                                            <span class="fw-bold fs-5 me-1">50</span>
                                            <span>Minutes</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <NuxtImg class="like" src="/images/liked.svg" width="35" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const openMenu = ref(false)
</script>

<style lang="scss" scoped>
.home-page {
    .outer-box {
        background-color: var(--white-color);
    }

    .left-side {
        .personal-info {
            .extra-info {
                .box {
                    background-color: var(--very-light-orange-color);
                    width: 100%;

                    .info {
                        span:first-child {
                            color: var(--text-color);
                        }

                        span:last-child {
                            color: var(--second-color);
                        }
                    }
                }
            }
        }

        .qr-code {
            .top {
                img {
                    cursor: pointer;
                }
            }

            .banner {
                background-color: var(--very-light-orange-color);

                span {
                    color: var(--text-color);
                }
            }

            .qr {
                background: linear-gradient(to right, var(--main-color), var(--second-color));

                &>div {
                    background-color: var(--white-color);
                }
            }
        }
    }

    .right-side {
        .top {
            .tabs {
                button {
                    border-radius: 14px;
                    padding: 8px 24px;
                    border: 1px solid var(--light-grey-color);
                    color: var(--light-grey-color);
                    transition: 0.2s;

                    &.active,
                    &:hover {
                        border-color: var(--second-color);
                        color: var(--second-color);
                    }
                }
            }
        }

        h2 {
            font-weight: 800;
        }

        .products {
            .image {
                position: relative;
                width: fit-content;

                span {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    padding: 10px 20px;
                    border-radius: 32px 0px 30px 0;
                    font-size: 12px;
                    color: var(--white-color);

                    &.live {
                        background-color: var(--main-color);
                    }

                    &.hot {
                        background-color: var(--second-color);
                    }
                }
            }

            .box {
                .name {
                    color: var(--text-color);
                }

                .price {
                    &>span {
                        color: var(--text-color);
                    }
                }

                .lot {
                    text-wrap: nowrap;
                    .box {
                        background-color: var(--very-light-orange-color);
                        color: var(--second-color);
                    }
                }
            }
        }

        .like {
            cursor: pointer;
        }
    }

    @media (max-width: 991px) {
        .lot {
            &>div {
                gap: 5px !important;
            }

            .box {
                padding: 8px !important;

                span:first-child {
                    font-size: 10px !important;
                }
            }
        }
    }

    @media (max-width: 767px) {

        .add-review,
        .like {
            display: none !important;
        }

        .outer-box {
            padding: 15px !important;
        }

        .personal-info {
            .extra-info {

                &,
                .counter {
                    font-size: 10px !important;
                }

                .box {
                    padding: 8px !important;
                    gap: 5px !important;
                }
            }
        }


        .qr-code {
            height: 55px;
            transition: 0.5s ease-in-out;
            &.active {
                height: 471px;
            }
            .top {
                .mobile {
                    display: block !important;
                }
            }

            .qr {
                img {
                    width: 100px;
                }
            }
        }

        .tabs {

            button,
            & {
                font-size: 10px !important;
                width: 100% !important;
            }
        }


        .products {
            span {
                font-size: 10px !important;
            }

            .image {
                span {
                    padding: 5px 10px !important;
                    font-size: 8px !important;
                }

                img {
                    width: 75px !important;

                    &:last-of-type {
                        border-radius: 20px !important;
                        height: 75px !important;
                    }
                }
            }
        }
    }
}
</style>
