<template>
  <!-- {{ recommended }} -->
  <div class="main-show-people-container">
    <div class="number-container" @click="toggleButton">
      <div v-if="imageLength == 1" class="sub-container">
        <div
          class="profile-image image-one"
          :style="{ backgroundColor: getRandomColor() }"
        >
          <!-- <img src="{{ recommended[0]?.url }}" alt="profile-image" /> -->
          <div class="initial-overlay">
            {{ recommended[0]?.userName.charAt(0) }}
          </div>
        </div>

        <div class="text-container">
          bought by {{ recommended[0]?.userName }}
        </div>
      </div>
      <div v-else-if="imageLength == 2" class="sub-container">
        <div
          class="profile-image image-one"
          :style="{ backgroundColor: getRandomColor() }"
        >
          <!-- <img src="../assets/1.jpeg" alt="profile-image" /> -->
          <div class="initial-overlay">
            {{ recommended[0]?.userName.charAt(0) }}
          </div>
        </div>
        <div
          class="profile-image image-second"
          :style="{ backgroundColor: getRandomColor() }"
        >
          <!-- <img src="../assets/2.jpeg" alt="profile-image" /> -->
          <div class="initial-overlay">
            {{ recommended[1]?.userName.charAt(0) }}
          </div>
        </div>

        <div class="text-container">
          bought by {{ recommended[0]?.userName }} and
          {{ recommended[1]?.userName }}
        </div>
      </div>
      <!-- <div v-else>
        <div class="profile-image image-one">
          <img src="../assets/1.jpeg" alt="profile-image" />
        </div>
        <div class="profile-image image-second">
          <img src="../assets/2.jpeg" alt="profile-image" />
        </div>
        <div class="profile-image image-third">
          <img src="../assets/3.jpeg" alt="profile-image" />
        </div>

        <div class="text-container">

        </div>
      </div> -->
    </div>
    <!-- <div v-if="isToggle" class="hidden-number-container">
      <div class="scroll-container">
        <UserCard v-for="user in recommended" :key="user.userId" :userName="user.userName" :userColor="getRandomColor()"/>
      </div>
    </div> -->
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
// import UserCard from "@/components/UserCard";

export default defineComponent({
  // components: {
  //   UserCard,
  // },
  props: {
    recomm: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    let isToggle = ref(false);

    const toggleButton = () => {
      console.log(isToggle);
      isToggle.value = !isToggle.value;
    };

    let imageLength = computed(() => props.recomm?.length);
    let recommended = computed(() => props.recomm);

    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    return {
      isToggle,
      toggleButton,
      imageLength,
      recommended,
      getRandomColor,
    };
  },
});
</script>
<style scoped>
.main-show-people-container {
  background-color: #ffffff;
  padding: 6%;
  margin-top: 35px;
}

.sub-container {
  display: flex;
}

.number-container {
  display: flex;
  background-color: white;
  border-radius: 13px;
  padding: 1.5% 1%;
  justify-content: flex-start;
  align-items: center;
  padding-left: 7%;
}
.profile-image {
  background-color: rgb(184, 125, 48);
  width: 46px;
  height: 35px;
  margin-left: -12px;
  position: relative;
  border-radius: 50%;
}

.initial-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px; /* Adjust the font size as needed */
  color: white; /* Customize the text color */
}
/* .profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
} */

.text-container {
  margin-left: 2%;
}

.hidden-number-container {
  background-color: white;
  margin-top: 2%;
  border-radius: 10px;
  padding: 2%;

  height: 350px;
  overflow-y: auto;
}
.scroll-container {
  max-height: 100%;
  overflow-y: auto;
}
</style>
