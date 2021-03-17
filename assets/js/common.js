function GetById(id){
    return document.getElementById(id);
}

function GetValue(id){
    return GetById(id).innerHTML;
}

function SetValue(id, value){
    GetById(id).innerHTML = value;
}