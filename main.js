/* const TypeWriter = function(txtElement,words,wait=500){
    this.txtElement= txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;

}

// type method
TypeWriter.prototype.type = function() {


    // current Index of word
const current = this.wordIndex % this.words.length;

// getting full text of current word
const fullTxt = this.words[current];

// check if deleting

if(this.isDeleting){
// Remove character
    this.txt = fullTxt.substring(0,this.txt.length-1)
}else {
// Add the characters
    this.txt = fullTxt.substring(0,this.txt.length+1)
}

// insert txt into element
this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

// Initial Type speed
let typeSpeed = 100;
if (this.isDeleting) {
    typeSpeed /= 2;
}

// If word is complete
if(!this.isDeleting && this.txt === fullTxt){
    // This will make a pause at the end
    typeSpeed = this.wait;
    // set Deleting to true
    this.isDeleting = true;

}else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false;
    // Move to the next word
    this.wordIndex++;

    // Pause before start typing
    typeSpeed = 500;


}
    setTimeout(() => this.type(),500,typeSpeed);
} */

// ES6 class

class TypeWriter {
    constructor(txtElement,words,wait=500) {
        this.txtElement= txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;    
    }
    type() {


    // current Index of word
    const current = this.wordIndex % this.words.length;

    // getting full text of current word
    const fullTxt = this.words[current];
    
    // check if deleting
    
    if(this.isDeleting){
    // Remove character
        this.txt = fullTxt.substring(0,this.txt.length-1)
    }else {
    // Add the characters
        this.txt = fullTxt.substring(0,this.txt.length+1)
    }
    
    // insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
    // Initial Type speed
    let typeSpeed = 100;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }
    
    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        // This will make a pause at the end
        typeSpeed = this.wait;
        // set Deleting to true
        this.isDeleting = true;
    
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // Move to the next word
        this.wordIndex++;
    
        // Pause before start typing
        typeSpeed = 500;
    
    
    }
        setTimeout(() => this.type(),500,typeSpeed);
    }
}

// init on DOM Load
document.addEventListener('DOMContentLoaded',init);

// Init the app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Initialize typewriter
    new TypeWriter(txtElement,words,wait);

}