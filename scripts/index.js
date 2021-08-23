<script>
class question{
constructor(question,answer){
this.question=question;
this.answer=answer;}
}
let myFlashcards=[];
myFlashcards.push(new question('What is the capital of China?'));
myFlashcards.push(new question('Who is the president of USA?'));
myFlashcards.push(new question('What is the name of your university?'));
	
 /*Create the question array*/

	let i=0;
 function button(){
	if(i<myFlashcards.length){
document.getElementById("question").innerHTML=myFlashcards[i].question;	
		 i++;
	 } else if(i==myFlashcards.length){
		 i=0;
document.getElementById("question").innerHTML=myFlashcards[i].question;
		 i++;
	 }
	 
 }/*Get the question displayed one at a time*/
	 
let answer=new Array();
answer.push("Beijing","Biden","CMU");
//Create the answer array//
	
function buttonClicked(event){
 document.getElementById("demo").innerHTML=answer;}
//Define the onlick event//
	
function check(){
	document.getElementById("alert").innerHTML='Click the question first';
 }//have the mouseover event and print a message to users//
</script>
 
