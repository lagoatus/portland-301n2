var projectData = [
  {
    title: 'BusMall Market Analysis',
    projectType: 'web app',
    contributor: 'James Smith',
    contributorUrl: 'https://github.com/JamesCSmithPDX/market-analysis-app',
    postDate: '2016-04-17',
    imgSrc: 'imgAssets/busmall.png',
    imgAlt: 'BusMall',
    projDescription: '<p>The problem domain was to build a market research tool that show user three images and they would vote on their favorite by clicking on the image.</p> <p>I used splice on the image array to keep from showing the user the same images consecutively. I also kept track of votes and displayed them in a chart via Canvasjs library.</p> <p>The scope changed to track all votes so a marketer could get results from "multiple" users. To accomplish this I implemented local storage and again used Canvasjs to show all the results in local storage in a bar chart.</p>'
  },
  {
    title: 'Pat\'s Salmon Cookies',
    projectType: 'web app',
    contributor: 'James Smith',
    contributorUrl: 'https://github.com/JamesCSmithPDX/cookie-stand',
    postDate: '2016-04-04',
    imgSrc: 'imgAssets/cookie-store.png',
    imgAlt: 'Pat\'s Salmon Cookies',
    projDescription: '<p>The problem domain was to build a web app that helps the owner of cookie store estimate the amount of ingredients he needs. I was given min and max customers per hour and average cookies bought per customer for each store.</p> <p>I built a simulator using random customer numbers between the moin and max customers per hour for each store. I multipled this by the average sale per customer.</p> <p>The sales simulations are displayed in a table dynamically generated on the web page via raw Javascript.</p> <p>I included a way for store owner Sam to add more stores as his business grows. There is a form woth an event listener that as for store name, hourly min and max customer visits, and average sales per customer. when Sam submits the informaiotn, a new row is added to the table with the new store simulaitons.</p>'
  },
  {
    title: 'Adventure Finders',
    projectType: 'site',
    contributor: 'James Smith, Cass Burt, Rikki Hansen',
    contributorUrl: 'http://rikkihansen.github.io/adventureFinders/',
    postDate: '2016-05-01',
    imgSrc: 'imgAssets/adventurefinders.png',
    imgAlt: 'Adventure Finders',
    projDescription: '<p>This was a final group project. I worked with Cass Burt and Rikki Hansen to build our site Adventure Finders. Our idea was to build a site where users can answer a series of fun questions so we could recommend a camping location for them.</p> <ul>The project had very open ended requirements:<li>Each person must make meaningful contributions in HTML, CSS, and JavaScript.</li> <li>Your web site must have at least 3 interlinked pages and clear navigation.</li> <li>Your web site must have at least 2 pages that accept and process user input.</li><li>Your web site\'s state must persist between page reloads.</li><li>Your web site must be deployed live on the Internet.</li></ul> <p>Most of our work was in raw JavaScript to build outr camp finder. We built an object construcotr and then objects for each of the camp sites. We built a questionairre to ask about the types of things that important to the user. The questions were used to filter our camp array. <p>I used Leafletjs mapping library with Mapbox to add show on the map where each campsite was located. As the camp aray was filtered we removed icons from the map. State was stored in local storage so that the user could leave and return to the same place in browser.</p> <p>I also added a form so users could add campgrounds to our site. This data is stored in local storage. We also included a "home" and "about" page to give the user informaiton about our service and ourselves.</p>'
  },
];