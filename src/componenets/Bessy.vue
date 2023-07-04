<template>
  <div class="bg-bluegray-100 w-full h-screen"><br>
    <h1 class="flex justify-content-center mt-5">✨BeshyWaps!✨</h1>
    <div class="flex flex-column justify-content-center p-2 mt-3" >
      <div class="flex align-items-center">
    <TextArea
        class="w-full text-1 shadow-5"
        rows="5" cols="100"
        placeholder="Enter your text here..."
        v-model="textEdit"
    />
      </div>
      <br>
      <br>

      <div>
    <textarea

        id="copyThis"
        ref="text"
        class="w-full text-1 p-disabled text-2xl shadow-5"
        rows="5" cols="100"
        v-model="textCopy"
    ></textarea>

      </div>
      <div class="flex justify-content-center align-content-center">
        <CustomButton
            @click="copyTextArea"
            class="btn btn-primary mt-3 font-bold w-10rem justify-content-center
                    transition-colors transition-duration-200 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
            ">Copy Text!</CustomButton>
      </div>
      <br>
      <br>

      <div class="flex justify-content-center">
        <span>Created🤸by:🤸</span><a href="https://www.facebook.com/hack.pa.m0re">AldrinM.</a>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      textEdit: '',
    };
  },
  computed: {
    textCopy() {
      return this.textEdit.replace(/\s/g, '🤸');
    },
  },
  methods: {
    copyTextArea() {
      this.$refs.text.select();
      document.execCommand('copy');
    }
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
