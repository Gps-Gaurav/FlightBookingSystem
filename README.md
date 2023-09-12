# FlightBookingSystem
Microservices handles like searching
/
-src/
models/
controllers/
middleware/
services/
utils//
config/
-tests[later]
/


database
"development": {
    "username": "root",
    "password": "12345",
    "database": "Flight_BOOKING",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  ## db design 
  -airplane table
  -flight
  -airport 
  - city

  - a flight belongs to an airplane but one airplane can be used in multiple flights
  -a city has many airport but one airport to a city
  -one airport can have many  flight but a flight belongs to one airport