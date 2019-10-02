#!/bin/bash

mongoimport --host mongodb --db exercices --collection neighborhoods --drop --file /bdd/neighborhoods.json
mongoimport --host mongodb --db exercices --collection restaurants --drop --file /bdd/restaurants.json 
