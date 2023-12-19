<template>
  <div class="user-main-container">
    <div class="image-container">
      <!-- <img src="../assets/2.jpeg" alt="profile-image" /> -->
      <div class="initial-overlay">
        {{ userFirstName.charAt(0) }}
      </div>
    </div>
    <!-- <div class="image-container">
      <img src="../assets/1.jpeg" alt="user-image" class="friends-image" />
    </div> -->

    <div class="user-text-container">{{ userFirstName }}</div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    userName: {
      type: String,
      required: true,
    },
    userColor: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const userFirstName = computed(() => props.userName);
    const userColorFirst = computed(() => props.userColor);

    return {
      userFirstName,
      userColorFirst,
    };
  },
});
</script>

<style scoped>
.user-main-container {
  display: flex;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 1.5% 1.5%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  margin-right: 15px;
}

.initial-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px; /* Adjust the font size as needed */
  color: white; /* Customize the text color */
}
.image-container {
  width: 35px;
  height: 35px;
  position: relative;
  border-radius: 50px;
  background-color: lightslategray;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
}

.user-text-container {
  margin-left: 2%;
}
</style>
