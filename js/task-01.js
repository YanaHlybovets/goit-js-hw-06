
const categories = document.querySelectorAll(".item");
const categoryNum = `Number of categories: ` + categories.length;
console.log(categoryNum);

categories.forEach(category => {
    const title = `Category: ${category.querySelector("h2").textContent}`;
    const elements = `Elements: ${category.lastElementChild.querySelectorAll("li").length}`;
    console.log(title);
    console.log(elements);
});

