let endpage = 'endpage='; 
fetch('joueurs.php', {
    method: 'post',
    body: endpage,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
.then(r => r.json())
.then(r => {
    nom = document.getElementById('nom');
    nom.innerHTML = '<p>'+r[0]['nom']+'</p>';
    score = document.getElementById('score');
    score.innerHTML = '<p>'+r[0]['time']+'</p>';
})