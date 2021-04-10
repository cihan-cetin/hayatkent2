const url = window.location.search;
const params = new URLSearchParams(url);
const baslangic_tarihi = params.get('baslangic_tarihi');
const bitis_tarihi = params.get('bitis_tarihi');
const site_giderler = params.getAll('site_gider[]');
const site_tutarlar = params.getAll('site_tutar[]');
const a_giderler = params.getAll('a_blok_gider[]');
const a_tutarlar = params.getAll('a_blok_tutar[]');
const b_giderler = params.getAll('b_blok_gider[]');
const b_tutarlar = params.getAll('b_blok_tutar[]');
const c_giderler = params.getAll('c_blok_gider[]');
const c_tutarlar = params.getAll('c_blok_tutar[]');
const d_giderler = params.getAll('d_blok_gider[]');
const d_tutarlar = params.getAll('d_blok_tutar[]');
const e_giderler = params.getAll('e_blok_gider[]');
const e_tutarlar = params.getAll('e_blok_tutar[]');
const f_giderler = params.getAll('f_blok_gider[]');
const f_tutarlar = params.getAll('f_blok_tutar[]');
const dipnot = params.get('dipnot');

function createTable(giderler, tutarlar) {
    var baslangic_tarihi_array = baslangic_tarihi.split('-');
    var baslangic_tarihi_formatted = baslangic_tarihi_array[2] + '.' + baslangic_tarihi_array[1] + '.' + baslangic_tarihi_array[0];
    var bitis_tarihi_array = bitis_tarihi.split('-');
    var bitis_tarihi_formatted = bitis_tarihi_array[2] + '.' + bitis_tarihi_array[1] + '.' + bitis_tarihi_array[0];
    var content = '<h4>(' + baslangic_tarihi_formatted + ' - ' + bitis_tarihi_formatted + ' tarihleri arası)</h4>';
    var siteSum = 0;
    var blokSum = 0;

    content += '<br>';

    //  Site Giderleri
    content += '<table>';
    content += '<tr><th colspan="3">Site Giderleri</th></tr>';
    content += '<tr><th>Gider</th><th>Tutar</th><th>Daire Başına</th></tr>';
    for (let i = 0; i < site_giderler.length; i++) {
        content += '<tr>';
        content += '<td>' + site_giderler[i] + '</td>';
        content += '<td>' + site_tutarlar[i] + ' TL</td>';
        content += '<td>' + (parseFloat(site_tutarlar[i]) / 258).toFixed(2) + ' TL</td>';
        siteSum += parseFloat(site_tutarlar[i]);
        content += '</tr>';
    }

    content += '<tr>';
    content += '<th style="text-align:left;">Site Giderleri Toplamı</th>';
    content += '<td>' + siteSum.toFixed(0) + ' TL</td>';
    content += '<td>' + (siteSum / 258).toFixed(2) + ' TL</td>';
    content += '</tr>';

    //  Blok Giderleri
    content += '<tr><th colspan="3">Blok Giderleri</th></tr>';
    content += '<tr><th>Gider</th><th>Tutar</th><th>Daire Başına</th></tr>';
    for (let i = 0; i < giderler.length; i++) {
        content += '<tr>';
        content += '<td>' + giderler[i] + '</td>';
        content += '<td>' + tutarlar[i] + ' TL</td>';
        content += '<td>' + (parseFloat(tutarlar[i]) / 43).toFixed(2) + ' TL</td>';
        blokSum += parseFloat(tutarlar[i]);
        content += '</tr>';
    }

    content += '<tr>';
    content += '<th style="text-align:left;">Blok Giderleri Toplamı</th>';
    content += '<td>' + blokSum.toFixed(0) + ' TL</td>';
    content += '<td>' + (blokSum / 43).toFixed(2) + ' TL</td>';
    content += '</tr>';
    
    //Odenecek Tutar

    var toplam = siteSum / 258 + blokSum / 43;
    var odenecekTutar = (parseInt(toplam / 5) + 1) * 5;
    var yuvarlama = odenecekTutar - toplam;

    content += '<tr><th colspan="3">Ödenecek Tutar</th></tr>';
    content += '<tr>';
    content += '<td colspan="2">Daire Başına Düşen Toplam Tutar</td>';
    content += '<td>' + toplam.toFixed(2) + ' TL</td>';
    content += '</tr>';

    content += '<tr>';
    content += '<td colspan="2">Yuvarlama</td>';
    content += '<td>' + yuvarlama.toFixed(2) + ' TL</td>';
    content += '</tr>';

    content += '<tr>';
    content += '<th style="text-align:left;" colspan="2">Ödenecek Tutar</th>';
    content += '<td class="odenecek">' + odenecekTutar + ' TL</td>';
    content += '</tr>';

    content += '</table>';

    content += '<br><br>';

    //  Dipnot
    content += '<h4>' + dipnot + '</h4>';
    return content;
}

$(document).ready(function () {

    let a_content = createTable(a_giderler, a_tutarlar);
    let b_content = createTable(b_giderler, b_tutarlar);
    let c_content = createTable(c_giderler, c_tutarlar);
    let d_content = createTable(d_giderler, d_tutarlar);
    let e_content = createTable(e_giderler, e_tutarlar);
    let f_content = createTable(f_giderler, f_tutarlar);

    $('#a_blok_table').append(a_content);
    $('#a_blok_table2').append(a_content);
    $('#b_blok_table').append(b_content);
    $('#b_blok_table2').append(b_content);
    $('#c_blok_table').append(c_content);
    $('#c_blok_table2').append(c_content);
    $('#d_blok_table').append(d_content);
    $('#d_blok_table2').append(d_content);
    $('#e_blok_table').append(e_content);
    $('#e_blok_table2').append(e_content);
    $('#f_blok_table').append(f_content);
    $('#f_blok_table2').append(f_content);
});
