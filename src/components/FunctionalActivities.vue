<template>
    <div class="functional-activities__container">
        <h2 class="functional-activities--header">Container Title</h2>
        <activity-box :model="{safeUnsafe: 'OPEN_DOOR_SAFE_UNSAFE', deviceUsed:'OPEN_DOOR_DEVICE_USED' }" prompt="Open door" class="functional-activities--activity-box"></activity-box>
        <activity-box prompt="Lift objects" class="functional-activities--activity-box"></activity-box>
        <activity-box prompt="Up/down Step" class="functional-activities--activity-box"></activity-box>
        <activity-box prompt="Carry objects" class="functional-activities--activity-box"></activity-box>
    </div>
</template>

<script>
    import ActivityBox from './ActivityBox.vue'


    export default {
        name: 'functional-activities',
        components: {
            ActivityBox
        },
        data() {
            return {
                data: {
                    'OPEN_DOOR_SAFE_UNSAFE': 'Safe',
                    'OPEN_DOOR_DEVICE_USED': "auto-populated device"
                }
            }
        }, 
        provide() {
            return {
                data: this.data,
            };
        },
    }
</script>

<style lang="scss">
    .functional-activities{
        &__container {
            display: flex; 
            flex-wrap: wrap;
            width: 50%; 
            height: 200px; 
        &--active {
            border-style: solid; 
            border-color: black; 
        }
        }

        &--header{
            width: 100%;
            height: 15%;
            margin-block-start: 0.0em;
            margin-block-end: 0.0em;
        }

        &--activity-box {
            display: flex;
            flex-wrap: wrap;
            width: 49.5%; 
            height: 41%; 
            border-style: solid;
            border-color: lightgrey; 
        }

        &--subtitle {
            width: 100%; 
        }

        &--inputs {
            display: flex;
            width: 100%; 
        }

        &--text-input{
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
            margin-top: -8px; 
            width: 50%;
        }
    
    }   


    label {
        margin-top: 10px;

    }

</style>