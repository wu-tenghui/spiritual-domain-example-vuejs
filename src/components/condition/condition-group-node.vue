<template>
  <div style="calc(width: 100% - 28px); border: 1px solid #DDD; padding-left: 28px;">
    <el-switch v-model="conditionGroup.logic" active-text="并且" inactive-text="或者"></el-switch>
    <el-button @click="addConditionGroup">添加条件组</el-button>
    <el-button @click="addCondition">添加条件项</el-button>
    <div style="width: 100%;" v-for="(e, i) in conditionGroup.conditions" v-bind:key="i">
      <condition-group-node v-if="e.conditions" v-bind:conditionGroup="e"></condition-group-node>
      <node v-else v-bind:condition="e"></node>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'condition-group-node',
    components: {
      node: {
        props: {
          condition: {}
        },
        render(createElement) {
          return createElement('div', {style: {display: 'contents'}},
            this.$parent.root.$scopedSlots.default({condition: this.condition})
          );
        }
      }
    },
    props: {
      conditionGroup: {
        logic: null,
        conditions: []
      }
    },
    data() {
      return {
        root: null
      };
    },
    created() {
      if (this.$parent.isConditionGroup) {
        this.root = this.$parent;
      } else {
        this.root = this.$parent.root;
      }
    },
    methods: {
      addConditionGroup() {
        this.conditionGroup.conditions.push({logic: true, conditions: []});
      },
      addCondition() {
        this.conditionGroup.conditions.push({});
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
