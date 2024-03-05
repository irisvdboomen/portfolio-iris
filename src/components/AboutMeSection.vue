<template>
<div class="about-page">
    <h2 class="about">About</h2>
    <div class="profile-image"></div>
    <div class="about-introduction">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem provident fugit amet et rem asperiores ea assumenda accusantium blanditiis ipsam natus eligendi distinctio ratione eos quod labore, doloribus earum delectus?
        </div>
        <div class="about-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio earum dolorum labore placeat nisi fuga, veritatis consectetur! Explicabo ex praesentium, dolores laboriosam atque adipisci voluptatem vel consequatur omnis cum, nulla voluptatibus iusto architecto consectetur mollitia natus incidunt, provident harum illo ratione iure quas voluptate eveniet. Animi, accusamus? Totam, illo beatae!
        </div>
    </div>
</template>

<script>
export default {
  name: 'AboutMeSection'
}
</script>

<style scoped>
@media only screen and (max-width: 744px) {
.about-page {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .about {
    margin: 40px 0 10px 0;
  }

  .profile-image {
    width: 136px;
    height: 136px;
    background-color: grey;
    border-radius: 70px;
    margin: 20px 0;
  }

  .about-introduction {
    width: 290px;
    margin: 20px 0 0 0;
    font-weight: bold
  }

  .about-text {
    width: 290px;
    margin: 10px 0 50px 0;
  }

}
</style>