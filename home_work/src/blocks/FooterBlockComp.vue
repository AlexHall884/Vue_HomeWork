<template>
    <div>
        <footer class="footer center">
            <div class="footer__link">
                <div class="link__heading">
                    <a href="index.html" class="heading__logo">
                        <svg class="heading__logo-img" xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                            viewBox="0 0 34 34" fill="none">
                            <path
                                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                                fill="#CDA274" />
                        </svg>
                        Interno
                    </a>
                </div>
                <p class="link__text">It is a long established fact that a
                    reader will be distracted lookings.</p>
                <div class="media">
                    <a href="#" class="media__link"><img src="../assets/twitter.svg" alt="logo"></a>
                    <a href="#" class="media__link"><img src="../assets/in.svg" alt="logo"></a>
                </div>
            </div>
            <div class="footer__pages">
                <h3 class="pages__tittle">Pages</h3>
                <div class="pages__menubar">
                    <a href="#" class="pages__menubar-item">Home</a>
                    <a href="#" class="pages__menubar-item">Projects</a>
                    <a href="#" class="pages__menubar-item">Blog</a>
                </div>
            </div>
            <div class="footer__contact">
                <h3 class="contact__tittle">Contact</h3>
                <p class="contact__item">55 East Birchwood Ave. Brooklyn, New
                    York 11201</p>
                <p class="contact__item">contact@interno.com</p>
                <p class="contact__item">(123) 456 - 7890</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'FooterBlockComp',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/_vars.scss";
@import "/src/stylesheets/style.scss";

.footer {
    margin-bottom: 134px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 101px;

    .footer__link {
        display: flex;
        flex-direction: column;

        .heading__logo {
            color: $tittleColor;
            font-family: DM Serif Display;
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            margin-bottom: 18px;

            &:hover {
                color: $colorSiteSelect;
            }

            &-img:hover {
                scale: 1.1;
            }


        }

        .link__text {
            color: $textColor;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
            width: 360px;
            margin-bottom: 31px;
        }

        .media {
            display: flex;
            flex-direction: row;
            gap: 54px;

            &__link:hover {
                scale: 1.5;
            }
        }
    }

    .footer__pages {
        display: flex;
        flex-direction: column;
        gap: 9px;

        .pages__tittle {
            color: $tittleColor;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
        }

        .pages__menubar {
            display: flex;
            flex-direction: column;
        }

        .pages__menubar-item {
            color: $textColor;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 300%;
            /* 66px */
            letter-spacing: 0.22px;
            transition: all 0.3s;

            &:hover {
                scale: 1.1;
                color: $colorSiteSelect;
            }
        }

    }

    .footer__contact {
        display: flex;
        flex-direction: column;

        .contact__tittle {
            color: $tittleColor;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
            margin-bottom: 26px;
        }

        .contact__item {
            color: $textColor;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
            width: 258px;
            padding-bottom: 48px;
        }
    }
}
</style>