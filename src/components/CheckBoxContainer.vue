<template>
    <div>
        <div v-if="type =='subsection'">
            <check-box-subsection :subsections="rowNames" />
        </div>
        <div v-if="type =='boxes'">  
            <check-box-subcontainer :type="'column-names'" :column-names="$parent.columnNames" /> 
            <check-box-subcontainer v-for="rowName in rowNames" :key="rowName" @selectionMade="handleSelection" :type="'buttons'" :column-names="$parent.columnNames" :row-name="rowName"/>
            <!-- <div class="vue-form-checkbox--checkbox-subcontainer">
                <div class="vue-form-checkbox--checkbox-tags">Ind</div>
                <div class="vue-form-checkbox--checkbox-tags">Sup</div>
                <div class="vue-form-checkbox--checkbox-tags">SBA</div>
                <div class="vue-form-checkbox--checkbox-tags">CGA</div>
                <div class="vue-form-checkbox--checkbox-tags">Min</div>
                <div class="vue-form-checkbox--checkbox-tags">Mod</div>
                <div class="vue-form-checkbox--checkbox-tags">Max</div>
            </div> -->
            <!-- <div class="vue-form-checkbox--checkbox-subcontainer">
                <input class="vue-form-checkbox--checkbox" type="radio" name='goal' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='goal' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='goal' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='goal' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='goal' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='goal' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='goal' id="blah">
            </div> -->
            <!-- <div class="vue-form-checkbox--checkbox-subcontainer">
                <input class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah">
                <input class="vue-form-checkbox--checkbox" type="radio" name='clof' id="blah">
            </div> -->
        </div>

    </div>
    
</template>

<script>
import CheckBoxSubcontainer from './CheckBoxSubcontainer.vue'
    import CheckBoxSubsection from './CheckBoxSubsection.vue'

    export default {
        name: 'check-box-container',
        components: {
            CheckBoxSubcontainer, 
            CheckBoxSubsection
        },
        props: {
            type: String,
            columnNames: Array, 
            rowNames: Array
        }, 
        data() {
            return{
                dataHolders: null
            }
        },
        methods: {
            handleSelection(sel) {
                this.makeDataHolders()
                let rowName = sel.objRowName
                this.dataHolders[rowName] = sel.objSelection
                // console.log(this.dataHolders)
                this.$emit('set-row-values', this.dataHolders)
            }, 

            makeDataHolders() {
                if (!this.dataHolders) {
                        this.dataHolders = {}
                        this.rowNames.forEach(rowName => {
                        this.dataHolders[rowName] = ''
                    })
                 }
            }, 

            // setDataHolders(entry) {

            // }
        }

    }
</script>