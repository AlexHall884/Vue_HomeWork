<template>
    <div>
        <div class="project__item">
            <img class="item__img" :src=item.image alt="photo">
            <div class="item__discription">
                <div class="discription__left">
                    <h3 class="discription__left-tittle">{{ item.tittle }}</h3>
                    <div class="breadcrumb">
                        <router-link to="/" class="breadcrumb-link">Decor</router-link>
                        <router-link to="/" class="breadcrumb-link">Artchitecture</router-link>
                    </div>
                </div>
                <div class="discription__right">
                    <router-link to="projectDetails" class="discription__link">
                        <svg class="discription__link-svg" xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                            viewBox="0 0 70 70" fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectItemsComp',
  props: ['item'],

  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/_vars.scss";
@import "/src/stylesheets/style.scss";

.project {

    &__item {
        display: flex;
        width: 585px;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        margin-bottom: 61px;

        .item__discription {
            display: flex;
            width: 585px;
            justify-content: space-between;
            align-items: center;

            .discription__left {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                &-tittle {
                    color: $tittleColor;
                    font-family: DM Serif Display;
                    font-size: 25px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                    /* 31.25px */
                    letter-spacing: 0.5px;
                }
            }

            .discription__right {
                .discription__link {

                    &-svg {
                        &:hover {
                            scale: 1.1;
                        }

                        &:hover circle {
                            fill: $colorSiteSelect;
                        }

                        &:hover path {
                            stroke: #fff;
                        }
                    }
                }
            }
        }

    }
}
</style>
