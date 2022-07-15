function addUser(){
    player_1_name = document.getElementById("space1").value;
    player_2_name = document.getElementById("space2").value;

    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);

    window.location.replace("game_page.html")
}
