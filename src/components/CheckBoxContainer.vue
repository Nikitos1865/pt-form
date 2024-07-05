<template>
  <div>
    <div v-if="type == 'subsection'">
      <check-box-subsection :subsections="rowNames" />
    </div>
    <div v-if="type == 'boxes'">
      <check-box-subcontainer
        :type="'column-names'"
        :column-names="$parent.columnNames"
      />
      <check-box-subcontainer
        v-for="rowName in rowNames"
        :key="rowName"
        @selectionMade="handleSelection"
        :type="'buttons'"
        :column-names="$parent.columnNames"
        :row-name="rowName"
      />
    </div>
  </div>
</template>

<script>
import CheckBoxSubcontainer from "./CheckBoxSubcontainer.vue";
import CheckBoxSubsection from "./CheckBoxSubsection.vue";

export default {
  name: "check-box-container",
  components: {
    CheckBoxSubcontainer,
    CheckBoxSubsection,
  },
  props: {
    type: String,
    columnNames: Array,
    rowNames: Array,
  },
  watch: {
    data: function (value) {
      console.log(value);
    },
  },
  methods: {
    handleSelection(sel) {
      this.makeDataHolders();
      let rowName = sel.objRowName;
      this.dataHolders[rowName] = sel.objSelection;
      // console.log(this.dataHolders)
      this.$emit("set-row-values", this.dataHolders);
    },

    makeDataHolders() {
      if (!this.dataHolders) {
        this.dataHolders = {};
        this.rowNames.forEach((rowName) => {
          this.dataHolders[rowName] = "";
        });
      }
    },

    // setDataHolders(entry) {

    // }
  },
  mounted() {
    console.log(this.data);
  },
};
</script>
