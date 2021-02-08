var arr = [];

function display() {
    var a = "";
    $('tbody ').empty();
    for (var i = 0; i < arr.length; i++) {
        a = `<tr><td>${arr[i].firstname}</td><td>${arr[i].lastname}</td><td>${arr[i].email}</td>
             <td>${arr[i].mobile}</td>
            <td><button onclick="deletes(${i})" class = "btn btn-danger">Delete </button></td>
        <td><button onclick="Edit(${i})" id="edit" class ="btn btn-info"> Edit </button></td>
        <td><button onclick="update()" class="btn btn-success">Update</button></td></tr>`;
        $('tbody').append(a);



    }

}
$(document).ready(function () {
    $('#form').validate({
        firstname: "required",
        lastname: "required",
        email: "required",
        mobile: "required",
        rules: {
            firstname: {
                required: true,
                maxlength: 20,

            },
            lastname: {
                required: true,
                maxlength: 20
            },
            email: {
                required: true,
                email: true
            },
            mobile: {
                required: true
            },
            messages: {
                firstname: {
                    required: 'please enter your name'
                },
                lastname: {
                    required: 'please enter your name'
                },
                email: {
                    required: 'please enter your email'
                },
                mobile: {
                    required: 'please enter your mobile no.'
                }
            }
        }
    })
})

function add() {
    var firstname = $("#firstname").val();
    var lastname = $('#lastname').val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    if (firstname != "" && lastname != "" && email != "" && mobile != "") {
        record = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            mobile: mobile
        }

        arr.push(record);
        let obj = JSON.stringify(arr);
        localStorage.setItem('arr', obj);
        localStorage.getItem(JSON.parse(obj));


        display();
    }
    else {
        alert("Please Fill all details");
    }


    $("#firstname").val("");
    $("#lastname").val("");
    $("#email").val("");
    $('#mobile').val("");

};



function deletes(i) {
    arr.splice(i, 1);
    display();
}
function Edit(item) {

    $('#firstname').val(arr[item].firstname);
    $('#lastname').val(arr[item].lastname);
    $('#email').val(arr[item].email);
    $('#mobile').val(arr[item].mobile);
    $('#update').css('display', 'inline');
    $('#submit').css('display', 'none');

}
function update() {
    item = 0;
    $("#update").css('display', 'none');
    $('#edit').css('display', 'inline');
    var data = {};
    data["firstname"] = $("#firstname").val();
    data["lastname"] = $("#lastname").val();
    data["email"] = $("#email").val();
    data["mobile"] = $("#mobile").val();
    arr.splice(item, 1, data);
    $("#firstname").val("");
    $("#lastname").val("");
    $("#email").val("");
    $('#mobile').val("");
    display();
}
// localStorage.setItem('name','kartik');
// console.log(localStorage);
// localStorage.setItem('name2','rohan');
// console.log(localStorage);
// let name=localStorage.getItem('name');
// console.log(name);
// let name2=localStorage.getItem('name2gfdhfghf');//null if their key is not valid
// console.log(name2);
// localStorage.removeItem('name2');//to remove a particular key
