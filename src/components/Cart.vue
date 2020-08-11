<template>
    <div class="sidebar" >
        <div>
            <b-card  header-tag="header" footer-tag="footer">
                <template v-slot:header>
                    <h4 class="mb-0" style="text-align:center;">Food Cart</h4>
                </template>
                <table class="table table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value,index) in parentData" :key="index">
                        <td>{{value.name}}</td>
                        <td>{{value.price}}</td>
                        <th scope="row"><b-form-spinbutton class="btn-sm" v-model="value.quantity" id="demo-sb" min="0" max="100"   inline></b-form-spinbutton></th>
                        <td><button class="bg-transparent " @click="reduceQuantity(value)" ><b-icon icon="dash-circle-fill" variant="danger"></b-icon> </button></td>
                        
                        </tr>
                        
                    </tbody>
                </table>

                
                
                
                <template v-slot:footer>
                    <h5 style="text-align: center;">Total: {{totalPrice}}</h5>
                    
                    <em><b-button  variant="danger" @click="removeItems()" > Clear Cart </b-button></em>
                        
                    <em><b-button  variant="success" @click="addToBill()" style="float:right"> Checkout </b-button></em>
                </template>
            </b-card>  
            
            
        </div>
 
    </div>
</template>

<script>
export default {

    data() {
        return {
            totalPrice: 150,

        }
    },
    
    props: [
        'parentData'
    ],
    methods: {
        showMyCart() {
            // console.log(this.parentData)

        },
        addToBill() {
            
            this.$emit('setComponentToLoad', 'bill')
        },
        reduceQuantity(value) {
            value.index = value.index - 1;

        },
        removeItems() {
            this.parentData.splice(0, this.parentData.length);
            console.log("Cart is Cleared")
        }
    }
   
    
    
}
</script>

<style  scoped>
.sidebar {
    
    margin-top: 25%;
  
}

</style>