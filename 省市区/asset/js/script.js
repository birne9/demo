const { createApp } = Vue;
const App = {
    data() {
        return {
            showBottom:true,
            tempArr:area,
            province:{},
            city:{},
            area:{},
            areaArr:[],
            index:1,
        };
    },
    methods: {
        // 打开对话框
        openArea() {
            this.showBottom=true
        },
        // 关闭对话框
        closeArea() {
          
        },
        select(item,index){
            if(index===1){
                this.province=item
                this.index=index+1
                this.areaArr=item.subcollection
            }
            if(index===2){
                this.city=item
                this.index=index+1
                this.areaArr=item.subcollection
            }
            if(index===3){
                this.area=item
            }
           
           
            console.log(item,'item')
        }
    },
    mounted() {
        this.areaArr=this.tempArr
        console.log(area,'area')
    },
};

const app=createApp(App)
app.use(vant);
app.mount('#app');