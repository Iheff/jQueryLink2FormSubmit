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

$(document).ready( function(){
	var inputID = '#ContentPlaceHolder1_BasketItems1_txtVoucher';
	 if(window.location.contains("voucher=")) // This doesn't work, any suggestions.
                		{
							//alert("This is a voucher Url");
							var voucherCode = getUrlVars()["voucher"];
							
							$('form:first input #'+ inputID ).attr('val',voucherCode);
							
							$('form:first').submit();	 
						}

	
	});

