
(function () {

    /* let declares a variable and set a variable name for the items 
    select all the items in the html and store a value in the variables */

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    /*setting up an event listener for all the buttons and finding out which button was
    pressed
    */

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {

            /* setting a value for the screen and hold the value in the attribute dataset*/

            let value = "";
            if (e.target.dataset.num) {
                value = e.target.dataset.num;
            }
            screen.value += value;
        })
    });

    /**
     * Event listener for the calculator's equal button
     */
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            
            screen.value = "";
        } else {

            /* declaring a variable answer which the new value will be stored in 
            and displayed in the screen*/

            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    /**
     * The event listener works when the clear button is pressed and
     *  it will pass an empty value for the screen
     */
    clear.addEventListener('click', function (e) {
        screen.value = "";

    })

})();