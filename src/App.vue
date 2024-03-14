<template>
  <div id="app">
    <el-container>
      <el-header>校史校情竞赛</el-header>
      <el-main>
        <el-form ref="quizForm" :model="quizForm" label-width="120px">
          <el-form-item
            v-for="(question, index) in questions"
            :key="index"
            :label="'问题 ' + (index + 1)"
          >
            <el-radio-group v-model="quizForm.answers[index]">
              <el-radio
                v-for="option in question.options"
                :key="option"
                :label="option"
              >{{ option }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitQuiz">提交答案</el-button>
            <el-button @click="resetQuiz">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';

export default {
  name: 'App',
  data() {
    return {
      // 存储问题和答案的数据结构
      questions: [
        {
          title: '校园的创建年份是？',
          options: ['1920', '1930', '1950', '2000'],
        },
        // 可以继续添加更多问题
      ],
      quizForm: {
        answers: [], // 存储用户的答案
      },
    };
  },
  methods: {
    // 提交答案的方法
    submitQuiz() {
      // 这里你可以替换成你的提交答案的后端 API 地址
      const api = '/api/submit-answers';
      axios
        .post(api, this.quizForm.answers)
        .then(() => {
          this.$message.success('答案提交成功！');
        })
        .catch(error => {
          this.$message.error('答案提交失败：' + error.message);
        });
    },
    // 重置答题表单
    resetQuiz() {
      this.$refs.quizForm.resetFields();
    },
  },
  created() {
    // 初始化答案数组
    this.quizForm.answers = new Array(this.questions.length).fill('');
  },
};
</script>

<style>
/* 添加一些基本样式 */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

el-header {
  background-color: #b3c0d1;
  color: #333;
  padding: 20px;
  font-size: 24px;
}
</style>