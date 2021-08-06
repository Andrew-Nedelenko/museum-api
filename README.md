# museum-api

node version 14+

DEV SERVER (from project root path)
1. cd ./backend && npm i && npm run dev
2. cd ./frontend && npm i && npm start

PRODUCTION BUILD

cd ./backend && npm i && npm start
cd ./frontend && npm i (after that use any webserver nginx on port 3200 (origin requirement))

Description
We have one endpoint /api/v1/pic/:id/:format
id - image id
format - json by default (also available xml, csv)

Response example

{
    "objectID": 343,
    "primaryImage": "https://images.metmuseum.org/CRDImages/ad/original/132032.jpg",
    "rgb": "rgb(60, 60, 60)",
    "dominantColor": "none"
}
