// Задание №1

// Используя API со странами выведите список со всеми странами:
// API: https://restcountries.com/v3.1/all
let blockList = document.getElementById("list");
let city = fetch("https://restcountries.com/v3.1/all");
let ol = document.createElement("ol");
ol.setAttribute("id", "ol");
blockList.append(ol);
city
  .then(res => {
    return res.json();
  })
  .then(dat => {
    console.log(dat);
    dat.forEach(elem => {
      let list = document.createElement("li");
      list.innerText = elem.name.official;
      ol.append(list);
    });
  });

// Задание №2

// Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
// Используйте fetch. Отобразите на странице имена персонажей из
// Рика и Морти в list.
let data = fetch("https://rickandmortyapi.com/api/character");
let ul = document.getElementsByClassName("list")[0];
data
  .then(res => {
    return res.json();
  })
  .then(inf => {
    console.log(inf);
    // console.log(inf.results.name);
    inf.results.forEach(i => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.display = "inline";
      img.setAttribute("src", i.image);
      li.innerText = i.name;
      ul.append(li, img);
    });
  });

// Задание №3

// Рядом с именами отобразите все изображения
// которые вы получили со второго задания
