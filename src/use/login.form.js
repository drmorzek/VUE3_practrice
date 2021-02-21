import { computed, watch } from 'vue'
import { useField, useForm } from "vee-validate"
import * as yup from 'yup'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm() {
    const store = useStore()
    const router = useRouter()

    const { handleSubmit, isSubmitting, submitCount } = useForm()

    const { value: email, errorMessage: erEmail, handleBlur: blEmail } = useField(
        'email',
        yup
            .string()
            .trim()
            .required("Введите e-mail")
            .email("Введите корректный e-mail")
    )


    const { value: password, errorMessage: erPass, handleBlur: blPass } = useField(
        'password',
        yup
            .string()
            .trim()
            .required("Введите пароль")
            .min(6, "Длина пароля должна быть не менее 6 символов")
    )

    const onSubmit = handleSubmit(async v => {
        try{
            await store.dispatch('auth/login', v)
            router.push('/')
        } catch (e) {

        }
        
        
    })

    const isTooManyAttempts = computed(() => submitCount.value >= 4)

    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 1500)
        }
    })

    return {
        email, erEmail, blEmail,
        password, erPass, blPass,

        onSubmit, isSubmitting,
        isTooManyAttempts
    }
}