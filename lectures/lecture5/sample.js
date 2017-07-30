var loginPage = '<html>'+
'<head><script type="text/javascript" src="sample.js"></script>'+
'<link rel="stylesheet" type="text/css" href="main.css"/>'+
'</head><body>'+
 '<div class="login-main">'+
'<div class="header">'+
'    <span class="split-line"></span>'+
'    <div class="header">'+
'    <p class="head-line">Social wire</p>'+
'</div>'+
'</div>'+
'<div class="login-box">'+

'<form class="form" action="home.html">'+
'    <input class="form-ele" type="text" placeholder="username"/>'+
'    <input class="form-ele" type="password" placeholder="Password">'+
'    <button class="form-btn" onclick="loadPage()" >login</button>'+
'    </form>'+
'    <span class="register">'+
'    Not Registered?'+
'<span class="create-link"><a>Create an account</a></span>'+
'</span>'+
'</div>'+
'</div></body></html>';

var homePage = '<html>'+
    '<head>'+
    '<link rel="stylesheet" type="text/css" href="main.css"/>' +
    '<script type="text/javascript" src="sample.js"></script>'+
    '</head>'+
    '<body class="font-black">'+
    '<p class="font-yellow">'+
    'Para1'+
    '</p>'+
    '<p id="id2" class="id-class font-green">'+
    'Para2'+
    '</p>'+
    '<p class="id-class font-red">'+
    'Para3'+
    '</p>'+
    '<p class="id-class font-green" style="color:black;">'+
    'Para4'+
    '</p>'+
    '</body>'+
    '</html>';


var page = null;
function loadPage(){
    if(!page){
        page = loginPage;
    }
    var body = document.getElementsByTagName('body');
    document.writeln(page);
    page = homePage;

}




