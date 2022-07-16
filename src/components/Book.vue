<template>
   <div>
      <div>
        <v-card-title>Book ({{ count }}Items)</v-card-title>
      </div>
     <v-container fluid class="card">
        <v-row >
            <v-col cols="3"  v-for="BookInfos in BookInfo" :key="BookInfos.bookId">
           <v-card width="75%">
           <v-layout align-center
              >
              <v-img class="mx-auto"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                 lazy-src="`../assets/${BookInfos.bookImage}`"
                 max-height="250"
                 max-width="200"
                :src="`../assets/${BookInfos.bookImage}`"
                 
              />
              </v-layout>
              <!-- <v-img src="../assets/${BookInfos.bookImage}" alt=""
    contain   
    height="100px"
    width="150px">
</v-img> -->
             
              <v-card-title v-text="BookInfos.bookName"></v-card-title>
              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  by {{ BookInfos.authorName }}
                </div>
                <v-card-title>Price:Rs {{ BookInfos.price }}</v-card-title>
              </v-card-text>

              <v-row align="center" justify="space-around">
               <v-btn
                  color="#a03037"
                  depressed
                  elevation="2"
                  small
                  @click="AddtoCart(BookInfos.bookId, BookInfos.price)"
                >
                  <v-icon>mdi-cart</v-icon>Add To Cart
                </v-btn>
                <v-btn elevation="2" small text>
                  <v-icon>mdi-cards-heart-outline</v-icon>WhishList</v-btn
                >
              </v-row>
            </v-card>
            </v-col>
            </v-row>
            </v-container>    
  </div>
</template>

<script>
import BookStoreService from '../Service/BookStoreService';
import CartService from '@/Service/CartService';
export default {
  name: "Book",
  data: () => {
    return {
      formValues: {
         userId: "",
         bookId: "",
         quantity: "",
         total: "",
      },
      BookInfo: [],
      count: 0,
    };
  },
methods: {
    getBooks() {
      BookStoreService.getAllBooks().then((response) => {
        console.log(response.data.data);
        this.BookInfo = response.data.data;
      });
    },
    insertBooks() {
      BookStoreService.insertBook().then((response) => {
        console.log(response.data.data);
        this.BookInfo = response.data.data;
      });
    },  
  getContactCount() {
      BookStoreService.getContactCount().then((response) => {
        console.log(response.data.data);
        this.count = response.data.data;
      });
    },
    AddtoCart(id, total) {
      console.log(id);
      console.log(total);
      this.formValues.bookId = id;
      this.formValues.userId = 24;
      this.formValues.quantity = 1;
      this.formValues.total = total;
      console.log(this.formValues);
      const data = this.formValues;
      CartService.addCart(data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
},
  created() {
    this.getBooks();
     this.getContactCount();
   }
}
</script>