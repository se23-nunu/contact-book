

let rootPath = "https://mysite. itvarsity.org/api/contactBook/";
let apiKey = checkApikey();

function checkApikey() {
  if (!localStorage.getItem("apiKey")) {
    window.open("enter-api-key.html", "-self");
}
return localStorage.getItem("apiKey");
}
