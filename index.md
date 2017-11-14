---
layout: default
---

<div style="float:right;margin-left:15px;">
<img src="/assets/images/logo.png" alt="PostGIS Logo">
</div>

> Like [GIS Day](http://gisday.com/),
> [PostGIS](http://postgis.net/) day
> is a grassroots effort open
> to everyone and is a wonderful opportunity to let people
> know about mapping, spatial operations, and discuss with
> friends the deep impact that maps, digital or otherwise,
> have had on our global culture and society.</p>

Source: [CARTO blog](https://carto.com/blog/happy-postgis-day/)

## Share your experience

Do you know about a neat trick, resource or experience about PostGIS?
[Share it](/submit/) with us and the world and praise the power of SQL!

<h2 name="random">Random resource</h2>

{% raw %}
<div id="random_resource">
  <div v-if="post">
    <p id="resource-bottom">
    You can check and share <a :href="post.url" :alt="post.title">this resource</a>, browse  <a href="/resources">our archive</a>    
    or <a href="#random" v-on:click="post = getRandomPost()">try another</a>.
    </p>
    <div v-if="post.image">
      <div class="post-center">
          <a :href="post.url">
              <img :src="post.image" :alt="post.title">
          </a>
      </div>
    </div>
    <div v-else class="post-center">
          <p><a :href="post.resource_url">
              {{post.title}}
          </a></p>
    </div>
  </div>

</div>
{% endraw %}

<script src="https://vuejs.org/js/vue.min.js"></script>
<script src="/assets/scripts/posts.js"></script>
<script src="/assets/scripts/app.js"></script>



## Contribute

Are you using PostGIS and maybe finding creative solutions, experimenting with
not so usual functions or just willing to interact with other PostGIS users
and developers? Then we encourage you to:

* Write about PostGIS on your blog and join the [PostGIS planet](http://planet.postgis.net)
* Join the PostGIS [users](https://lists.osgeo.org/mailman/listinfo/postgis-users) 
  or [developers](https://lists.osgeo.org/mailman/listinfo/postgis-devel) mailing lists
* Track the `postgis` tag at [GIS Stack Exchange](https://gis.stackexchange.com/questions/tagged/postgis)

## Join the conversation: `#PostGISDay`

Be part of the global conversation and tweet using the
[`#PostGISDay`]("https://twitter.com/search?q=%23PostGISDay)
hashtag.

<a class="twitter-timeline"
    data-widget-id="535054119762149376"
    href="https://twitter.com/hashtag/PostGISDay"
    data-theme="dark"
    data-link-color="#b5e853"
    data-related="twitterapi,twitter"
    data-aria-polite="assertive"
    data-chrome="transparent noheaders noborders"
    width="650"
    height="850">#PostGISDay Tweets</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
