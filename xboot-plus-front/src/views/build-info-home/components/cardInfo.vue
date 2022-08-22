<template>
  <div style="cursor: pointer;">
    <Card>
      <div class="card-info">
        <img :src="img" class="icon" />
        <h2>{{ title }}</h2>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    img: {
      type: String,
      default: "https://ooo.0o0.ooo/2019/11/22/OSp4jzy5TrLAvM3.png",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
    display: inline-block;
  }
}
</style>