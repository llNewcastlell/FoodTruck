CREATE database FOODTRUCKSAMPLE;

USE FOODTRUCKSAMPLE;

CREATE TABLE FOODTRUCK (
id int(6) not null auto_increment,
name varchar(50) not null,
imglink varchar(100) not null,
foodType varchar(100) not null, 
description varchar (1000) not null, 
menulink varchar(50) not null, 
price varchar(4) not null,
phone varchar(13) not null, 
primary key (id)
);

INSERT into FoodTruck (name,imglink,foodtype,description,menulink,price,phone)
VALUES("MC2 Ice Cream Co.","NEED IMAGE","Ice Cream, Sweets & Treats, Desserts","Our unorthodox approiach to ice cream leads us to new, different and exciting flavors that have never been imagined. We get inspired from more than just the bake shop. We us ingredients from every part of the kitchen. The best ice cream requires the best ingredients and using Pure, Local and fresh ingredients helps us create our one of a kind flavors.","https://www.mc2icecreamco.com/","$","720-499-4099"),

("Rollin' Bones BBQ","NEED IMAGE","Barbeque","Rollin' Bones BBQ is Colorado's finest pit BBQ food truck. Brisket, ribs, pulled pork and chicken with homemade sauces that span the US BBQ circuit.","https://rollinbonesbbq.com/","$$","303-217-1799"),

("Stupid Awesome","NEED IMAGE","Sandwiches, Comfort Food","This bus won't take you to school, just flavor town! Our specialty is kick a** sandwiches!","N/A","$$","720-352-0009"),

("Wholly Smoke Unique BBQ","NEED IMAGE","Barbeque","We specialize in applewood smoked goodness. Smokers are our version of jalapeno poppers- the difference being we take fresh jalapenos, stuff them with tasty fillings, wrap them in bacon, applewood slow smoke 'em, and serve sauces for dipping. The results are pretty addictive!","https://whollysmokeuniquebbq.com/","$$","720-316-4455"),


("A Bit O'Boston","NEED IMAGE","Seafood, American(Traditional)","A Bit O'Boston is a great food trailer offering food that I have grown up on from the Boston area!  Lobstah Rolls, Roast Beef Sandwiches, Fried Clams, New England Clam Chowdah, Boston Baked Beans etc. ","http://www.abitoboston.com/","$$$","N/A"),


("A Taste of the Philippines","NEED IMAGE","Filipino","A Taste of the Philippines is the first Filipino mobile restaurant in Colorado. The goal is to introduce the Philippine culture through food. A Taste of the Philippines offers the classic Filipino cuisine such as chicken adobo, lumpias, pancit, lechon kawali, turon and more.... Look for the cart at various breweries, Civic Center Eats, Denver Cruiser Rides, Hudson Gardens Concert Series and also available for private events!","http://www.atasteofthephilippines.com","$$","N/A"),

("Abundant Bean Coffee","NEED IMAGE","Coffee and Beverages, Sweets & Treats","Specialty Espresso Bar in a Vintage Mobile Trailer-Creating a culture of philanthropy by providing coffee catering to offices/events & donating 10% of proceeds to local and global charities","N/A","$","N/A"),

("Adobo Food Truck","NEED IMAGE","Filipino, Mexican","Adobo is Filipino and New Mexican style street food with fresh natural ingredients. We'd love to serve your next party, event, breakfast, or lunch.","https://adobodenver.com/","$$","N/A"),

("Aiko Pops","NEED IMAGE","Desserts","The original popsicle of Denver. Our gourmet ice pops have unique flavor combinations that will exhilarate your taste buds. We personally make each ice pop using only the freshest ingredients that are organic and locally sourced whenever possible. AikoPops makes ice pops! Flavors include: Apricot Vanilla, Orange Basil, Raspberry Sweet Corn, Honey Blue Cheese, Kiwi Pomegranate, Coconut Lemongrass and more.","http://aikopops.com/","$","N/A"),

("Amazing Tasty Eats","NEED IMAGE","American (Traditional), Burgers","Specialty burger food truck!","N/A","$$","N/A"),

("Amore Pizza","NEED IMAGE","Pizza","We make the dough fresh every day, and the tomatoes we use for our  sauce are imported from Italy's San Marzano Valley. The menu features all the staples, including cheese, pepperoni, and sausage, as well as various specialties, such as the ham, bacon and pineapple-loaded Long Island or all meat Bronx.","http://www.amorepizzaco.com","$$","N/A"),

("Arepas Caribbean","NEED IMAGE","Caribbean, Latin American","Caribbean food, gluten and dairy free.Arepas, empanadas, lechon bowl and much more! We have a fussion of Colombia, Dominican Republic, Venezuela, and Cuba! Stuff arepas, with oregano seare pork, grilled chicken, empanadas from Colombia, with ground beef, grilled veggie. Lechon Bowl is slow cooked pork loin, rice, Cuban black beans, sweet baked plantain, and avocado.We can cater private parties, business lunches you name it!","N/A","$$","N/A"),

