<template>
<div>
  <Header/>
  <v-card class="mt-14 mx-auto" max-width="450">
    <v-img src="../assets/assets/success.png" height="200px"></v-img>

    <v-card-subtitle>
      Hurry!!!your order is confirmed<br />
      the order id is #123456 save the order id for <br />
      further communication.
    </v-card-subtitle>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Email Us</th>
            <th class="text-left">Contact Us</th>
            <th class="text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Priya@gmail.com</td>

            <td>+918010263659</td>
            <td>Home no 10 Vijapur</td>
          </tr>
        </tbody>
</template>

 </v-simple-table>
   
    <router-link to="/"> <v-btn color="#a03037" 
       type="Submit"
       @click="remove()"> 
       Continue Shopping </v-btn></router-link>
    
  </v-card>
</div>
</template>
<script>
import CartService from "../Service/CartService"
import Header from "../components/Header.vue"
export default {
  name: "Order",
 components: {
    Header,
  },
 methods:{
    remove(){
     
      CartService.deleteOrder()
         .then((data) => {
          console.log(data);
         this.$router.push({ name: "home" })
       
         })    
    },
 },
 };
  
</script>

