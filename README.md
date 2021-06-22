# Roulette API Rest


This is a project to implement a Roulete game using Node.js, Express.js and MongoDB.

### Install
Clone this project, And rebuild node modules
```
yarn install
```
Build .env file with environmet variables PORT and MONGO_URI.RUN mongo server.

Run Your server in your localhost
```
yarn start
```

**Create Roulette**
----
  Create a new Roulette on mongo database

* **URL**

  /roulete/create

* **Method:**
  
  `POST`
  
*  **URL Params**

   None 
  
* **Data Params**

  None

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{ rouletteId : "59d136f74412mm401e58d2x3" }`
 
* **Error Response:**
  

  * **Code:** 401 NOT FOUND <br />
    **Content:** `{ message : error }`

**Open Roulette**
----
  After the roulette is created we should to open to do any bet.

* **URL**

  /roulette/open/:rouletteId

* **Method:**
  
  `PUT`
  
*  **URL Params**

   rouletteId=[string] 
  
* **Data Params**

  None

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ message : "Succes operation" }`
 
* **Error Response:**
  

  * **Code:** 400 Bad Request <br />
    **Content:** `{ message : "something went wrong }`

**Do a bet**
----
  When any roulette is opend we could create a bet.

* **URL**

  /bet/create/:rouletteId

* **Method:**
  
  `POST`
  
*  **URL Params**

   rouletteId=[string] 
  
* **Data Params**

  None

* **Data Headers**
  
   **Required:**
 
   `userId=[string]`

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{ message : "bet created succesfully" }`
 
* **Error Response:**
  

  * **Code:** 400 Bad Request <br />
    **Content:** `{ message : "Roulette is closed!! }`

**Close roulette**
----
  Close roulette and generate the random states about number and color.

* **URL**

  /roulette/close/:rouletteId

* **Method:**
  
  `POST`
  
*  **URL Params**

   rouletteId=[string] 
  
* **Data Params**

  None

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{
    "winnerNumber": 21,
    "winnerColor": "BLACK",
    "results": [
        {
            "status": "LOSE",
            "earnings": 0,
            "bet": {
                "_id": "60d144876f330740e0ea69a8",
                "userId": "fdhdbn_35",
                "amount": 100,
                "betNumber": 3,
                "createdAt": "2021-06-22T02:01:43.905Z",
                "updatedAt": "2021-06-22T02:01:43.905Z",
                "__v": 0
            }
        },
        {
            "status": "LOSE",
            "earnings": 0,
            "bet": {
                "_id": "60d144a06f330740e0ea69ac",
                "userId": "fdhdbn_35",
                "amount": 200,
                "color": "RED",
                "createdAt": "2021-06-22T02:02:08.415Z",
                "updatedAt": "2021-06-22T02:02:08.415Z",
                "__v": 0
            }
        }
    ]
}`
 
* **Error Response:**
  

  * **Code:** 401 NOT FOUND <br />
    **Content:** `{ message : "Roulette not found!! }`

 **List Roulettes**
----
  List all rouleetes with all bets

* **URL**

  /roulette/list

* **Method:**
  
  `GET`
  
*  **URL Params**

   None 
  
* **Data Params**

  None

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{
        "state": false,
        "betIDs": [
            {
                "_id": "60cd1b8f3c92075eee2aa53d",
                "userId": "fdhdbn_35",
                "amount": 300,
                "betNumber": 15,
                "createdAt": "2021-06-18T22:17:51.268Z",
                "updatedAt": "2021-06-18T22:17:51.268Z",
                "__v": 0
            },
            {
                "_id": "60cd1d4a3c92075eee2aa541",
                "userId": "fdhdbn_35",
                "amount": 700,
                "color": "RED",
                "createdAt": "2021-06-18T22:25:14.304Z",
                "updatedAt": "2021-06-18T22:25:14.304Z",
                "__v": 0
            },
            {
                "_id": "60cd207f3c92075eee2aa546",
                "userId": "fdhdbn_35",
                "amount": 700,
                "betNumber": 36,
                "createdAt": "2021-06-18T22:38:55.912Z",
                "updatedAt": "2021-06-18T22:38:55.912Z",
                "__v": 0
            },
            {
                "_id": "60cd20fc3c92075eee2aa54b",
                "userId": "fdhdbn_35",
                "amount": 1,
                "betNumber": 2,
                "createdAt": "2021-06-18T22:41:00.491Z",
                "updatedAt": "2021-06-18T22:41:00.491Z",
                "__v": 0
            }
        ],
        "_id": "60cb84e6db5bd53a27b7ac22",
        "createdAt": "2021-06-17T17:22:46.081Z",
        "updatedAt": "2021-06-19T21:34:27.487Z",
        "__v": 4
    },
    {
        "state": false,
        "betIDs": [],
        "_id": "60cbcb2b3600781f6cdae3fd",
        "createdAt": "2021-06-17T22:22:35.459Z",
        "updatedAt": "2021-06-19T21:36:30.785Z",
        "__v": 0
    },
    {
        "state": false,
        "betIDs": [
            {
                "_id": "60d144876f330740e0ea69a8",
                "userId": "fdhdbn_35",
                "amount": 100,
                "betNumber": 3,
                "createdAt": "2021-06-22T02:01:43.905Z",
                "updatedAt": "2021-06-22T02:01:43.905Z",
                "__v": 0
            },
            {
                "_id": "60d144a06f330740e0ea69ac",
                "userId": "fdhdbn_35",
                "amount": 200,
                "color": "RED",
                "createdAt": "2021-06-22T02:02:08.415Z",
                "updatedAt": "2021-06-22T02:02:08.415Z",
                "__v": 0
            }
        ],
        "_id": "60cd21a3f559a46418f5fa91",
        "createdAt": "2021-06-18T22:43:47.652Z",
        "updatedAt": "2021-06-22T02:02:28.769Z",
        "__v": 2
    },
    {
        "state": true,
        "betIDs": [],
        "_id": "60cd21e0566aec6445c8056d",
        "createdAt": "2021-06-18T22:44:48.015Z",
        "updatedAt": "2021-06-18T22:47:31.633Z",
        "__v": 0
    },
    {
        "state": false,
        "betIDs": [],
        "_id": "60d136e98812cc401e58d2b7",
        "createdAt": "2021-06-22T01:03:37.306Z",
        "updatedAt": "2021-06-22T01:03:37.306Z",
        "__v": 0
    },
    {
        "state": false,
        "betIDs": [],
        "_id": "60d1375b8812cc401e58d2b9",
        "createdAt": "2021-06-22T01:05:31.690Z",
        "updatedAt": "2021-06-22T01:05:31.690Z",
        "__v": 0
    }
]`
 
* **Error Response:**
  

  * **Code:** 401 NOT FOUND <br />
    **Content:** `{ message : "Roulettes request present some error }`
 

