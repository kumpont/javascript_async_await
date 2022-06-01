// Import stylesheets
import './style.css';

const connect = true;
const url1 = 'kong.dev/file1.json';
const url2 = 'kong.dev/file2.json';
const url3 = 'kong.dev/file3.json';
const url4 = 'kong.dev/file4.json';
const url5 = 'kong.dev/file5.json';

function downloading(url) {
  return new Promise(function (resolve, reject) {
    console.log(`downloading... ${url}`);
    setTimeout(() => {
      if (connect) {
        resolve(`download ${url} conpleted`);
      } else {
        reject(`download ${url} failed`);
      }
    }, 3000);
  });
}

async function start() {
  console.log(await downloading(url1));
  console.log(await downloading(url2));
  console.log(await downloading(url3));
  console.log(await downloading(url4));
  console.log(await downloading(url5));
}

start();
