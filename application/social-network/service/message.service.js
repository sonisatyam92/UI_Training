(function(){
    angular.module('app')
        .service('MessageService',  MessageService);

    function MessageService(){
        var LOCALE = [
            'en',
            'hi'
        ];

        var currLocale = 'en';

        var msg = {
            "en":{
                "heading" : 'Social wire',
                "username" : 'User Name',
                "password" : 'Password',
                "invalidLoginFields": 'Username and Password fields are mandatory.',
                'login':'Login',
                'notRegistered' : 'Not Registered',
                'createAnAccount' : 'Create An Account',
                'serverErr' : 'Server dint respond',
                'invalidLogin' : 'Username password does not match'
            },
            "hi":{
                "heading" : 'सोशल वायर',
                "username" : 'उपयोगकर्ता नाम',
                "password" : 'पासवर्ड',
                "invalidLoginFields": 'उपयोगकर्ता नाम और पासवर्ड क्षेत्र अनिवार्य हैं.',
                'login':'लॉग इन करें',
                'notRegistered' : 'पंजीकृत नहीं',
                'createAnAccount' : 'खाता बनाएं'
            }
        };

        return {
            setLocale : function(locale){
                if(LOCALE.indexOf(locale) !== -1){
                    currLocale = locale;
                }
            },
            getLocale : function(){
                return currLocale;
            },
            locales: LOCALE,
            msg : function(){
                return msg[currLocale];
            }
        }

    }
})();