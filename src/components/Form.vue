<template>
  <div class="">
    <pre>{{ formFields }}</pre>
    <pre>{{ $v.formFields }}</pre>
    <div class="columns is-multiline">
      <div class="column is-4">
        <div class="field">
          <label class="label">Nome *</label>
          <p class="control">
            <input :class="{ 'input': true, 'is-danger': $v.formFields.name.$error, 'is-success': !$v.formFields.name.$error && $v.formFields.name.$dirty }"
                   type="text"
                   placeholder="Informe seu nome completo"
                   @input="$v.formFields.name.$touch()"
                   v-model="formFields.name">
          </p>
          <p class="help is-danger" v-show="$v.formFields.name.$error">Informe corretamente seu nome.</p>
        </div>
      </div>
      <div class="column is-3">
        <div class="field">
          <label class="label">E-mail *</label>
          <p class="control">
            <input :class="{ 'input': true, 'is-danger': $v.formFields.email.$error, 'is-success': !$v.formFields.email.$error && $v.formFields.email.$dirty }"
                   type="email"
                   @input="$v.formFields.email.$touch()"
                   placeholder="Informe seu e-mail"
                   v-model="formFields.email">
          </p>
          <p class="help is-danger" v-show="$v.formFields.email.$error">Informe corretamente seu e-mail.</p>
        </div>
      </div>
      <div class="column is-3">
        <div class="field">
          <label class="label">Telefone *</label>
          <p class="control">
            <input :class="{ 'input': true, 'is-danger': $v.formFields.phone.$error, 'is-success': !$v.formFields.phone.$error && $v.formFields.phone.$dirty }"
                   type="text"
                   @input="$v.formFields.phone.$touch()"
                   placeholder="(11) 99876-5432"
                   v-model="formFields.phone">
          </p>
          <p class="help is-danger" v-show="$v.formFields.phone.$error">Informe um número válido.</p>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Orçamento?</label>
          <p class="control">
            <switches v-model="formFields.quote"
                      :selected="formFields.quote"
                      text-enabled="Sim"
                      text-disabled="Não"
                      :type-bold="true"
                      color="green"
                      theme="bulma"></switches>
          </p>
        </div>
      </div>
      <div class="column is-4">
        <div class="columns is-multiline">
          <div class="column is-10">
            <div class="field">
              <label class="label">Como soube da JMOB? *</label>
              <p class="control">
                <span class="select">
                  <select v-model="formFields.hearAboutUs"
                          @click="$v.formFields.hearAboutUs.$touch()"
                          :class="{ 'is-danger-select': $v.formFields.hearAboutUs.$error, 'is-success-select': !$v.formFields.hearAboutUs.$error && $v.formFields.hearAboutUs.$dirty }"
                          @change="setHearAboutUsDetails()">
                    <option value="">Selecione uma opção</option>
                    <option :value="option" v-for="option in selectOptions">{{ option }}</option>
                  </select>
                </span>
              </p>
              <p class="help is-danger" v-show="$v.formFields.hearAboutUs.$error">Selecione uma das opções.</p>
            </div>
          </div>
          <div class="column" v-show="formFields.hearAboutUs === 'Indicação' || formFields.hearAboutUs === 'Outro'">
            <div class="field">
              <label class="label">{{ hearAboutUs.label }}</label>
              <p class="control">
                <input :class="{ 'input': true, 'is-danger': $v.formFields.hearAboutUsDetail.$error, 'is-success': !$v.formFields.hearAboutUsDetail.$error && $v.formFields.hearAboutUsDetail.$dirty }"
                       type="text"
                       @input="$v.formFields.hearAboutUsDetail.$touch()"
                       :placeholder="hearAboutUs.placeholder"
                       v-model="formFields.hearAboutUsDetail">
              </p>
              <p class="help is-danger" v-show="$v.formFields.hearAboutUsDetail.$error">{{ hearAboutUs.error }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label class="label">Comentários</label>
          <p class="control">
            <textarea :class="{ 'textarea': true, 'is-danger': $v.formFields.description.$error, 'is-success': !$v.formFields.description.$error && $v.formFields.description.$dirty }"
                      type="text"
                      @input="$v.formFields.description.$touch()"
                      placeholder="Deixe aqui seus comentários"
                      v-model="formFields.description"></textarea>
          </p>
          <p class="help is-danger" v-show="$v.formFields.description.$error">Informe seus comentários.</p>
        </div>
      </div>
    </div>
    <div class="columns is=multiline">
      <div class="column">
        <button class="button is-primary" @click="submitForm()">Enviar mensagem</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import { required, email, minLength } from 'vuelidate/lib/validators'

import Switches from 'vue-switches'

export default {
  data () {
    return {
      formFields: {
        name: '',
        email: '',
        phone: '',
        quote: false,
        description: '',
        hearAboutUs: '',
        hearAboutUsDetail: ''
      },
      hearAboutUs: {
        label: '',
        placeholder: '',
        error: ''
      },
      selectOptions: [
        'Google',
        'Facebook',
        'Instagram',
        'Anúncio na TV',
        'Anúncio na rádio',
        'Indicação',
        'Outro'
      ]
    }
  },
  validations: {
    formFields: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        minLength: minLength(10)
      },
      hearAboutUs: {
        required
      },
      hearAboutUsDetail: {
        required (v) {
          console.log(v)
          if (this.formFields.hearAboutUs !== 'Indicação' && this.formFields.hearAboutUs !== 'Outro') return true
          if (v.length > 0) return true
          return false
        }
      },
      description: {
      }
    }
  },
  methods: {
    submitForm () {
      this.$v.formFields.$touch()
    },
    setHearAboutUsDetails () {
      this.hearAboutUs.label = 'Indicação *'
      this.hearAboutUs.placeholder = 'Informe a pessoa da indicação'
      this.hearAboutUs.error = 'Campo requerido.'
      if (this.formFields.hearAboutUs === 'Outro') {
        this.hearAboutUs.label = 'Por favor, detalhe *'
        this.hearAboutUs.placeholder = 'Detalhe como soube'
        this.hearAboutUs.error = 'Por favor, informe como chegou até nós.'
      }
    }
  },
  components: {
    Switches
  }
}
</script>

<style lang="scss">
  @import "~bulma";

  .is-danger-select {
    border: 1px solid $danger !important;
  }

  .is-success-select {
    border: 1px solid $success !important;
  }

</style>
