<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for='stepc in steps'>
          <v-stepper-step :step="stepc.stepid" :key="stepc.stepid" :complete="stepc.complete">{{stepc.name}}</v-stepper-step>
          <v-divider v-if="stepc.stepid < steps.length" :key="stepc.stepid"></v-divider>
        </template>
      </v-stepper-header>
      <div style='position:relative'>
        <v-stepper-content v-for="stepc in steps"
        :key='stepc.stepid' :step="stepc.stepid">
          {{stepc.name}}
          <v-card color="grey lighten-1" class="mb-5" height="200px">

          </v-card>
          <v-btn color="primary" @click="nextStep">Continue</v-btn>
          <v-btn flat  @click="previousStep">Cancel</v-btn>
        </v-stepper-content>
      </div>
    </v-stepper>
  </div>
</template>

<script>
  export default {
    name: 'CustomStepper',
    data () {
      return {
        e1: 0,
        steps: [
          {
            stepid: 1,
            name: 'Step 1',
            complete: false
          },
          {
            stepid: 2,
            name: 'Step 2',
            complete: false
          },
          {
            stepid: 3,
            name: 'Step 3',
            complete: false
          },
          {
            stepid: 4,
            name: 'Step 4',
            complete: false
          }
        ]
      }
    },
    methods: {
      nextStep: function (e) {
        if (this.e1 < this.steps.length) {
          this.e1 = this.e1 + 1
        }
      },
      previousStep: function (e) {
        if (this.e1 > 1) {
          this.e1--
        }
      }
    }
  }
</script>