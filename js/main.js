$(document).ready(function () {
    $('.buttons>.left>.search').click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
});
