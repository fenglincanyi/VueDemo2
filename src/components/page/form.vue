<template>
  <div class="formLayout">
    <h3 style="margin-bottom: 30px">表单示例</h3>
    <form>
      <div class="itemClass">
        <label>name</label>
        <input type="text" v-model="name"/>
      </div>

      <div class="itemClass">
        <label>desc</label><br/>
        <textarea style="margin-top: 10px; margin-left: 40px" rows="3" cols="50"></textarea>
      </div>

      <div class="itemClass">
        <input type="radio" id="man" value="man" v-model="sex"/>
        <label for="man">男</label>

        <input type="radio" id="woman" value="woman" v-model="sex"/>
        <label for="woman">女</label>

        <!--v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值。因为它会选择 Vue 实例数据来作为具体的值。
        你应该通过 JavaScript 在组件的 data 选项中声明初始值。-->
      </div>

      <div class="itemClass">
        <label>单选</label>
        <select v-model="singleSelect">
          <option disabled value="">请选择</option>
          <option>item1</option>
          <option>item2</option>
          <option>item3</option>
        </select>
      </div>

      <div class="itemClass">
        <label>多选</label><br/>
        <select style="margin-left: 40px; margin-top: 10px; width: 80px" multiple v-model="multiSelect">
          <option>item11</option>
          <option>item22</option>
          <option>item33</option>
          <option>item44</option>
        </select>
      </div>

      <el-form-item label="日期时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>


      <input class="btnClass" type="button" value="提交" @click="submit"/>
    </form>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        name: '',
        sex: 'man', // 默认选中 man
        singleSelect: '',
        multiSelect: []
      }
    },
    methods: {
      submit: function () {
        alert(this.name + '===' + this.sex + '===' + this.singleSelect + '===' + this.multiSelect)
      }
    }
  }
</script>
<style scoped>
  .formLayout {
    padding-top: 50px;
    padding-left: 100px;
    background-color: aquamarine;
  }

  .itemClass {
    margin-top: 20px;
  }

  .btnClass {
    background: #4db3ff;
    color: #fff;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #bfcbd9;
    padding: 10px 15px;
    border-radius: 4px;
    margin-left: 40px;
    margin-top: 50px;
  }
</style>
