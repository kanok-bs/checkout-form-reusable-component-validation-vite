<script setup lang="ts">
import {ref, defineProps, reactive} from "vue"
import useFormValidation from "../modules/useFormValidation";
const props = defineProps({
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
  name: {
    type: String,
  },
});
let input = ref("");
const { validateNameField, errors } = useFormValidation();
const validateInput = () => {
  validateNameField(props.name, input.value);
};
// console.log(validateNameField);
</script>

<template>
  <label for="exampleInputEmail1">{{props.label}}</label>
  <input
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    :placeholder=props.placeholder
    v-model="input"
    @keyup="validateInput"
    @blur="validateInput"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <small id="emailHelp" class="form-text text-muted"
    >We'll never share your {{$filters.strLower(props.placeholder)}} with anyone else.</small
  >
  <div class="ui basic label pointing red" >
     {{ errors[props.name] }}
    </div>
</template>
<style scoped></style>
