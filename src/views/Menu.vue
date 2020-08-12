<template>
    
    <div class="menuPart ">
        <b-row>
            <b-col lg="8" md="6" sm="12" >
                <div  id="menuHeader">
                    <h3 >Menu Items</h3>
                </div>  

                <hr style="background-color: white;">
                
                <div class="container">
                    <b-row>                        
                        <div class="col-sm-4" v-for="(data, index) in foods " :key="index">                         
                            <MenuItem  :item="data" @addItemToCart="addItemToCart" @setComponentToLoad="setComponentToLoad"> </MenuItem>
                        </div>
                       
                    </b-row>
                </div>
                
               
            </b-col>

            <b-col lg="4" md="6" sm="12" class="d-none d-md-block d-lg-block d-xl-block">
                <component :parentData="cartItem"   :is="isComponent" @setComponentToLoad="setComponentToLoad"></component>
            </b-col>

            <b-col lg="4" md="6" sm="4" class="d-none d-md-block d-lg-block d-xl-block">
                <b-button>View Cart</b-button>
            </b-col>
        </b-row>
            
    </div>
 
</template>

<script>

import MenuItem from '@/components/MenuItem.vue';
import Cart from '@/components/Cart.vue';
import Bill from '@/components/Bill.vue';

export default {
    components: {
        MenuItem,
        Cart,
        Bill
    },

    data() {
        return {
            cartItem: [],
            isComponent: '',
            foods: [
                {name: 'Momo',price: '120'},
                {name: 'Chowmein',price: '140'},
                {name: 'Sausage',price: '50'},
                {name: 'Burger',price: '100'},
                {name: 'Burger',price: '100'},
            ]
        }
    },

    methods: {
        addItemToCart: function (data) {
            
            console.log('data added to cart')
            console.log(data)
            

            let existing = this.cartItem.find(item => item.name === data.name);
            
            if (existing) {
                existing.quantity += data.quantity ;
            
            } 
            else {
            this.cartItem.push(data );
            
            // console.log(this.cartItem)
            
            }
            
            
            
        },
       
        setComponentToLoad(data) {
            console.log('called set component of menu')
            this.isComponent = data;
        }

    },
    
}

</script>



<style scoped>
#menuHeader {
    text-align: center;
    font-family: sans-serif;
    font-size: 40px;
    background-color: transparent;
    color: white;
    height: 50px;
    margin: 0;
    border: 2px solid;
    border-radius: 25px;
    /* width: 50%; */
    /* margin: auto; */
    padding: 5px;
}


.menuPart {
    padding: 15px;
    
    
    background-image: url('https://www.rescatecoffee.com/wp-content/uploads/2016/03/bigstock-Wood-Texture-Plank-Grain-Backg-64710370-scaled.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
   
    width: 100%; 
    height: 100%;
}

.container {
     /* background-color: gray; */
     padding:  20px; ;
     height: 520px;
     overflow-y: scroll;
     /* border: 5px solid lightgray;
     border-radius: 15px; */
}
.container::-webkit-scrollbar {
    display: none;
}




</style>