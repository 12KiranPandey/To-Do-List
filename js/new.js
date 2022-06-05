const Tasktitle=document.getElementById("title");
const Taskdate=document.getElementById("date");
const Taskdesc=document.getElementById("description");
let title,date,desc, TaskDiv,count=0;
document.getElementById("btn").addEventListener('click',function(){
    title=Tasktitle.value;
    date=Taskdate.value;
    desc=Taskdesc.value;
    if(title==""||date==""||desc=="")
    {
        alert("All fields are required");
    }
    else{
        createDiv("pending");
        ResetDiv();
        
     }

} );
function createDiv(type){
     count++;
     divId=type+"_"+count;
    var TaskDiv=document.createElement('div');
    TaskDiv.id=divId;
    TaskDiv.className="taskdiv1";
    TaskDiv.innerHTML+="<p> Title: <input type='text'class='info' id='title"+count+"' value='"+title+"'></p><p>Date :<input type='text' class='info'id='date"+count+"' value='"+date+"'></p><p>Desc: <input type='text' class='info' id='desc"+count+"' value='"+desc+"'></p>";
    //  TaskDiv.innerHTML+="<button class='remove' onclick='RemoveDiv("+count+")'>Remove</button>"
      TaskDiv.innerHTML+=`<span><i class='fa-solid fa-xmark remove' onclick='RemoveDiv("${divId}")'></i><span>`;
      TaskDiv.innerHTML+=   "<span><i class='fa-solid fa-circle-check cheack' id='check"+count+"'  onclick='Status("+count+")'></i> </span>"
    //   document.getElementById("taskList").appendChild(TaskDiv);
    
if(type=='active')
{
    document.getElementById("activeList").appendChild(TaskDiv);
    setData();
}
else{
    document.getElementById("pendingTask").appendChild(TaskDiv);
}
}
function setData(){

    title=document.querySelector("#title"+count).value;
    date=document.querySelector("#date"+count).value;
    desc=document.querySelector("#desc"+count).value;
}
function ResetDiv()
{
    // alert("hi");
    Tasktitle.value="";
    Taskdate.value="";
    Taskdesc.value="";   
}
function RemoveDiv(id){

    document.getElementById(id).remove();
}
function Status(id){
    // alert("hi");
    let status=document.getElementById("check"+id).click;
if(status)
{
    // document.getElementById("taskDiv"+id).style.backgroundColor="gold";
    createDiv('active');
    RemoveDiv('pending_'+id);
}
else{
    // document.getElementById("taskDiv"+id).style.backgroundColor="grey";
    document.getElementById("TaskDiv"+id).style.backgroundColor="#95CD41";
}
}

