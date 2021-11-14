let api = "19000098-8dd18a1ece18fe19d80a7b2ee"


function ccc(e) {
	if(e.code == "Enter"){
		
		let val = document.getElementById("Bar").value
		hi(val)
	}
}
function hi(query) {
	fetch("https://pixabay.com/api/?key=19000098-8dd18a1ece18fe19d80a7b2ee&q="+query+"&image_type=photo&per_page=200&safesearch=true")
	.then(function (data){
		return data.json()

	})
	.then(data =>{ 
		let con = document.getElementById("y")
		con.innerHTML= ""
		data.hits.forEach(x => {
				let URL= x.webformatURL
				con.innerHTML += '<div class="gallery"> <a target="_blank" href='+URL+'> <img src='+URL+' alt="Cinque Terre" width="600" height="400"> </a> <div class="desc">Taken by '+x.user+' </div> </div>' 
				
				
				
				
		})
		
	})
}
function loaded() {
	fetch("https://pixabay.com/api/?key=19000098-8dd18a1ece18fe19d80a7b2ee&image_type=photo&per_page=200&editors_choice=true&safesearch=true")
	.then(function (data){
		return data.json()

	})
	.then(data =>{ 
		let con = document.getElementById("y")
		con.innerHTML= ""
		data.hits.forEach(x => {
				let URL= x.webformatURL
				con.innerHTML += '<div class="gallery"> <a target="_blank" href='+URL+'> <img src='+URL+' alt="Cinque Terre" width="600" height="400"> </a> <div class="desc">Taken by '+x.user+' </div> </div>' 
				
				
				
				
		})
		
	})
}
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}