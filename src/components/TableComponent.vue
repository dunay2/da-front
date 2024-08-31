<template>
    <div class="table-component">
    <h4>{{ table.name }}</h4>
    <ul>
        <li v-for="column in table.columns" :key="column.name">{{ column.name }}: {{ column.type }}</li>
    </ul>
    </div>
</template>

<script>
import "./../assets/css/TableComponent.css";
export default {
    name: 'TableComponent',
    props: {
    table: {
        type: Object,
        required: true
    }
    }
};
</script>
