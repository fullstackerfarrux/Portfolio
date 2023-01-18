let sites = [
  {
    id: 1,
    image:
      "https://cdn.dribbble.com/users/193534/screenshots/14547173/media/2948d8e93ce0079ab87067031fdc8b8c.png?compress=1&resize=1000x750&vertical=top",
    name: "Cofferoasters",
    link: "https://coffe-in-responsive.netlify.app/",
  },
  {
    id: 2,
    image:
      "https://www.captain-design.com/blog/content/images/size/w600/2022/02/image-1.png",
    name: "Wakanda",
    link: "https://wakandainresponsive.netlify.app/",
  },
];

let grid = document.querySelector(".grid");

sites.forEach((p) => {
  let box = document.createElement("div");
  box.classList.add("box");
  grid.appendChild(box);
  //   box.style.backgroundImage = `url(${p.image})`;
  //   box.style.backgroundSize = "470px 350px";
  let image = document.createElement("img");
  box.appendChild(image);
  image.setAttribute("src", p.image);
  image.style.width = "470px";
  image.style.height = "350px";
  let h2 = document.createElement("h2");
  h2.textContent = p.name;
  h2.style.color = "black";
  h2.style.fontSize = "30px";
  h2.style.display = "none";
  box.appendChild(h2);
  let a = document.createElement("a");
  let button = document.createElement("button");
  a.appendChild(button);
  a.setAttribute("href", p.link);
  a.style.display = "none";
  button.textContent = "ПОСМОТРЕТЬ САЙТ";
  box.appendChild(a);

  a.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(p.link, "_blank");
  });

  box.addEventListener("mousemove", () => {
    h2.style.display = "block";
    image.style.position = "absolute";
    image.style.transform = "transformY(400px)";
    image.style.transition = "all 0.3s ease";
    a.style.display = "block";
  });
  box.addEventListener("mouseleave", () => {
    h2.style.display = "none";
    image.style.position = "absolute";
    image.style.transform = "transformY(-400px)";
    image.style.transition = "all 0.3s ease";
    a.style.display = "none";
  });
});

let bars = document.querySelector(".fa-bars");
let fix = document.querySelector(".fix .container");
bars.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("dropdown");
  fix.appendChild(div);
  let i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-xmark");
  div.appendChild(i);
  let a1 = document.createElement("a");
  a1.setAttribute("href", "#");
  a1.textContent = "Home";
  div.appendChild(a1);
  let a2 = document.createElement("a");
  a2.setAttribute("href", "#about");
  a2.textContent = "About";
  div.appendChild(a2);
  let a3 = document.createElement("a");
  a3.setAttribute("href", "#contact");
  a3.textContent = "Contact";
  div.appendChild(a3);

  i.addEventListener("click", () => {
    div.remove();
  });
});
