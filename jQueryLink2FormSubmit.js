function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
/*
Credit where credit is due!
Found at: 
http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
and he got it from:
Roshumbo @ http://snipplr.com/users/Roshambo/
*/

$(document).ready( function(){
	var inputID = '#ContentPlaceHolder1_BasketItems1_txtVoucher';
	 if(document.URL.indexOf("?voucher=") >= 0) // This doesn't work, any suggestions.
                		{
							alert("This is a voucher Url");
							alert(getUrlVars()['voucher']);
							var voucherCode = getUrlVars()["voucher"];
							
							$('#ContentPlaceHolder1_BasketItems1_txtVoucher').val(voucherCode);
							$('.hidecontents.hidevoucher').slideDown(500).children('.vouchero').css('border','1px solid green');
							$('#form1').attr('action','http://www.wiggle.co.uk/BasketDisplay.aspx');
							 __doPostBack('ContentPlaceHolder1_BasketItems1_btnAddVoucher', '');
							//$('#form1').submit();	 
						}

	
	});

