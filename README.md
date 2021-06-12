
* **URL**


###Login
  `POST` */login/*
  
*  **Body**
 
   ```javascript
        {
            "name":"bangjago",
            "password":"rahasia"
        }
<br>

* **Success Response:**

  * **Code:** 200 Success
    **Content:**
    ```javascript
        
       {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6ImJhbmdqYWdvIiwicGFzc3dvcmQiOiIkMmIkMTAkSHRINHFudERGTnpuNkxYODM3d0lYZXJQYndJazZDOGZsUHVGV2VjcDl6Ykx2cFVxNkFBSXEiLCJjcmVhdGVkQXQiOm51bGwsInVwZGF0ZWRBdCI6bnVsbCwiaWF0IjoxNjIzNDY3MDcwfQ.Z3WNyhpkqh2wQJJi5mAlm4ljVhT4PhVjumpeQi7qBng",
            "data": {
                "id": 3,
                "name": "bangjago",
                "password": "$2b$10$HtH4qntDFNzn6LX837wIXerPbwIk6C8flPuFWecp9zbLvpUq6AAIq",
                "createdAt": null,
                "updatedAt": null
        } 
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
## 🎯 API
* **URL**

<br>
###🟢Add movie to favourite list
  `POST` */movies/favourite*
  
*  **Body**
 
   ```javascript
        {
            "title":"batman"
        }
<br>

* **Success Response:**

  * **Code:** 200 Success
    **Content:**
    ```javascript
        {
            "movie": {
                "id": 8,
                "title": "batman",
                "user_id": 3,
                "updatedAt": "2021-06-12T03:22:53.249Z",
                "createdAt": "2021-06-12T03:22:53.249Z"
            },
            "status": "Succesfully add movie"
        }
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
###Get movie poster
  `GET` */movies/:movie-title*
*  **Header**
    `Authorization: Bearer {your_token}`
*  **URL Params**

   **❗Required:**
    
   `movie-title=[string]`


* **Success Response:**

  * **Code:** 200 Success
    **Content:**
    ```javascript
        {
            "title": "The Avengers",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        }
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
    OR
  * **Code:** 404 Not Found 
    **Content:**
    ```javascript
        {
            "msg": "Image poster not found"
        }
### 🟢Get users favourite movie
  `GET` */movies/favourite*
*  **Header**
    `Authorization: Bearer {your_token}`


* **Success Response:**

  * **Code:** 200 Success
    **Content:**
    ```javascript
        {
            "result": [
                {
                "title": "6 hari di guoa",
                "poster": "Movie not found!"
                },
                {
                "title": "6 hari di guoa",
                "poster": "Movie not found!"
                }
            ]
        }
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
  