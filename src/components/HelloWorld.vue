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
          <div>
            <div class="table-body">
              <table class="GeneratedTable">
                <thead>
                  <tr>
                    <th>Food name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>action</th>
                  </tr>
                </thead>
                <!-- //delete one -->
                <tbody>
                  <tr v-for="(datas, index) in orderData" :key="index">
                    <td>{{ datas.name }}</td>
                    <td class="flex">
                      <button class="xbtn" @click="decriseOne(index)">-</button>
                      <span>{{ datas.quantity }}</span>
                      <button class="xbtn" @click="incriseOne(index)">+</button>
                    </td>
                    <td>{{ datas.price * datas.quantity }}</td>
                    <td>
                      <button @click="deleteOne(index)" class="crossbtn">
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div>
              <h3>Subtotal : {{ subtotall }}</h3>
              <div class="flex">
                <h3>Discoucnt</h3>
                <h3><input v-model="discountRate" type="number" /></h3>
                <h4>{{ this.discount }} TAKA (Less)</h4>
              </div>
              <div>
                <!-- <h3>Discounted price : {{ this.discoundedPrice }}</h3> -->
              </div>
              <div class="flex">
                <h3>vat</h3>
                <h3><input v-model="vatRate" type="number" /></h3>
                <h4>{{ this.vats }} vat</h4>
              </div>
              <hr />
              <h3>Totlal: {{ total }}</h3>
            </div>
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
    return {
      discount: 0,
      discountRate: 0,
      vatRate: 0,
      vats: 0,
      subtotals: 0,
    };
  },
  computed: {
    ...mapState({
      myData: "footData",
      orderData: "orderData",
    }),
    subtotall() {
      let singleQuantity = 0;
      let singlePrice = 0;
      let singleTotal = 0;
      let subtotal = 0;

      this.orderData.map((o) => {
        singleQuantity = o.quantity;
        singlePrice = o.price;
        singleTotal = singleQuantity * singlePrice;
        subtotal = subtotal + singleTotal;
        this.subtotals = subtotal + singleTotal;
      });
      return subtotal;
    },
    total() {
      let setToal = 0;
      setToal = this.subtotals - this.discount + this.vats;
      return setToal;
    },
  },
  watch: {
    discountRate(nv) {
      const dis = parseInt(nv);
      this.discount = (this.subtotals / 2) * (dis / 100);
    },
    vatRate(nv) {
      const vat = parseInt(nv);
      this.vats = (this.subtotals / 2) * (vat / 100);
    },
  },
  methods: {
    ...mapActions({
      addToOrder: "addToOrder",
      deleteOne: "deleteOne",
      incriseOne: "incriseOne",
      decriseOne: "decriseOne",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  text-align: center;
}
.xbtn {
  width: 10px;
  background-color: #ffcc00;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
  h3 {
    margin: 0 20px;
  }
}
.crossbtn {
  background-color: red;
  color: white;
  font-weight: bold;
}
.xbtn {
  width: 60px;
}
.margin {
  margin: 60px 0;
}
button {
  width: 100%;
  cursor: pointer;
}
.cal-btn {
  width: 200px;
  margin: 20px 0;
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
