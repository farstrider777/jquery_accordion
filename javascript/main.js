/*
This paragraph is to demonstrate a short paragraph.
Basically we want this to work no matter the size.

This paragraph is to demonstrate a long paragraph.
For this paragraph we will want to put some filler
text. Basically some text to make this longer.
I mean way longer than some of those other silly
paragraphs. This is like the mack daddy of paragraphs.
Are we done yet with it? Not quite we want to it be a
little longer. Ok done!

This is our medium paragraph. Not to long not too short
basically it is meant to be just right. It has to be
a little longer than our short paragraph. But not
as long as our short paragraph.
*/

var section = document.querySelectorAll('section')

section[0].addEventListener("mouseover", expandBox);
section[1].addEventListener("mouseover", expandBox);
section[2].addEventListener("mouseover", expandBox);

function expandBox(event){
  var target = event.target;
  console.log(event.target);
  console.log("whoot we've been moused over")
}
