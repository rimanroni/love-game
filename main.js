//    input you and patnar 
   const you =    document.getElementById('input1') ;
   const patnar = document.getElementById('input2') ;

//     submit button
   const submit = document.getElementById('sumbit');
   submit.addEventListener('click', function(){
    let parsent = Math.floor(Math.random() * 100);
      if(you.value =='' || patnar.value ==""){
          you.value = "";
          patnar.value = ""; 
          
          alert('invalid input')
   }else{
    if(parsent>=10){
        const you =    document.getElementById('input1').value ;
        const patnar = document.getElementById('input2').value ;
        
        let result = `${you} and ${patnar}  love ${parsent}  % ❤️`;
         document.getElementById('result').innerText = result;
        document.getElementById('input1').value = ""
        document.getElementById('input2').value = "";
     } else if(parsent<=0 ){
        parsent = 22
        const you =    document.getElementById('input1').value ;
        const patnar = document.getElementById('input2').value ;
        
        let result = `${you} and ${patnar}  love ${parsent}  % ❤️`
        document.getElementById('result').innerText = result;
        document.getElementById('input1').value = "";
        document.getElementById('input2').value = "";
        

    }
}
    //   function run time 
    setInterval(() => {
        
    },100);
 })

 