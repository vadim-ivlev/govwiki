var input = document.getElementById("myinput");
var awesomplete = new Awesomplete(input);
awesomplete.list = ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"];

/* ...more code... */
var gov_name_values = gov_names.map ( function(e){return e.gov_name;} );
awesomplete.list = gov_name_values;
