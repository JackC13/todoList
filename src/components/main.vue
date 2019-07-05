<template>
  <div class="main-block">
    <div class="block">
      <div class="input-block">
        <div>我是箭頭</div>
        <input v-model="item.desc" type="text" @keyup.enter="enter()"/>
      </div>
      <div class="item-block">
        <template v-for="item in items">
          <app-item :item="item" :key="item.id"></app-item>
        </template> 
      </div>
      <div class="toolbar" v-show="items.length > 0">
        <span>{{items.length}}  items left</span>
        <ul>
          <li :class="{isSelect:filter==1}" @click="setFilter(1)">All</li>
          <li :class="{isSelect:filter==2}" @click="setFilter(2)">Active</li>
          <li :class="{isSelect:filter==3}" @click="setFilter(3)">Completed</li>
        </ul>
        <span>Clear Complete</span>
      </div>
    </div>
  </div>
</template>

<script>
import appItem from './item.vue'


export default {
  data(){
    return{
      item:{
        id:"",
        desc:"",
        isActive:"",
        isComplete:""
      },
      filter:1
    }
  },
  components:{
    appItem
  },
  methods:{
    enter(){
      if(this.item.desc !== ""){
        let max;
        if (this.items.length === 0) {
          max = 1;
        } else {
          max = this.items[this.items.length - 1].id + 1;
        }
        this.item.id=max;
        this.isActive="N";
        this.isComplete="N";

        this.$store.dispatch("actions_addItem",this.item);
        // this.items.push(this.item);
  
        this.item={
          id:"",
          desc:"",
          isActive:false,
          isComplete:false
        };
      }
    },
    setFilter(num){
      this.filter = num;
    }
  },
  computed:{
    items(){
      switch(this.filter){
        case 1:
          return this.$store.getters.getters_items;
          break;
        case 2:
          return this.$store.getters.getters_items.filter((v,i,a)=>{
            return v.isComplete == false;
          })
          break;
        case 3:
          return this.$store.getters.getters_items.filter((v,i,a)=>{
            return v.isComplete == true;
          })
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-block{
  display: flex;
  flex-direction: column;
  align-items: center;
  .input-block {
    display:flex;
  }

  .toolbar{
    display: flex;
    align-items: center;
    ul{
      display: flex;
      li{
        cursor: pointer;
        margin-right:20px;
        list-style: none;

        &.isSelect{
          border: 1px solid red;
        }
      }
    }
  }
}

</style>
