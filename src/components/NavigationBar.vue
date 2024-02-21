<template>
    <nav class="nav-bar">
      <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavigationBar'
}

</script>

<style scoped>
@media only screen and (max-width: 744px) {
    .nav-bar {
        position: fixed;
        width: 100%;
        height: 75px;
        background-color: #F6FBFB;
    }

    .hamburger {
        position: absolute;
        top: 50%;
        right: 20px; 
        transform: translateY(-50%);
        width: 26px;
        height: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
    }
    
    .line1, .line2, .line3 {
        width: 100%; 
        border: 2px solid #000000;
        border-radius: 4px;
    }
}
</style>