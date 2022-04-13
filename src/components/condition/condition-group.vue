<template>
  <condition-group-node v-bind:conditionGroup="conditionGroup"></condition-group-node>
</template>

<script>
  import ConditionGroupNode from './condition-group-node';

  export default {
    name: 'condition-group',
    components: {
      ConditionGroupNode: ConditionGroupNode
    },
    props: {
      conditionGroup: {
        logic: null,
        conditions: []
      }
    },
    created() {
      this.isConditionGroup = true;
    }
  };
</script>

<style lang="scss" scoped>

</style>