("Arepas House","NEED IMAGE","Venezuelan","We are dedicated to bring the most delicious Venezuelan dishes that will thrill our customer's senses.","https://www.arepashouse.com/","$$","7N/A"),

("Arepas Queen","NEED IMAGE","Venezuelan","This truck is Venezuelan food our specialty are arepas we have a great variety from chicken, vegetarian meat and many more are gluten free.","http://www.ArepasQueen.com","$$$","N/A"),

("Areyto Puerto Rican Food","NEED IMAGE","Puerto Rican Food","Areyto is the first Puerto Rican food truck/restaurant in Denver! We serve some of the favorite dishes from the island. Come eat with us!","http://areytopuertorricanfood.com/","$$$","N/A"),

("Baba & Pop's Kitchen","NEED IMAGE","Polis, Czech/Slovakian, Ukrainian","Baba & Pop's Kitchen brings handmade Pierogi and other Eastern European delights to the streets of downtown Denver. We believe that by updating recipes passed down for generations and continuing that tradition, diners are afforded an experience that is both exciting and good for the soul.","http://www.babaandpops.com/","$$","N/A"),

("Baba's Falafel","NEED IMAGE","Mediterranean, American(New), Middle Eastern","Absolutely the best falafel and Mediterranean innovations in Denver coming from a food truck! Contact us to cater your next event. See you on the streets!","http://www.babasfalafel.com","$$","N/A"),

("Barbed Wire Reef","NEED IMAGE","American (Traditional), Burgers","We specialize in gourmet wild game burgers: elk, buffalo and angus beef sirloin, wild game gourmet brats: antelope, pheasant, buffalo, elk, venison, wild boar, rattlesnake, alligator, ostrich Or duck sandwiches:chipotle bbq pulled wild boar, buffalo rib eye philly steak sandwich and a vegan handmade beet burger.Barbed Wire Reef Food Truck Specializes in Wild Game Burgers, Brats, and Seafood Sandwiches.","http://www.barbedwirereef.com/","$$$","N/A"),

("Barefoot BBQ","NEED IMAGE","Barbeque","Barefoot BBQ by Dave Bauer serves slow cooked meat to perfection. Daily menu items include savory beef brisket, BBQ pulled pork, buffalo brats, polish sausage, sweet Boston baked beans, homemade coleslaw and award winning breakfast burritos!","http://www.barefootbbqco.com/","$$","N/A"),

("Basecamp Provisions","NEED IMAGE","American(New)","Denver-Based Food Truck serving lunch bowls, burritos, and fresh brewed iced tea.","https://www.basecampdenver.com/","$$","N/A"),

("Basic Kneads Pizza","NEED IMAGE","Pizza","Artisan Pizzas crafted in our mobile wood-fired oven. We start with Organic, Colorado-milled flours, then hand crush the best tomatoes we could taste, and cook our pizzas with a wood-fired oven in just a minute or two.","http://basickneadspizza.com/","$$$","N/A"),

("Basted Egg","NEED IMAGE","Breakfast, Coffee and Beverages","Inspired breakfast sandwiches, coffee and brunch fair.","http://www.Bastedegg.com","$","N/A"),

("Beef King","NEED IMAGE","Italian, Gluten Free","Real Chicago style Italian beef & more, made in Denver by a 100% Italian from Chicago. We also serve vegan ""beef"", local/organic and unique gluten free desserts. We love to cook! Catering, farmer's markets, events/festivals, etc.","http://beefkingdenver.com/","$$","N/A"),

("Big Daddy's Texas BBQ","NEED IMAGE","Barbeque, Comfort Food","Texas BBQ Food Truck available for Corporate parties, Large & Small catering parties, BBQ Competition, Festivals and all types of parties.","http://www.bigdaddystxbbq.com","$$$","N/A"),

("Big Jim's Ribs","NEED IMAGE","Barbeque","Pit-fired barbeque in Parker, Colorado since 1982.","N/A","$$","N/A"),

("Big Time Flavor, LLC","NEED IMAGE","Big Time Flavor, LLC","We make the best fish tacos you'll ever try as well as chilis, street tacos and a delicious veggie mix! Our trailer is small, but we have big time flavor!","N/A","$$$","N/A"),

("Biker Jim's Gourmet Dogs","NEED IMAGE","Hot Dogs, Sausages","Gourmet wild game and ethnic sausages.","http://www.bikerjimsdogs.com","$$$","N/A"),

("Billy's Gourmet Hot Dogs","NEED IMAGE","Billy's Gourmet Hot Dogs","Come on down for the best hot dogs in Denver!  Proudly serving Vienna Beef hot dogs.","http://www.billysgourmethotdogs.com","$$","N/A"),

("Bits & Pieces con cerveza","NEED IMAGE","Mexican","Bits & Pieces con cerveza specializes in flavors, spices, and sauces from the Yucatán peninsula & throughout Mexico. Let us take your tastebuds for a ride!","http://bitsnpiecescc.com","$$","N/A");

