all: build test

gh-pages: 
	git checkout gh-pages
	git pull origin master
	git push origin gh-pages
	git checkout master

build:
	node build.js

test: 
	firefox test/test.html

.PHONY: gh-pages build test
