const form = document.getElementById("register-form");
var index = 1;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("err-msg").innerHTML = "";

    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const suffix = document.getElementById("suffix").value;
    const g = document.getElementsByName("gender");
    const gender = g[0].checked ? g[0].value : g[1].value;

    if(validName("First", firstName) && validName("Middle", middleName) && validName("Last", lastName) && validDob(dob)){
        var memberDetail = {
            "name": firstName+middleName+lastName
        };

        var membersList = JSON.parse(localStorage.getItem("MembersList") || "[]");
        membersList.push(memberDetail);
        localStorage.setItem('MembersList', JSON.stringify(membersList));

        var memberRow = `<tr>
                            <th scope="row">${index}</th>
                            <td>${firstName}</td>
                            <td>${middleName ? middleName : '-'}</td>
                            <td>${lastName}</td>
                            <td>${dob}</td>
                            <td>${suffix}</td>
                            <td>${gender}</td>
                        </tr>`;

        document.getElementById("membersTable-row").innerHTML += memberRow;
        this.index++;
        resetForm();

        document.getElementById("save-family").disabled = false;
        if(this.index == 6) document.getElementById("add-member").disabled = true;
    }
})

function resetForm(){
    document.getElementById("err-msg").innerHTML = "";
    form.reset();
}

function validName(type, name){
    if(type == "Middle" && name.length == 0) return true;

    if(name.length > 32){
        document.getElementById("err-msg").innerHTML = `${type} name too long`;
        return false;
    }

    var regex = /^[a-zA-Z]{2,32}$/;
    if(!regex.test(name)){
        document.getElementById("err-msg").innerHTML = `Invalid ${type} name`;
    }

    return regex.test(name);
}

function validDob(dob){
    // Add Dob Validation
    return true;
}

function saveFamilyDetails(){
    window.location.href = 'http://127.0.0.1:5500/Relations.html';
}