const urlParams = new URLSearchParams(window.location.search);

const url = `https://hubkur.dk/databases1/wp-json/wp/v2/real_estate`;
// const url = "https://hubemmd-34fa.restdb.io/rest/bed-fashion?max=20" + query;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach(showProduct);
    // showProduct(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProduct(product) {
  // grab the template\
  const template = document.querySelector("#test123").content;
  // clone the template
  const copy = template.cloneNode(true);
  // change content

  copy.querySelector(".description").textContent = product.estate_name;
  copy.querySelector(".beds_detail").textContent = product.bedrooms;
  copy.querySelector(".bath_detail").textContent = product.bathrooms;
  copy.querySelector(".feet_detail").textContent = product.sq_feet;
  // copy.querySelector(
  //   ".smallProduct img"
  // ).src = `https://hubkur.dk/databases1/wp-content/uploads/2022/03/house_2.jpg`;
  copy.querySelector(".smallProduct img").src = product.image.guid;

  // document.body.style.backgroundImage = "url('img_tree.png')

  // ).src = `https://hubkur.dk/databases1/wp-content/uploads/2022/03/house_${product._id}.jpg`;
  // grab parent
  const parent = document.querySelector("#productlistGrid");
  // append
  parent.appendChild(copy);
}
