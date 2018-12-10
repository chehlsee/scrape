# Scrape 
Technologies used: Express, Express-handlebars, Mongoose, Cheerio, and Axios.

## Description
In this assignment users are able to view and leave comments on the latest news. Using Mongoose and Cheerio to scrape news from Vice.com. Whenever a user visits this site, the app will scrape stories from Vice.com and display them on the page for the user. Each of the scraped articles are saved to an application database. The scrape app will display the following information for each article:
  * Headline - the title of the article
  * SUmmary - a short summary of the article
  * URL - the url to the original article
  * Photo

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:chehlsee/scrape.git
	
Next, install the application dependencies.

	cd scrape
	npm install
  
  * npm init
  * npm install express
  * npm install express=handlebars
  * npm install mongoose
  * npm install cheerio
  * npm install axios
	
Finally, run this command in your Terminal/Bash window:

	heroku addons: create mongolab
	
Now, open the application using URL: `  `.
