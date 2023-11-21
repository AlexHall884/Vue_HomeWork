<template>
    <div>
        <div class="page_heading"></div>
        <div class="project_artical center" v-for="(artical, index) in   projectArticalsList  " :key="index">
            <article class="project_artical-content">
                <h2 class="content__tittle">{{ artical.tittle }}</h2>
                <p class="content__text">{{ artical.text }}</p>
            </article>
            <div ref="swiper" class="swiper-container">
                <div class="swiper-wrapper">
                    <svg class="swiper-svg" xmlns="http://www.w3.org/2000/svg" width="172" height="172"
                        viewBox="0 0 172 172" fill="none">
                        <g filter="url(#filter0_d_1418_52)">
                            <circle cx="86" cy="76" r="66" fill="white" />
                            <path
                                d="M104.433 90.2861L96.0452 81.8984C98.0646 79.21 99.1547 75.9378 99.151 72.5755C99.151 63.9872 92.1638 57 83.5755 57C74.9872 57 68 63.9872 68 72.5755C68 81.1638 74.9872 88.151 83.5755 88.151C86.9378 88.1547 90.21 87.0646 92.8984 85.0452L101.286 93.4329C101.711 93.8125 102.264 94.0151 102.834 93.9991C103.403 93.9832 103.945 93.7499 104.347 93.3472C104.75 92.9445 104.983 92.403 104.999 91.8337C105.015 91.2644 104.812 90.7107 104.433 90.2861ZM72.4501 72.5755C72.4501 70.3751 73.1026 68.2242 74.3251 66.3946C75.5476 64.565 77.2851 63.1391 79.318 62.297C81.3509 61.455 83.5879 61.2346 85.746 61.6639C87.9041 62.0932 89.8864 63.1528 91.4423 64.7087C92.9983 66.2646 94.0578 68.247 94.4871 70.4051C94.9164 72.5632 94.6961 74.8001 93.854 76.833C93.012 78.8659 91.586 80.6035 89.7564 81.8259C87.9269 83.0484 85.7759 83.7009 83.5755 83.7009C80.626 83.6974 77.7982 82.5241 75.7126 80.4384C73.627 78.3528 72.4537 75.5251 72.4501 72.5755Z"
                                fill="#CDA274" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1418_52" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="10" />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1418_52" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1418_52" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <img class="swiper-slide" :src=artical.image alt="photo">
                    <img class="swiper-slide" src="../assets//slider2.png" alt="photo">
                    <img class="swiper-slide" src="../assets//slider3.png" alt="photo">
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <button class="swiper-btn"><img src="../assets/pag.svg" alt=""></button>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/scss'
import 'swiper/swiper-bundle.css';
import { mapGetters } from 'vuex'

export default {
    name: 'ProjectDetailsComp',

    data() {
        return {

        }
    },

    mounted() {
        this.initSwiper();
    },
    methods: {
        initSwiper() {
            this.swiper = new Swiper('.swiper-container', {
                loop: true, // Зацикленное прокручивание слайдов
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
        },
    },
    beforeDestroy() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    },

    computed: {
        ...mapGetters.projectArticalsList,
        projectArticalsList() {
            return this.$store.state.projectArticalsList
        }
    }
}
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/_vars.scss";
@import "/src/stylesheets/style.scss";

.page_heading {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
    background-size: cover;
    height: 356px;
    background-image: url('../assets/project_details_photo2.png');
}

.project_artical {
    margin-bottom: 107px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-content {
        width: 658px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 11px;

        .content__tittle {
            color: $tittleColor;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 62.5px */
            letter-spacing: 1px;
        }

        .content__text {
            text-align: center;
            color: $textColor;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
            box-sizing: content-box;
            margin-bottom: 100px;
        }
    }

    &-img {
        height: 799px;
        border-radius: 50px;
    }
}

.swiper-container {
    width: 100%;
    margin: 20px auto;
    position: relative;
    overflow: hidden;

    .swiper-svg {
        position: absolute;
        z-index: 1;
        top: 289px;
        left: 540px;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
            scale: 1.1;
        }

        &:hover circle {
            fill: $colorSiteSelect;
        }

        &:hover path {
            fill: #fff;
        }
    }

    .swiper-slide {
        height: 799px;
        border-radius: 50px;
        text-align: center;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.swiper-btn {
    border: none;
    background-color: #fff;
}
</style>
