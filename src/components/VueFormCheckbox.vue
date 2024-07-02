<template>
    <div>
        <div class="vue-form-checkbox">
            <form class="vue-form-checkbox--table-box">
                <h2>{{ prompt }}</h2>
                <div v-for="heading in this.headings" :key="heading">
                    <table-box-row @emit-row="handleRow" :column-names="columnNames" :row-names="rowNames" :heading="heading"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import TableBoxRow from './TableBoxRow.vue'

    export default{
        name: 'vue-form-checkbox',
        components: {
            TableBoxRow
        },
        props: {
        columnNames: Array,
        rowNames: Array,
        prompt: String, 
        headings: Array,
        subsections: Array, 
        checkBoxTags: Array
        }, 
        data() {
            return{
                tableName: this.prompt,
                tableData: {
                    rows: null
                }
                
            }
        }, 
        watch: {
        //     'data.rows': {
        //         handler(value) {
        //             this.$emit('data-change', value)
        //             //console.log(value)
        //         }, 
        //         deep: true
        //     } 
             },
        methods: {


            handleRow(rowObj) {
                this.makeRowData()
                let headingName = rowObj.head
                this.tableData.rows[headingName] = rowObj.rowVals
                this.$emit('emit-table-data', this.$data)
            },

            makeRowData() {
                if(!this.tableData.rows) {
                    this.headings.forEach(() => {
                        this.tableData.rows = {}

                    })
                }
            }
        }
    } 
</script>

<style lang="scss">
.vue-form-checkbox{
    
    &--checkbox {
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
        font-size: smaller;
        display: flex;
        flex-grow: 2; 
        width: 70px;
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

