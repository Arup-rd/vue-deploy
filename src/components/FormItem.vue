<template>
  <div id="app">
    <a-form :form="form" @submit="handleSubmit">
      <div v-bind="formItemLayout" v-for="(item, index) in fields" :key="index">
        <h2 v-if="item.type == 'info_html'" v-html="item.content"></h2>

        <email-component v-else-if="item.type == 'email'" :item="item">
        </email-component>
        <text-component v-else-if="item.type == 'text'" :item="item">
        </text-component>
        <multi-select-component
          v-else-if="item.type == 'multi-select'"
          :item="item"
        >
        </multi-select-component>
        <radio-component v-else-if="item.type == 'radio'" :item="item">
        </radio-component>
        <select-component v-else-if="item.type == 'select'" :item="item">
        </select-component>
      </div>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
    <a-table
      v-if="showTable"
      :data-source="tableData"
      :pagination="status"
      class="formTable"
    >
      <a-table-column-group>
        <span slot="title" style="color: #1890ff">User Information</span>
        <a-table-column
          v-for="(item, index) in Object.keys(tableData[0])"
          :key="index"
          :data-index="item"
          rowKey="table-1"
        >
          <span slot="title" style="color: #1890ff">{{ item }}</span>
        </a-table-column>
      </a-table-column-group>
    </a-table>
  </div>
</template>

<script>
import { Data } from "../formData/formData";
import TextComponent from "./TextComponent";
import EmailComponent from "./EmailComponent";
import SelectComponent from "./SelectComponent";
import RadioComponent from "./RadioComponent";
import MultiSelectComponent from "./MultiSelectComponent";

export default {
  name: "render-component",
  data() {
    return {
      status: false,
      fields: Data.fields,
      tableData: [],
      showTable: false,

      columns: {},

      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },

  components: {
    TextComponent,
    EmailComponent,
    SelectComponent,
    RadioComponent,
    MultiSelectComponent,
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        console.log(values);
        if (!err) {
          console.log("Received values of form: ", values);
          this.tableData.push(values);
          this.showTable = true;
          this.form.resetFields();
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-right: 30%;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.formTable {
  margin-left: 30%;
  margin-top: 50px;
  margin-bottom: 100px;
  border: 1px solid #bec2bf;
}
</style>
