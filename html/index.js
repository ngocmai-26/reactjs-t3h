//input Name, chỉ cho nhập ký tự chữ, số, _, -, tối đa là 30 ký tự, nếu sai hiển thị message mầu đỏ bên dưới

var checkName = function () {
  var name = document.querySelector('#name').value
  var l = name.length
  var text = /[A-Za-z0-9_-]$/
  for (i = 0; i < l; i++) {
    if (!text.test(name) || l > 30) {
      document.querySelector('#bugname').style.display = 'block'
    } else {
      document.querySelector('#bugname').style.display = 'none'
    }
  }
}

//input Email, nhập sai format email thì báo lỗi như trên
var checkEmail = function () {
  var email = document.querySelector('#email').value
  var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  if (!check_email.test(email)) {
    document.querySelector('#bug').style.display = 'block'
  } else {
    document.querySelector('#bug').style.display = 'none'
  }
}

//check xem email và password có nhập hay không

var checkValue = function () {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let name = document.getElementById('name').value
  let phone = document.getElementById('phone').value
  let address = document.getElementById('address').value
  if (
    email != '' &&
    password != '' &&
    name != '' &&
    phone != '' &&
    address != ''
  ) {
    document.getElementById('submit').disabled = false
  } else {
    document.getElementById('submit').disabled = true
  }
}

//input Phone, chỉ có ký tự số, số đầu tiên là số 0, độ dài từ 9 đến 11

var checkPhone = function () {
  let phone = document.getElementById('phone').value
  var regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
  if (!regex.test(phone)) {
    document.querySelector('#bugphone').style.display = 'block'
  } else {
    document.querySelector('#bugphone').style.display = 'none'
  }
}
//input radio chọn giới tính Nam/Nữ

var checkClick = function (radio) {
  var check = document.getElementsByName('check')
  check.forEach((item) => {
    if (item != radio) item.checked = false
  })
}

var checkBox = function (e) {
  if (this.checked) {
    document.getElementById('submit').disabled = false
  } else {
    document.getElementById('submit').disabled = true
  }
}

//Hiện thi danh sách
function Users(
  name,
  email,
  phone,
  gt,
  date,
  address,
  info,
  password,
  check_mail,
) {
  this.id = name
  this.name = name
  this.email = email
  this.phone = phone
  this.gt = gt
  this.date = date
  this.address = address
  this.info = info
  this.password = password
  this.check_mail = check_mail
}

list_users = [
  {
    name: 'Ngoc Mai',
    email: 'a@gmail.com',
    phone: '0378556945',
    gt: 'nữ',
    date: '200-03-12',
    address: 'bình dương',
    info: 'Tôi tên là.....',
    password: '0123456789',
    check_mail: '',
  },
  {
    name: 'Ngoc Mai',
    email: 'a@gmail.com',
    phone: '0378556945',
    gt: 'nữ',
    date: '200-03-12',
    address: 'bình dương',
    info: 'Tôi tên là.....',
    password: '0123456789',
    check_mail: '',
  },
]

var createListUser = function () {
  var name = document.getElementById('name').value
  var phone = document.getElementById('phone').value
  let address = document.getElementById('address').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let info = document.getElementById('info').value
  let date = document.getElementById('date').value
  let gt = document.getElementById('check').value
  let check_mail = document.getElementById('check_mail').value
  var users = new Users(
    name,
    email,
    phone,
    gt,
    date,
    address,
    info,
    password,
    check_mail,
  )
  list.push(users)
  renderListUser()
}

var renderListUser = function (data) {
  data = data || list_users
  let x = ''
  for (var i = 0; i < data.length; i++) {
    x += `<tr class="demo-list" id="demo_list">
    <td class="demo-item">${data[i].name}</td>
    <td class="demo-item">${data[i].date}</td>
    <td class="demo-item">${data[i].gt}</td>
    <td class="demo-item">${data[i].phone}</td>
    <td class="demo-item">${data[i].address}</td>
    <td class="demo-item">${data[i].email}</td>
    <td class="demo-item">${data[i].password}</td>
    <td class="demo-item">${data[i].info}</td>
    <td class="demo-item">${data[i].check_mail}</td>
    </tr>`
  }

  document.querySelector('#tbodySinhVien').innerHTML = x
}
renderListUser()

