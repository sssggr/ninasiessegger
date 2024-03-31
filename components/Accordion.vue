<template>
    <div>
        <div v-for="(item, index) in list" :key="index">
            <button @click="toggle(item)" class="accordion-title">
                <svg v-if="!item.open" class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0000FF" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/></svg>
                <svg v-if="item.open" class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#0000FF" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></svg>
                <span>{{ item.title }}</span>
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
button {
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    text-align: left;
}

.hidden {
    display: none;
}

.accordion-title {
    margin-bottom: 1rem;
}

.accordion-details {
    margin-left: 1.8rem;
}
</style>