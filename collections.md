---
layout: default
title: კოლექციები
active: collections
permalink: /collections/
---

<h1 class="uk-text-center uk-article-title">{{ page.title }}</h1>

<hr class="uk-margin-medium"/>

<div class="uk-grid" data-uk-grid-match>

    {% assign font_collections = site.font_collections | sort: 'priority' | reverse %}
    {% for collection in font_collections %}

      <div class="uk-width-1-1 uk-width-medium-1-2">

          <a href="{{ collection.url }}" class="uk-panel uk-panel-box uk-panel-box-secondary uk-panel-box-secondary-hover uk-panel-header uk-margin-large-top">
              <h3 class="uk-panel-title uk-panel-title-normal">{{ collection.title }}</h3>
              <p class="uk-text-truncate">
                 {{ collection.fonts | join: ', ' }}
              </p>
              <p class="uk-text-truncate">
                  კოლექციაში შესულია: {{ collection.fonts | size }} ვებ-ფონტი
              </p>
          </a>

      </div>
    {% endfor %}

</div>