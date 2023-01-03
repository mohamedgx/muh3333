class Appp{
    constructor(){
        this.images =[];
        this.images[0] = "imge/A.jpg";
        this.images[1] = "imge/B.jpg";
        this.images[2] = "imge/C.jpg";
        this.images[3] = "imge/E.jpg";
        
        // this.images[0].width="300";
        // this.images[1].width="300";
        // this.images[2].width="300";

        this.links=[];
        this.links[0] = "#";
        this.links[1] = "#";
        this.links[2] = "#";
      this.ab = 0;

this.moon();

      setInterval(()=>{
        this.moon();
      },2000);
    }
    moon(){
        if(this.ab< this.images.length - 1){
        this.ab++;
        }
        else{
            this.ab=0;
        }
        document.shadow.src = this.images[this.ab];
        document.getElementById("linking").href= this.links[this.ab];
    }
}
onload= new Appp();