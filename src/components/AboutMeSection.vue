<template>
  <div class="about-page" id="about">
    <h2 class="about">About me</h2>
    <div class="content-container">
      <div class="profile-image">
      <img src="#" alt=""></div>
      <div class="text-content">
        <div class="about-introduction">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id error dolor ipsam cumque optio, nobis beatae saepe ipsum, magni aliquam totam deserunt. Aliquam quo impedit earum facilis delectus animi!
        </div>
        <div class="about-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores alias voluptate animi quod ullam dolorem hic reiciendis cum aperiam consequuntur! Quibusdam nesciunt harum itaque modi ea veniam. Nam, accusantium nisi!
          Dolor corrupti asperiores ratione laudantium, nemo pariatur culpa autem! Quidem, laudantium aliquam! Nam optio facilis incidunt perferendis quia error amet, hic nobis aliquid libero natus repellendus ullam numquam tempore animi?
          Unde sapiente totam ex, placeat, qui consequatur eaque vitae doloremque autem accusamus corporis deleniti culpa tempore quaerat amet quo inventore, praesentium soluta repudiandae iste nemo! Est vitae voluptatem nam tempora!
          Tempora, assumenda quam praesentium similique accusamus nisi atque molestias voluptatibus consectetur, voluptate laudantium nihil maiores blanditiis, omnis necessitatibus doloremque quasi velit sapiente labore! Assumenda fuga sint veniam eius. Laboriosam, fugit.
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutMeSection'
}
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 100vh;
  padding-top: 100px;
}

.about {
  margin-top: 40px;
  margin-bottom: 20px;
  padding-left: 80px;
}

.content-container {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  flex-direction: row-reverse;
}

.profile-image {
  margin: 20px;
  width: 30%;
  display: flex;
  justify-content: center;
}

.profile-image img {
  background-color: grey;
  border-radius: 50px;
  width: 236px; 
  height: 300px; 
}

.text-content {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 70%;
  padding-left: 80px;
}

.about-introduction, .about-text {
  margin-bottom: 20px; 
}

.about-introduction {
    font-weight: bold;
  }

@media only screen and (max-width: 744px) {
  .about-page {
    flex-direction: column;
    align-items: center;
    /* padding: 40px 20px; */
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .about {
    text-align: center;
    margin: 40px 0 10px 0;
    padding-left: 0;  
  }

  .profile-image {
    margin: 20px 0;
    width: 100%;
  }

  .profile-image img {
    width: 136px;
    height: 136px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  .text-content {
    width: 100%;
    padding-left: 0;
    text-align: left;
    display: flex;
    justify-content: center;
  }

  .about-introduction, .about-text {
    margin-top: 10px;
    width: 100%;
    padding: 0 40px;
  }
}
</style>