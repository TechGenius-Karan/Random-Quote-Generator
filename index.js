let quotes = ["The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success doesn’t come to you, you go to it.", "Life is like a box of chocolates, you never know what you're going to get",
  "If you are going through hell, keep going.",
  "If at first you don't succeed, try, try again.",
  "Life is about making an impact, not making an income."

]

function newQuote() {
	let quoteIndex = Math.floor(Math.random() * quotes.length)
	document.getElementById("quote").innerHTML = '"' + quotes[quoteIndex] + '"';
}