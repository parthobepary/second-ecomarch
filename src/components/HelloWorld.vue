<template>
  <div class="hello">
    <h1>Welcome to FoodShope</h1>
    <div class="grid">
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
                <button @click="addToOrder(datas)">{{ datas.Food }}</button>
              </td>
              <td>{{ datas.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div>
          <h2>This is order list</h2>
          <div class="table-body">
            <table class="GeneratedTable">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Food name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(datas, index) in orderData" :key="index">
                  <td>{{ datas.quantity }}</td>
                  <td>
                    <button @click="addToOrder(datas)">{{ datas.name }}</button>
                  </td>
                  <td>{{ datas.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      myData: "footData",
      orderData: "orderData",
    }),
  },
  methods: {
    ...mapActions({
      addToOrder: "addToOrder",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
