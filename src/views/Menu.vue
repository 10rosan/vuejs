<template>
    
    <div class="menuPart ">
        <b-row>
            <b-col lg="8" md="6" sm="12" >
                <MenuItem  @addItemToCart="addItemToCart" @setComponentToLoad="setComponentToLoad"> </MenuItem>
            </b-col>
            <b-col lg="4" md="6" sm="12" class="d-none d-md-block d-lg-block d-xl-block">
                <component :parentData="cartItem"   :is="isComponent" @setComponentToLoad="setComponentToLoad"></component>
            </b-col>
            <b-col lg="4" md="6" sm="4" class=" d-lg-block d-xl-block">
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
            //this.cartItem.push(data.quantity = 1);
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


.menuPart {
    padding: 15px;
    
    
    background-image: url('https://www.rescatecoffee.com/wp-content/uploads/2016/03/bigstock-Wood-Texture-Plank-Grain-Backg-64710370-scaled.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
   
    width: 100%; 
    height: 100%;
}




</style>