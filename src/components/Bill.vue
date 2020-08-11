<template>
    <div class="sidebar " >
        <div>
            <b-card header-tag="header" footer-tag="footer">
                <template v-slot:header>
                    
                    <h3 >Station The Food </h3>
                    <h6 class="mb-0" style="text-align: center;">Food Item Bill </h6>
                </template>
                <b-card-text v-for="(value,index) in parentData" :key="index">{{value.name}} - {{value.price}}</b-card-text>
                
                <template v-slot:footer>
                    <em><b-button  variant="primary"> Print </b-button></em>
                </template>
            </b-card>  
            
            
        </div>
 
    </div>
</template>

<script>
export default {
    props: [
        'parentData'
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