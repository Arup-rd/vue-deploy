<template>
  <a-form-item v-bind="formItemLayout" :label="item.label">
    <a-select
      mode="multiple"
      style="width: 100%"
      placeholder="Please select"
      v-decorator="[
        `${item.label}`,
        {
          rules: [
            {
              required: item.required,
              message: `${item.validation_message}`,
            },
          ],
        },
      ]"
    >
      <a-select-option
        :value="select"
        v-for="(select, index) in Object.values(item.options)[0]"
        :key="index"
      >
        {{ select }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>
export default {
  name: "multi-select-component",
  props: ["item"],
  data() {
    return {
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
    };
  },
};
</script>
<style></style>
