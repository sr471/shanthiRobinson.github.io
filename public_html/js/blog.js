$(function (){
    var APPLICATION_ID = "11BCF95A-6897-A036-FFE2-C4294610F300",
        SECRET_KEY ="FAAD96D2-4BE2-1DEB-FFBE-A1132489EF00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
   var  dataStore = Backendless.Persistence.of(Posts);
   var post = new Posts({title: "My First Blog Post", content:"My first blog post content", authorEmail:"email@gmail.com"});
   dataStore.save(post);
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}
