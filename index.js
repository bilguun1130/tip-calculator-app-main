var people = 1;
var selectedTip = 0;
var bill = 0;


var billFormat = new Cleave('#bill', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});
const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
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
    this.classList.toggle('selected');
    if(selectedTip < 0) {
        selectedTip = 0;
    }
    calculate();
});
$("#tip").keyup(function () {
    selectedTip = Number($(this).val());
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
        let tipPerPerson = (tip / people).toFixed(2);
        let totalPerPerson = ((bill + tip) / people).toFixed(2);
        const formattedTotal = numberFormatter.format(totalPerPerson);
        const formattedTip = numberFormatter.format(tipPerPerson);
        tipAmount.html('$' + formattedTip);
        total.html('$' + formattedTotal);
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


