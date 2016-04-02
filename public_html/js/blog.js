$(function (){
    var APPLICATION_ID = "11BCF95A-6897-A036-FFE2-C4294610F300",
        SECRET_KEY ="FAAD96D2-4BE2-1DEB-FFBE-A1132489EF00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
   var postsCollection = Backendless.Persistence.of(Posts).find();
   
   console.log(postsCollection);
   
   var wrapper = {
       posts: postsCollection.data
   };
   
   Handlebars.registerHelper('format', function (time){
       return moment(time).format("dddd, MMMM Do YYYY"); 
   });
   
   var blogScript = $("#blogs-template").html();
   var blogTemplate = Handlebars.compile(blogScript);
   var blogHTML = blogTemplate(wrapper);
   
   $('.main-container').html(blogHTML);
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}


$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
         // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
        