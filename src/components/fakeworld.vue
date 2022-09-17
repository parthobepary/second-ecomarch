<template>
  <div id="OrderTable">
    <h2>OrderTable</h2>
    <table>
      <tr>
        <th>Food Name</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Action</th>
      </tr>
      <tr v-for="food in orderFoods" :key="food.id">
        <td>{{ food.Food }}</td>
        <td>
          <button v-show="food.quantity > 1" @click="redues(food.id)">-</button>
          <span>{{ food.quantity }}</span>
          <button @click="incrase(food.id)">+</button>
        </td>
        <td>{{ food.Subtotal }}</td>
        <td><button @click="dlt(food.id)">DLT</button></td>
      </tr>
      <tr>
        <td>Discount</td>
        <td>
          <input v-model.number="discountRate" type="number" /> <span>%</span>
        </td>
        <td>discount $ {{ discount.toFixed(2) }}</td>
      </tr>
      <tr>
        <td>Vat</td>
        <td><input v-model.number="vatRate" type="number" /> <span>%</span></td>
        <td>vat ${{ vat.toFixed(2) }}</td>
      </tr>
      <tr>
        <td>total</td>
        <td>total price ${{ subTotal.toFixed(2) }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      discountRate: 0,
      discount: 0,
      vatRate: 0,
      vat: 0,
    };
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.orderFoods.map((food) => (totalPrice += food.price));
      return totalPrice;
    },
    orderFoods() {
      return this.$store.state.orderFoods;
    },
    subTotal() {
      return this.totalPrice - this.discount + this.vat;
    },
  },
  watch: {
    orderFoods(nv) {
      console.log(nv);
    },
    discountRate(nv) {
      this.discount = (this.totalPrice / 100) * nv;
    },
    vatRate(nv) {
      this.vat = (this.totalPrice / 100) * nv;
    },
  },
  methods: {
    redues(id) {
      this.$store.commit("reduesQuantity", id);
    },
    incrase(id) {
      this.$store.commit("incraseQuantity", id);
    },
    dlt(id) {
      this.$store.commit("deleteFood", id);
    },
  },
};
</script>
<style scoped>
#OrderTable {
  width: 80%;
  margin: auto;
  font-family: arial;
}
table {
  width: 100%;
}
table,
tr,
td,
th {
  border: 1px solid #333;
  border-collapse: collapse;
  padding: 10px 5px;
}
button {
  cursor: pointer;
}
</style>
