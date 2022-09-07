// bài tập 5:In số nguyên tố

/**
 * Input: 
 * SNT,n=1,kq=""
 * 
 * Progress:
 * tao function kiem tra:(nếu giá trị value < 2 thì return false
 * cho i chạy từ 2 tới nhỏ hơn bằng căn bậc 2 giá trị value: nếu value chia hết cho i,chia hết return false,nếu ko thì return true;)
 * 
 * tao function.onclick:(
 * chạy n từ 1 đến giá trị người dung nhập:
 * chay hàm kiemTra(giá trị người dùng nhập) && lấy kq+= n(hàm đã kiem tra);
 * 
 * - OUTPUT:inner ra màn hình =kq;
 * )
 * 
 * 
 */

// document.getElementById("btnSNT").onclick=function(){
//     for(var SNT=+document.getElementById("SNT").value,n=1,kq="";n<=SNT;n++){
//         kiemTra(n) && (kq+=" "+ n);
//     }
//     document.getElementById("showInfoSNT").innerHTML=kq;
// };

// function kiemTra(value){
//     if(value<2)return false;
//     for(var i=2;i<=Math.sqrt(value);i++)
//     if(value%i==0)return false;return true
// }



  
// tạo function kiem tra snt:
  function kiemTraSnt(n){
    //flag = true => return cong vao kq
    //flag = false => break ko chay xun return de cong vao kq   
    var flag = true;
    
  for( var a = 2 ; a <= Math.sqrt(n) ; a++) {
        if ( n % a === 0 ){
            flag = false
            break ;
        }
    }
    return flag;
};

document.getElementById("btnSNT").onclick= function() {
//*Tìm và liệt kê các số nguyên tố */
// - input:
// + num=nguoi dung nhập 
// + i=2 chay toi bằng num
for (var num = document.getElementById("SNT").value * 1, i = 2,kq=""; i <= num; i++){
    //progress: neu check true thi kq += i;
    if (kiemTraSnt(i)){kq+=i+" "};
}
//output:
document.getElementById("showInfoSNT").innerHTML=kq;
};
