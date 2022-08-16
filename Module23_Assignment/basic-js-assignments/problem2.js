// 2. check whether the given file name is a javaScript file or not
function isJavaScriptFile(fileName) {
    if(typeof fileName !== "string"){
        return "invalid input! Please provide a string!";
    }

    result = fileName.endsWith(".js");
    return result;
}

let output = isJavaScriptFile("app.js");
console.log(output);



