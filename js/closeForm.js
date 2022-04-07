

        function closeLayout () {     
            openForm.classList.add('close-layout');
        }

        let openForm = document.getElementById('open-form')

        let element = document.getElementById ('event-close-open')


        element.addEventListener("click",closeLayout)


      //   ** //




        const myTimeout = setTimeout( setTimeOutElemnt, 10000)

            function setTimeOutElemnt () {
                document.getElementById("open-form").style.display = "block";
                document.getElementById("open-form").style.animationDuration = "2s"
            }


        /** **/

        $(document).ready(function()
             { 
               var submit = $("input[type='submit']");
               submit.click(function()
                           {
                              var data = $('form#test-form').serialize();
                              $.ajax({
                                        type : 'GET', 
                                        url : 'https://script.google.com/macros/s/AKfycbxiRbRXwUTLaCA6JwBjO9kvHtBa0RynZpgmS6xUk_AM66cSWAo21eSBZAJlxWzRNDUHMA/exec',
                                        dataType:'json',
                                        crossDomain : true,
                                        data : data,
                                        success : function(data)
                                      { 
                              if(data == 'false') 
                                      {
                                         alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
                                      }else{
                                         alert('Đã thêm dữ liệu vào Form');
                                      }
                           }
                });
                return false;
               });
             });




