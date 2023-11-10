var people = 1;
var selectedTip = 0;
var bill = 0;


var billFormat = new Cleave('#bill', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

$("#bill").on('keyup', function () {
    bill = Number($(this).val().replaceAll(',', ''));
    if(bill < 0){
        bill = 0;
        alert("Bill can't be negative");
    }
    calculate();
});
$(".tip__button").click(function () {
    selectedTip = Number($(this).html().slice(0, -1));
    $(".tip__button").removeClass('selected');
    console.log(selectedTip);
    this.classList.toggle('selected');
    if(selectedTip < 0) {
        selectedTip = 0;
    }
    calculate();
});
$("#tip").keyup(function () {
    selectedTip = Number($(this).val());
    console.log(selectedTip);
    $(".tip__button").removeClass('selected');
    calculate(); 
});

$("#people").keyup(function () {
    people = Number($(this).val());
    if(people==0){
        $(".error").removeClass("hide");
        $("#people").addClass("border-error");
    }
    else{
        $(".error").addClass("hide");
        $("#people").removeClass("border-error");
        calculate();
    }
});

function calculate() {
    if (people != 0) {
        let tip = bill * selectedTip / 100;
        let tipPerPerson = tip / people;
        let totalPerPerson = (bill + tip) / people;
        tipAmount.html('$' + tipPerPerson.toFixed(2));
        total.html('$' + totalPerPerson.toFixed(2));
    }
}
function reset() {
    people = 1;
    selectedTip = 0;
    bill = 0;
    $("#bill").val('');
    $("#tip").val('');
    $("#people").val('');
    $(".tip__button").removeClass('selected');
    tipAmount.html('$0.00');
    total.html('$0.00');
}

const tipAmount = $('.how-much-person');
const total = $('.how-much-total');
