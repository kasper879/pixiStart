# pixiStart
My first PIXI app, with a bouncing ball. 

## To run the Application 

     1. Clone the project 
     2. Go to the project 
     3. npm install 
     4. Server is running on a localhost:3000

## How the application works 

Apllication runs index.html, which has a reference to app.js and a stylesheets. <br/>
app.js is based on PIXI.js. 
Inside app.js, there is comments for each functionality.
### Highlights order app.js
    1. WebGLRenderer creates a scene for content.
    2. Create PIXI.Container where obejcts can be added ex. images. PIXI.Container makes it easier to manage all the objects.
    3. Load all the images and fire of function to start bouning the ball. 
    4. StartBounce function Runs with Pixi.Ticker() that runs an update loop, until it hit the requirements.  
    
## Built With

* PIXI.js
* HTML
* CSS

### Improvements

    * Better distribution of functions in app.js to other js. files, ex. startBounce() and reverseBounce()

## Author

* **Kasper Nielsen** 


     

