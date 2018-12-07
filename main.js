var app = new Vue({
    el: '#bookData',
    data: {
        books: [],
        search: ''
    },
    created: function () {
        this.getData("https://api.myjson.com/bins/zyv02");
    },
    methods: {
        getData: function (url) {
            fetch(url, {
                    method: "GET",
                })
                .then(function (response) {
                    return response.json()
                })
                .then(function (json) {
                    app.books = json.books;
                    app.loader();
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        loader: function () {
            document.getElementById("loaderWrap").style.display = "none"
        }
    },
    computed: {
        filterData: function () {
            return this.books.filter(book => {
                return book.title.toLowerCase().includes(this.search.toLowerCase()) || book.description.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    }
});

$('[data-fancybox="images"]').fancybox({
    buttons: [
                    'slideShow',
                    'share',
                    'zoom',
                    'fullScreen',
                    'close'
                  ],
    thumbs: {
        autoStart: true
    }
});


window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
