$(document).ready(function(){
  $(".success").hide();
  $(".error").hide();
  $()
  var regexNum=/^[0-9]*$/;
  var regString=/[a-zA-Z]/;

// for blur 

  $("#product_sku , #product_name , #product_price , #product_quantity").blur(function(){
    var inpVal1=$("#product_sku").val();
    var inpVal2=$("#product_name").val();
    var inpVal3=$("#product_price").val();
    var inpVal4=$("#product_quantity").val();

    if(inpVal1=="")
    {  $erroRFlag=1;
       $(".error1").html("please enter value");
       $("#product_sku").css("border-color","#FF5733");
       $(".error1").css("color","#FF5733");
    }
    else{ if(!inpVal1.match(regexNum))
    {
        $(".error1").html("please enter integer value");
        $("#product_sku").css("border-color","#FF5733");
        $(".error1").css("color","#FF5733");
    }
    else
    {
        $(".error1").html("");
        $("#product_sku").css("border-color","");
    }
    }   
    if(inpVal2=="")
    {
       $(".error2").html("please enter value");
       $("#product_name").css("border-color","#FF5733");
       $(".error2").css("color","#FF5733");
    }
    else{
        if(!inpVal2.match(regString))
       {
        $(".error2").html("please enter string value");
        $("#product_name").css("border-color","#FF5733");
        $(".error2").css("color","#FF5733");
        }
       else
       {
        $(".error2").html("");
        $("#product_name").css("border-color","");
       }
    }

    if(inpVal3=="")
    {
       $(".error3").html("please enter value");
       $("#product_price").css("border-color","#FF5733");
       $(".error3").css("color","#FF5733");
    }
    else 
    {
    if(!inpVal3.match(regexNum))
    {
        $(".error3").html("please enter integer value");
        $("#product_price").css("border-color","#FF5733");
        $(".error3").css("color","#FF5733");
    }
    else
    {
        $(".error3").html("");
        $("#product_price").css("border-color","");
        
    }
   }
   if(inpVal4=="")
   {
      $(".error4").html("please enter value");
      $("#product_quantity").css("border-color","#FF5733");
      $(".error4").css("color","#FF5733");
   }
   else 
   {
   if(!inpVal4.match(regexNum))
   {
       $(".error4").html("please enter integer value");
       $("#product_quantity").css("border-color","#FF5733");
       $(".error3").css("color","#FF5733");
   }
   else
   {
       $(".error4").html("");
       $("#product_quantity").css("border-color","");
       
   }
  }
  })

  // Populate function
  $arr_Product=[];
  function populate()
  {
    text="";
    text="<table id='tblshow'><tr id='tr1'><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
    for(i=0;i<$arr_Product.length;i++)
    {
       text+="<tr><td>"+$arr_Product[i].SKU+"</td><td>"+$arr_Product[i].Product_name+"</td><td>"+$arr_Product[i].Product_price+"</td><td> "+$arr_Product[i].Product_quantity+"</td><td><a href='#' class='edit'>Edit</a><a href='#' class='delete'>Delete</a></td></tr>";

    }
    $("#product_list").html(text);
    text="</table>"
    
  }
  


  //for Add Product
  
  $("#add_product").click(function()
  {
     $inpVal1=$("#product_sku").val();
     $inpVal2=$("#product_name").val();
     $inpVal3=$("#product_price").val();
     $inpVal4=$("#product_quantity").val();
     $btnValue=$("#add_product").val();
     $errorFlag=0;
    if($btnValue=="Add Product")
    {
      if($inpVal1=="")
      {
        $errorFlag=1;
        $(".error1").html("Sku should not empty");
        $(".error").show();
        $("#product_sku").css("border-color","#FF5733");
        $(".error1").css("color","#FF5733");
      }
      else 
      {
         if(!$inpVal1.match(regexNum))  
         {
        $errorFlag=1;
        $(".error1").html("Sku string not match empty");
        $(".error").show();
        $("#product_sku").css("border-color","#FF5733");
        $(".error1").css("color","#FF5733");
         }
         else
         {
        $(".error1").html("");
        $(".error").hide();
        $("#product_sku").css("border-color","");
        $(".error1").css("color","");
         }

      }

      if($inpVal2=="")
      {
        $errorFlag=1;
        $(".error2").html("product should not empty");
        $(".error").show();
        $("#product_name").css("border-color","#FF5733");
        $(".error2").css("color","#FF5733");
      }
      else 
      {
         if(!$inpVal2.match(regString))  
         {
        $errorFlag=1;
        $(".error2").html("value not match empty");
        $(".error").show();
        $("#product_name").css("border-color","#FF5733");
        $(".error2").css("color","#FF5733");
         }
         else
         {
        $(".error2").html("");
        $(".error").hide();
        $("#product_name").css("border-color","");
        $(".error2").css("color","");
        
         }

      }
       
      if($inpVal3=="")
      {
        $errorFlag=1;
        $(".error3").html("product should not empty");
        $(".error").show();
        $("#product_name").css("border-color","#FF5733");
        $(".error3").css("color","#FF5733");
      }
      else 
      {
         if(!$inpVal3.match(regexNum))  
         {
        $errorFlag=1;
        $(".error3").html("value not match empty");
        $(".error").show();
        $("#product_name").css("border-color","#FF5733");
        $(".error3").css("color","#FF5733");
         }
         else
         {
        $(".error3").html("");
        $(".error").hide();
        $("#product_name").css("border-color","");
        $(".error3").css("color","");
         }

      }
       
      if($inpVal4=="")
      {
        $errorFlag=1;
        $(".error3").html("product should not empty");
        $(".error").show();
        $("#product_name").css("border-color","#FF5733");
        $(".error3").css("color","#FF5733");
      }
      else 
      {
         if(! $inpVal4.match(regexNum))  
         {
        $errorFlag=1;
        $(".error4").html("value not match empty");
        $(".error").show();
        $("#product_name").css("border-color","#FF5733");
        $(".error4").css("color","#FF5733");
         }
         else
         {
        $(".error4").html("");
        $(".error").hide();
        $("#product_name").css("border-color","");
        $(".error4").css("color","");
         }
      }
      if($errorFlag==0)
      {
        $arrObj={SKU:$inpVal1,Product_name:$inpVal2,Product_price:$inpVal3,Product_quantity:$inpVal4};
        $arr_Product.push($arrObj);
        $(".success").show();
        populate();
      }
    } 
    
  })
// delete 
    $("#product_list").on('click','.delete',function(){
        
        $confirm_msg=confirm("are you shower wants to delete massage");
        if($confirm_msg==true)
        {
            $index=$(this).parent().parent().remove();
           
        }
        else{
            return;
        }
        
        
    })
    //edit  
 $("#product_list").on('click','.edit',function(){
  
     $index=$(this).parent().parent().index();
     $("#product_sku").val($arr_Product[$index-1].SKU);
     $("#product_name").val($arr_Product[$index-1].Product_name);
     $("#product_price").val($arr_Product[$index-1].Product_price);
     $("#product_quantity").val($arr_Product[$index-1].Product_quantity);
     $("#add_product").val("Update");
     $("#add_product").attr("index",$index);
 })
// update 
 $("#add_product").click(function(){

    if($btnValue=="Update")
    {
        $prod_index=$(this).attr("index");
         console.log( $prod_index);
        $arr_Product[$prod_index-1].SKU=$("#product_sku").val();
        $arr_Product[$prod_index-1].Product_name=$("#product_name").val();
        $arr_Product[$prod_index-1].Product_price=$("#product_price").val();
        $arr_Product[$prod_index-1].product_quantity=$("#product_quantity").val();
        populate(); 
        $("#add_product").val("Add Product");
        $(".success").html("Data updated successfuly");
   
    }
 })
 





})