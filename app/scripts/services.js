'use strict';

angular.module('confusionApp')
        .constant("baseURL", "http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

                  this.getDishes = function(){
                    return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT'}});
                };

                this.getPromotion = function(index){
                  return $resource(baseURL+"promotions/"+index, null,{'update':{method:'GET'}});
                };
                // implement a function named getPromotion
                // that returns a selected promotion.


        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

            var corpfac = {};

            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
            corpfac.getLeaders = function(){
              return $resource(baseURL+"leadership/:id", null, {'update':{method:'GET'}});
            };
            return corpfac;
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {

            var feedfac = {};

            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
            feedfac.getFeedback = function(){
              return $resource(baseURL+"feedback/:id", null, {'update':{method:'PUT'}});
            };
            return feedfac;
        }])
        ;
