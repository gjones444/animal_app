$(document).ready(function() {

  // $('#myModal').modal({backdrop: 'static', keyboard: false});

  var test =[
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

	var arr = [];

  $(document).on('keypress', function(e) {
    if (e.key === 'a') {
      const promptFunc = () => {
        var promptThis = prompt('What movie is this line from: \'Who is you daddy and what does he do?\'');
        if (promptThis && promptThis.toLowerCase() === "kindergarten cop") {
          $('#myModal').modal('toggle');
        } else {
          promptFunc();
        }
      }
      promptFunc();
    }
  });

  $('#header').on('click', function() {
    $('#reptilia-div').remove();
    var rowDiv = $('<div class="row">');

    var colOneDiv = $('<div class="col-md-4">');
    var colTwoDiv = $('<div class="col-md-4">');
    var colThreeDiv = $('<div class="col-md-4">');

    $.ajax({
      type: 'GET',
      url: '/api/reptilia',
    }).then((animals) => {
      var reptilia = test.filter((animal) => {
        return (animal.class.toLowerCase() === 'reptilia');
        // return animal.class.toLowerCase() === 'amphibia'
      })
      console.log(reptilia)
      var reptiliaDiv = $('<div id="reptilia-div">');
      var reptiliaHeader = $('<h3>');
      reptiliaHeader.addClass('text-center')
      reptiliaHeader.text("Class: Reptilia")
      reptiliaHeader.css({
        textDecoration: 'underline'
      })
      reptiliaDiv.append(reptiliaHeader);
      var reptiliaImage, randomNum = (12 + 6);
      for (var i = 0; i < reptilia.length; i++) {
        $.ajax({
          method: 'GET',
          url: 'http://api.giphy.com/v1/gifs/search?q=' + reptilia[i].name + '&api_key=dc6zaTOxFJmzC&limit=10'
        }).then((giphy) => {
        	randomNum = Math.floor(Math.random() * 10)
					console.log(randomNum)
          reptiliaImage = $('<img>', {
            src: giphy.data[randomNum].images.fixed_height.url
          });
          reptiliaDiv.append(reptiliaImage);
        })

      }

      colOneDiv.append(reptiliaDiv);
      rowDiv.append(colOneDiv);
      $('#append-to-this-div').append(rowDiv);
    });

    $('#amphibia-div').remove();
    var secondRowDiv = $('<div class="row">');
    $.ajax({
      type: 'GET',
      url: '/api/animals'
    }).then((animals) => {
      var amphibia = test.filter((animal) => {
        return animal.class.toLowerCase() === 'amphibia'
      })
      console.log(animals)
      var amphibiaDiv = $('<div id="amphibia-div">');
      var amphibiaHeader = $('<h3>');
      amphibiaHeader.addClass('text-center')
      amphibiaHeader.text("Class: Amphibia")
      amphibiaHeader.css({
        textDecoration: 'underline'
      })
      amphibiaDiv.append(amphibiaHeader);
      var amphibiaImage, randomNum = 12 + 6;
      for (var i = 0; i < amphibia.length; i++) {
        $.ajax({
          method: 'GET',
          url: 'http://api.giphy.com/v1/gifs/search?q=' + amphibia[i].name + '&api_key=dc6zaTOxFJmzC&limit=10'
        }).then((giphy) => {
          var randomNum = Math.floor(Math.random() * 10)
          amphibiaImage = $('<img>', {
            src: giphy.data[randomNum].images.fixed_height.url
          });
          amphibiaDiv.append(amphibiaImage);
        })

      }

      colTwoDiv.append(amphibiaDiv);
      rowDiv.append(colTwoDiv);
      $('#append-to-this-div').append(rowDiv);
    })


    $('#arachnida-div').remove();
    var thirdRowDiv = $('<div class="row">');
    $.ajax({
      type: 'GET',
      url: '/api/animals'
    }).then((animals) => {
      var arachnida = test.filter((animal) => {
        return animal.class.toLowerCase() === 'arachnida'
        // return animal.class.toLowerCase() === 'amphibia'
      })
      console.log(arachnida)
      var arachnidaDiv = $('<div id="arachnida-div">');
      var arachnidaHeader = $('<h3>');
      arachnidaHeader.addClass('text-center')
      arachnidaHeader.text("Class: Arachnida")
      arachnidaHeader.css({
        textDecoration: 'underline'
      })
      arachnidaDiv.append(arachnidaHeader);
      var arachnidaImage, randomNum = 12 + 6;
      for (var i = 0; i < arachnida.length; i++) {
        $.ajax({
          method: 'GET',
          url: 'http://api.giphy.com/v1/gifs/search?q=' + arachnida[i].name + '&api_key=dc6zaTOxFJmzC&limit=10'
        }).then((giphy) => {
          var randomNum = Math.floor(Math.random() * 10)
          arachnidaImage = $('<img>', {
            src: giphy.data[randomNum].images.fixed_height.url
          });
          console.log(giphy)
          arachnidaDiv.append(arachnidaImage);
        })

      }

      colThreeDiv.append(arachnidaDiv);
      rowDiv.append(colThreeDiv);
      $('#append-to-this-div').append(rowDiv);
    })





  });

});
