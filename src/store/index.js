import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    footData: [
      {
        id: 1,
        Food: "Noodles",
        price: 500,
      },
      {
        id: 2,
        Food: "Pizza",
        price: 800,
      },
      {
        id: 3,
        Food: "Aroma",
        price: 700,
      },
      {
        id: 4,
        Food: "Bagel",
        price: 500,
      },
      {
        id: 5,
        Food: "Butter",
        price: 1200,
      },
      {
        id: 6,
        Food: "Chicken",
        price: 300,
      },
      {
        id: 7,
        Food: "Pan Cake",
        price: 300,
      },
      {
        id: 8,
        Food: "Butter Cake",
        price: 380,
      },
      {
        id: 9,
        Food: "French Fries",
        price: 120,
      },
      {
        id: 10,
        Food: "Paneer",
        price: 450,
      },
      {
        id: 11,
        Food: "Roti",
        price: 50,
      },
      {
        id: 12,
        Food: "Dal Curry",
        price: 80,
      },
      {
        id: 13,
        Food: "Chappathi",
        price: 90,
      },
      {
        id: 14,
        Food: "Chilli Chicken",
        price: 190,
      },
    ],
    orderData: [],
  },
  getters: {},
  mutations: {
    ADD_ORDER(state, item) {
      let isExsit = state.orderData.find((or) => or.name === item.Food);
      console.log(isExsit);
      if (isExsit) {
        isExsit.quantity += 1;
      } else {
        let cartItem = {
          name: item.Food,
          price: item.price,
          quantity: 1,
        };
        state.orderData.push(cartItem);
      }
    },
    DELETE_ORDER(state, item) {
      let yes = window.confirm("Are youe sure");
      if (yes) {
        state.orderData.splice(item, 1);
      }
    },
    INCISE_ORDER(state, id) {
      state.orderData[id].quantity += 1;
    },
    DECRISE_ORDER(state, id) {
      if (state.orderData[id].quantity <= 0) {
        alert("nagative number not allaow");
        return;
      } else {
        state.orderData[id].quantity -= 1;
      }
    },
  },
  actions: {
    addToOrder(context, item) {
      context.commit("ADD_ORDER", item);
    },
    deleteOne(context, item) {
      context.commit("DELETE_ORDER", item);
    },
    incriseOne(context, id) {
      context.commit("INCISE_ORDER", id);
    },
    decriseOne(context, id) {
      context.commit("DECRISE_ORDER", id);
    },
  },
  modules: {},
});
