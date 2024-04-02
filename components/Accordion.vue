<template>
    <div class="accordion-container">
        <div v-for="(item, index) in list" :key="index">
            <button @click="toggle(item)" class="accordion-title">
                <span class="accordion-headline">{{ item.title }}</span>
                <svg v-if="!item.open" class="icon" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#0000FF" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/></svg>
                <svg v-if="item.open" class="icon" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#0000FF" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></svg>
            </button>
            <div :class="{ hidden: !item.open }">
                <div class="accordion-details">
                    <p>{{ item.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        Array
    }
})

const list = ref(
    props.items.map((item) => {
        return { ...item, open: false }
    })
);

function toggle(item) {
    item.open = !item.open;
}

</script>

<style scoped>
.accordion-container{
    margin: 6rem 0 4rem;
}
button {
    background-color: var(--gray);
    border: none;
    border-bottom: 1px solid var(--black);
    color: var(--black);
    display: flex;
    justify-content: space-between;
    line-height: 1;
    padding: 0.5rem 0;
    width: 100%;
    text-align: left;
    font-weight: 700;
}
button:hover{
    cursor: pointer;
}
.hidden {
    display: none;
}

.accordion-title {
    margin: 1.25em 0;
}
.accordion-headline{
    display: inline;
}

/* .accordion-details {
    margin-left: 1.8rem;
} */
</style>