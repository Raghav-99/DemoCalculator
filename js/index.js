$(document).ready(function() {
    let resultObj = $('#resultArea');
    $('.operator').on('click', function(event) {
        if(resultObj.val() === "" || resultObj.val() == undefined) {
            alert("Operator before initial operand not allowed")
        }
        if(resultObj.val().endsWith("+") || resultObj.val().endsWith("-") || resultObj.val().endsWith("*") || resultObj.val().endsWith("%"))
        {
            alert("There can't be 2 consecutive operators together!")
        }
        else
        {
            resultObj.val(resultObj.val().trim().toString().concat(
                $(this).text().trim().toString())
            );
        }
    })

    $('.operand').on('click', function(event) {
        resultObj.val() === "0" ? resultObj.val($(this).text().toString()) :resultObj.val(resultObj.val().trim().toString().
        concat($(this).text().trim().toString())
        );
    })

    $('#btnResult').on('click', function(event) {
        if(resultObj.val() === "" || resultObj.val() == undefined || resultObj.val() == NaN)
        {
            resultObj.val("0");
        }
        else if(resultObj.val().endsWith("+") || resultObj.val().endsWith("-") || resultObj.val().endsWith("*") || resultObj.val().endsWith("%"))
        {
            alert("Expression can't end with an operator!")
        }
        else {
            resultObj.val(Function('return ' + resultObj.val()))
        }
    })

    $('.clear').on('click', function(event) {
        resultObj.val('0')
    })

    $('.backspace').on('click', function(event) {
        let deletedChar = resultObj.val().charAt(resultObj.val().length - 1);
        let updatedExpr = resultObj.val().replace(deletedChar, '');
        resultObj.val(updatedExpr)
    })
})