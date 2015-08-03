// JavaScript Document

(function (){
		   
		   
var app=angular.module('store',[]);

var login=false;
var count=0;	
var cart=[];
app.controller('loginController',function($scope){
										  
	$scope.isLoggedIn=function()
	{
		if(!login)
		{
			$(".error").html("<font color='#eb4141'>Wrong username Password!</font>");
			$('#loginModal').modal('show');
		}
	};
	
	$scope.signin=function()
	{
		var username=$("#username").val();
		var password=$("#password").val();
		if(username=='devansh151@gmail.com'&&password=='devansh')
		{
			$("li.acc").html('<a class="page-scroll" ng-controller="loginController as login" ng-click="isLoggedIn()">Welcome Devansh</a>');
			login=true;
		}
		else
		{
			$("li.acc").html('<a class="page-scroll" ng-controller="loginController as login" ng-click="isLoggedIn()">Account</a>');
			$(".error").html("<font color='#eb4141'>Wrong username Password!</font>");
		}
	};
								  
										  
										  
										  });

app.controller('cartController',function($scope){
	this.items=cart;
	$scope.c=count;		  
	$scope.showCart=function(){	
	$('#cartModal').modal('show');
	};
	
	$scope.nocars=function(product){
		alert(JSON.stringify(product));
		cart.push(product);
		count++;
		$scope.c=count;
		$("span.badge").html($scope.c);
		//alert($scope.c);
		//$scope.$apply();
		};
		
		$scope.getTotal=function()
		{
			var total=0;
			for(var i = 0; i < $scope.cart.items.length; i++){
        		var p = $scope.cart.items[i];
       	 		total += p.price;
    		}
    		return total;
		}
										  });
app.controller('storeController',function(){
										  
				this.products=cars;						  
										  });

app.controller('panelController',function(){
										  
				this.tab=1;
				this.selectTab=function(setTab){
					this.tab=setTab;
				};
										  
				this.isSelected=function(checkTab){
				
				return this.tab===checkTab;
				
				};
					});

app.controller('reviewController',function(){
										   
										   
				this.review={};						   
										   
				this.addReview=function(product){
					
					product.reviews.push(this.review);
					
					this.review={};
					};						   
										   
										   });
		   
app.directive('productTitle',function(){
									  
		return {
				restrict:'E',
				templateUrl:'includes/template/product-title.html'
			}							  
									  });
var cars = [{
      name: 'Jaguar XF',
	  price:166666.66,
      description: "Jaguar XF is a luxury saloon model, which was launched in 2008 and received a prideful response from global auto markets. In its journey since the introduction, the company has given several updates to this car. All the changes in the new model are merely cosmetic with the exteriors and interiors tweaked. This car is not just only about interior luxury, but it is also known for its innovative technologies and comfort features. This vehicle is available in four trim levels, which are Executive, Luxury, Premium Luxury and XFR. Now, the manufacturer has rolled out a 'Special Edition' trim in this series, which is named as Aero Sport Edition. This version is powered by the same 2.2-litre diesel engine, which is mated to an automatic transmission gearbox. But gets some distinct cosmetics like a black colored grille with chrome surround along with a sportier bumper and a pair of funky fog lamps. It also gets R-Styled side sills, which further enhances its style. The insides too are slightly refurbished in the form of aluminum accents along with leather and wooden veneers. Furthermore, this trim also gets additional aspects like a touch-screen infotainment system including navigation along with sunroof as well. There are no changes made to the existing variants and they continue to be available with the same aspects.Apart from the 2179cc diesel engine, this saloon is available with a 3.0-litre diesel, 2.0-litre and 5.0-litre petrol engines, which are mated to an advanced eight speed automatic transmission gearbox. This super luxury car is gifted with sophisticated features including the Jaguar Drive Selector, Jaguar Drive Control and a Dynamic Stability Control system. Beside these, it gets standard features like a cruise control, electric glass sunroof, front and rear parking aid with rear view camera and Jaguar Sound System with 6 CD player. With greatly enhanced features, this XF model will takes-on other premium luxury sedans like BMW 5 Series, Mercedes-Benz E-Class and Audi A6.",
      transmission: 'Automatic',
      engine: '5000cc 8 Cylinder 32 Valve',
      power: '502.9bhp @ 6000-6500rpm',
      mileage: 11.6,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Jaguar/Jaguar-XF/047.jpg",
        "http://images0.cardekho.com/images/carinteriorimages/910x378/Jaguar/Jaguar-XF/059.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Jaguar/Jaguar-XF/118.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Jaguar/Jaguar-XF/047.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Jaguar/Jaguar-XF/090.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'BMW 3 Series',
	  price:75000,
      description: "One of the well endowed and luxurious car models present in the current Indian market is BMW 3 Series . It is already available in a few variants, but now the company has introduced their Gran Turismo Sport Line in its model lineup. It is assembled locally at the firm's manufacturing unit, which is based near Chennai. What differentiates this latest trim from the existing ones is its spectacular exterior and interior design elements. On the outside, its kidney shaped front radiator grille has slats and an air breather garnished with high gloss Black finish are the main highlights. Its side profile features Matte Black finished side window frames, whereas the elegant set of alloy wheels adds to its sportiness. Internally too, it includes several attractive design elements that can leave anyone mesmerized. The name, BMW Sport embossed on its aluminum entry sills looks pretty good, while the fine-wood interior trim accompanied with pearl chrome accents further gives it a rich appeal. A smooth dashboard in the cockpit, comes integrated with a few advanced and stylish equipments. The steering wheel gets a fine leather wrap, while the center console portray a vigorous look. Besides all these, its well cushioned seats are covered with premium leather and they also include red contrast stitching, which just adds to its style quotient. Other interesting aspects in this model is a proficient air conditioning unit that assures instant cooling of the cabin and an advanced music system, which supports Bluetooth connectivity and other input options. Along with these, some storage and utility based features are also offered for added convenience of its occupants",
      transmission: 'Automatic',
      engine: '1995cc 4 Cylinder 16 Valve',
      power: '184bhp @ 4000rpm',
      mileage: 19.59,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/BMW/BMW-3-Series/glacier-silver.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/BMW/BMW-3-Series/118.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/BMW/BMW-3-Series/090.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/BMW/BMW-3-Series/121.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/BMW/BMW-3-Series/059.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Mercedez Benz S Class',
	  price:1533333.66,
      description: "To mark Merc's entry into the luxury coupe market in India, the company has launched two new S-Class coupes, the S 63 AMG Coupe and the S 500 Coupe. The S 500 is a two-door variant of the standard four-door Mercedes S 500 model. The car features updated styling cues that give it a more sporty look. S 500 coupe features the same engine as the four-dour S 500, which produces 455hp and 700Nm of torque. S 63 AMG coupe is a more performance oriented vehicle. It flaunts a 5.5-liter V8 Bi-Turbo engine that can go from 0 to 60 mph(0-100km/h) in 4.2 seconds, in the rear-wheel drive configuration. The car can also achieve the same acceleration in 3.9 seconds with its 4MATIC all-wheel drive configuration. S 63 coupe is 90kgs lighter than the four-door S 63, thanks to its steel-aluminum hybrid body shell.",
      transmission: 'Automatic',
      engine: '5980cc 12 Cylinder 48 Valve',
      power: '523bhp @ 4900rpm',
      mileage: 7.81,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Mercedes-Benz/Mercedes-Benz-S-Class/Iridium-Silver.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Mercedes-Benz/Mercedes-Benz-S-Class/121.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Mercedes-Benz/Mercedes-Benz-S-Class/120.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Mercedes-Benz/Mercedes-Benz-S-Class/055.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Mercedes-Benz/Mercedes-Benz-S-Class/Mercedes-Benz-S-Class-S-63-AMG/056.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Audi A4',
	  price:93333.33,
      description: "Audi has revealed the next-generation 2016 A4, the sedan will go on sale later this year in Europe. The Indian debut is expected early next year or maybe by the end of 2015. The new A4 has received considerable changes, it rides on a new platform, gets uprated engines and transmissions along with new features. The new A4 is 25mm longer, the wheelbase has been increased by 12mm and it gets Audi’s 12.3-inch digital instrumentation cluster. Moreover,  the 2016 A4 has shed nearly 120 kilos compared to the outgoing model.This company has a lot of splendid vehicles in their portfolio, out of which, Audi A4 is one of the luxurious sedan available in the country's car market. It was first launched in India way back in year 2008. The company has now added a new variant to this model series, which is christened as Premium Sport Limited Edition. This variant looks more sportier with a revised bumper at front and a new set of 17-inch, 20 spoke alloy wheels. It comes with carbon black styling package that includes black window sills, wing mirrors and door molding as well. It is currently offered in only two body paint options, which are white and red for the customers to select from. Besides these, it gets all black interiors that gives it a trendy appeal than the standard variants, which have a dual tone color scheme. However, there are no modifications made to its technical specifications and hence, it retains the same 2.0 litre, four cylinder TDI engine.",
      transmission: 'Automatic',
      engine: '1798cc 4 Cylinder 16 Valve',
      power: '167.62bhp @ 3800-6200rpm',
      mileage: 15.64,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Audi/Audi-A4/florett-siver.metallic.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-A4/118.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-A4/090.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-A4/120.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Audi/Audi-A4/054.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	
	{
      name: 'BMW 7 Series',
	  price:333333.33,
      description: "The new BMW 7 Series focuses on lightweight design, powertrains, chassis, operating systems, intelligent connectivity and interior ambience. Key innovations include carbon-fibre-reinforced plastic (CFRP) in the body structure, new generation engines, the plug-in hybrid system in the new BMW 740e, the Executive Drive Pro active chassis system, the Driving Experience Control switch with ADAPTIVE mode and BMW Laserlight. The new BMW 7 series will be available with a 4.4-litre twin-turbo V8 (445 hp) for the 750i, 3.0-litre twin-turbo V6 petrol (320 hp) for the 740i, 3.0-litre twin-turbo diesel (261 hp) for the 730d while the 740e will come in the plug-in hybrid form powered by a 2.0-litre twin-turbo petrol engine and an electric drive unit. All the variants will be fitted with an eight-speed Sport Automatic Steptronic transmission.",
      transmission: 'Automatic',
      engine: '5972cc 12 Cylinder 48 Valve',
      power: '544bhp @ 5250rpm',
      mileage: 7.46,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/BMW/BMW-7-Series/midnight-blue.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/BMW/BMW-7-Series/118.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/BMW/BMW-7-Series/090.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/BMW/BMW-7-Series/121.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/BMW/BMW-7-Series/059.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Volvo S60',
	  price:79000,
      description: "Volvo Auto India continuing its aggressive move to expand its model lineup has launched the S60 T6 petrol at Rs. 42 Lac (Ex-Showroom New Delhi). The T6 carries a 4 cylinder, 2.0-litre turbo petrol engine giving an output of 304 bhp with 400 Nm of peak torque.The car can achieve a top speed of 230 kmph with 0 to 100 kmph mark in mere 5.9 seconds. The engine is coupled with 8-speed automatic gearbox and returns a mileage of 15.6kmpl. The company will launch the T6 sportier version with front-wheel drive option while globally its also available with all-wheel drive system. On the outside, the Volvo S60 T6 shares its styling cues from the regular S60 with difference in badging. Interior and feature will to be same as it will include a 7-inch infotainment system, digital TFT instrument cluster, electronic climate control, sunroof, power adjustable seats with leather upholstery and park assist.The Swedish automaker Volvo is taking strategic measures to gain a respectable market share in the luxury car segment. Few months back it has launched the refurbished XC90 SUV and just few days back, it introduced their V40 hatchback. Now again, it has rolled out a new variant in its high end sedan series, S60. This is a petrol trim, which carries a 2.0-litre turbocharged under engine the hood. By introducing this T6 variant, the number of trims in this series has gone upto four.",
      transmission: 'Automatic',
      engine: '1969cc 4 Cylinder 16 Valve',
      power: '306bhp @ 5700rpm',
      mileage: 19.6,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Volvo/Volvo-S60/047.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Volvo/Volvo-S60/120.jpg",
        "http://images0.cardekho.com/images/carinteriorimages/910x378/Volvo/Volvo-S60/055.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Volvo/Volvo-S60/088.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Volvo/Volvo-S60/118.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Audi RS6 Avant',
	  price:233333.33,
      description: "Audi India has launched the RS6 Avant in the presence of ace cricketer and brand ambassador Virat Kohli. Priced at INR 1.35 Crore, the performance-oriented estate version of the A6 will be brought in as CBUs, and will serve as a halo model in carmaker's product portfolio in the country. This power packed estate is bolted to a 4.0 litre TFSI V8 that has 560 Bhp of power and 700 Nm of torque. The side get standard 20-inch wheels, housing the 19-inch perforated and ventilated disc brakes (optional 21-inch wheels and 20-inch carbon ceramic will also be offered). The engine as quoted earlier, is a 4.0 litre V8 that produces a peak torque of 700Nm enabling Avant to achieve 0-100 kmph in 3.9 seconds. While the top speed is over 300 kmph but could be restricted to 250 kmph for India.One of the most luxurious brands of the world, Audi has been known for developing top class luxury vehicles, which are a perfect blend of performance and unique styling in its segment. This German car maker is famous for their top class design and its vehicles are certainly made with superb design details, which definitely turn heads.",
      transmission: 'Automatic',
      engine: '3993cc 8 Cylinder 32 Valve',
      power: '552.5bhp @ 5700-6600rpm',
      mileage: 10.41,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Audi/Audi-RS6/Nardo-grey.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Audi/Audi-RS6/047.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Audi/Audi-RS6/Daytona-grey-pearl-effect.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-RS6/119.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-RS6/044.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Rolls-Royce Ghost',
	  price:816666.66,
      description: "Rolls-Royce has unveiled the new Ghost Mysore Collection. This collection takes inspiration from Tipu Sultan, former ruler of the kingdom, who was also known as the Tiger of Mysore. Only three of such models will be built and exclusively for the customers in Abu Dhabi. While in country, after the national launch in Delhi a couple of months ago, the company has launched the Series II in Chennai, priced at Rs.4.5 crore . This series II gets several upgrades and features such as restyled face, new LED headlamps with framed daytime running lights, new bonnet design and bumpers, redesigned front seats, new paint and wheel options, satellite-aided transmission and more. This Series II is powered by a V12 engine pumping out a maximum power of 563 hp at 5,250 rpm and a peak torque of 780 Nm at 1,500 rpm. The car can accelerate from 0 to 100 km/h in just 4.9 seconds on to a governed top speed of 250 km/h.There are companies that have re-defined the entire field of car making, and carved a well seated place for themselves in the halls of fame. The exquisite, breathless built that luxury cars have been known for has been molded and shaped only with the hands of one particular company among all, and that is none other than the all acclaimed company.",
      transmission: 'Automatic',
      engine: '6592cc 12 Cylinder 48 Valve',
      power: '563bhp @ 5250rpm',
      mileage: 10.20,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Rolls-Royce/Rolls-Royce-Ghost/047.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Rolls-Royce/Rolls-Royce-Ghost/diamond-black.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Rolls-Royce/Rolls-Royce-Ghost/121.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Rolls-Royce/Rolls-Royce-Ghost/088.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Rolls-Royce/Rolls-Royce-Ghost/087.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Audi RS7',
	  price:233333.33,
      description: "Audi India has launched the updated version of its performance saloon RS 7 at a whooping price tag of Rs 1.40 Crore (Ex-Showroom Mumbai). The 2015 Audi RS7 features redesigned bumper, new honeycombed single-frame grille with Quattro badging and updated LED headlamps with an option of Matrix LED, which is also used in luxury A8 saloon. The updated saloon is around 12 lac dearer than the outgoing model.Audi India, which is a subsidiary of German luxury automaker has launched the facelifted version of RS7 in the market. This stunning model is already introduced in several international markets. The company offers it in some new body paint options like Sepang Blue, Mythos Black, Floret Silver and Glacier White. It comes with some modifications made to its exteriors as well as interiors, while its technical specifications remains the same. In terms of exteriors, it looks simply eye catching with a honeycomb single frame radiator grille that has sharp borders. Its body colored bumper is also revamped and equipped with redesigned air inlets on either sides. The large headlight cluster is integrated with LED headlamps, however, the Matrix LED headlamps are offered as an optional feature. Meanwhile, its luminous LED tail light cluster includes dynamic turn signals. Other standard aspects include the pronounced wheel arches fitted with a stylish set of alloy wheels, wide windscreen with defogger at the rear, dual exhaust tail pipes and a few others.",
      transmission: 'Automatic',
      engine: '3993cc 8 Cylinder 32 Valve',
      power: '552.5bhp @ 5700-6600rpm',
      mileage: 13.30,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Audi/Audi-RS7/audi-rs7-phantom-black-pearl-effect.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Audi/Audi-RS7/audi-rs7-ibis-white.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-RS7/090.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-RS7/121.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Audi/Audi-RS7/052.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Bentley Muslanne',
	  price:966666.66,
      description: "Well renowned British originated Automobile Company Bentley Motors has fired a complete new super luxury car Mulsanne in India, that carries an extreme comfort, awesome design and a dynamic riding experience. It is expected that the delivery of this vehicle to start from October or November 2010. It is priced at Rs 2.9 crore. As the design of the car has been concluded after a long research by the company's engineers to deliver an effortless performance which is always presumed from this brand. This vehicle can be availed in several colours that a buyer invokes, it is obtainable in all possible colours as it has a wide range of pigments that comes across to 625 in total, as the company is known for its honourable interiors and exteriors, this time again this series has convinced, it is even in much improvised inner and outer looks along with the extreme comfort level, space and other N number of attributes. It is expected to be the perfect combination of traditional and technological looks that a sedan can enjoy.Bentley Mulsanne is another masterpiece built by the British luxury car maker, which is also known to be one of the most lavish vehicle on the planet. It is not just the most luxurious vehicle of any other class, but it is also known for its excellent performance and its unmatched rate of acceleration. It is a blend of innovative technology, sophisticated comfort including safety features and phenomenal design, all together makes it a undisputed king in the luxury car segment.",
      transmission: 'Automatic',
      engine: '6752cc 8 Cylinder 32 Valve',
      power: '530bhp @ 4200rpm',
      mileage: 10.10,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Bentley/Bentley-Mulsanne/bentley-mulsanne-black-sapphire.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Bentley/Bentley-Mulsanne/bentley-mulsanne-alpine-green.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Bentley/Bentley-Mulsanne/bentley-mulsanne-arctica.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Bentley/Bentley-Mulsanne/046.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Bentley/Bentley-Mulsanne/118.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Bentley Flying Spur',
	  price:566666.66,
      description: "Bentley India launched the new Flying Spur with a V8 engine at a price of Rs. 3.10 crore. The manufacturer already sells the Spur with a W12 motor. All its cars in India are sold by 'Exclusive Motors'. Although both the W12 and V8 siblings are identical but the V8 offers subtle changes like black finished front bumper grille and red center to the model's wings badges. The V8 version retains the characteristics of the high W12 but packs an impressive range of 700 km on single tank of fuel.This automobile brand is known for producing high end luxury vehicles for the enthusiasts. It developed several astonishing models for the global automobile among which, Bentley Flying Spur is the most desired saloon. It was initially launched in the country in only one variant and it was badged as W12. This trim is equipped with a by a 6.0-litre petrol engine engine, which is capable of generate 616bhp of peak power and a pounding torque of 800Nm. With such output figures, this vehicle takes on the roads with an acceleration rate of reaching 100 Kmph speed mark from a standstill in mere 4.6 seconds. ",
      transmission: 'Automatic',
      engine: '5998cc 12 Cylinder 48 Valve',
      power: '616bhp @ 6000rpm',
      mileage: 10.20,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Bentley/Bentley-Flying-Spur/extreme-silver.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Bentley/Bentley-Flying-Spur/glacier-white.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Bentley/Bentley-Flying-Spur/st-James-Red-(Solid).jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Bentley/Bentley_Flying_Spur/090.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Bentley/Bentley_Flying_Spur/044.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Porsche Panamera',
	  price:383333.33,
      description: "The very luxurious Porsche Panamera sports sedan has new special versions, this Edition, 4 Edition and Diesel Edition, surrounding more interest to these models. The two petrols gets 6-cylinder engines delivering 310bhp, and the diesel gets a 300bhp power plant. Exterior design updates includes high-glossy black trim strips on the side windows, door handles get same colour on choosing Entry & Drive on the options list. Interior is treated with bi-colour part-leather upholstery in Black-Luxor Beige with the company's crest embossed on all head rests. This is a brand that has stood tall across the legions of car makers, a brand that has disciplined the craft of car making to a polish that the world renowns it for today. This is a company that has pioneered some of the most respected innovations of the modern roads, from the Carrera to the 911. This company, however, wanders into new territories with this all new piece, a luxury four door sedan. This Porsche Panamera takes this company to new depths with its honed skills, a vehicle brought out originally in 2009. It is packed with numerous functions, meant to mix both performance, style and delivers the best road instrument out there. It is built with a well capable V6 engine, conditioning it for the best performance to go along with the glory of comfort and luxury that it offers. It is offered in various versions, and among them, a couple are armed with a more capable V8 engine.",
      transmission: 'Automatic',
      engine: '4806cc 8 Cylinder 32 Valve',
      power: '570bhp @ 6000rpm',
      mileage: 12.98,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Porsche/Porsche-Panamera/Ruby-Red-Metallic.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Porsche/Porsche-Panamera/Black.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Porsche/Porsche-Panamera/090.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Porsche/Porsche-Panamera/121.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Porsche/Porsche-Panamera/049.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Aston Martin Rapide',
	  price:733333.33,
      description: "Aston Martin, the ultra luxury carmaker has previewed the Rapide S in South India. The four-door luxury car will replace the current model sold in India. The vehicle is already available in European nations and America as well, and it has been priced at Rs. 4.4 crore (ex-showroom, Mumbai). The increase in price is due to the rise in exchange rate of pounds and customs duty, which has been raised from 110 per cent to 175 per cent. Under the hood, the it gets the 6.0-litre V12 engine that churns out a maximum power output of 558bhp and 620Nm of peak torque. It accelerates to 100kmph from standstill in just 4.9 seconds.The Aston Martin Rapide comes with a compelling look, which is typical of all the company's models. The car maintains the patent sports car appearance along with its graceful exteriors. The four ‘swan wing’ doors are designed in a manner that they open up at 12 degrees, which helps in keeping the doors safe from any raised walkway. Moreover this designing of the car also helps in easy and convenient access to the front and rear cabin.",
      transmission: 'Automatic',
      engine: '5935cc 12 Cylinder 48 Valve',
      power: '470bhp @ 6000rpm',
      mileage: 10.90,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Aston-Martin/Aston-Martin-Rapide/aston-martin-rapide-s-red-lion.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Aston-Martin/Aston-Martin-Rapide/aston-martin-rapide-s-amethyst-red.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Aston-Martin/Aston-Martin-Rapide/118.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Aston-Martin/Aston-Martin-Rapide/090.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Aston-Martin/Aston-Martin-Rapide/119.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Maserati Quattroporte',
	  price:84568.66,
      description: "Maserati an arm of FIAT group is a well known super luxury car brand in the Italian auto market which now has entered in Indian auto market. it has launched its well performing and popular car models in India. The company brings four door big sedan and coupe cars model in the domestic car market which are endowed with outstanding features and stunning appearance along with high power heart. All the launched Maserati cars are capable of providing the experience of royal drives along with their super stylish interior design, high security features and most advanced connectivity components. Maserati Quattroporte is another beast by the company that is equipped with a 4691 cc powerplant that generates peak power of 323 kW (440 bhp) at 7000 rpm and max torque of 490 Nm (50 Kgm) at 4750 rpm. It has exceptional dimensions like its length is 4,881 mm, width is 1,915 mm and Height of the car is 1,353 mm while wheelbase is 2,942 mm which make it good height car in the segment.",
      transmission: 'Automatic',
      engine: '3799cc 8 Cylinder 32 Valve',
      power: '530bhp @ 6500rpm',
      mileage: 11.76,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Maserati/Maserati-Quattroporte/047.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Maserati/Maserati-Quattroporte/ROSSO-FOLGORE.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Maserati/Maserati-Quattroporte/090.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Maserati/Maserati-Quattroporte/121.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Maserati/Maserati-Quattroporte/048.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
	{
      name: 'Audi R8',
	  price:566666.66,
      description: "There are very few cars in the international automobile scene that actually succeed in creating a brand for themselves over the years to such an extent that all the eyes in the world would be at such companies for their innovative technology. However, technology is not just limited to machinery anymore, because aspects such as aerodynamic design and the interior comfort are also a part and parcel of creating a perfect car. That is where manufacturers like Audi step in. With innovative technology, which launches the beginning of an entire generation of automobiles, Audi triggered some of the best vehicles in the automobile history. With its reach spread wide and deep reaching segments such as sports vehicles, luxury vehicles and the crossovers of the same, SUVs, Audi has a remarkable role in the automobile industry. Among its wide array of amazing vehicles, Audi R8 is a real jewel propelling the manufacturers stature further. Be it the extremely sporty design, the remarkable vehicle handling or the breath taking pick-up, Audi R8 scores well in every department. It is one of the rare vehicles which is successful to cater to the dreams of a performance geek who is well versed in automobile specifications as well as the newbie automobile enthusiast who just adores design aesthetics over the performance.",
      transmission: 'Automatic',
      engine: '3799cc 8 Cylinder 32 Valve',
      power: '530bhp @ 6500rpm',
      mileage: 11.76,
      centralLocking: 'standard',
	  canPurchase:true,
      images: [
        "http://images0.cardekho.com/images/car-images/520x216/Audi/Audi-R8/audi-r8-estorill-blue-crysta.jpg",
        "http://images0.cardekho.com/images/car-images/910x378/Audi/Audi-R8/audi-r8-ibis-white.jpg",
        "http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-R8/121.jpg",
		"http://images0.cardekho.com/images/carexteriorimages/910x378/Audi/Audi-R8/038.jpg",
		"http://images0.cardekho.com/images/carinteriorimages/910x378/Audi/Audi-R8/054.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }] 
})();