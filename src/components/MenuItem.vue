<template>
  <div class="menuItem">
    <div id="menuHeader">
        <h3 >Menu Items</h3>

    </div>
        
        <hr style="background-color: white;">
        <div class="container"> 
        <div class="row"> 
            <div class="col-lg-4 col-sm-12 col-md-12 mb-4" v-for="(data, index) in foods " :key="index"> 
                <div class="card border-dark"  > 
                    <img class="card-img-top" src="../assets/logo.png" alt="" style="height:200px;"> 
  
                    <div class="card-body bg-dark text-light"> 
                        <h5 class="card-title"> {{ data.name }}</h5> 
                        <p class="card-text"> 
                            Price: {{ data.price }} 
                            <!-- <b-form-spinbutton class="btn-sm" v-model="value" id="demo-sb" min="0" max="100"  style="float: right;" inline></b-form-spinbutton> -->
                        </p> 
                        <br>
                        <div style="display: flex; justify-content: center;">
                            <b-button class="btn-success btn-sm"   @click="addToCart(data)">Add Cart</b-button>
                        </div>

                    </div> 
                </div> 
            </div> 
            
            
        </div> 
    </div> 
        
        
        
        
    </div>
</template>

<script>
export default {
    name: 'MenuItem',
    data() {
        return {
            
            foods: [
                {name: 'Momo',price: '120'},
                {name: 'Chowmein',price: '140'},
                {name: 'Sausage',price: '50'},
                {name: 'Burger',price: '100'},
                {name: 'Burger',price: '100'},
            ],
            cartObject: []
        }
    },
    
    methods: {
       
        addToCart (data) {
            console.log('adding to cart')
            this.$emit('addItemToCart', data)
            this.$emit('setComponentToLoad', 'cart')
        },
        

    }


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
.menuItem {
    /* float: left; */
    padding:  10px; ;
    /* width: 65%; */
    background-color: transparent;
    /* background: rgba(0, 0, 0, 0.5); */
    margin: 5px;
    min-height: 100%;
    
    
    
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




</style>template