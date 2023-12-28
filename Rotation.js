  //Plane rotation component
  AFRAME.registerComponent("rover-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var roverRotation = this.data.speedOfRotation;      
        var roverPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (roverRotation.x < 10) {
            roverRotation.x += 0.08;
            this.el.setAttribute("position", roverRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (roverRotation.x > -10) {
            roverRotation.x -= 0.08;
            this.el.setAttribute("position", roverRotation);
          }
        }
        
      });
    }
  });
  
  