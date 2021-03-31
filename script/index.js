let row=1
let inputs= document.querySelectorAll('input')

document.getElementById('getEntry').addEventListener("click", (e) => {
    // preventing the page to refresh after submit...
    e.preventDefault()

    // getting user input from the from...
    let name= document.getElementById('name').value
    let gender= "male"
    if(document.getElementById('female').checked==true) {
        gender= "female"
    }
    let email= document.getElementById('email').value
    let website= document.getElementById('website').value 
    let image_url= document.getElementById('image_url').value
    let student_skills=''

    // getting default images if image link is not provided by the student...
    if(image_url=='') {
        gender=='male' ? image_url+= "image/male.jpg" : image_url+= "image/female.jpg"
    }

    // taking skills input values...
    let html= document.getElementById('html')
    let css= document.getElementById('css')
    let java= document.getElementById('java')

    if(java.checked==true) {
        student_skills+= 'JAVA'
    }

    if(html.checked==true) {
         if(student_skills!= '') {
            student_skills+= ', '
        }
        student_skills+= 'HTML'
    }

    if(css.checked==true) {
        if(student_skills!= '') {
            student_skills+= ', '
        }
        student_skills+= 'CSS'
    }

    // alert message...
    // checking if required fields are filled or not...
    if(name==''|| email==''|| website=='' || student_skills==''){
        let alertbox= document.getElementById('alert-box-danger')
        alertbox.innerHTML= "<b>Required fields can not be empty !</b>"
        alertbox.style.display= 'block'
        setTimeout(()=> {
            document.getElementById('alert-box-danger').style.display= 'none'
        }, 4000)
        return
    }

    // calling ValidateEmail function...
    // checking for email validation...
    if(!ValidateEmail(email)) {
        let alertbox= document.getElementById('alert-box-danger')
        alertbox.innerHTML= "<b>Given email address is not valid !</b>"
        alertbox.style.display= 'block'
        setTimeout(()=> {
            document.getElementById('alert-box-danger').style.display= 'none'
        }, 4000)
        return 
    }


    let display= document.getElementById("display")
    let new_row= display.insertRow(row)
    
    let cell1= new_row.insertCell(0)
    let cell2= new_row.insertCell(1)

   let stud_details='', student_dp=''
   stud_details+= "<p id='student_name'><b>"+name+"</b></p><p id='student_gender'>"+gender+"</p><p id='student_email'>"+email+"</p><p id='student_weblink'><a href="+website+" target='_blabk'>"+website+"</a></p><p id='student_skills'>"+student_skills+"</p>"
   cell1.innerHTML= stud_details
   student_dp+= "<img id='student_dp' src="+image_url+"></img>"
   cell2.innerHTML= student_dp
   
   // displaying sucess message...
    let alertbox= document.getElementById('alert-box-success')
    alertbox.style.display= 'block'
    setTimeout(()=> {
        document.getElementById('alert-box-success').style.display= 'none'
    }, 5000)

    row++
    inputs.forEach(input => input.value= '')
})

// clears form data...
document.getElementById('clear').addEventListener("click",(e) => {
    e.preventDefault()
    inputs.forEach(input => input.value= '')
})

// validating email...
function ValidateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return (true)
    }
    return (false)
}