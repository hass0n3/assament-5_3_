let diameter= 0
let area= 0
let circumference = 0
let radius = 0
let result = 0
let answer = 0
let square = 0

document.getElementById('button').addEventListener('click', funk)

function funk () {
	diameter = document.getElementById('D').value
	diameter = parseInt(diameter)
  circumference = diameter * Math.PI
	document.getElementById('c-1').innerHTML = circumference 
  radius = diameter / 2
  result = radius * radius
  answer = Math.PI * result
  document.getElementById('a-1').innerHTML
	square = document.getElementById('a-1').innerHTML
	document.getElementById('a-1').innerHTML = answer + '<sup>2</sup>'
}