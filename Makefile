SHELL := /bin/bash
BUNDLE := bundle
JEKYLL := $(BUNDLE) exec jekyll

PROJECT_DEPS := Gemfile package.json

.PHONY: serve build clean

serve:
	JEKYLL_ENV=production $(BUNDLE) exec $(JEKYLL) serve  --incremental --port 8000

clean:
	$(BUNDLE) exec $(JEKYLL) clean

build:
	$(BUNDLE) exec $(JEKYLL) build

