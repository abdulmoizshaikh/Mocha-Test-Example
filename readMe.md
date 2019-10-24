add this in package.json
"scripts": {
    "test": "mocha"
}


for server testing first run the server

just type mocha and results will be conducted

to set the timeout manually 

mocha --timeout time-in-ms

if you use done with async await it will throw this error:
 1) test
       should resolve:
     Error: Resolution method is overspecified. Specify a callback *or* return a Promise; not both.
