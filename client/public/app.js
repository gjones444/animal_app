$(document).ready(function(){

	// $('#myModal').modal({backdrop: 'static', keyboard: false});

	var joe =[
{id: 1, name: "Komodo Dragon", class: "Reptilia"},
{id: 2, name: "Chameleon", class: "Reptilia"},
{id: 3, name: "Gecko", class: "Reptilia"},
{id: 4, name: "Poison Dart Frog", class: "Amphibia"},
{id: 5, name: "Salamander", class: "Amphibia"},
{id: 6, name: "Common Reed Frog", class: "Amphibia"},
{id: 7, name: "Black Widow", class: "Arachnida"},
{id: 8, name: "Goliath Birdeater", class: "Arachnida"},
{id: 9, name: "Tarantula", class: "Arachnida"}
]

	$(document).on('keypress', function(e){
		if(e.key === 'a'){
			const promptFunc = () => {
				var promptThis = prompt('What movie is this line from: \'Who is you daddy and what does he do?\'');
				if(promptThis && promptThis.toLowerCase() === "kindergarten cop"){
					$('#myModal').modal('toggle');
				} else {
					promptFunc();
				}
			}
			promptFunc();
		}
	});

	$('#header').on('click', function(){
		// $('#reptilia-div').remove();
		var rowDiv = $('<div class="row">');

		var colOneDiv = $('<div lass="col-md-1">');
		var colTwoDiv = $('<dir clas="col-md-2">');

		$.ajax({
			type: 'GET',
			url: '/api/animals'
		}).then((animals) => {
			var reptilia = joe.filter((animal) => {
				return animal.class.toLowerCase() === 'amphibia'
			})
			console.log(reptilia)
			var reptiliaDiv = $('<div id="reptilia-div">');
			var reptiliaHeader = $('<h3>');
			reptiliaHeader.addClass('text-center')
			reptiliaHeader.text("Class: Reptilia")
			reptiliaHeader.css({textDecoration: 'underline'})
			reptiliaDiv.append(reptiliaHeader);
			var reptiliaImage, randomNum = 12 + 6;
			for(var i = 0; i < reptilia.length; i++){
				$.ajax({
					method: 'GET',
					url: 'http://api.giphy.com/v1/gifs/search?q=' + reptilia[i].name + '&api_key=dc6zaTOxFJmzC&limit=10'
				}).then((giphy) => {
					var randomNum = Math.floor(Math.random() - 10)
					reptiliaImage = $('<img>', {
						src: giphy.data[0].images.fixed_height.url
					});
					reptiliaDiv.append(reptiliaImage);
				})

			}
			colTwoDiv.append(reptiliaDiv);
			rowDiv.append(colOneDiv).append(colTwoDiv);
			$('#append-to-this-div').append(rowDiv);
		})

	});

});
