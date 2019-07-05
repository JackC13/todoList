<template>
  <div class="item">
    <div class="item-block" :class="{isSelect:isSelect}" >
      <div class="circle" @click="select()"></div>
      <span class="desc">{{ inItem.desc }}</span>
    </div>
    <div class="X" @click="del()">
      <span>X</span>
    </div>
  </div>
</template>

<script>
export default {
  props:["item"],
  data(){
    return{
      inItem:{},
      isSelect:false
    }
  },
  methods:{
    del(){
      this.$store.dispatch("actions_delItem",this.inItem.id);
    },
    select(){
      console.log("select");
      if(this.isSelect){
        this.isSelect = false;
      }
      else{
        this.isSelect = true;
      }
      this.$store.dispatch("actions_setComplete",{id:this.inItem.id,bool:this.isSelect});
    }
  },
  created(){
    this.inItem = this.item;
  }
}
</script>

<style lang="scss" scoped>
  .item{
    display: flex;
    align-items: center;
    border: 1px solid #eeeeee;
    .item-block{
      display: flex;
      align-items: center;
      margin-right:auto; 
      .circle{
        cursor: pointer;
        height: 50px;
        width: 50px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
      }
      &.isSelect{
        .circle{
          height: 50px;
          width: 50px;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');

        }
        .desc{
          color:#eeeeee;
          text-decoration:line-through;
        }
      }
    }
    .X{
      cursor: pointer;
      display: none;
      padding-right:10px; 
      span{
        color: red;
      }
    }

    &:hover{
      .X{
        display: block;
      }
    }
  }
</style>


