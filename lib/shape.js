
class Shapes {
    constructor(shapecolor, text, textcolor) {
    
    this.shapecolor = shapecolor;
    
    this.text = text;
    
    this.textcolor = textcolor;
    // this.shape = [];
 }

geometry(){
    console.log('blue', 'SVG', 'white')
    
}
}
class Triangle extends Shapes {
    constructor(shapecolor, text, textcolor){
      
        this.shapecolor= shapecolor;
        this.text= text;
         this.textColor= textcolor;
    }

    generateSVG(){
      return  `<?xml version="1.0" standalone="no"?>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       
         <polygon points="210,10 150,210 100, 210" style=fill="${this.shapecolor}"/>
       
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
       </svg>`  
    }
    }
class square{
    constructor(shapecolor, text, textcolor){
       this.shapecolor= shapecolor;
       this.text= text;
        this.textColor= textcolor;

    }
generateSVG(){
    return `<?xml version="1.0" standalone="no"?>
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   
    <rect width="400" height="100"style="fill:${this.shapecolor} />
   
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    
}
}
class circle{
    constructor(shapecolor, text, textcolor){
        this.shapecolor= shapecolor;
       this.text= text;
        this.textColor= textcolor;
}
generateSVG(){
    return `<?xml version="1.0" standalone="no"?>
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/>
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
}
}