//  fs(file system) module --> operations-(read, write, delete, update)
const fs = require("fs");

//  create file
fs.writeFileSync("newfile.txt", "inside content", () => {
  console.log("created");
});

//  copy file
fs.copyFile("newfile.txt", "newfile-2.txt", () => {
  console.log("newfile copied");
});

//  reading file data
fs.readFile("newfile.txt", (er,data) => {
    if(er){
        console.log(er);
    }else{
        console.log(data.toString());
    }
});

//  create folder
fs.mkdir("./demoFolder", () => {
  console.log("folder created");
});

//  create file inside other folder
fs.writeFile(
  "./demoFolder/demofile.txt",
  "new demo file created inside demofolder",
  () => {
    console.log("file created inside demofolder");
  }
);

//  delete file
fs.unlink("newfile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file deleted");
  }
});

//  rename file
fs.rename('newfile.txt','renamed.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file renamed");
    }
});
