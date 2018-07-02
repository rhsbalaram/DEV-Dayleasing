'use strict';

/**
 * @ngdoc overview
 * @name dayLeasingApp
 * @description
 * # dayLeasingApp
 *
 * Main module of the application.
 */
angular.module('dayLeasingApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    '720kb.datepicker',
    'blockUI',
    'vcRecaptcha',
    'ngCookies'
  ])
  
  .config(function ($locationProvider , $stateProvider, $urlRouterProvider) {
	 
    $locationProvider.hashPrefix('');
    
//     "username":"EMAILID@gmail.com",
//    "password":"admin"
    //configuring all the urls
     $stateProvider
     .state('login', {
           url: '/',
           templateUrl: '/views/login.html' ,
           controller:'loginController',
          
       
     }).state('registration', {
         url: '/registration',
         templateUrl: '/views/registration/registration.html' ,
         controller:'RegistrationController',
         
     
   }).state('contactus', {
       url: '/hunter/contactus',
       templateUrl: '/views/conatct-us.html' 
      // controller:'RegistrationController',
       
   
 }).state('forgetPassword', {
       url: '/forgetPassword',
       templateUrl: '/views/registration/forgot-password.html' ,
       controller:'ForgetPassword',
       
   
 }).state('loginVerification', {
       url: '/loginVerification/:tokenId',
       templateUrl: '' ,
       controller:'LoginVerification',
       
   
 }).state('changePassword', {
     url: '/changePassword/:tokenId',
     templateUrl: '/views/registration/reset-password.html' ,
     controller:'changePassword',
     
 
}).state('termsAndConditions', {
    url: '/termsAndConditions',
    templateUrl: '/views/termsconditions.html' 
   
    

}) .state('landownerDashboard', {
         url: '/landowner/dashboard',
         templateUrl: '/views/landowner/dashboard.html' ,
         controller:'LandownerDashboardCtrl',
         
     
   }).state('landownerReservation', {
       url: '/landowner/reservation',
       templateUrl: '/views/landowner/landowner-reservation.html' ,
       controller:'landownerReservation',
       
       
 }).state('hunterDetails', {
     url: '/landowner/hunDetails',
     templateUrl: '/views/landowner/hunterDetails.html' ,
     controller:'hunterDetails',
     
 
}).state('landownerCoupons', {
    url: '/landowner/coupons',
    templateUrl: '/views/landowner/coupons-table.html' ,
    controller:'landownerCoupons',
    

}).state('landownerAddProperty', {
     url: '/landowner/property',
     templateUrl: '/views/landowner/addProperty.html' ,
     controller:'LandownerAddPropertyCtrl',
     
 
}).state('landownerAddProperty.outline', {
    url: '/outline',
    templateUrl: '/views/landowner/outline.html' ,
    controller:'LandownerAddPropertyCtrl_Outline'
   
    

}).state('landownerAddProperty.description', {
    url: '/description',
    templateUrl: '/views/landowner/description.html' ,
    controller:'LandownerAddPropertyCtrl_Description'
   
    

}).state('landownerAddProperty.area', {
    url: '/area',
    templateUrl: '/views/landowner/area.html' ,
    controller:'LandownerAddPropertyCtrl_Area'
   
    

}).state('landownerAddProperty.area.allAreas', {
    url: '/allAreas',
    templateUrl: '/views/landowner/allAreas.html' ,
    controller:'LandownerAddPropertyCtrl_Area_AllAreas'
  
   
    

}).state('landownerAddProperty.area.singleArea', {
    url: '/singleArea',
    templateUrl: '/views/landowner/singleArea.html' ,
    controller:'LandownerAddPropertyCtrl_Area_SingleArea'
  
   
    

}).state('landownerAddProperty.slot', {
    url: '/slot',
    templateUrl: '/views/landowner/slot.html' ,
    controller:'LandownerAddPropertyCtrl_Slot'
   
    

}).state('hunterBookSlot', {
    url: '/hunter/hunterBookSlot/:propertyId',
    templateUrl: '/views/hunter/book-slot-alert.html' ,
    controller:'hunterBookSlot'
   
    

}).state('hunterBookSlotCartDetails', {
    url: '/hunter/hunterBookSlotCartDetails/:propertyId',
    templateUrl: '/views/hunter/card-details.html' ,
    controller:'hunterBookSlot'
   
    

})
.state('hunterProperties', {
    url: '/hunter/hunterproperties/:propertyId',
    templateUrl: '/views/hunter/properties.html' ,
    controller:'hunterProperties'
   
    

}).state('hunterBookingDetails', {
    url: '/hunter/bookingdetails',
    templateUrl: '/views/hunter/hunter-booking-details.html' ,
    controller:'hunterBookingDetails'
   
    

}).state('LocationTracking', {
    url: '/hunter/tracking',
    templateUrl: '/views/hunter/tracking.html' ,
    controller:'tracking'
   
    

}).state('logout', {
     url: '/logout',
     templateUrl: '/views/login.html' ,
     controller:'loginController',
     
 
});
      
       
       $urlRouterProvider.otherwise('/');
      
   
  }).run(function ($rootScope,$http,$location, $timeout,$cookies,serviceCalls,$state) {
	  //base url of apis
	    $rootScope.URL='http://localhost:8080/DLS';
	    $rootScope.config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };
	    //testing promise
	     

	 // To add to window
	 if (!window.Promise) {
		 var promise = new Promise();
	   window.Promise = promise;
	 }
	    //testing for safari session private
	    try {
	        sessionStorage.setItem('sampledata', '[[{"lat":42.357066393648765,"lng":-71.09671354293828},{"lat":42.35738632571216,"lng":-71.09671354293828},{"lat":42.35738632571216,"lng":-71.09628059298124},{"lat":42.357066393648765,"lng":-71.09628059298124}]]');
	    } catch (e) {
	    	alert('Unable to save maps. Please disable private mode');
	    	swal(
					   '',
					   'Please disable private mode to avoid application crash!',
					   'error'
					 )
	        
	    }
	    //get the cookie data
	    var user=$cookies.getObject('DayleasingAuthorization');
	    if(user){
	    	sessionStorage.Authorization=user.Authorization;
	        
	        sessionStorage.userId=user.userId;
	        var dummobj={};
	        dummobj.data=user;
	        var currentState=$location.path();
	    	serviceCalls.getUserDetails(dummobj)
			.then(function(response){
				//if its hunter go to hunter dashboard else landowner
				sessionStorage.Authorization=user.Authorization;
		        
		        sessionStorage.userId=user.userId;
				if(currentState=="/"||currentState=="/logout"||currentState==""){
				if(response.data.memberType=="Hunter"){
					
					$state.go("hunterProperties",{propertyId:'ALL'});
					
				}
				else{
					$state.go("landownerDashboard");
				}
				}
				else{
					$location.path(currentState);
				}
				
			})
			.catch(function(err){
				console.log('error in getting user details '+err);
				});
	    }
	    //to check url base authentication
	    $rootScope.$watch(function() { 
	        return $location.path(); 
	      },
	      function(locationUrl){  
	    	 if(locationUrl!=""&&locationUrl!="/"&&locationUrl!="/logout"){
	  	    if(sessionStorage.memberType=='Hunter'&&!(locationUrl.indexOf('hunter') >= 0)){
	  	    	$state.go("hunterProperties",{propertyId:'ALL'});
	  	    }
	  	    if(sessionStorage.memberType=='User'&&!(locationUrl.indexOf('landowner')>=0)){
	  	    	$state.go("landownerDashboard");
	  	    }
	    	 }
	  	    //set focus to top of page
	  	  $timeout(function(){
				 document.getElementById("Focus").focus();
				 },100);
	      });
	   
	    
	  });

