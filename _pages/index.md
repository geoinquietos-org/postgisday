---
layout: default
permalink: /
---

<div class="frontpage_logo">
<img src="/assets/images/logo.png" alt="PostGIS Logo">
</div>

> Like [GIS Day](http://gisday.com/),
> [PostGIS](http://postgis.net/) day
> is a grassroots effort open
> to everyone and is a wonderful opportunity to let people
> know about mapping, spatial operations, and discuss with
> friends the deep impact that maps, digital or otherwise,
> have had on our global culture and society.

Source: [CARTO blog](https://carto.com/blog/happy-postgis-day/), 2012-11-15

## Share your experience

Do you know about a neat trick, resource or experience about PostGIS? Join our awesome group of [contributors](/contributors) and [share it](/submit/) with us and the world. Let's praise the power of SQL!


{% assign thisYear = 'now' | date: "%Y" %}
## {{ thisYear }}

<ul>
{% for post in site.posts %}
{% assign postYear = post.date | date: "%Y" %}
{% if thisYear == postYear %}
    <li><a href="{{ post.url }}">{{ post.title }}, {{post.author}} [{{ post.categories }}]</a></li>
{% endif %}
{% endfor %}
</ul>

## Contribute

Are you using PostGIS and maybe finding creative solutions, experimenting with
not so usual functions or just willing to interact with other PostGIS users
and developers? Then we encourage you to:

* Write about PostGIS on your blog and join the [PostGIS planet](http://planet.postgis.net)
* Join the PostGIS [users](https://lists.osgeo.org/mailman/listinfo/postgis-users)
  or [developers](https://lists.osgeo.org/mailman/listinfo/postgis-devel) mailing lists
* Track the `postgis` tag at [GIS Stack Exchange](https://gis.stackexchange.com/questions/tagged/postgis)
* Follow official [news announcements](http://postgis.net/news/)
* More options [here](http://postgis.net/development/)

## Join the conversation: <tt>#PostGISDay</tt>

Be part of the global conversation and post on your preferred social media network
using the <tt>#PostGISDay</tt> hashtag.

* [Fediverse](https://mastodon.social/tags/PostGISDay)
* [Linkedin](https://www.linkedin.com/feed/hashtag/?keywords=postgisday&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7003381598918246400&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_content%3Bk7v4TUngTFuRefqbvi4Beg%3D%3D)
* [TikTok](https://www.tiktok.com/tag/postgisday) has zero posts, who will be the first?
* [X](https://twitter.com/search?q=%23PostGISDay&f=live), formerly known as Twitter

