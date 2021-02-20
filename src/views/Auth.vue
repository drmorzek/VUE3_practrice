<template>
  <form class="card" @submit.prevent="onSubmit">

      <h1>Войти в систему</h1>

      <div :class="['form-control', {invalid: erEmail}]">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" @blur="blEmail">
            <small v-if="erEmail">{{ erEmail}}</small>
      </div>
      <div :class="['form-control', {invalid: erPass}]">
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="password" @blur="blPass">
            <small v-if="erPass">{{ erPass}}</small>
      </div>

      <button class="btn primary" type="submit" :disabled="!!erEmail || !!erPass || isSubmitting || isTooManyAttempts" >Войти</button>
      <span class="text-danger" v-if="isTooManyAttempts">
            Вы слишком часто пытаетесь войти в систему. Попробуйте позже
        </span>
  </form>
</template>

<script>
import {useLoginForm} from '../use/login.form'

export default {
    setup(){
        
        return { ...useLoginForm()}
    }
}
</script>

<style>

</style>