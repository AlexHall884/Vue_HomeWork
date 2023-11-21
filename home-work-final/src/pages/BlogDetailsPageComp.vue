<template>
    <div>
        <div class="page_heading">
        </div>
        <article class="articles center">
            <div class="articles__left">
                <article class="article">
                    <h3 class="article__heading">Let’s Get Solution for
                        Building
                        Construction Work
                    </h3>
                    <img class="article__img" src="../assets/content_photo7.png" alt="photo">

                    <div class="article__date">
                        <p class="article__date-text">26 December,2022 </p>
                        <div class="breadcrumb">
                            <a class="breadcrumb-link" href="#" style="font-size: 16px;">Interior</a>
                            <a class="breadcrumb-link" href="#" style="font-size: 16px;">Home</a>
                            <a class="breadcrumb-link" href="#" style="font-size: 16px;">Decore</a>
                        </div>
                    </div>
                    <p class="article__text">Lorem ipsum dolor sit amet,
                        adipiscing Aliquam eu sem vitae turpmaximus.posuere
                        in.Contrary to popular belief.There are many variations
                        of
                        passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injecthumour, or
                        randomised words which don't look even slightly
                        believable.
                        <br><br>
                        Embarrassing hidden in the middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat
                        predefined
                        chunks as necessary.
                    </p>
                </article>
                <div class="quotes">
                    <img class="quotes-svg" src="../assets/“.svg" alt="logo">
                    <p class="quotes-text">The details are not the details.
                        They make the design.
                    </p>
                </div>
                <article class="articale">
                    <h3 class="article__heading">Design sprints are great
                    </h3>
                    <p class="article__text">Lorem ipsum dolor sit amet,
                        adipiscing Aliquam eu sem vitae turpmaximus.posuere
                        in.Contrary
                        to popular belief.There are many variations of passages
                        of
                        Lorem
                        Ipsum available, but the majority have suffered.
                    </p>
                    <div v-if="selectedTag !== ''">
                        <ol class="articles__left-list">
                            <li class="list__item" v-for="article in filteredArticles" :key="article.id">
                                <p><span class="list__item-span">{{ article.description }}</span></p>
                            </li>
                        </ol>
                    </div>

                    <img class="article__img" src="../assets/content_photo8.png" alt="photo">
                    <p class="article__text">Lorem ipsum dolor sit amet,
                        adipiscing Aliquam eu sem vitae turpmaximus.posuere
                        in.Contrary to popular belief.There are many variations
                        of
                        passages of Lorem Ipsum available, but the majority have
                        suffered.
                    </p>
                </article>
            </div>
            <div class="articles__right">
                <div class="tags">
                    <h3 class="tags__heading">Tags</h3>
                    <div class="tags__content">
                        <button class="tags__content-btn" v-for="tag in tags" :key="tag" @click="selectTag(tag)">
                            {{ tag }}
                        </button>
                    </div>
                </div>
            </div>
        </article>

    </div>
</template>
  
<script>
  
  export default {
    name: 'BlogDetailsPageComp',
  
    data () {
      return {
        selectedTag: '',
        tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
        articles: [
          {
            id: 1,
            title: 'Let’s Get Solution for Building Construction Work',
            description: "Kitchen Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: 'Kitchen'
          },
          {
            id: 2,
            title: 'Design sprints are great',
            description: 'Architecture Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            tags: 'Architecture'
          },
          {
            id: 3,
            title: 'Low Cost Latest Invented Interior Designing Ideas',
            description: 'Kitchen planning Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
            tags: 'Kitchen planning'
          },
          {
            id: 4,
            title: 'Let’s Get Solution for Building Construction Work',
            description: "Building ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: 'Building'
          },
          {
            id: 5,
            title: 'Let’s Get Solution for Building Construction Work',
            description: "Architecture ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: 'Architecture'
          },
          {
            id: 6,
            title: 'Let’s Get Solution for Building Construction Work',
            description: "Bedroom ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: 'Bedroom'
          },
          {
            id: 7,
            title: 'Let’s Get Solution for Building Construction Work',
            description: "Kitchen Planning ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: 'Kitchen Planning'
          }
        ]
      }
    },
    methods: {
      selectTag (tag) {
        this.selectedTag = tag
      }
    },
    computed: {
      filteredArticles () {
        if (this.selectedTag === '') {
          return this.articles // Если тег не выбран, вернуть все статьи
        } else {
          return this.articles.filter(article => article.tags.includes(this.selectedTag))
          // Вернуть статьи, которые содержат выбранный тег
        }
      }
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
    background-image: url('../assets/blog-details-photo.png');
}

.articles {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 52px;
    margin-bottom: 96px;

    &__left {
        width: 800px;

        .article {
            margin-bottom: 20px;

            &__heading {
                color: $tittleColor;
                font-family: DM Serif Display;
                font-size: 50px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                /* 62.5px */
                letter-spacing: 1px;
                margin-bottom: 21px;
            }

            &__img {
                margin-bottom: 46px;
                border-radius: 50px;
                width: 810px;
            }

            &__date {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 48px;

                &-text {
                    color: $textColor;
                    font-family: Jost;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    /* 24px */
                    letter-spacing: 0.16px;
                    text-transform: capitalize;
                }
            }

            &__text {
                color: $textColor;
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                /* 33px */
                letter-spacing: 0.22px;
                margin-bottom: 35px;
            }
        }

        .quotes {
            display: flex;
            padding: 53px 227px;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            border-radius: 50px;
            background: #F4F0EC;
            margin-bottom: 27px;

            &-text {
                color: $colorSiteSelect;
                text-align: center;
                font-family: DM Serif Display;
                font-size: 25px;
                font-style: italic;
                font-weight: 400;
                line-height: 125%;
                /* 31.25px */
            }
        }

        &-list {
            display: flex;
            flex-direction: column;
            gap: 34px;
            padding: 14px;
            margin-bottom: 44px;

            .list__item {
                color: $colorSiteSelect;
                font-family: DM Serif Display;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                /* 25px */
                letter-spacing: 0.4px;

                &-span {
                    color: $textColor;
                    font-family: Jost;
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    /* 33px */
                    letter-spacing: 0.22px;
                }
            }
        }

    }

    &__right {
        width: 345px;

        .tags {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;

            &__heading {
                color: $tittleColor;
                font-family: DM Serif Display;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                /* 31.25px */
                letter-spacing: 0.5px;
            }

            &__content {
                display: flex;
                width: 335px;
                flex-wrap: wrap;
                align-items: flex-start;
                gap: 11px;

                &-btn {
                    padding: 9px 30px;
                    border: none;
                    border-radius: 10px;
                    background: #F4F0EC;
                    color: $tittleColor;
                    text-align: center;
                    font-family: Jost;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                    /* 22.5px */
                    letter-spacing: 0.36px;
                    cursor: pointer;

                    &:hover {
                        background: $tittleColor;
                        color: #FFF;
                    }
                }
            }
        }
    }
}
</style>
  