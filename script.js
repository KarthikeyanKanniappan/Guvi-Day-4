// How to compare two JSON have the same properties without order
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

const jsonCompare = function (obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  console.log(key1, key2);
  if (key1.length !== key2.length) {
    return false;
  }
  let compare = [];
  for (const key of key1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (val1 == val2) {
      compare.push(1);
    }
  }
  console.log(compare);
  if (compare.length !== key1.length) {
    return false;
  } else return true;
};
console.log(jsonCompare(obj1, obj2));

// rest countries and print all countries name, region, sub region and population

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  let data = JSON.parse(this.responseText);
  console.log(data);
  let html = document.getElementById("list");
  https: for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    let image = document.createElement("img");
    image.src = data[i].flags.png;
    image.alt = data[i].name.common;
    image.className = `img-${data[i].name.common}`;
    button.className = data[i].name.common;
    button.innerHTML = data[i].name.common;
    li.append(button, image);
    html.append(li);
    button.addEventListener("click", function (e) {
      // console.log(e.target.className);
      console.log(
        `${data[i].name.common} is a Country, it is located in ${data[i].region} region and subregion is ${data[i].subregion} and has a population of ${data[i].population}`
      );
      const img = document.querySelector(`.img-${e.target.className}`);
      let show = false;
      if (!show) {
        img.style.visibility = "visible";
        show = true;
      } else {
        img.style.visibility = "hidden";
        show = false;
      }
    });
  }
};
