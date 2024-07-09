<template>
    <div>
        <span class="functional-activities--subtitle"> {{ prompt }}</span>
        <form class="functional-activities--inputs">
            <label>
                <input type="radio" :name=this.prompt :value="'Safe'" v-model="data[prompt]"> Safe
            </label>
            <label>
                <input type="radio" :name=this.prompt :value="'Unsafe'" v-model="data[prompt]"> Unsafe
            </label>
            <div class="functional-activities--text-input">
                <label for="device used">device used</label><br>   
                <input type="text" id="device used" v-model="data[prompt+'text']">
            </div>
            
        </form>
    </div>
</template>

<script>
    export default {
        name: 'activity-box', 
        props: {
            prompt: String,
        }, 
        inject: ["data"],
        watch: {
        }
    }
</script>

