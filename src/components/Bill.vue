<template>
    <div class="sidebar " >
        <div>
            <b-card header-tag="header" footer-tag="footer">
                <template v-slot:header>
                    
                    <h3 >Station The Food </h3>
                    <h6 class="mb-0" style="text-align: center;">Food Item Bill </h6>
                </template>
                <b-card-text v-for="(value,index) in parentData" :key="index">{{value.name}} - {{value.quantity}}</b-card-text>
                <hr>
                <div style="background-color:gray; border: 2px solid black; padding: 5px; margin:0; color: white;" >
                   <span>
                       Total Amount: {{totalPrice}}
                    </span> 
                </div>
                
                
                <template v-slot:footer>
                    <em><b-button  variant="primary"> Print </b-button></em>
                </template>
            </b-card>  
            
            
        </div>
 
    </div>
</template>

<script>
export default {
    computed: {
        totalPrice() {
            return this.parentData.reduce((acc, item) => acc + item.price * item.quantity, 0);
        }
    },
    props: [
        'parentData',
    ],
    

}
</script>

<style  scoped>
.sidebar {
    
    margin-top: 25%;
    margin-left: 5px ;
   
    
}
.sidebar h3{
    text-align: center;
}




</style>