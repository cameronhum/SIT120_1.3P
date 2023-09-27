<template>
    <div>
        <h1 class="title">Past Projects</h1>
        <label class='filter'>Filter:</label>
        <input  v-model="filterText" placeholder="Search..." />
        <div class="card-list">
            <CardComponent v-for="(card, index) in filteredCards"
                           :key="index"
                           :title="card.title"
                           :github="card.github"
                           :image="card.image"
                           :desc="card.desc"/>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                cards: [
                    {
                        title: 'Basic webpage',
                        github: 'https://github.com/cameronhum/SIT120',
                        image: 'src/assets/card1img.png',
                        desc: 'This is a demonstration of my ability to use html and css to create a webpage',
                    },
                    {
                        title: 'Responsive webpage',
                        github: 'https://github.com/cameronhum/SIT120_1.2P/tree/main/1',
                        image: 'src/assets/card2img.png',
                        desc: 'This demonstrates my ability in html and css to make a website viewable by many different types of devices',
                    },
                    {
                        title: 'Javascript functions',
                        github: 'https://github.com/cameronhum/SIT120_1.2P/tree/main/2',
                        image: 'src/assets/card3img.png',
                        desc: 'This demonstrates my JS knowledge and how it can be applied to certain functions',
                    },
                ],
                filterText: '',
            };
        },
        computed: {
            filteredCards() {
                const searchText = this.filterText.toLowerCase();

                if (!searchText) {
                    return this.cards;
                }

                return this.cards.filter((card) =>
                    card.title.toLowerCase().includes(searchText)
                );
            },
        },
        
    };
</script>

<style>
   
</style>
