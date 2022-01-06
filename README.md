# HistologyDB-API 🧠

API made for the histology metadata project

## How to run
 - Install all the node dependencies and run `npm start` on your terminal and you're good to go, the web-app should be running at `localhost:7000`
 - To connect to your DB, replace the `mongoURL` in *index.js* with your mongo database URL.

## Routes

 - How to use the routes set up(as of now)

*GET* =>  `localhost:7000/collections/zillesHuman` : <br/>
Will fetch list of all entries under Zilles-Human collections, similar for `/stephan` and `/zillesAnimal`

 - To query entries

*GET* => `/collections/zillesAnimal?planeOfSectioning=coronal&order=marsupalia` : <br/>
          Will fetch list of all entries under Zilles-Human collections with **coronal** plane of sectioning and of order **maruspalia**

(similar queries can be exectued for other collections and futher for other keys, for instance, distance and staining)
