<template>
  <div class="hello">
    <h1>Welcome to FoodShope</h1>
    <div class="table-body">
      <table class="GeneratedTable">
        <thead>
          <tr>
            <th>SL</th>
            <th>Food name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(datas, index) in myData" :key="index">
            <td>{{ index }}</td>
            <td>
              <button>{{ datas.Food }}</button>
            </td>
            <td>{{ datas.price }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Codes by Quackit.com -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      myData: this.$store.state.footData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  text-align: center;
}
button {
  width: 100%;
  cursor: pointer;
}
.table-body {
  padding: 0px 40px;
}
table.GeneratedTable {
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 2px;
  border-color: #ffcc00;
  border-style: solid;
  color: #000000;
}

table.GeneratedTable td,
table.GeneratedTable th {
  border-width: 2px;
  border-color: #ffcc00;
  border-style: solid;
  padding: 3px;
}

table.GeneratedTable thead {
  background-color: #ffcc00;
}
</style>
