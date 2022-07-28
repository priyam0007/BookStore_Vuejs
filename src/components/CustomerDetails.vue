 <template>
 <v-expansion-panel class="ml-16 mr-10 mt-10">
          <v-expansion-panel-header>CustomerDetails</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row justify="center">
              <v-col cols="12" sm="10" md="8" lg="6">
                <v-app-bar color="#a03037" dark>
                  
                  <h2 class="ml-2 mt-5">CustomerDetails</h2>
                </v-app-bar>
                <v-card ref="form">
                  <v-card-text>
                    <v-text-field
                      v-model="form.fullname"
                      :rules="[() => !!form.fullname || 'This field is required']"
                      :error-messages="errorMessages"
                      label="FullName"
                      required
                    ></v-text-field>
                     <v-text-field
                      
                      v-model="form.address"
                      :rules="[
                        () => !!form.address || 'This field is required',
                        () =>
                          !!form.address & (form.address.length <= 25) ||
                          'Address must be less than 25 characters',
                        addressCheck,
                      ]"
                      label="Address"
                      placeholder="Snowy Rock Pl"
                      counter="25"
                      required
                    ></v-text-field>
                     <v-text-field
                 
                      v-model="form.city"
                      :rules="[() => !!form.city || 'This field is required']"
                      :error-messages="errorMessages"
                      label="City"
                      required
                    ></v-text-field>
                     <v-text-field
                     
                      v-model="form.state"
                      :rules="[() => !!form.state || 'This field is required']"
                      :error-messages="errorMessages"
                      label="State"
                      required
                    ></v-text-field>

                     <v-text-field
                      
                      v-model="form.zipcode"
                      :rules="[() => !!form.zipcode || 'This field is required']"
                      :error-messages="errorMessages"
                      label="Zipcode"
                      required
                    ></v-text-field>
                      <v-text-field
                     
                      v-model="form.email"
                      label="Email"
                    ></v-text-field>
                     <v-text-field
                      
                      v-model="form.phonenumber"
                      :rules="[() => !!form.phonenumber || 'This field is required']"
                      :error-messages="errorMessages"
                      label="Phonenumber"
                      required
                    ></v-text-field>
                    
                    <v-container fluid>
                      <v-radio-group v-model="radios">
                        <template v-slot:label>
                          <div><strong>Type</strong></div>
                        </template>
                        <v-row>
                        <v-radio value="Home">
                          <template v-slot:label>
                            <div><strong>Home</strong></div>
                          </template>
                        </v-radio>
                        <v-radio value="Work">
                          <template v-slot:label>
                            <div><strong>Work</strong></div>
                          </template>
                        </v-radio>
                        <v-radio value="Other">
                          <template v-slot:label>
                            <div><strong>Other</strong></div>
                          </template>
                        </v-radio>
                        </v-row>
                      </v-radio-group>
                    </v-container>
                    </v-card-text>
                       
                        <v-btn color="#a03037" text @click="newCustomer"> Continue </v-btn>
         </v-card>
                </v-col>
                </v-row>
                </v-expansion-panel-content>
                </v-expansion-panel>
                
                             </template>
<script>
import CustomerService from '../Service/CustomerService'
  export default {
  name: "CustomerDetails",
   data() {
    return {
      CustomerData: [],
       form: {
        fullname: this.fullname,
        address: this.address,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
        email: this.email,
        phonenumber: this.phonenumber,
      },
    };
  },
  methods: {
    getEmployee() {
      CustomerService.getAllAddressbookData().then((response) => {
        console.log(response.data.data);
        this.Contacts = response.data.data;
      });
    },
         newCustomer(){
      console.log(this.CustomerData);
      console.log(this.form);
      const data = this.form;
      CustomerService.addCustomer(data)
        .then(
          (response) => {
            console.log(response);
          }
          // () => this.$router.push({ name: "Cart" })
        )
        .catch((error) => {
          console.log(error);
        });
     },
            setData(obj) {
                this.id = obj.id;
                this.fullname = obj.fullname;
                this.city = obj.city;
                this.address = obj.address;
                this.state = obj.state;
                this.phonenumber = obj.phonenumber;
                this.zipcode = obj.zipcode;
                this.email = obj.email;
                console.log(this.form);
    },
   },  
     created() {
        // this.getDataById(this.$route.params.id);
        //  this.getEmployee();
    }
  }
</script>
