const categories = document.querySelectorAll(".item");
const categoryNum = `Number of categories: ` + categories.length;
console.log(categoryNum);

categories.forEach(category => {
    const header = `Category: ${category.querySelector("h2").textContent}
    `;
    const elements = category.lastElementChild.querySelectorAll("li");
    const elementNum = `Elements: ` + elements.length;

    console.log(header + elementNum)
});