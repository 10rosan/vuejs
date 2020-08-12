<template>
  <!-- <div class="menuItem"> -->
    
    <!-- <div class="container">  -->
        <div class="card border-dark " v-if="item" > 
            <img class="card-img-top" src="../assets/logo.png" alt="" style="height:200px;"> 
  
            <div class="card-body bg-dark text-light"> 
                <h5 class="card-title"> {{ item.name }}</h5> 
                <p class="card-text"> 
                    Price: {{ item.price }} 
                    <b-form-spinbutton class="btn-sm" v-model="numberOfItem" id="demo-sb" min="1" max="100"  style="float: right;" inline></b-form-spinbutton>
                </p> 
                <br>
                <div style="display: flex; justify-content: center;">
                    <b-button class="btn-success btn-sm"   @click="addToCart">Add Cart</b-button>
                </div>

            </div> 
        </div>    
    <!-- </div> 
         -->
        
        
        
    <!-- </div> -->
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            numberOfItem: 1
        }
    },
    
    methods: {
       
        addToCart () {
            console.log('adding to cart')
            let selectedItem = {
                name: this.item.name,
                price: this.item.price,
                quantity: this.numberOfItem
            }
            this.$emit('addItemToCart', selectedItem)
            this.numberOfItem = 0
            this.$emit('setComponentToLoad', 'cart')
        },
        

    }


}


    


</script>

<style scoped>

.menuItem {
    /* float: left; */
    padding:  10px; ;
    /* width: 65%; */
    background-color: transparent;
    /* background: rgba(0, 0, 0, 0.5); */
    margin: 5px;
    
    /* min-height: 100%; */
    
    
    
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