<template>
    <div>
        <div v-if="type=='column-names'" class="vue-form-checkbox--checkbox-subcontainer">
                <div v-for="columnName in this.columnNames" :key="columnName" class="vue-form-checkbox--checkbox-tags"> {{ columnName}}</div>
        </div>
        
        <div v-if="type=='buttons'" class="vue-form-checkbox--checkbox-subcontainer">
            <input v-for="columnName in this.columnNames" :key="columnName" :value="columnName" class="vue-form-checkbox--checkbox" type="radio" :name='returnButtonName' v-model="data.inputChoice">
        </div>
    </div>
            <!-- <input class="vue-form-checkbox--checkbox" type="radio" name='goal' id="blah"> -->
        <!-- </div>
            <div v-for="number in returnNumberArray" :key="number" class="vue-form-checkbox--checkbox-subcontainer">
                <input v-for="number in returnNumberArray" :key="number" class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah">
            </div>
    
        <div v-if="type=='buttons'" class="vue-form-checkbox--checkbox-subcontainer">
            <div v-for="num in returnNumberArray()" :key="num">
                <div class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah"></div>
            </div>
        </div> 
    </div> -->
</template>

<script>
    export default {
        name: 'check-box-subcontainer',
        props: {
            columnNames: Array,
            type: String, 
            count: Number,
            rowName: String
            
        },
        data() {
            return {
                data: {
                    inputChoice: null
                }
            }
        },
        computed: {
            returnNumberArray() {
                return Array.from({length: this.count}, (_,i) => i+1);
            },

            returnButtonName() {
                let heading = this.$parent.$parent.heading;
                let rowName = this.rowName;
                return heading+rowName
            }
        },
        watch: {
            'data.inputChoice'(selection) {

                const selObj = {
                    objRowName: this.rowName, 
                    objSelection: selection
                }

                //console.log(this.rowName+": "+selection)
                this.$emit('selectionMade', selObj)
                //console.log(this.data.inputChoice)
            }
        },
        methods: {
            getButtonName() {
                let x = this.returnButtonName
                console.log(x)
            },

            createDataObject() {
                let newObj = {};
                this.columnNames.forEach(columnName => {
                    newObj[columnName] = ''
                })
                return newObj
            }
            
        }

    }

</script>

<style>
.vue-form-checkbox{
    
    &--input-checkbox {
        height: 20px;
        width: 20px;
        margin-left: 20px; 
        margin-right: 20px; 
    
    }
    &--table-container {
        display: flex; 
        flex-direction: row;
        margin: 40px;
    }
    
    &--table-box {
        display: flex;
        flex-direction: column;
        width: 600px; 
        padding: 44px;
        background-color: rgb(240, 240, 240);
        margin: 20px; 
    }
    
    
    &--table-box-row{
        flex-grow: 1;
        display: flex;
        border: 1px;
        border-color: grey;
        border-style: solid;
    }
    
    &--row-title {
        display: flex;
        flex-grow: 2; 
        min-width: 70px;
        border: 1px; 
        border-color: lightgray;
        border-style: solid;
        align-items: center;   
        justify-content: center;  
    }
    
    &--clof-goal {
        flex-direction: column;
        display: flex;
        flex-grow: 1;  
        border: 1px; 
        border-color: grey; 
        border-style: none;
    }
    
    &--subsection {
        min-height: 24.5px; 
        min-width: 40px;
        display: flex; 
        flex-grow: 1; 
        border: 1px; 
        border-color: gray; 
        border-style: solid;
        align-items: center;   
        justify-content: center; 
    }
    
    &--checkbox-container {
        flex-direction: column;
        display: flex; 
        flex-grow: 7; 
        border: 1px; 
        border-color: grey; 
        border-style: none;
    }
    
    &--checkbox-subcontainer {   
        flex-grow: 1; 
        display: flex;
        height:24.5px; 
        width: 100%; 
        justify-content: space-evenly;
        border: 1px; 
        border-color: grey; 
        border-style: solid;
    }
    
    &--checkbox-tags {
        display: flex; 
        flex-grow: 1;
        width: 20px;
        align-items: center;
        justify-content: space-evenly;
        padding-top: 3.5px; 
        padding-bottom: 2px;
    }
    
    
}
</style>