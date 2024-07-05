<template>
  <div>
    <div
      v-if="type == 'column-names'"
      class="vue-form-checkbox--checkbox-subcontainer"
    >
      <div
        v-for="columnName in this.columnNames"
        :key="columnName"
        class="vue-form-checkbox--checkbox-tags"
      >
        {{ columnName }}
      </div>
    </div>

    <div
      v-if="type == 'buttons'"
      class="vue-form-checkbox--checkbox-subcontainer"
    >
      <input
        v-for="columnName in this.columnNames"
        :key="columnName"
        :value="columnName"
        class="vue-form-checkbox--checkbox"
        type="radio"
        :name="returnButtonName"
        v-model="data[returnButtonName]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "check-box-subcontainer",
  props: {
    columnNames: Array,
    type: String,
    count: Number,
    rowName: String,
  },
  inject: ["data"],
  data() {
    return {
      instance: {
        inputChoice: null,
      },
    };
  },
  computed: {
    returnNumberArray() {
      return Array.from({ length: this.count }, (_, i) => i + 1);
    },

    returnButtonName() {
      let heading = this.$parent.$parent.heading;
      let rowName = this.rowName;
      return heading + rowName;
    },
  },
  watch: {
    "instance.inputChoice"(selection) {
      const selObj = {
        objRowName: this.rowName,
        objSelection: selection,
      };

      //console.log(this.rowName+": "+selection)
      this.$emit("selectionMade", selObj);
      //console.log(this.data.inputChoice)
    },
    "instance.Groomingclof": function () {
      // this.$.data = value;
    },
  },
  methods: {
    getButtonName() {
      let x = this.returnButtonName;
      console.log(x);
    },

    createDataObject() {
      let newObj = {};
      this.columnNames.forEach((columnName) => {
        newObj[columnName] = "";
      });
      return newObj;
    },
  },
  mounted() {
    // const key = this.returnButtonName;
    // console.log(this.data);
    // if (this.dataa !== undefined) {
    //   this.$set(this.instance, key, this.dataa[key]);
    // } else {
    //   this.$set(this.instance, key, null);
    // }
  },
};
</script>
