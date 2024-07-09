<template>
    <div>
        <span class="functional-activities--subtitle"> {{ prompt }}</span>
        <form class="functional-activities--inputs">
            <label>
                <input type="radio" :name="prompt" :value="'Safe'" v-model="data[model.safeUnsafe]"> Safe
            </label>
            <label>
                <input type="radio" :name="prompt" :value="'Unsafe'" v-model="data[model.safeUnsafe]"> Unsafe
            </label>
            <div class="functional-activities--text-input">
                <label for="device used">device used</label><br>   
                <input type="text" id="device used" v-model="data[model.deviceUsed]">
            </div>
            
        </form>
    </div>
</template>

<script>
    export default {
        name: 'activity-box', 
        props: {
            prompt: String,
            model: {
                safeUnsafe: String, 
                deviceUsed: String
            },
        }, 
        inject: ["data"],
        watch: {
        }
    }
</script>

