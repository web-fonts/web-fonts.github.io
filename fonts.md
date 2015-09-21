---
layout: default
active: fonts
permalink: /fonts/
---

{% include header.html %}

<div id="uk-grid" class="uk-grid" data-uk-grid="{controls: '#filters', animation: false, duration: 0}">

  {% assign fonts = site.fonts | where: 'published', true | sort: 'title' | reversed %}
  {% for font in fonts %}

    <div data-title="{{ font.title | slugify }}" data-uk-filter="{% if font.transform == 1 %}uppercase{%else%}lowercase{%endif%},{{site.data.styles[font.style].slug}},{{ font.title }}" class="uk-width-1-1 uk-width-medium-1-2 uk-searchable">

        <a href="{{ font.url }}" class="uk-panel uk-panel-box uk-panel-box-secondary uk-panel-box-secondary-hover uk-panel-header uk-margin-large-top">

            <span class="uk-panel-badge">
                {% if font.version %}<span class="uk-badge uk-version">v{{ font.version }}</span>{% endif %}
                {% if font.new %}<span class="uk-badge uk-badge-danger">ახალი</span>{% endif %}
            </span>

            <h3 class="uk-panel-title">{{ font.title }}</h3>
            <h2 class="f-preview ff-{{ font.title | slugify }} uk-text-truncate">{{ site.preview_text }}</h2>
            <p class="uk-text-truncate">
            {% if font.style %}სტილი: <strong class="uk-text-bold">{{ site.data.styles[font.style].name }}</strong>{% endif %}{% if font.transform %}, <strong class="uk-text-bold">{{ site.data.transform[font.transform] }}.</strong> {% endif %}
            {% if font.author %}ავტორი: <strong>{{ site.data.authors[font.author].name }}</strong>{% endif %}
            </p>

        </a>

    </div>
  {% endfor %}

</div>
