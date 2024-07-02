<template>
    <div>
        <!-- @data-change="printData($event)" -->
        <vue-form-checkbox @emit-table-data="updateData" :column-names="['Ind', 'Sup', 'SBA', 'CGA', 'Min', 'Mod', 'Max']" :row-names="['clof', 'goal']" :prompt="'Self-Care'" :headings="['Grooming', 'Toileting', 'Bathing', 'Dressing UE', 'Dressing LE', 'Don/Doff Shoes Socks']"/>
        <vue-form-checkbox @emit-table-data="updateData" :column-names="['Ind', 'Sup', 'SBA', 'CGA', 'Min', 'Mod', 'Max']" :row-names="['clof', 'goal']" :prompt="'Transfers'" :headings="['In/Out Bed', 'Sit/Stand', 'Toilet', 'Chair', 'Floor', 'Shower', 'Car']"/>
        <vue-form-checkbox @emit-table-data="updateData" :column-names="['these', 'are', 'column', 'names']" :row-names="['modular', 'sections', 'here']" :prompt="'Modular Title'" :headings="['These', 'Sections', 'Are', 'Custom']"></vue-form-checkbox>
        <button @click="onSubmit()">Submit</button>
        <p></p>
    </div>
</template>


<script>
import VueFormCheckbox from "./VueFormCheckbox.vue"

export default {
    name: "table-parent",
    components: {
        VueFormCheckbox
    },
    data() {
        return{
            table:null,
            finalTable: null
        }
    },
    methods: {

        makeDataObject() {
            if(!this.table) {
                this.table = {}
            }
        },

        updateData(tableData) {
            this.makeDataObject(); 
            let tableObjectName = tableData.tableName
            this.table[tableObjectName] = tableData.tableData
            
        },

    
        printData(values) {
            console.log(values)
            this.rows.push(values)
            //Object.defineProperty(this.rows, "row", {value: values.row1})
        },

        onSubmit() {
           // this.rows.push(values)
            console.log(this.table)
        }
    }

    }
</script>
