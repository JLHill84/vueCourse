export const fruitMixin = {
    data() {
        return {
            fruits: ["apple", "bonanza", "tango", "gourd"],
            filterText: "",
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        },
    },
}