// // const e = require("express");

// $(function(){
//     // resetui();

//     $('#btnSend').on('click', function () {
//           let text = $('#ipt').val().trim();
//           if (text.length <= 0) {
//             return $('#ipt').val('')
//           }
//           $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
//            $('#ipt').val('')
//            resetui()
//            getMsg(text);
//           })

//           function getMsg(text){
//             $.ajax({
//             type:'GET',
//             url:'https://ajax-base-api-t.itheima.net/api/robot',
//             data:{
//                 spoken:text
//             },
//             success:function(res){
//                     console.log(res);
//                     if(res.message==='success'){
//                         let msg=res.data.info.text;
//                         $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>'+msg+'</span></li>')
//                         resetui()
//                         getVoice(msg);
//                     }
                    
//             }
//           })
//           }
//        function getVoice(text){
//         $.ajax({
//             type:'get',
//             url:'https://ajax-base-api-t.itheima.net/api/synthesize',
//             data:{
//                 text:text
//             },
//             success:function(res){
//                 console.log(res);
//                 if(res.status===200){
//                     $('#voice').attr('src',res.voiceUrl)
//                 }
//             }
//         })
//        }
//        $('#ipt').on('keyup',function(e){
//         if(e.key==='Enter'){
//             $('#btnSend').click();
//         }
//        })
// })