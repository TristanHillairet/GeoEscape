/*RECUPERATION DES 10 MEILLEURS JOUEURS*/
let noms = [];
let times = [];

fetch('joueurs.php', {
    method: 'post',
    body: null,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
.then(r => r.json())
.then(r => { 
    p1 = document.getElementById("p1");
    p1.innerHTML = '<p> <big>1er</big> '+r[0]['nom']+'</p>';
    t1 = document.getElementById("t1");
    t1.innerHTML = '<p>'+r[0]['time']+'</p>';
    p2 = document.getElementById("p2");
    p2.innerHTML = '<p> <big>2ème</big> '+r[1]['nom']+'</p>';
    t2 = document.getElementById("t2");
    t2.innerHTML = '<p>'+r[1]['time']+'</p>';
    p3 = document.getElementById("p3");
    p3.innerHTML = '<p> <big>3ème</big> '+r[2]['nom']+'</p>';
    t3 = document.getElementById("t3");
    t3.innerHTML = '<p>'+r[2]['time']+'</p>';
    p4 = document.getElementById("p4");
    p4.innerHTML = '<p> <big>4ème</big> '+r[3]['nom']+'</p>';
    t4 = document.getElementById("t4");
    t4.innerHTML = '<p>'+r[3]['time']+'</p>';
    p5 = document.getElementById("p5");
    p5.innerHTML = '<p> <big>5ème</big> '+r[4]['nom']+'</p>';
    t5 = document.getElementById("t5");
    t5.innerHTML = '<p>'+r[4]['time']+'</p>';
    p6 = document.getElementById("p6");
    p6.innerHTML = '<p> <big>6ème</big> '+r[5]['nom']+'</p>';
    t6 = document.getElementById("t6");
    t6.innerHTML = '<p>'+r[5]['time']+'</p>';
    p7 = document.getElementById("p7");
    p7.innerHTML = '<p> <big>7ème</big> '+r[6]['nom']+'</p>';
    t7 = document.getElementById("t7");
    t7.innerHTML = '<p>'+r[6]['time']+'</p>';
    p8 = document.getElementById("p8");
    p8.innerHTML = '<p> <big>8ème</big> '+r[7]['nom']+'</p>';
    t8 = document.getElementById("t8");
    t8.innerHTML = '<p>'+r[7]['time']+'</p>';
    p9 = document.getElementById("p9");
    p9.innerHTML = '<p> <big>9ème</big> '+r[8]['nom']+'</p>';
    t9 = document.getElementById("t9");
    t9.innerHTML = '<p>'+r[8]['time']+'</p>';
    p10 = document.getElementById("p10");
    p10.innerHTML = '<p> <big>10ème</big> '+r[9]['nom']+'</p>';
    t10 = document.getElementById("t10");
    t10.innerHTML = '<p>'+r[9]['time']+'</p>';
})

