let list_student = [
    {
        id: 1,
        name: 'Ngoc Mai',
        email: 'a@gmail.com',
        math: 8,
        physic: 9,
        chemistry: 8,
    },
    {
        id: 2,
        name: 'Phi Long',
        email: 'b@gmail.com',
        math: 7,
        physic: 10,
        chemistry: 8,
    },
    {
        id: 3,
        name: 'Minh Quang',
        email: 'c@gmail.com',
        math: 8,
        physic: 7,
        chemistry: 6,
    },
    {
        id: 4,
        name: 'Ngoc An',
        email: 'd@gmail.com',
        math: 6,
        physic: 7,
        chemistry: 8,
    }
]

let text=""
let x='';
for (value of list_student) {
    x +=`<tr class="demo-list">
            <td class="demo-item">${value.id}</td>
            <td class="demo-item">${value.name}</td>
            <td class="demo-item">${value.email}</td>
            <td class="demo-item">${value.math}</td>
            <td class="demo-item">${value.physic}</td>
            <td class="demo-item">${value.chemistry}</td>
            <td class="demo-item"><button>Xóa</button></td>
            <td class="demo-item"><button>Sửa</button></td>
        </tr>`
}

document.querySelector('#tbodySinhVien').innerHTML = x
