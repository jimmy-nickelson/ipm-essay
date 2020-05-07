//load tablu
function initViz() {
    var options = {
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            //console.log("Run this code when the viz has finished loading.");
            workb1 = vizTablu1.getWorkbook();
            //sheet2 = vizTablu2.getWorkbook().getActiveSheet();
            //sheet3 = vizTablu3.getWorkbook().getActiveSheet();
            workb4 = vizTablu4.getWorkbook();
            //sheet5 = vizTablu5.getWorkbook().getActiveSheet();
            reset(workb1);
            reset(workb4);            
        }
    };
    viz1 = document.getElementById("viz1"),
        url1 = "https://public.tableau.com/views/VisualisasiAll/ParallelCoor?:origin=viz_share_link&:toolbar=n&:display_count=y&publish=yes";
    //viz2 = document.getElementById("viz2"),
      //  url2 = "https://public.tableau.com/views/VisualisasiAll/DashboardKomponen?:origin=viz_share_link&:toolbar=n&:display_count=y&publish=yes";
    //viz3 = document.getElementById("viz3"),
      //  url3 = "https://public.tableau.com/views/VisualisasiAll/DiagramBatang?:origin=viz_share_link&:toolbar=n&:display_count=y&publish=yes";
    viz4 = document.getElementById("viz2"),
        url4 = "https://public.tableau.com/views/VisualisasiAll/Geospasial?:origin=viz_share_link&:toolbar=n&:display_count=y&publish=yes";
    //viz5 = document.getElementById("viz5"),
      //  url5 = "https://public.tableau.com/views/VisualisasiAll/Dashboardgeokomp?:origin=viz_share_link&:toolbar=n&:display_count=y&publish=yes";

    vizTablu1 = new tableau.Viz(viz1, url1, options);
    //vizTablu2 = new tableau.Viz(viz2, url2, options);
    //vizTablu3 = new tableau.Viz(viz3, url3, options);
    vizTablu4 = new tableau.Viz(viz4, url4, options);
    //vizTablu5 = new tableau.Viz(viz5, url5, options);
    // Create a viz object and embed it in the container div.
}

//https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_sample_select_marks.htm
//https://pudding.cool/2019/02/dress-code-sexualization/
//https://pudding.cool/2019/10/prosecutors/

var tombol = document.getElementById("tombol");
tombol.style.visibility = "hidden"; 
var text = document.getElementsByClassName("text");
var gr = document.getElementsByClassName("grafik");
var grviz = [];
for(var j=0; j< 2; j++){ //2 viz tableau grafik
    grviz[j] = document.getElementById("viz"+(j+1));
}
for(var j=0; j< text.length; j++){
    text[j].classList.add("hilang");
    text[j].classList.add("vhilang");
}

//show click-content
function show(){
    //show
    workb1.activateSheetAsync("IPM");
    workb4.activateSheetAsync("Geospasial");
    this.i=0;
    if(tombol.style.visibility == "hidden"){
        tombol.style.visibility = "visible"
        gr[0].classList.add('geser');
        setTimeout(function(){
        for(var j=0; j< text.length; j++) 
            if(j!=1) muncul(text[j]); 
            if(i==17 | i==18 | i==19 | i==20) muncul(text[j]);
        notif("Klik Selanjutnya, ya");
        },400)
        //setTimeout(gr[0].classList.remove('geser'),1000); 
    } else {
        tombol.style.visibility = "hidden";
        gr[0].classList.remove('geser')
        for(var j=0; j< text.length; j++){
            text[j].classList.add("hilang");
            text[j].classList.add("vhilang");
        }
        gr[1].style.marginLeft = "25%";
        reset(workb1);
        reset(workb4);            
    }

    //style
    var kata = document.getElementById("collapse");
    if(kata.textContent == "Klik untuk menyembunyikan") 
        kata.innerHTML = "Klik untuk mulai"
    else kata.innerHTML = "Klik untuk menyembunyikan";

    //scroll
    var content = document.getElementById("click-content");
    scrollke(content.offsetTop)
}

//click-content animasi
var i = 0;
var hantu = document.getElementsByClassName('hantu');
for(var j=0; j< hantu.length; j++){
    hantu[j].classList.add("hilang");
    hantu[j].classList.add("vhilang");
}
document.getElementById("text3").style.height = "500px";

