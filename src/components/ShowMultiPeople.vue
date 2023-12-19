<template>
  {{ recommended }}
  <div class="main-show-people-container">
    <div class="number-container" @click="toggleButton">
      <div v-if="imageLength == 1">
        <div class="profile-image image-one">
          <img src="../assets/1.jpeg" alt="profile-image" />
        </div>

        <div class="text-container">
          <!-- bought by {{ recommended[0]?.userName }} -->
        </div>
      </div>
      <div v-else-if="imageLength == 2">
        <div class="profile-image image-one">
          <img src="../assets/1.jpeg" alt="profile-image" />
        </div>
        <div class="profile-image image-second">
          <img src="../assets/2.jpeg" alt="profile-image" />
        </div>

        <div class="text-container">
          <!-- bought by {{ recommended[0]?.userName }} -->
        </div>
      </div>
      <div v-else>
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
          <!-- bought by {{ recommended[0]?.userName }} and -->
          <!-- {{ recommended.length }} others... -->
        </div>
      </div>
    </div>
    <div v-if="isToggle" class="hidden-number-container">
      <div class="scroll-container">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import UserCard from "@/components/UserCard";

export default defineComponent({
  components: {
    UserCard,
  },
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

    return {
      isToggle,
      toggleButton,
      imageLength,
      recommended,
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
  width: 35px;
  height: 35px;
  margin-left: -12px;
}
.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
}

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
