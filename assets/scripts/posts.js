---
layout: null
permalink: /assets/scripts/posts.js
---
var posts = [
{%for post in site.posts %}
  {
    "date" : "{{ post.date}}",
    "title": "{{ post.title}}",
    "url"  : "{{site.url}}/{{ post.url}}",
    "author": "{{ post.author }}",
    "author_twitter": "{{ post.author_twitter }}",
    "resource_url": "{{ post.resource_url }}",
    "categories" : "{{ post.categories }}",
    "image" : "{{ post.image }}",
    "content" : "{{ post.content | strip_html | strip | strip_newlines | escape}}"
  }{% unless forloop.last %}, {% endunless %}
{% endfor %}
]
