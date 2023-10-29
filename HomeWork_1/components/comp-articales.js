Vue.component('comp-articales', {
    template: `
    <article id="app" class="articles">
            <div class="articles__left">
                <article class="article">
                    <h3 class="article__heading">Let’s Get Solution for
                        Building
                        Construction Work
                    </h3>
                    <img class="article__img"
                        src="/HomeWork_1/img/content_photo7.png" alt="photo">

                    <div class="article__date">
                        <p class="article__date-text">26 December,2022 </p>
                        <div class="breadcrumb">
                            <a class="breadcrumb-link" href="#"
                                style="font-size: 16px;">Interior</a>
                            <a class="breadcrumb-link" href="#"
                                style="font-size: 16px;">Home</a>
                            <a class="breadcrumb-link" href="#"
                                style="font-size: 16px;">Decore</a>
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
                    <img class="quotes-svg" src="/HomeWork_1/img/“.svg"
                        alt="logo">
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

                    <img class="article__img"
                        src="/HomeWork_1/img/content_photo8.png" alt="photo">
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
    `,
    data() {
        return {
            selectedTag: "",
            tags: ["Kitchen", "Bedroom", "Building", "Architecture", "Kitchen Planning"],
            articles: [
                {
                    id: 1,
                    title: "Let’s Get Solution for Building Construction Work",
                    image: "/HomeWork_1/img/content_photo7.png",
                    description: "Kitchen Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: "Kitchen"
                },
                {
                    id: 2,
                    title: "Design sprints are great",
                    image: "/HomeWork_1/img/content_photo6.png",
                    description: "Architecture Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    tags: "Architecture"
                },
                {
                    id: 3,
                    title: "Low Cost Latest Invented Interior Designing Ideas",
                    image: "/HomeWork_1/img/content_photo5.png",
                    image: "/HomeWork_1/img/post_photo.png",
                    description: "Kitchen planning Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
                    tags: "Kitchen planning"
                },
                {
                    id: 4,
                    title: "Let’s Get Solution for Building Construction Work",
                    image: "/HomeWork_1/img/content_photo5.png",
                    description: "Building ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: "Building"
                },
                {
                    id: 5,
                    title: "Let’s Get Solution for Building Construction Work",
                    image: "/HomeWork_1/img/content_photo4.png",
                    description: "Architecture ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: "Architecture"
                },
                {
                    id: 6,
                    title: "Let’s Get Solution for Building Construction Work",
                    image: "/HomeWork_1/img/content_photo3.png",
                    description: "Bedroom ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: "Bedroom"
                },
                {
                    id: 7,
                    title: "Let’s Get Solution for Building Construction Work",
                    image: "/HomeWork_1/img/content_photo2.png",
                    description: "Kitchen Planning ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: "Kitchen Planning"
                },
            ],
        };
    },
    computed: {
        filteredArticles() {
            if (this.selectedTag === '') {
                return this.articles; // Если тег не выбран, вернуть все статьи
            } else {
                return this.articles.filter(article => article.tags.includes(this.selectedTag));
                // Вернуть статьи, которые содержат выбранный тег
            }
        }
    },
    methods: {
        selectTag(tag) {
            this.selectedTag = tag;
        }
    }
});

