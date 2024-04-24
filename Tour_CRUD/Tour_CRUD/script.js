// Danh sách tour
let tours = [
  {
    name: "Tour Đà Lạt",
    price: 5000000,
    location: "Đà Lạt",
    startDate: "2023-06-01",
    duration: 3,
    description: "Khám phá thành phố ngàn hoa với nhiều điểm tham quan hấp dẫn."
  },
  {
    name: "Tour Nha Trang",
    price: 6500000,
    location: "Nha Trang",
    startDate: "2023-07-15",
    duration: 4,
    description: "Tận hưởng bãi biển đẹp, lặn ngắm san hô và khám phá đảo Hòn Mun."
  },
  {
    name: "Tour Phú Quốc",
    price: 8000000,
    location: "Phú Quốc",
    startDate: "2023-08-10",
    duration: 5,
    description: "Trải nghiệm thiên đường biển đảo với nhiều hoạt động thú vị."
  }
];

// Hiển thị danh sách tour
function displayTours() {
  let tourList = document.getElementById("tourList");
  tourList.innerHTML = "";
  for (let i = 0; i < tours.length; i++) {
    let li = document.createElement("li");
    let tourInfo = `
      <h3>${tours[i].name}</h3>
      <p>Giá: ${tours[i].price.toLocaleString()} VNĐ</p>
      <p>Địa điểm: ${tours[i].location}</p>
      <p>Ngày khởi hành: ${tours[i].startDate}</p>
      <p>Số ngày: ${tours[i].duration}</p>
      <p>${tours[i].description}</p>
    `;
    li.innerHTML = tourInfo;

    let editButton = document.createElement("button");
    editButton.innerHTML = "Sửa";
    editButton.onclick = function() {
      editTour(i);
    }
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Xóa";
    deleteButton.onclick = function() {
      deleteTour(i);
    }
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    tourList.appendChild(li);
  }
}

// Hiển thị/Ẩn form thêm tour
let addTourContainer = document.getElementById("addTourContainer");
let addTourButton = document.getElementById("addTourButton");

addTourButton.addEventListener("click", function() {
  if (addTourContainer.style.display === "none") {
    addTourContainer.style.display = "block";
    addTourButton.innerHTML = "Đóng form";
  } else {
    addTourContainer.style.display = "none";
    addTourButton.innerHTML = "Thêm tour mới";
  }
});

// Thêm tour
// Thêm tour
document.getElementById("newTourForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn gửi form

  let tourName = document.getElementById("tourName").value.trim();
  let tourPrice = parseInt(document.getElementById("tourPrice").value);
  let tourLocation = document.getElementById("tourLocation").value.trim();
  let tourStartDate = document.getElementById("tourStartDate").value;
  let tourDuration = parseInt(document.getElementById("tourDuration").value);
  let tourDescription = document.getElementById("tourDescription").value.trim();

  if (tourName !== "" && !isNaN(tourPrice) && tourLocation !== "" && tourStartDate !== "" && !isNaN(tourDuration) && tourDescription !== "") {
    let newTour = {
      name: tourName,
      price: tourPrice,
      location: tourLocation,
      startDate: tourStartDate,
      duration: tourDuration,
      description: tourDescription
    };
    tours.push(newTour);
    displayTours();
    document.getElementById("newTourForm").reset();
    addTourContainer.style.display = "none";
    addTourButton.innerHTML = "Thêm tour mới";
  } else {
    alert("Vui lòng điền đầy đủ thông tin.");
  }
});

// Xóa tour
function deleteTour(index) {
  tours.splice(index, 1);
  displayTours();
}

// Sửa tour
function editTour(index) {
  let tour = tours[index];
  let newTourName = prompt("Nhập tên tour mới:", tour.name);
  if (newTourName !== null && newTourName.trim() !== "") {
    tour.name = newTourName;
    // Thêm mã để sửa các thuộc tính khác của tour
    displayTours();
  }
}

// Hiển thị danh sách tour ban đầu
displayTours();