<template>
   <div>
      <div>
        <v-card-title>Book ({{ count }}Items)</v-card-title>
      </div>
    <v-card class="mt-5 mb-8">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <v-img  height="150"
                      width="150"
                      src="../assets/assets/Image 10.png"></v-img>
                Ux-Design
                 <v-card-actions>
                    <v-btn
                        color="#a03037" dark
                        outline=""
                       @click="reserve"
                    >
                            Add to Cart
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <v-img  height="150"
                      width="150"
                      src="../assets/assets/Image 11.png"></v-img>
                Ux-Design
                <v-card-actions>
                    <v-btn
                        color="#a03037" dark
                        outline=""
                       @click="reserve"
                    >
                            Add to Cart
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <v-img  height="150"
                      width="150"
                      src="../assets/assets/Image 14.png"></v-img>
                Ux-Design
                <v-card-actions>
                    <v-btn
                        color="#a03037" dark
                        outline=""
                       @click="reserve"
                    >
                            Add to Cart
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <v-img  height="150"
                      width="150"
                      src="../assets/assets/Image 18.png"></v-img>
                Ux-Design
                <v-card-actions>
                    <v-btn
                        color="#a03037" dark
                        outline=""
                       @click="reserve"
                    >
                            Add to Cart
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <v-img  height="150"
                      width="150"
                      src="../assets/assets/Image 11.png"></v-img>
                Ux-Design
                <v-card-actions>
                    <v-btn
                        color="#a03037" dark
                        outline=""
                       @click="reserve"
                    >
                            Add to Cart
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <v-img  height="150"
                      width="150"
                      src="../assets/assets/Image 14.png"></v-img>
                Ux-Design
                <v-card-actions>
                    <v-btn
                        color="#a03037" dark
                        outline=""
                       @click="reserve"
                    >
                            Add to Cart
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <v-img  height="150"
                      width="150"
                      src="../assets/assets/Image 14.png"></v-img>
                Group
                <v-card-actions>
                    <v-btn
                        color="#a03037" dark
                        outline=""
                       @click="reserve"
                    >
                            Add to Cart
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <v-img  height="150"
                      width="150"
                      src="../assets/assets/Image20.png"></v-img>
                Ux-Design
                <v-card-actions>
                    <v-btn
                        color="#a03037" dark
                        outline=""
                       @click="reserve"
                    >
                            Add to Cart
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
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
      cards: [
        { src: "../assets/Image 7.png", flex: 6 },
        { src: "../assets/Image 11.png", flex: 6 },
        { src: "../assets/Image 10.png", flex: 6 },
        { src: "../assets/Image 18.png", flex: 6 },
      ],
    };
  },
}
</script>