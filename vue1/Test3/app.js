/**
 * Created by Administrator on 2017/3/5 0005.
 */
new Vue({
    el: '#app',
    data: {
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
        books: ''
    },
    methods: {
        addBook: function() {
            //计算书的id
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            //将input中的数据重置
            this.book = '';
        },
        delBook:function(book){
            console.log(1,this.book.id);
        }
    },
    // mounted: function () {
    //     this.$http.get('book.json',function (data) {
    //         console.log(1);
    //         this.$set(this,'books',data);
    //     });
    // },
    mounted: function(){
        this.$http.post('book.json',{
            params:{
            }
        }).then(
            function(response){
                console.log(response.data);//这里的数据没错
                this.$set(this,'books',response.data);
                console.log(this.books);//这里还是undefined
            },
            function(data){
                console.log("error");
            }
        );
    }

});
