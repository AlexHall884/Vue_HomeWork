<template>
    <div class="container center">
        <div class="container__left">
            <h1 class="container__left-tittle">404</h1>
            <p class="container__left-text">We are sorry, but the page
                you requested was not found
            </p>
            <router-link to="/home">
                <button class="container__left-btn">Back To Home<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg"
                        width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg></button>
            </router-link>
        </div>
        <div class="container__right">
            <img class="container__right-img" src="../assets/not_found.png" alt="photo">
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',

    data() {
        return {

        }
    },

    mounted() {

    },

    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/_vars.scss";
@import "/src/stylesheets/style.scss";

.container {
    display: flex;
    flex-direction: row;
    gap: 81px;
    margin-bottom: 100px;

    &__left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &-tittle {
            color: $colorSiteSelect;
            font-family: DM Serif Display;
            font-size: 250px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 312.5px */
            margin-bottom: 15px;
        }

        &-text {
            color: $tittleColor;
            font-family: DM Serif Display;
            font-size: 35px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 52.5px */
            letter-spacing: 0.35px;
            margin-bottom: 23px;
        }

        &-btn {
            display: flex;
            padding: 26px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 18px;
            background: $tittleColor;
            box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
            width: 220px;
            cursor: pointer;
            transition: all 0.3s;
            color: #FFF;
            text-align: center;
            font-family: Jost;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
            /* 22.5px */
            letter-spacing: 0.36px;
            transition: all 0.3s;

            &:hover {
                scale: 1.1;
                color: $tittleColor;
                background: #FFF;
                border: 2px solid $tittleColor;
            }
        }
    }

    &__right {

        &-img {
            background: lightgray 50% / cover no-repeat;
            border-bottom-left-radius: 250px;
        }
    }

}
</style>
