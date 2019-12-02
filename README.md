RAHLI Sofiane / COMPAORE Yvan

# lab-3-leveldb

## Introduction

Creation of a basic app. You can have: 
-a get function to metrics module
-a route to get a metric
   -one of the metric: http://localhost:8082/metrics/metric:${key}:${m.timestamp}
Example: http://localhost:8082/metrics/metric:Sofiane:1384686660001 

   -all the metrics: http://localhost:8082/metrics

- a delete function to metrics module
- a route to delete a metric based on its key
 route like get one metric

## Requirements

This work is requiring familiarity with the JavaScript, TypeScript language and general knowledges in Web technologies. We can quote also knowledge about routes, modules and servers.  

## Bibliography/webography

No book is used nor required. Reliable information is gathered from wikis, GitHub, source codes and various blogs.

## Code

- folder dist with server.js file with the server creation, metrics.js for metrics, leveldb.js for leveldb.
- folder src with .ts files.
- folder public with folders css and js.
- folder views with files head.ejs, hello.ejs and home.ejs defining the style of pages.
- package.json file with our module declaration.
- nodemon.json file with our module declaration.
- tsconfig.json file to transform ts files on js files


-git clone https://github.com/sofianerahli/work_nodejs.git

-cd lab-3-leveldb
-npm start (to launch the code) 
-go to http://localhost:8082/metrics to display all the metric
- Specify the id of a metric as we write on introduction. 