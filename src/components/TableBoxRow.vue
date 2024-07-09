<template>
  <div class="vue-form-checkbox--table-box-row">
    <div class="vue-form-checkbox--row-title">{{ heading }}</div>
    <check-box-container
      :column-names="columnNames"
      :type="'subsection'"
      :count="1"
      :row-names="rowNames"
    ></check-box-container>
    <check-box-container
      @set-row-values="handleRowValues"
      :row-names="rowNames"
      :type="'boxes'"
      :count="1"
    ></check-box-container>
  </div>
</template>

<script>
import CheckBoxContainer from "./CheckBoxContainer.vue";
export default {
  components: {
    CheckBoxContainer,
  },
  name: "table-box-row",
  props: {
    columnNames: Array,
    rowNames: Array,
    heading: String,
    checkboxTags: Array,
    data: Object,
  },
  methods: {
    handleRowValues(rowValues) {
      const rowValObj = {
        head: this.heading,
        rowVals: rowValues,
      };
      this.$emit("emit-row", rowValObj);
    },
  },
};
</script>
