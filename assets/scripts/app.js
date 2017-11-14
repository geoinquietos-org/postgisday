var vm = null;

document.addEventListener('DOMContentLoaded', function(){
    vm = new Vue({
        el: '#random_resource',
        data: {
            posts: posts,
            post: null
        },
        methods: {
            getRandomIntInclusive: function(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
            },
            getRandomPost: function(){
                var non_tweets = this.posts.filter(function(post){
                    return post.categories !== "twitter";
                });

                var index = this.getRandomIntInclusive(0,non_tweets.length - 1);

                return non_tweets[index];
            }
        }
    });

    vm.post = vm.getRandomPost();
});

/**
 * 

    new Vue({
        el : '#slides',
        data : {
            talks: [
                {
                    folder: '1605-siglibre-support',
                    title:  'How we do support',
                    event:  'SIG LIBRE 2016'
                },{
                    folder: '1609-data-services',
                    title:  'SQL all the things',
                    event:  'State of the Map 2016'
                },{
                    folder: '1610-dataservices',
                    title:  'Location Data Services',
                    event:  'CartoCamp 2016'
                },{
                    folder: '1612-postman',
                    title:  'Postman training',
                    event:  'Internal'
                },{
                    folder: '1703-zappa',
                    title:  'Creating proxies for non standard APIs',
                    event:  'Internal'
                },{
                    folder: '1704-cli',
                    title:  'How I use the command line',
                    event:  'Internal'
                },{
                    folder: '1708-foss4g-solutions',
                    title:  'Solutions Engineering at CARTO',
                    event:  'FOSS4G 2017'
                },{
                    folder: '1710-idemenorca',
                    title:  'Las nuevas fuentes de datos de localización',
                    event:  'Jornada IDE Menorca 2017'
                }                
            ]
        }
    });
 */