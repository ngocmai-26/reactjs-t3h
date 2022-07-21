function Student(id, name, email, math, physic, chemistry) {
  this.id = id
  this.name = name
  this.email = email
  this.math = math
  this.physic = physic
  this.chemistry = chemistry
}

var list_student = [
  {
    id: '1',
    name: 'Ngoc Mai',
    email: 'a@gmail.com',
    math: 8,
    physic: 9,
    chemistry: 8,
  },
  {
    id: '2',
    name: 'Phi Long',
    email: 'b@gmail.com',
    math: 7,
    physic: 10,
    chemistry: 8,
  },
  {
    id: '3',
    name: 'Minh Quang',
    email: 'c@gmail.com',
    math: 8,
    physic: 7,
    chemistry: 6,
  },
  {
    id: '4',
    name: 'Ngoc An',
    email: 'd@gmail.com',
    math: 6,
    physic: 7,
    chemistry: 8,
  },
]
renderStudent()
var createStudent = function () {
  var id = document.querySelector('#txtMaSV').value
  var name = document.querySelector('#txtTenSV').value
  var email = document.querySelector('#txtEmail').value
  var math = document.querySelector('#txtDiemToan').value
  var physic = document.querySelector('#txtDiemLy').value
  var chemistry = document.querySelector('#txtDiemHoa').value
  console.log(typeof id)
  var student = new Student(id, name, email, math, physic, chemistry)
  list_student.push(student)
  renderStudent()
}

function renderStudent(data) {
  data = data || list_student
  let x = ''
  let count = 0
  for (var i = 0; i < data.length; i++) {
    count++
    x += `<tr class="demo-list" id="demo_list">
                <td class="demo-item id-ok">${data[i].id}</td>
                <td class="demo-item">${data[i].name}</td>
                <td class="demo-item">${data[i].email}</td>
                <td class="demo-item">${data[i].math}</td>
                <td class="demo-item">${data[i].physic}</td>
                <td class="demo-item">${data[i].chemistry}</td>
                <td class="demo-item">${(
                  parseFloat(
                    data[i].chemistry + data[i].physic + data[i].math,
                  ) / 3
                ).toFixed(1)}</td>
                <td class="demo-item"><button onclick="deleteStudent('${
                  data[i].id
                }')">Xóa</button></td>
                <td class="demo-item"><button>Sửa</button></td>
            </tr>`
  }
  document.querySelector('#count').innerHTML = count
  document.querySelector('#tbodySinhVien').innerHTML = x
}
renderTotal()
function renderTotal(data) {
  data = data || list_student
  let x = ''
  var count = 0,
    sum_1 = 0,
    sum_2 = 0,
    sum_3 = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentSum =
      (list_student[i].math +
        list_student[i].physic +
        list_student[i].chemistry) /
      3
    var studentMath = list_student[i].math 
    if (studentSum >= 8) {
      sum_1++
    } else if (studentSum >= 6.5 && studentSum < 8) {
      sum_2++
    } else {
      sum_3++
    }
  }
  x += `<tr class="demo-list" id="demo_list">
          <td>Điểm trung bình trên 8</td>
          <td class="demo-item id-ok">${sum_1}</td>
        </tr>
        <tr class="demo-list" id="demo_list">
          <td>Điểm trung bình trên 6.5</td>
          <td class="demo-item id-ok">${sum_2}</td>
        </tr>
        <tr class="demo-list" id="demo_list">
          <td>Điểm trung bình trên 4</td>
          <td class="demo-item id-ok">${sum_3}</td>
        </tr>`

  document.querySelector('#tbodyTotal').innerHTML = x
}

function deleteStudent(id) {
  var index = findById(id)
  if (index === -1) {
    alert('sinh viên không tồn tại')
    return
  }
  list_student.splice(index, 1)
  renderStudent()
}

var findById = function (id) {
  for (var i = 0; i < list_student.length; i++) {
    if (list_student[i].id === id) {
      return i
    }
  }
  return -1
}

//Tìm kiếm

var searchStudent = function () {
  var keyword = document.getElementById('txtSearch').value.toLowerCase().trim()
  var results = []
  for (var i = 0; i < list_student.length; i++) {
    var studentName = list_student[i].name.toLowerCase()
    if (list_student[i].id === keyword || studentName.includes(keyword)) {
      results.push(list_student[i])
    }
  }

  renderStudent(results)
}

//Thống kê điểm môn toán
var StatisticMath8 = function () {
  var list_math = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentMath = list_student[i].math
    if (studentMath >= 8) {
      count++
      list_math.push(list_student[i])
    }
  }
  console.log(count)
  document.querySelector('#count').innerHTML = count
  renderStudent(list_math)
}

var StatisticMath65 = function () {
  var list_math = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentMath = list_student[i].math
    if (studentMath >= 6.5) {
      list_math.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(list_math)
}

var StatisticMath4 = function () {
  var list_math = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentMath = list_student[i].math
    if (studentMath >= 4) {
      list_math.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(list_math)
}

//Thống kê điểm môn lý

var StatisticPhysic8 = function () {
  var list_physic = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentPhysic = list_student[i].physic
    if (studentPhysic >= 8) {
      list_physic.push(list_student[i])
      count++
    }
  }
  console.log(count)
  document.querySelector('#count').innerHTML = count

  renderStudent(list_physic)
}

var StatisticPhysic65 = function () {
  var list_physic = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentPhysic = list_student[i].physic
    if (studentPhysic >= 6.5) {
      list_physic.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(list_physic)
}

var StatisticPhysic4 = function () {
  var list_physic = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentPhysic = list_student[i].physic
    if (studentPhysic >= 4) {
      list_physic.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(list_physic)
}

//Thống kê điểm môn hóa
var StatisticChemistry8 = function () {
  var list_chemistry = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentChemistry = list_student[i].chemistry
    console.log(studentChemistry)
    if (studentChemistry >= 8) {
      list_chemistry.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(list_chemistry)
}

var StatisticChemistry65 = function () {
  var list_chemistry = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentChemistry = list_student[i].chemistry
    if (studentChemistry >= 6.5) {
      list_chemistry.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(list_chemistry)
}

var StatisticChemistry4 = function () {
  var list_chemistry = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentChemistry = list_student[i].chemistry
    if (studentChemistry >= 4) {
      list_chemistry.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(list_chemistry)
}

//Tính tổng điểm 3 môn

var total8 = function () {
  var totals = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentChemistry = list_student[i].chemistry
    var studentPhysic = list_student[i].physic
    var studentMath = list_student[i].math
    var total = (studentChemistry + studentPhysic + studentMath) / 3
    if (total >= 8) {
      totals.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(totals)
}

var total65 = function () {
  var totals = []
  let count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentChemistry = list_student[i].chemistry
    var studentPhysic = list_student[i].physic
    var studentMath = list_student[i].math
    var total = (studentChemistry + studentPhysic + studentMath) / 3
    if (total >= 6.5) {
      totals.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(totals)
}

var total4 = function () {
  var totals = []
  var count = 0
  for (var i = 0; i < list_student.length; i++) {
    var studentChemistry = list_student[i].chemistry
    var studentPhysic = list_student[i].physic
    var studentMath = list_student[i].math
    var total = (studentChemistry + studentPhysic + studentMath) / 3
    if (total >= 4) {
      totals.push(list_student[i])
      count++
    }
  }
  document.querySelector('#count').innerHTML = count
  renderStudent(totals)
}
