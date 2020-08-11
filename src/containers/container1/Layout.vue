<template>
    <b-container fluid="100%">
        <div>
            <Navbar />
            <div>
                
                <router-view></router-view>
            </div>
            <Footer />
        </div>
        
        
    </b-container>
    <!-- <div>
        <Navbar />
        <div>
            
            <router-view></router-view>
        </div>
        <Footer />
        
    </div> -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        Navbar,
        Footer
        
    }

}
</script>

<style>



</style>