function terjadilah(i){
    console.log(i)
    for(var j=0; j< hantu.length; j++) 
        if(j!=i) hilang(hantu[j]);

    //if(i<=hantu.length) muncul(hantu[i-1])
    
    switch (i){
        case 0: //garis ipm
            workb1.activateSheetAsync("IPM");
            reset(workb1);
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            break;
        case 1: 
            workb1.getActiveSheet().selectMarksAsync("Tahun_gr", ["1/1/2010","1/1/2011","1/1/2012","1/1/2013","1/1/2014","1/1/2015"], tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            break;
        case 2:
            workb1.getActiveSheet().selectMarksAsync("Tahun_gr", ["1/1/2016","1/1/2017","1/1/2018","1/1/2019"], tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            workb1.activateSheetAsync("IPM");
            break;
        case 3: //garis ipm komponen
            reset(workb1)
            workb1.activateSheetAsync("IPMkomp");
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            break;
        case 4:
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            break;
        case 5:
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            workb1.activateSheetAsync("IPMkomp");
            break;
        case 6: //batang
            workb1.activateSheetAsync("Diagram Batang");
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            reset(workb1);
            notif("Psst, kamu bisa klik grafik untuk lebih detail");
            break;
        case 7:
            workb1.getActiveSheet().selectMarksAsync("Provinsi_gr", "TERTINGGI", tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            break;
        case 8:
            workb1.getActiveSheet().selectMarksAsync("Provinsi_gr", "TERENDAH", tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            break;
        case 9:
            workb1.getActiveSheet().selectMarksAsync("Provinsi_gr", ["TERTINGGI","TINGGI"], tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            break;
        case 10:
            workb1.getActiveSheet().selectMarksAsync("Provinsi_gr", ["TERENDAH","SEDANG"], tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[0].offsetTop-50)
            muncul(hantu[i])
            break;
        //viz2
        case 11: //ipm spasial
            reset(workb1);
            //workb4.getActiveSheet().selectMarksAsync("Provinsi_gr", ["TERENDAH","SEDANG"], tableau.SelectionUpdateType.REPLACE);
            workb4.activateSheetAsync("Geospasial");
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[15])
            break;
        case 12:
            workb4.getActiveSheet().selectMarksAsync("Provinsi_pulau", "SUMATERA", tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[16])
            break;
        case 13:
            workb4.getActiveSheet().selectMarksAsync("Provinsi_pulau", ["JAWA","BALI","NUSA TENGGARA"], tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[17])
            break;
        case 14:
            workb4.getActiveSheet().selectMarksAsync("Provinsi_pulau", "KALIMANTAN", tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[18])
            break;
        case 15:
            workb4.getActiveSheet().selectMarksAsync("Provinsi_pulau", "SULAWESI", tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[19])
            break;
        case 16:
            workb4.getActiveSheet().selectMarksAsync("Provinsi_pulau", ["KEP. MALUKU","PAPUA"], tableau.SelectionUpdateType.REPLACE);
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[20])
            workb4.activateSheetAsync("Geospasial");
            gr[1].classList.remove('geser')
            gr[1].style.marginLeft = "25%";
            text[1].classList.add('hilang');
            break;
        case 17: //5
            reset(workb4)
            gr[1].classList.add('geser')
            gr[1].style.marginLeft = "0%";
            workb4.activateSheetAsync("HLS");
            scrollke(gr[1].offsetTop-50)
            setTimeout(function(){
                muncul(text[1])
                muncul(hantu[11])}, 900)
            break;
        case 18:
            workb4.activateSheetAsync("RLS");
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[12])
            break;
        case 19:
            workb4.activateSheetAsync("PpK");
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[13])
            break;
        case 20:
            workb4.activateSheetAsync("UHH");
            scrollke(gr[1].offsetTop-50)
            muncul(hantu[14])
            break;        
        case 21:
            this.i = -1;
            show();
            reset(workb4);
            reset(workb1);
            scrollke(document.getElementById('end').offsetTop)
            notif('Yah, sudah selesai. Terima kasih telah membaca')
            gr[0].classList.remove('geser')
            gr[1].classList.remove('geser')
            gr[1].style.marginLeft = "25%";
            break;
    }
}
function nextbtn(){
    terjadilah(i);
    i++;
}

function prevbtn(){
    i=i-2;
    if (i<0) i=0;
    terjadilah(i)
    i++;
}

function hilang(x){
    //x yang mo diilangin
    x.classList.add('vhilang');    
    x.addEventListener('transitionend', function(e) {
        x.classList.add('hilang');
    });
}
function muncul(x){
    //x yang mo diilangin
    setTimeout(function () {
        x.classList.remove('hilang');
        x.classList.remove('vhilang');
    }, 550);

}
function scrollke(pos){
    window.scroll({
        top: pos, 
        behavior: 'smooth'
    });
}
function reset(wb, str="") { //reset tablu
    //wb worokbook tablu
    //str string yg mo dihapus filternya, opsional
    wb.getActiveSheet().clearSelectedMarksAsync();
    if (str != "") wb.getActiveSheet().clearFilterAsync(str);
}
function notif(pesan) {
    var x = document.getElementById("snackbar");
    var img = document.createElement("img");
    img.src = 'img/cute.gif';
    x.innerHTML = pesan;
    x.appendChild(img);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
