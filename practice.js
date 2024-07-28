var a = 50;
const appleOnTheTree={
  a : 100,
  print1:function(){
    console.log(this.a)
  },
  print2:()=>{
    console.log(this.a)
  },
  print3:function(){
    (()=>{
    console.log(this.a)
    })()
  }
}

appleOnTheTree.print1()
appleOnTheTree.print2()
appleOnTheTree.print3()
