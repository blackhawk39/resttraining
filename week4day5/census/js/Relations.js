getMembersList();


function getMembersList(){
    var membersList = JSON.parse(localStorage.getItem("MembersList"));

    for(var i=0; i<membersList.length ; i++){
        if(i == 0){
            document.getElementsByClassName("familyHead-header")[0].innerHTML = `How are related to ${membersList[0].name} ?`
        } else {
            var memberDropdown = `<label for="member-name">${membersList[i].name}</label>
                <select class="custom-select custom-select-lg mb-3" id="member-name" required>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Wife">Wife</option>
                </select>`;

            document.getElementById("members-list").innerHTML += memberDropdown;
        }

    }
}