(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if(screen.value==="Enter Value")screen.value='';
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') { screen.value = "Enter Value"; }
        else {
            let ans = eval(screen.value);
            screen.value = ans.toPrecision(4);
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = '';
    });
})();
