
//document ready function
$(function() {

	var idx;
	var pizza;
	var template = $('.template-pizza');
	var meatContainer = $('.meat');
	var vegContainer = $('.veg');
	var clonedTemplate;
	
	
	for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
	    pizza = com.dawgpizza.menu.pizzas[idx];
	    clonedTemplate = template.clone();

	    clonedTemplate.find('.name').html(pizza.name);
	    clonedTemplate.find('.description').html(pizza.description);
	    clonedTemplate.find('.small').html(pizza.prices[0]);
	  	clonedTemplate.find('.medium').html(pizza.prices[1]);
	  	clonedTemplate.find('.large').html(pizza.prices[2]);

	   	clonedTemplate.removeClass('template-pizza');
	    if (pizza.vegetarian){
	    	vegContainer.append(clonedTemplate);
	    } else {
	    	meatContainer.append(clonedTemplate);
	    }
	} //for each pizza



	var idx;
	var drink;
	var template = $('.template-drinks');
	var container = $('.drinks');
	var clonedTemplate;
	for (idx = 0; idx < com.dawgpizza.menu.drinks.length; ++idx) {
	    drink = com.dawgpizza.menu.drinks[idx];
	    clonedTemplate = template.clone();

	    clonedTemplate.find('.name').html(drink.name);
	    clonedTemplate.find('.price').html(drink.price);

	    clonedTemplate.removeClass('template-drinks');
	    container.append(clonedTemplate);

	} //for each drink


   	var idx;
	var dessert;
	var template = $('.template-desserts');
	var container = $('.desserts');
	var clonedTemplate;
	for (idx = 0; idx < com.dawgpizza.menu.desserts.length; ++idx) {
	    dessert = com.dawgpizza.menu.desserts[idx];
	    clonedTemplate = template.clone();

	    clonedTemplate.find('.name').html(dessert.name);
	    clonedTemplate.find('.price').html(dessert.price);

	    clonedTemplate.removeClass('template-desserts');
	    container.append(clonedTemplate);	    
	} //for each dessert 

});
