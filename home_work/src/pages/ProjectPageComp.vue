<template>
    <div>
        <div class="page_heading">
            <div class="intro">
                <h3 class="intro__heading">Our Project</h3>
                <div class="breadcrumb">
                    <a href="index.html" class="breadcrumb-link">Home</a>
                    <a href="blog.html" class="breadcrumb-link">Project</a>
                </div>
            </div>
        </div>
        <div class="categoreis center">
            <div class="categoreis__content">
                <button class="categoreis__content-btn" @click="changeTag('BathroomItems')">Bathroom</button>
                <button class="categoreis__content-btn" @click="changeTag('BedroomItems')">Bed Room</button>
                <button class="categoreis__content-btn" @click="changeTag('KitchanItems')">Kitchan</button>
                <button class="categoreis__content-btn" @click="changeTag('LivingAreaItems')">Living Area</button>
            </div>
        </div>
        <div class="project center">
            <ProjectItemsComp v-for="item in filteredList" :key="item.image" :item="item">
            </ProjectItemsComp>
            <div class="pagination">
                <button class="pagination__btn">01</button>
                <button class="pagination__btn">02</button>
                <button class="pagination__btn">03</button>
                <button class="pagination__btn">
                    <svg class="pagination__btn-svg" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                        viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import ProjectItemsComp from '../components/ProjectItemsComp.vue'

export default {
    name: 'ProjectPageComp',
    components: { ProjectItemsComp },

    data() {
        return {
            selectTeg: 'BedroomItems',
            category: ['BathroomItems', 'BedroomItems', 'KitchanItems', 'LivingAreaItems'],
            BedroomItems: [
                {
                    image: require('../assets/project_photo5.png'),
                    tittle: 'Minimal Bedroom'
                },
                {
                    image: require('../assets/project_photo6.png'),
                    tittle: 'Minimal Bedroom'
                },
                {
                    image: require('../assets/project_photo7.png'),
                    tittle: 'Classic Minimal Bedroom'
                },
                {
                    image: require('../assets/project_photo8.png'),
                    tittle: 'Modern Bedroom'
                },
                {
                    image: require('../assets/project_photo9.png'),
                    tittle: 'Minimal Bedroom table'
                },
                {
                    image: require('../assets/project_photo10.png'),
                    tittle: 'System Table'
                },
                {
                    image: require('../assets/project_photo11.png'),
                    tittle: 'Modern Medroom'
                },
                {
                    image: require('../assets/project_photo12.png'),
                    tittle: 'Modern Medroom'
                }
            ],
            BathroomItems: [
                {
                    image: require('../assets/project_photo1.png'),
                    tittle: 'Minimal Bathroom'
                },
                {
                    image: require('../assets/project_photo2.png'),
                    tittle: 'Minimal Bathroom'
                },
            ],
            KitchanItems: [
                {
                    image: require('../assets/content_photo1.png'),
                    tittle: 'Minimal Kitchan'
                },
                {
                    image: require('../assets/content_photo3.png'),
                    tittle: 'Minimal Kitchan'
                },
                {
                    image: require('../assets/content_photo4.png'),
                    tittle: 'Minimal Kitchan'
                },
                {
                    image: require('../assets/content_photo5.png'),
                    tittle: 'Minimal Kitchan'
                }
            ],
            LivingAreaItems: [
                {
                    image: require('../assets/project_photo3.png'),
                    tittle: 'Minimal Living Area'
                },
                {
                    image: require('../assets/project_photo4.png'),
                    tittle: 'Minimal Living Area'
                },

            ]
        }
    },

    methods: {
        changeTag(teg) {
            this.selectTeg = teg
        }
    },
    computed: {
        filteredList() {
            if (this.selectTeg === 'BathroomItems') {
                return this.BathroomItems;
            } else if (this.selectTeg === 'BedroomItems') {
                return this.BedroomItems;
            } else if (this.selectTeg === 'KitchanItems') {
                return this.KitchanItems;
            } else if (this.selectTeg === 'LivingAreaItems') {
                return this.LivingAreaItems;
            }
            else {
                return [];
            }
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
    background-image: url('../assets/project_details_photo.png');

    .intro {
        position: absolute;
        top: 184px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 503px;
        padding: 41px 78px;
        gap: 10px;

        border-radius: 37px 37px 0px 0px;
        background: #FFF;

        &__heading {
            color: $tittleColor;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 62.5px */
        }
    }
}

.categoreis {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 61px;

    &__content {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 10px;
        width: 880px;
        border-radius: 18px;
        border: 1px solid $colorSiteSelect;

        &-btn {
            background-color: #FFF;
            color: $tittleColor;
            text-align: center;
            font-family: Jost;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
            /* 22.5px */
            letter-spacing: 0.36px;
            padding: 26px 66px;
            border-radius: 18px;
            border: none;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                background-color: $colorSiteSelect;
                color: #FFF;
            }
        }
    }

}

.project {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 27px;
    margin-bottom: 200px;

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
