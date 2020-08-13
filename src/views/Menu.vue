<template>
    <div class="menuPart ">
        <b-row>
            <b-col lg="8" md="6" sm="12" >
                <!-- <div  id="menuHeader"> -->
                    <b-row>
                        <div class="col-sm-12" >
                            <h3 style="text-align: center; color: white;">Menu Items</h3>
                        </div>
                        <!-- <h3 >Menu Items</h3> -->
                        <div class="col-sm-4 d-block d-md-none d-lg-none d-xl-none">
                            <b-button style="float: right;" class="bg-primary"><b-icon icon="cart2" aria-hidden="true"></b-icon></b-button>
                        </div>
                    </b-row>
                    
                <!-- </div>   -->

                <hr style="background-color: white;">
                <div class="container">
                    <b-row>                        
                        <div class="col-sm-4 col-md-4" v-for="(data, index) in foodList " :key="index">                        
                            <MenuItem  :item="data" @addItemToCart="addItemToCart" @setComponentToLoad="setComponentToLoad"> </MenuItem>
                        </div>
                       
                    </b-row>
                </div>
                
               
            </b-col>

            <b-col  lg="4" md="6" sm="12" class="d-block d-md-block d-lg-block d-xl-block">
                <component :parentData="cartItem"   :is="isComponent" @setComponentToLoad="setComponentToLoad"></component>
            </b-col>

            
        </b-row>
        
            
    </div>
 
</template>

<script>

import MenuItem from '@/components/MenuItem.vue';
import Cart from '@/components/Cart.vue';
import Bill from '@/components/Bill.vue';
import axios from 'axios';

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
            foodList: [],
            foods: [
                {"item_name":"Chicken Momo","image":"https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg","price":120},
                {"item_name":"Chicken Chowmein","image":"https://www.cookingclassy.com/wp-content/uploads/2019/01/chow-mein-4.jpg","price":140},
                {"item_name":"Chicken Sausage","image":"https://kitchenconfidante.com/wp-content/uploads/2014/01/Roasted-Chicken-Sausages-with-Brussels-Sprouts-Fennel-and-Potatoes-Kitchen-Confidante-FEATURED-IMAGE.jpg","price":50},
                {"item_name":"Chicken Pizza","image":"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg","price":400},
                {"item_name":"Aloo","image":"https://www.corriecooks.com/wp-content/uploads/2018/10/Instant-Pot-French-Fries-new.jpg","price":40},
                {"item_name":"Chicken Burger","image":"https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg","price":120},
                {"item_name":"Chicken Chilly","image":"https://maunikagowardhan.co.uk/wp-content/uploads/2014/11/Indo-Chinese-Chilli-Chicken.jpg","price":300},
                {"item_name":"Buff Momo","image":"https://goodfoodnepal.com/wp-content/uploads/2018/06/BuffMomo.jpg","price":100},
                {"item_name":"Buff Chowmein","image":"https://nepalicuisines.files.wordpress.com/2016/03/fish-chow-mein.jpg","price":120},
                {"item_name":"Buff Sausage","image":"https://kitchenconfidante.com/wp-content/uploads/2014/01/Roasted-Chicken-Sausages-with-Brussels-Sprouts-Fennel-and-Potatoes-Kitchen-Confidante-FEATURED-IMAGE.jpg","price":45},
                {"item_name":"Ham Burger","image":"https://barbecuebible.com/wp-content/uploads/2013/05/featured-great-american-hamburger-1024x640.jpg","price":130},
                {"item_name":"Cheese Burger","image":"https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg","price":120},
                {"item_name":"Chicken Spaghetti","image":"https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/May-31/Chicken_Spaghetti_in_Tomato_Basil_Sauce_Recipe_-1.jpg","price":350},
                {"item_name":"Margarita Pizza","image":"https://img.taste.com.au/DhThzPm9/taste/2016/11/eat-pray-love-39581-3.jpeg","price":300}
            ] 
                // {name: 'Momo',price: '120'},
                // {name: 'Chowmein',price: '140'},
                // {name: 'Sausage',price: '50'},
                // {name: 'Burger',price: '100'},
                // {name: 'Burger',price: '100'},
                // {name: 'Burger',price: '100'},
                // {name: 'Burger',price: '100'},
            
        }
    },
     mounted() {
         this.loadMenu();
  },
    methods: {
      loadMenu: function(){
            axios({
            method: 'get',
            url: 'http://3.89.153.127:8000/api/food/list',
            })
            .then(function (response) {
                this.foods = response.data.results
                // this.foodList.push(response.data.results)
                 console.log('response')
                 console.log(response.data)
                 console.log('response')
            })
             .catch(function (error) {
                console.log(error);
         });
     },
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
    
   
/*     
    height: 100vh; */
}

.container {
     /* background-color: gray; */
     padding:  20px; ;
     height: 540px;
     overflow-y: scroll;
     /* border: 5px solid lightgray;
     border-radius: 15px; */
}
.container::-webkit-scrollbar {
    display: none;
}




</style>