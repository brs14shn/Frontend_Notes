//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded (birim zamanda -1- tane iş parçacığı <<kolumuz bir process ise parmaklarımız thread (iş parçacığı)'dir>> çalıştırıyor. Ancak Java, C++, Python'da multi-threaded aktif hale getirilebiliyor) ve Asenkron Programlama dilidir.

//! CPU birden fazla iş yaparken aslında zamanı küçük dilimlere böldüğünde milisaniye seviyesinde. belli bir zaman aralığında birden fazla iş yapıyormuş gibi geliyor.

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------

const bekle=(ms)=>{

    //! blocking-code
    const start=new Date().getTime(); //1655227837903
    while(new Date().getTime()<start+ms){
        ;
    }
}

console.log("hello")
//alert(  "ITF")  //! blocking code==> KODU KESER.TAMAMLANMADAN DİĞERİ GEÇM
console.time("timer");
bekle(3000)
console.timeEnd("timer")
console.log("FS11"); 


//* Asenkron (setTimeout)

setTimeout(()=>{ //! non-blocking code
    console.log("Nasılsın");
},1000)  //setTimeout(function, milliseconds);-bir defa yürütülüyor

console.log("İyiyim");