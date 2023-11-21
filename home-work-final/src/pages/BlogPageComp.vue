<template>
    <div>
        <div class="page_heading">
            <div class="intro">
                <h3 class="intro__heading">Articles & News</h3>
                <div class="breadcrumb">
                    <router-link class="breadcrumb-link" to="/home">Home</router-link>
                    <router-link class="breadcrumb-link" to="/blog">Blog</router-link>
                </div>
            </div>
        </div>
        <article class="post center">
            <h3 class="post__heading">Latest Post</h3>
            <div class="post__item">
                <img src="../assets/post_photo.png" alt="image" class="item__img">
                <div class="item__content">
                    <h3 class="item__content-tittle">Low Cost Latest Invented
                        Interior Designing Ideas</h3>
                    <p class="item__content-text">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                        vitae turpis dignissim maximus.posuere in.Contrary to
                        popular belief.<br><br>
                        Lorem Ipsum is not simply random text. It has roots in a
                        piece of classica.</p>
                    <div class="content__date">
                        <p class="contnet__date-text">26 December, 2022 </p>
                        <router-link to="/blogDetails" class="content__link"><svg class="content__link-svg"
                                xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg></router-link>
                    </div>
                </div>
            </div>
        </article>
        <div class="blog center" id="app">
            <div class="blog__news">
                <h3 class="blog__heading-tittle">Articles & News</h3>
            </div>
            <div class="blog__content">
                <div class="content__item" v-for="item in contentItems" :key="item.image">
                    <div class="item__top" :style="`background-image: url(${item.image})`">
                        <a href="#" class="content__img-link">{{ item.title }}</a>
                    </div>
                    <div class="item__bottom">
                        <h3 class="contnet__tittle">{{ item.subtitle }}</h3>
                        <div class="content__date">
                            <p class="contnet__date-text">{{ item.date }}</p>
                            <router-link to="/blogDetails" class="content__link"><svg class="content__link-svg"
                                    xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
                                    fill="none">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

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
export default {
    name: 'BlogPageComp',

    data() {
        return {
            contentItems: [
                {
                    image: require('../assets/content_photo1.png'),
                    title: 'Kitchan Design',
                    subtitle: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022'
                },
                {
                    image: require('../assets/content_photo2.png'),
                    title: 'Living Design',
                    subtitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '26 December, 2022'
                },
                {
                    image: require('../assets/content_photo3.png'),
                    title: 'Interior Design',
                    subtitle: 'Best For Any Office & Business Interior Solution',
                    date: '26 December, 2022'
                },
                {
                    image: require('../assets/content_photo4.png'),
                    title: 'Kitchan Design',
                    subtitle: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022'
                },
                {
                    image: require('../assets/content_photo5.png'),
                    title: 'Living Design',
                    subtitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '26 December, 2022'
                },
                {
                    image: require('../assets/content_photo6.png'),
                    title: 'Interior Design',
                    subtitle: 'Best For Any Office & Business Interior Solution',
                    date: '26 December, 2022'
                }

            ]
        }
    },

    methods: {

    }
}
</script>
  
<style lang="scss" scoped>
@import "/src/stylesheets/_vars.scss";
@import "/src/stylesheets/style.scss";

// заголовок страницы
.page_heading {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
    background-size: cover;
    height: 356px;
    background-image: url('../assets/blog-photo.png');

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

.post {
    margin-bottom: 150px;

    &__heading {
        color: $tittleColor;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;

        margin-bottom: 27px;
    }

    .post__item {
        display: flex;
        padding: 40px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 67px;

        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

        .item__img {
            border-radius: 62px;
        }

        .item__content {
            width: 489px;
            padding: 22px;

            &-tittle {
                color: $tittleColor;
                font-family: DM Serif Display;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                /* 31.25px */
                letter-spacing: 0.5px;
                margin-bottom: 22px;
            }

            &-text {
                color: $textColor;
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                /* 33px */
                letter-spacing: 0.22px;

                margin-bottom: 40px;
            }
        }
    }
}

.blog {
    display: flex;
    flex-direction: column;
    margin-bottom: 96px;

    .blog__news {
        align-items: self-start;
        margin-bottom: 30px;
    }

    &__heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        margin-bottom: 52px;

        &-tittle {
            color: $tittleColor;

            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 62.5px */
            letter-spacing: 1px;
        }

        &-text {
            color: $textColor;
            text-align: center;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
            width: 780px;
        }
    }

    .blog__content {
        display: flex;
        flex-direction: row;
        gap: 27px;
        flex-wrap: wrap;
        justify-content: center;

        .content__item {
            display: flex;
            flex-direction: column;
            display: inline-flex;
            padding: 21px;
            align-items: flex-start;
            gap: 10px;
            width: 380px;
            transition: all 0.3s;
            border-radius: 62px;
            border: 1px solid #E7E7E7;
            box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

            &:hover {
                border-radius: 62px;
                border: 1px solid #E7E7E7;
                background: #F4F0EC;
                box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
            }

            &:hover .content__link-svg circle {
                fill: $colorSiteSelect;
            }

            &:hover .content__link-svg path {
                stroke: #FFF;
            }

            .item__top {
                margin-bottom: 21px;
                background-repeat: no-repeat;
                display: flex;
                align-items: flex-end;
                padding-bottom: 28px;
                padding-left: 24px;
                height: 290px;
                width: 340px;
                transition: all 0.3s;

                .content__img-link {
                    padding: 4px 11px 8px 5px;
                    color: $textColor;
                    font-family: Jost;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    /* 24px */
                    letter-spacing: 0.16px;
                    text-transform: capitalize;
                    border-radius: 8px 8px 8px 0px;
                    background: #FFF;
                    transition: all 0.5s;

                    &:hover {
                        scale: 1.1;
                        color: #FFF;
                        background-color: $colorSiteSelect;
                    }
                }
            }

            .item__bottom {
                display: flex;
                flex-direction: column;
                gap: 30px;

                .contnet__tittle {
                    color: $tittleColor;
                    font-family: DM Serif Display;
                    font-size: 25px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                    /* 31.25px */
                    letter-spacing: 0.5px;
                    width: 300px;
                }
            }
        }

    }
}
</style>
  