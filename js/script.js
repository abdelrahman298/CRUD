var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var submitBtn = document.getElementById("submitBtn");
var tableBody = document.getElementById("tableBody");

var websites = [];
if (localStorage.getItem("websitesList") != null) {
  websites = JSON.parse(localStorage.getItem("websitesList"));
  displayWebsites(websites);
  // console.log(websites.push(JSON.parse(localStorage.getItem("websitesList"))));
}

function addWebsite() {
  //?save website in object
  var websiteData = {
    siteName: siteNameInput.value,
    siteUrl: siteUrlInput.value,
  };
  //?send it to array
  websites.push(websiteData);
  //?send it to local storage
  localStorage.setItem("websitesList", JSON.stringify(websites));
  //?display the array in the page
  displayWebsites(websites);
  //?clear the inputs
  // clearInput();
}

function clearInput() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function displayWebsites(array) {
  var cartoona = ``;

  for (var i = 0; i < array.length; i++) {
    var site = `
      <tr>
      <th scope="row">${i + 1}</th>
      <td>${array[i].siteName}</td>
      <td>
      <a href="https://${array[i].siteUrl}"  target="_blank">
      <button type="button" class="btn btn-visit">
        <i class="fa-solid fa-eye"></i> Visit
      </button>
      </a>
        
      </td>
      <td>
        <button type="button" class="btn btn-danger" onClick="deleteWebsite(${i})">
          <i class="fa-solid fa-trash-can"></i> Delete
        </button>
      </td>
    </tr>`;
    cartoona += site;
  }
  tableBody.innerHTML = cartoona;
}

function deleteWebsite(index) {
  websites.splice(index, 1);
  localStorage.setItem("websitesList", JSON.stringify(websites));
  displayWebsites(websites);
}

function checkUrl() {
  var inValidPage = ``;
}
