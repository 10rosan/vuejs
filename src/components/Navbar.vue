<template>
    <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand href="#" class="navHeader">Station The Food</b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item class="navItem" to="/home">Home</b-nav-item>
            <b-nav-item class="navItem" to="/about">About</b-nav-item>
            <b-nav-item class="navItem" to="/menu">Menu</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <!-- <b-navbar class="nav" type="dark" variant="dark" >
        <b-navbar-brand class="navHeader" href="#" > <b>Station The Food</b> </b-navbar-brand>
        <b-collapse is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="navItem" to="/home">Home</b-nav-item>
                <b-nav-item class="navItem" to="/about">About</b-nav-item>
                <b-nav-item class="navItem" to="/menu">Menu</b-nav-item>
            
            </b-navbar-nav>
        </b-collapse>
    </b-navbar> -->
    
</template>

<style scoped>


.navHeader {
    font-size: 2em;
    font-family: sans-serif;
    
    
}

.navItem {
    /* font-size: 10px; */
    padding: 15px;
    font-family: Cambria;
    
   
}

</style>
