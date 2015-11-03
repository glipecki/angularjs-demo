#!/bin/bash

# -H "Accept: application/json"
curl -X POST http://localhost:9000/api/v1/hello -H "Content-Type: application/json" -d 'Janek'
