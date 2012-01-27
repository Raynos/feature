gh-pages: 
	git checkout gh-pages
	git pull origin master
	git push origin gh-pages
	git checkout master

.PHONY: gh-pages
