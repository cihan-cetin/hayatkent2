function createRow(number, name1, name2) {
    let html = '';

    html += '<div id="inputFormRow' + number + '">';
    html += '<div class="row">';
    html += '<div class="col-5">';
    html += '<input type="text" name="' + name1 + '"class="form-control m-input" placeholder="Gider" autocomplete="off" required="" oninvalid="this.setCustomValidity(\'Lütfen bu alanı boş bırakmayın\')" oninput="setCustomValidity(\'\')">';
    html += '</div>';
    html += '<div class="col-3">';
    html += '<input type="text" name="' + name2 + '"class="form-control m-input" placeholder="Tutar" autocomplete="off"required="" oninvalid="this.setCustomValidity(\'Lütfen bu alanı boş bırakmayın\')"oninput="setCustomValidity(\'\')">';
    html += '</div>';
    html += '<div class="col-1">';
    html += '<button id="removeRow' + number + '" type="button" class="btn btn-danger">Sil</button>';
    html += '</div>';
    html += '</div>';
    return html;
}
// site
$("#addRow1").click(function () {
    let html = createRow("1", "site_gider[]", "site_tutar[]");
    $('#newRow1').append(html);
});
$(document).on('click', '#removeRow1', function () {
    $(this).closest('#inputFormRow1').remove();
});

// a blok
$("#addRow2").click(function () {
    let html = createRow("2", "a_blok_gider[]", "a_blok_tutar[]");
    $('#newRow2').append(html);
});
$(document).on('click', '#removeRow2', function () {
    $(this).closest('#inputFormRow2').remove();
});

// b blok
$("#addRow3").click(function () {
    let html = createRow("3", "b_blok_gider[]", "b_blok_tutar[]");
    $('#newRow3').append(html);
});
$(document).on('click', '#removeRow3', function () {
    $(this).closest('#inputFormRow3').remove();
});

// c blok
$("#addRow4").click(function () {
    let html = createRow("4", "c_blok_gider[]", "c_blok_tutar[]");
    $('#newRow4').append(html);
});
$(document).on('click', '#removeRow4', function () {
    $(this).closest('#inputFormRow4').remove();
});

// d blok
$("#addRow5").click(function () {
    let html = createRow("5", "d_blok_gider[]", "d_blok_tutar[]");
    $('#newRow5').append(html);
});
$(document).on('click', '#removeRow5', function () {
    $(this).closest('#inputFormRow5').remove();
});

// e blok
$("#addRow6").click(function () {
    let html = createRow("6", "e_blok_gider[]", "e_blok_tutar[]");
    $('#newRow6').append(html);
});
$(document).on('click', '#removeRow6', function () {
    $(this).closest('#inputFormRow6').remove();
});

// f blok
$("#addRow7").click(function () {
    let html = createRow("7", "f_blok_gider[]", "f_blok_tutar[]");
    $('#newRow7').append(html);
});
$(document).on('click', '#removeRow7', function () {
    $(this).closest('#inputFormRow7').remove();
});
