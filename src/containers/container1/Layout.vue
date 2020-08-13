<template>
    <b-container fluid="100%">
        <Navbar />        
            <div>
                <router-view></router-view>
            </div>
        
        <Footer />
        
        
    </b-container>
    
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