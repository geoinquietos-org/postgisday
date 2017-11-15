document.addEventListener('DOMContentLoaded', function(){
    var vm = new Vue({
        el: '#random_resource',
        data: {
            posts: posts,
            post: null //will be setted later
        },
        methods: {
            setPost: function(){
                // Remove tweets
                var non_tweets = this.posts.filter(function(post){
                    return post.categories !== "twitter";
                });
                // Return any randomly
                this.post = non_tweets[Math.floor(Math.random() * non_tweets.length)];
            }
        }
    });
    //vm.post = vm.getRandomPost();
});
