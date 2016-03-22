$(function (){
    var APPLICATION_ID = "11BCF95A-6897-A036-FFE2-C4294610F300",
        SECRET_KEY ="FAAD96D2-4BE2-1DEB-FFBE-A1132489EF00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var user = new Backendless.user();
    user.email = "shanthi.robinson100@gmail.com";
    user.password = "password";
    Backendless.userservice.register(user);
    
});
