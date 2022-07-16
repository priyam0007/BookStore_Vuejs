<template>
     <section >
      <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel>
          <h2>Your Cart</h2>
          <!-- <v-expansion-panel-content> -->
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Product</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-left">Total</th>
                    <th class="text-left">remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="BookInfos in BookInfo" :key="BookInfos">
                    <td>{{ BookInfos.book.bookName }}</td>
                    <td>{{ BookInfos.book.price }}</td>
                    <td>
                      <v-btn
                      :disabled="BookInfos.quantity===1"
                        small
                        @click="
                          decrement(
                            BookInfos.cartId,
                            BookInfos.quantity,
                            BookInfos.book.price
                          )
                        "
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      {{ BookInfos.quantity }}
                      <v-btn
                        small
                        @click="
                          increment(
                            BookInfos.cartId,
                            BookInfos.quantity,
                            BookInfos.book.price
                          )
                        "
                      >
                        <v-icon> mdi-plus</v-icon>
                      </v-btn>
                    </td>
                    <td>{{ BookInfos.book.price * BookInfos.quantity }}</td>
                    <td>
                      <button
                        class="delete-product"
                        @click="remove(BookInfos.cartId)"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-expansion-panel>
        </v-expansion-panels>
        </section>
</template>

<script>
import CartService from '@/Service/CartService';
export default {
  name: "Cart",

  
  data() {
    return {
      formValues: {
        userId: "24",
        address: "XYZ",
        price: "",
      },
      count: 0,
      BookInfo: [],
      CartData: [],
      cartTotalPrice: 0,
    };
  },
   methods: {
    remove(id) {
      console.log(id);
      CartService.deleteContact(id).then((data) => {
        console.log(data);
        window.location.reload();
      });
    },
    getBookCart() {
      CartService.getAllCart().then((response) => {
        console.log(response);
        this.BookInfo = response.data.data;
        console.log(this.BookInfo);
        this.count = this.BookInfo.length;
        console.log(this.count);
        this.CartData = response.data.data;
        this.setTotalValue();
      });
    },
    increment(id, quantity, price) {
      console.log(price);
      console.log(id);
      console.log(quantity);
      this.counter = quantity;
      this.counter++;
      this.cartTotalPrice = price * this.counter;
      console.log(this.cartTotalPrice);
      console.log(this.counter);
      this.updateCartQuantity(id, this.counter, this.cartTotalPrice);
    },
    decrement(id, quantity, total) {
      this.counter = quantity;
      this.counter > 0 ? this.counter-- : 0;
      this.cartTotalPrice = total * this.counter;
      console.log(this.cartTotalPrice);
      location.reload();
      console.log(this.counter);
      this.updateCartQuantity(id, this.counter, this.cartTotalPrice);
    },
    updateCartQuantity(id,quantity, total) {
      console.log(total);
      console.log(id, quantity);
      CartService.updateQuantity(id, quantity, total).then((data) => {
        console.log(data);
        this.CartData = data.data.data;
        console.log(this.CartData);
        this.getBookCart();
      });
    },
    setTotalValue() {
      console.log(this.CartData);
      // let newVar = this.BookInfo.
      let newVar = this.CartData.map((books, index) => {
        console.log(books.total);
        return books.total;
      });
      this.CartData.total = newVar.reduce((a, b) => a + b);
      console.log(this.CartData.total);
    },
    addToOrder(price) {
      console.log(price);
      console.log(this.CartData);
      this.formValues.price = price;
      console.log(this.formValues);
      const data = this.formValues;
      OrderService.addOrder(data)
        .then(
          (response) => {
            console.log(response);
          },
          () => this.$router.push({ name: "PlaceOrder" })
        )
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getBookCart();
  },
};
</script>
