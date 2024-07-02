<template>
    <div>
        <div class="vue-form-checkbox--subsection"></div>
        <div v-for="sub in subsections" :key="sub" class="vue-form-checkbox--subsection"> {{ sub }}</div>
    </div>
</template>

<script>
    export default {
        name: 'check-box-subsection', 
        props: {
            subsections: Array
        }
    }
</script>