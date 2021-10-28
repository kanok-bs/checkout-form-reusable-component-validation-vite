<script setup lang="ts">
import { reactive } from "vue";
import useFormValidation from "../modules/useFormValidation";
import useSubmitButtonState from "../modules/useSubmitButtonState";
let user = reactive({
  name: "",
  country:"",
  address:"",
  deliveryAddress:"",
  phone:"",
});
const signUpButtonPressed = () => {
  console.log(user);
};
  const { errors } = useFormValidation();
  const { isSignupButtonDisabled } = useSubmitButtonState(user, errors);
</script>
<template>
  <div class="container">
    <form @submit.prevent>
      <div class="alert alert-primary" role="alert">
          {{$filters.strUpper("Checkout from with resuable componet/Typescript/dynamic validation in vite")}}  
      </div>
      <div class="form-group">
        <TextField v-model="user.name" name="name" placeholder="FULL NAME" label="FULL NAME"></TextField>
      </div>
      <div class="form-group">
        <TextField v-model="user.country" name="country" placeholder="COUNTRY NAME" label="COUNTRY NAME"></TextField>
      </div>
      <div class="form-group">
        <TextField v-model="user.address" name="address" placeholder="CURRENT ADDRESS" label="CURRENT ADDRESS"></TextField>
      </div>
      <div class="form-group">
        <TextField v-model="user.deliveryAddress" name="Delivery Address" placeholder="DELIVERY ADDRESS" label="DELIVERY ADDRESS"></TextField>
      </div>
      <div class="form-group">
        <TextField v-model="user.phone" name="phone" placeholder="PHONE NUMBER" label="PHONE NUMBER"></TextField>
      </div>

      <button
        @click="signUpButtonPressed"
         :disabled="isSignupButtonDisabled"
        type="submit"
        class="btn btn-primary"
      >
        Checkout
      </button>
    </form>
  </div>
</template>
<style scoped></style>
