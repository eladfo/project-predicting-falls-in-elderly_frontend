var context;
var shape=new Object();
var board;
var score;
var time_elapsed ;    
var interval;
var interval_monster;
var interval_time;
var pacImg;
var wallImg;
var monsterImg
var hourglassesImg;
var heartImg;
var pac_pos;
var canvas;
var map_user;
var row = 10;
var col = 20;
var life = 3;
var monster_count;
var ball_count ;
var IsLogIN;
var prize;
var key_up;
var monster1;
var monster2;
var monster3;
var arr_mos = new Array();
var ghost;
var audio;
var prize = new Object();
var Up_keycode = 38;
var Up_KeyName = "ArrowUp";
var Right_keycode = 39;
var Right_KeyName = "ArrowRight";
var Left_keycode = 37;
var Left_KeyName = "ArrowLeft";
var Down_keycode = 40 ;
var Down_KeyName = "ArrowDown";
var eat_bonus;
var color_5 = "#ff6600" ;
var color_15 = "#3333ff" ;
var color_25 = "#00ff00" ;

window.addEventListener("load", Start, false);


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

function LogOut()
{
   var conf = confirm("Are you sure that you want to exsit ?");
   if(conf)
   {
    document.getElementById("LogOutlbl").style.visibility = "hidden" ;
    document.getElementById("LogOut").style.visibility = "hidden" ;
    IsLogIN = false;
    MoveTo("Welcome");
   }
}

function Start() {
    IsLogIN = false;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    document.getElementById("Num_ball").value = 60;
    document.getElementById("Num_of_Monsters").value = 3 ;
    document.getElementById("Total_time").value = 60;

    document.getElementById("up_button").value = Up_KeyName;
    document.getElementById("down_button").value = Down_KeyName ;
    document.getElementById("right_button").value = Right_KeyName;
    document.getElementById("left_button").value = Left_KeyName;

    document.getElementById("LogOutlbl").style.visibility = "hidden" ;
    document.getElementById("LogOut").style.visibility = "hidden" ;


    pacImg = new Image();
    pacImg.src = "img/pac_right.png";
    
    wallImg = new Image();
    wallImg.src = "img/pac_wall.png";
    
    monster1Img = new Image();
    monster1Img.src = "img/m11.png"

    monster2Img = new Image();
    monster2Img.src = "img/m22.png"

    monster3Img = new Image();
    monster3Img.src = "img/m33.png"

    prizeImg = new Image();
    prizeImg.src = "img/bonus_50.png"

    hourglassesImg = new Image();
    hourglassesImg.src = "img/hs.png"

    heartImg = new Image();
    heartImg.src = "img/life.png"

    document.getElementById("5_color").value = color_5 ;
    document.getElementById("15_color").value = color_15 ;
    document.getElementById("25_color").value = color_25;

    board = new Array();
    map_user = new Map();
    map_user.set('a','a');
    if (!audio) audio = new Audio('audio/pokemon.mp3');
}

function set_settings( )
{
    ball_count=document.getElementById("Num_ball").value;
    monster_count=document.getElementById("Num_of_Monsters").value;
    time_elapsed=document.getElementById("Total_time").value;
    color_5 = document.getElementById("5_color").value ;
    color_15 = document.getElementById("15_color").value ;
    color_25 = document.getElementById("25_color").value ;
}

function save_settings()
{
    if(document.getElementById("Num_ball").value > 90 || document.getElementById("Num_ball").value < 50 || document.getElementById("Num_ball").value  == '' )
        alert("The number of balls should be between 50 to 90 !");
    else if(document.getElementById("Total_time").value < 60 || document.getElementById("Total_time").value ==  '' )
        alert("The time of the game should be at least 60 seconds !");
    else{
        set_settings(); 
        showElem('settings','game');
    }  
}

function Random_settings()
{
    document.getElementById("Num_ball").value = 50 + Math.floor((Math.random() * 41)) ;
    document.getElementById("Num_of_Monsters").value = 1 + Math.floor((Math.random() * (3))) ;
    document.getElementById("Total_time").value = 60 + Math.floor((Math.random() * (61)));
    document.getElementById("up_button").value = "ArrowUp";
    document.getElementById("down_button").value = "ArrowDown";
    document.getElementById("right_button").value = "ArrowRight";
    document.getElementById("left_button").value = "ArrowLeft";
    Right_keycode = 39;
    Right_KeyName = "ArrowRight";
    Left_keycode = 37;
    Left_KeyName = "ArrowLeft";
    Down_keycode = 40 ;
    Down_KeyName = "ArrowDown";
    Up_keycode = 38;
    Up_KeyName = "ArrowUp";
    document.getElementById("5_color").value = getRandomColor() ;
    document.getElementById("15_color").value = getRandomColor() ;
    document.getElementById("25_color").value = getRandomColor() ;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function Start_new_game()
{
    set_settings();
    set_pos_moster();
    eat_bonus = false;
    
    //properties the board!!!
    life = 3;
    score = 0;
    for (var i = 0; i < col; i++) {
        board[i] = new Array();
        for (var j = 0; j < row; j++) {
            if( (i==0 && j==6)||(i==19 && j==6)
                ||(i==2 && j==8)||(i==3 && j==8)||(i==4 && j==8)||(i==5 && j==8)||(i==1 && j==8)
                ||(i==6 && j==8)||(i==7 && j==8)||(i==5 && j==7)||(i==5 && j==6)||(i==5 && j==8)
                ||(i==12 && j==8)||(i==17 && j==8)||(i==16 && j==8)||(i==15 && j==8)||(i==18 && j==8)
                ||(i==14 && j==8)||(i==13 && j==8)||(i==14 && j==7)||(i==14 && j==6)||(i==14 && j==8)
                ||(i==10 && j==8)||(i==9 && j==8)||(i==10 && j==7)||(i==10 && j==6)||(i==9 && j==7)
                ||(i==9 && j==6)||(i==8 && j==6)||(i==11 && j==6)||(i==7 && j==6)||(i==12 && j==6)
                ||(i==10 && j==4)||(i==9 && j==4)||(i==10 && j==3)||(i==9 && j==3)||(i==9 && j==2)
                ||(i==10 && j==2)||(i==11 && j==2)||(i==8 && j==2)||(i==7 && j==2)||(i==12 && j==2)
                ||(i==2 && j==6)||(i==2 && j==5)||(i==2 && j==4)||(i==2 && j==3)||(i==2 && j==2)||(i==1 && j==3)
                ||(i==4 && j==4)||(i==5 && j==4)||(i==6 && j==4)||(i==4 && j==0)||(i==5 && j==0)||(i==6 && j==0)||(i==5 && j==1)
                ||(i==13 && j==4)||(i==14 && j==4)||(i==15 && j==4)
                ||(i==17 && j==6)||(i==17 && j==5)||(i==17 && j==4)||(i==17 && j==3)||(i==17 && j==2)||(i==18 && j==3)
                ||(i==14 && j==0)||(i==15 && j==0)||(i==16 && j==0)||(i==15 && j==1)
                )
                
            {
                board[i][j] = 4; //wall
            }
            else{
                   board[i][j] = 0; //empty
                }
        }
    }
    set_pos_prize();
    set_pac_pos();

    window.clearInterval(interval);
    window.clearInterval(interval_monster);
    window.clearInterval(interval_time);

    // 5 == 60%, 15 == 30%, 25 == 10%
    var count5 = ball_count*0.6;
    var count15 = ball_count*0.3;
    var count25 = ball_count*0.1;
    while(ball_count > 0){
        var emptyCell = findRandomEmptyCell(board);
        if(count5 > 0){
            board[emptyCell[0]][emptyCell[1]] = 55;
            count5--;
        } else if (count15 > 0){
            board[emptyCell[0]][emptyCell[1]] = 15;
            count15--;
        } else if (count25 > 0){
            board[emptyCell[0]][emptyCell[1]] = 25;
            count15--;
        }
        ball_count--;
    }
    ball_count=document.getElementById("Num_ball").value;
    keysDown = {};
    addEventListener("keydown", function (e) {keysDown[e.keyCode] = true; }, false);
    addEventListener("keyup", function (e) {keysDown[e.keyCode] = false;  }, false);

    audio.currentTime = 0;
    audio.loop = true;
    audio.play();

    var emptyCell = findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]] = 1000;

    var emptyCell = findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]] = 'heart';

    interval=setInterval(UpdatePosition, 100);
    interval_monster = setInterval(move_monster,250);
    interval_time = setInterval(timer, 1000);
   
}

function timer(){
    time_elapsed -= 1;
}

function stop_game(){
    audio.pause();
    window.clearInterval(interval);
    window.clearInterval(interval_monster);
    window.clearInterval(interval_time);
}

function DrawLife()
{
    if(life == 3 )
    {
        document.getElementById("h1").style.visibility = "visible";
        document.getElementById("h2").style.visibility = "visible";
        document.getElementById("h3").style.visibility = "visible";
    } else if(life == 2 )
    {
        document.getElementById("h1").style.visibility = "visible";
        document.getElementById("h2").style.visibility = "visible";
        document.getElementById("h3").style.visibility = "hidden";
    }
    if(life == 1 )
    {
        document.getElementById("h1").style.visibility = "visible";
        document.getElementById("h2").style.visibility = "hidden";
        document.getElementById("h3").style.visibility = "hidden";
    }
}

function Draw() {
    canvas.width=canvas.width; //clean board
    lblScore.value = score;
    lblTime.value = time_elapsed;
    DrawLife();
    for (var i = 0; i < col; i++) {
        for (var j = 0; j < row; j++) {
            var center = new Object();
            center.x = i * 40 ;
            center.y = j * 40;
            if (i==shape.x && j== shape.y) { //Draw pacman!
                if(pac_pos==1)
                    pacImg.src="img/pac_up.png";
                else if(pac_pos==2)
                    pacImg.src="img/pac_down.png";
                else if(pac_pos==3)
                    pacImg.src="img/pac_left.png";
                else if(pac_pos==4)
                    pacImg.src="img/pac_right.png";
                context.drawImage(pacImg, center.x, center.y);
            } else if (board[i][j] == 55) {
                context.beginPath();
                context.arc(center.x +20 , center.y+20, 10, 0, 2 * Math.PI); // circle
                context.fillStyle = color_5;  
                context.fill();            
            } else if (board[i][j] == 15) {
                context.beginPath();
                context.arc(center.x +20 , center.y+20, 10, 0, 2 * Math.PI); // circle
                context.fillStyle = color_15;  
                context.fill();
            } else if (board[i][j] == 25) {
                context.beginPath();
                context.arc(center.x +20 , center.y+20, 10, 0, 2 * Math.PI); // circle
                context.fillStyle = color_25;  
                context.fill();
            }
            else if (board[i][j] == 4) {
                context.drawImage(wallImg,center.x,center.y);
            }
            else if (board[i][j] == 1000) {
                context.drawImage(hourglassesImg,center.x,center.y);
            } 
            else if (board[i][j] == 'heart') {
                context.drawImage(heartImg,center.x,center.y);
            }
        }
    }   
    var i=0;
    for(i;i< monster_count ; i++)
        context.drawImage(arr_mos[i].pic,arr_mos[i].x*40,arr_mos[i].y*40);
    
    if(eat_bonus == false)
        context.drawImage(prizeImg,prize.x * 40,prize.y*40);
}


function initial_settings()
{
    stop_game();
    showElem('game','settings');
    document.getElementById("Num_ball").value = 60;
    document.getElementById("Num_of_Monsters").value = 3;
    document.getElementById("Total_time").value = 60;

    document.getElementById("up_button").value = "ArrowUp";
    document.getElementById("down_button").value = "ArrowDown";
    document.getElementById("right_button").value = "ArrowRight";
    document.getElementById("left_button").value = "ArrowLeft";
}

function showElem(x,y) {
    stop_game();
    if(y=='Register')
    {
        document.getElementById("UserName").value = "";
        document.getElementById("FirstName").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("BirthDate").value = "";
    }
    document.getElementById(x).hidden = true; 
    document.getElementById(y).hidden = false;
}

function MoveTo(x)
{
    stop_game();
    if(x=="Welcome")
    {
        document.getElementById(x).hidden = false; 
        document.getElementById("Register").hidden = true;
        document.getElementById("Login").hidden = true;
        document.getElementById("game").hidden = true;
        document.getElementById("settings").hidden = true;
    }
    if(x =='Register')
    {
        document.getElementById(x).hidden = false; 
        document.getElementById("Welcome").hidden = true;
        document.getElementById("Login").hidden = true;
        document.getElementById("game").hidden = true;
        document.getElementById("settings").hidden = true;
        
        document.getElementById("UserName").value = "";
        document.getElementById("FirstName").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("BirthDate").value = "";
    }
    if(x =='Login')
    {
        document.getElementById(x).hidden = false; 
        document.getElementById("Register").hidden = true;
        document.getElementById("Welcome").hidden = true;
        document.getElementById("game").hidden = true;
        document.getElementById("settings").hidden = true;
    }
    if(x =='game')
    {
        if(IsLogIN == true)
        {
            document.getElementById(x).hidden = false; 
            document.getElementById("Register").hidden = true;
            document.getElementById("Welcome").hidden = true;
            document.getElementById("Login").hidden = true;
            document.getElementById("settings").hidden = true;
        }
        else
            alert(" You need to login!");
       
    }          
}

function set_pac_pos()
    {
    var i = Math.floor((Math.random() * (col-1)) + 1);
    var j = Math.floor((Math.random() * (row-1)) + 1);
    while(board[i][j] == 4)
    {
        i = Math.floor((Math.random() * (col-1)) + 1);
        j = Math.floor((Math.random() * (row-1)) + 1);
    }
    //board[i][j] = 2;
    shape.x = i;
    shape.y = j;
}


function set_pos_prize()
{
    var i = Math.floor((Math.random() * (col-1)) + 1);
    var j = Math.floor((Math.random() * (row-1)) + 1);
    while(board[i][j] == 4)
    {
        i = Math.floor((Math.random() * (col-1)) + 1);
        j = Math.floor((Math.random() * (row-1)) + 1);
    }
    prize.x = i;
    prize.y = j;
}

function findRandomEmptyCell(board){
    var i = Math.floor((Math.random() * (col-1)) + 1);
    var j = Math.floor((Math.random() * (row-1)) + 1);
    while(board[i][j]!=0)
    {
        i = Math.floor((Math.random() * (col-1)) + 1);
        j = Math.floor((Math.random() * (row-1)) + 1);
    }
    return [i,j];             
}

function GetKeyPressed() {
    if (keysDown[Up_keycode]) {
        return 1; // down
    }
    if (keysDown[Down_keycode]) { 
        return 2;

    }
    if (keysDown[Left_keycode]) { 
        return 3;
    }
    if (keysDown[Right_keycode]) { 
        return 4;
    }
}

function UpdatePosition() {
    if(shape.x == prize.x && shape.y == prize.y)
    {
        score=score+50;
        eat_bonus = true;
    }

    var x = GetKeyPressed()

    if(x==1) //up
    {
        if(shape.y>0 && board[shape.x][shape.y-1]!=4)
        {
            shape.y--;
            pac_pos=1;
        }
    }
    if(x==2) //down
    {
        if(shape.y<9 && board[shape.x][shape.y+1]!=4)
        {
            shape.y++;
            pac_pos=2;
        }
    }
    if(x==3) //left
    {
        if(shape.x>0 && board[shape.x-1][shape.y]!=4)
        {
            shape.x--;
            pac_pos=3;
        }
    }
    if(x==4) //right
    {
        if(shape.x<19 && board[shape.x+1][shape.y]!=4)
        {
            shape.x++;
            pac_pos=4;
        }
    }

    if(shape.x == prize.x && shape.y == prize.y)
    {
        score=score+50;
        eat_bonus = true;
    }


    if(check_fail_by_monster())
    {        
            life = life - 1 ;
            score = score - 10;
            //board[shape.x][shape.y]=0;
            set_pac_pos();
            set_pos_moster();
            Draw();
    }

    if(board[shape.x][shape.y]==55)
    {
        score += 5;
        board[shape.x][shape.y]=0;
        ball_count--;
    }
    if(board[shape.x][shape.y]==15)
    {
        score += 15;
        board[shape.x][shape.y]=0;
        ball_count--;
    }
    if(board[shape.x][shape.y]==25)
    {
        score += 25;
        board[shape.x][shape.y]=0;
        ball_count--;
    }   
    if(board[shape.x][shape.y]==1000)
    {
        time_elapsed += 30;
        board[shape.x][shape.y]=0;
    }   
    if(board[shape.x][shape.y]=='heart')
    {
        if(life < 3)
            life++;
        board[shape.x][shape.y]=0;
    }   

    if(ball_count <= 0)
    {
        context.font = "70px Comic Sans MS";
        context.fillStyle = "yellow";
        context.textAlign = "center";
        context.fillText("We have a Winner!!!", canvas.width/2, canvas.height/2);
        stop_game();
    }
    else if(life == 0)
    {
        context.font = "70px Comic Sans MS";
        context.fillStyle = "yellow";
        context.textAlign = "center";
        context.fillText("You Lost!", canvas.width/2, canvas.height/2);
        stop_game();

    }
    else if(time_elapsed<= 0  && score< 150)
    {
        context.font = "70px Comic Sans MS";
        context.fillStyle = "yellow";
        context.textAlign = "center";
        context.fillText("You can do better", canvas.width/2, canvas.height/2);
        stop_game();

    }
    else if(time_elapsed<= 0  && score >=  150)
    {
        context.font = "70px Comic Sans MS";
        context.fillStyle = "yellow";
        context.textAlign = "center";
        context.fillText("We have a Winner!!!", canvas.width/2, canvas.height/2);
        stop_game();  
    }
    else
    {
        Draw();
    }
}

function check_fail_by_monster()
{
    i=0;
    flag = false;
    for(i ; i< monster_count ; i++)
    {
        if(arr_mos[i].x == shape.x && arr_mos[i].y == shape.y)
            return true;        
    }
    return false;
}
function set_pos_moster()
{
    var i = 0;
    var j = 9;
    monster1 = new Object();
    monster1.x = i;
    monster1.y = j;
    monster1.pic = monster1Img;
    arr_mos[0] = monster1;

    var i = 0;
    var j = 0;
    monster2 = new Object();
    monster2.x = i;
    monster2.y = j;
    monster2.pic = monster2Img;
    if(monster_count == 2 || monster_count == 3 )
        arr_mos[1] = monster2;

    var i = 19;
    var j = 0;
    monster3 = new Object();
    monster3.x = i;
    monster3.y = j;
    monster3.pic = monster3Img;
    if(monster_count == 3 )
        arr_mos[2] = monster3;
                
}
    

function move_monster()
{
    i = 0;
    for(i ; i<monster_count ; i++)
    {
    if(Math.random() > 0.3)    
        arr = possible_move(arr_mos[i],0);
    else
        arr = possible_move(arr_mos[i],1);
        
    index_monster = index_of_max_value(arr);
        if(index_monster == 0)
        {
            arr_mos[i].y = arr_mos[i].y -1 ;
        }
        if(index_monster == 1)
        {
            arr_mos[i].y = arr_mos[i].y + 1 ;
        }
        if(index_monster == 2)
        {
            arr_mos[i].x = arr_mos[i].x - 1 ;
        }
        if(index_monster == 3)
        {
            arr_mos[i].x = arr_mos[i].x + 1 ;
        }
    }

    
    if(Math.random() > 0.3)    
        arr = possible_move_prize(prize,0);
    else
        arr = possible_move_prize(prize,1);
        
    index_prize = index_of_min_value(arr);

        
        if(index_prize == 0)
        {
            prize.y = prize.y -1 ;
        }
        if(index_prize == 1)
        {
            prize.y = prize.y + 1 ;
        }
        if(index_prize == 2)
        {
            prize.x = prize.x - 1 ;
        }
        if(index_prize == 3)
        {
            prize.x = prize.x + 1 ;
        }

        if(shape.x == prize.x && shape.y == prize.y)
        {
            score=score+50;
            eat_bonus = true;
        }

    if(check_fail_by_monster())
    {        
            life = life -1 ;
            //board[shape.x][shape.y]=0;
            set_pac_pos();
            set_pos_moster();
            Draw();
    }
   
}

function possible_move(moster,flag)
{
    var arr = new Array();
    if(moster.y>0 && board[moster.x][moster.y-1]!=4) //up 
        if(flag==0)
            arr[0] = Math.sqrt( Math.pow((moster.x - shape.x),2) + Math.pow((moster.y-1 - shape.y),2) );
            else
                arr[0]= Math.random();
    else
        arr[0] = 1000;
    
    if(moster.y<9 && board[moster.x][moster.y+1]!=4) //down
        if(flag==0) 
        arr[1] = Math.sqrt( Math.pow((moster.x - shape.x),2) + Math.pow((moster.y+1 - shape.y),2) );
        else
            arr[1]= Math.random();
    else
        arr[1] = 10000;

    if(moster.x>0 && board[moster.x-1][moster.y]!=4) //left 
        if(flag==0)
            arr[2] = Math.sqrt( Math.pow((moster.x - 1 - shape.x),2) + Math.pow((moster.y - shape.y),2) );
        else
        arr[2]= Math.random();            
    else
        arr[2] = 10000;

    if(moster.x<19 && board[moster.x+1][moster.y]!=4) //right 
        if(flag==0)
            arr[3] = Math.sqrt( Math.pow((moster.x + 1 - shape.x),2) + Math.pow((moster.y - shape.y),2) );
        else
        arr[3]= Math.random();
    else
        arr[3] = 10000;

    return arr;
}

function possible_move_prize(moster,flag)
{
    arr = new Array();
    if(moster.y>0 && board[moster.x][moster.y-1]!=4) //up 
        if(flag==0)
            arr[0] = Math.sqrt( Math.pow((moster.x - shape.x),2) + Math.pow((moster.y-1 - shape.y),2) );
            else
                arr[0]= Math.random();
    else
        arr[0] = 0;
    
    if(moster.y<9 && board[moster.x][moster.y+1]!=4) //down
        if(flag==0) 
        arr[1] = Math.sqrt( Math.pow((moster.x - shape.x),2) + Math.pow((moster.y+1 - shape.y),2) );
        else
            arr[1]= Math.random();
    else
        arr[1] = 0;

    if(moster.x>0 && board[moster.x-1][moster.y]!=4) //left 
        if(flag==0)
            arr[2] = Math.sqrt( Math.pow((moster.x - 1 - shape.x),2) + Math.pow((moster.y - shape.y),2) );
        else
        arr[2]= Math.random();            
    else
        arr[2] = 0;

    if(moster.x<19 && board[moster.x+1][moster.y]!=4) //right 
        if(flag==0)
            arr[3] = Math.sqrt( Math.pow((moster.x + 1 - shape.x),2) + Math.pow((moster.y - shape.y),2) );
        else
        arr[3]= Math.random();
    else
        arr[3] = 0;
    return arr;
}

function index_of_max_value(arr)
{
    var min = arr[0];
    var index=0;
    for(var i=1 ; i< arr.length ; i++)
    if(arr[i]<min)
    {
        min = arr[i];
        index = i;
    }
    return index;
}

function index_of_min_value(arr)
{
    var max = arr[0];
    var index=0;
    for(var i=1 ; i< arr.length ; i++)
    if(arr[i]>max)
    {
        max = arr[i];
        index = i;
    }
    return index;
}

   $.validator.addMethod("PASSWORD", function (value, element) {
    return this.optional(element) || /^(?=.*\d)(?=.*[A-z]).{8,}$/i.test(value);
}, "Password should atleast 8 character and contain at least 1 letters and one digit!");

$(document).ready(function() {
   
    $('form[id="formRegister"]').validate({

        
      rules: {
        UserName: 'required',
        FirstName: 'required',
        LastName: 'required',
        Email: {
          required: true,
          email: true,
        } ,
        Password: {
          required: true,
          minlength: 8,
          PASSWORD: true,
          
      },BirthDate: 'required' ,
     
    },
      messages: {
        UserName: 'This field is required!',
        FirstName: 'This field is required',
        Email: 'Enter a valid email',
        psword: {
          minlength: 'Password must be at least 8 characters long',
        },
        BirthDate: 'Email address is invalid!'
      },
      submitHandler: function(form) {
        if(map_user.get(UserName.value))
            alert("Username exists on the system! Please choose a new username.");
        else
        {
            map_user.set(UserName.value,Password.value);
        showElem('Register','settings')
        document.getElementById("LogOutlbl").innerHTML = 'Hello, ' + UserName.value ;
        document.getElementById("LogOutlbl").style.visibility = "visible" ;
        document.getElementById("LogOut").style.visibility = "visible" ;
        IsLogIN = true;
        }
        
      }
    });


    $("#login_button").click(function() {
        var UserName = $("#User_Name").val();
        var Pass = $("#Pass").val();
        if(map_user.get(UserName) == Pass)
        {
            showElem('Login','settings')
            document.getElementById("LogOutlbl").innerHTML = 'Hello, ' + UserName ;
            document.getElementById("LogOutlbl").style.visibility = "visible" ;
            document.getElementById("LogOut").style.visibility = "visible" ;
            IsLogIN = true;

        }
        else
        alert("One of the details you entered are incorrect.");
    });

    $("#up_button").keydown(function(e) {
        Up_keycode = e.keyCode;
        Up_KeyName = e.key;
    });

    $("#up_button").keyup(function(e) {
        document.getElementById("up_button").value=Up_KeyName ;
    });

    $("#left_button").keydown(function(e) {
        Left_keycode = e.keyCode;
        Left_KeyName = e.key;
    });

    $("#left_button").keyup(function(e) {
        document.getElementById("left_button").value=Left_KeyName ;
    });

    $("#right_button").keydown(function(e) {

        Right_keycode = e.keyCode;
        Right_KeyName = e.key;
    });

    $("#right_button").keyup(function(e) {
        document.getElementById("right_button").value=Right_KeyName ;
    });

    $("#down_button").keydown(function(e) {
        Down_keycode = e.keyCode;
        Down_KeyName = e.key;
    });

    $("#down_button").keyup(function(e) {
        document.getElementById("down_button").value=Down_KeyName ;
    });
});


$(window).load(function () {

        $(".trigger_popup_fricc").click(function(){
           $('.hover_bkgr_fricc').show();
        });
        $('.hover_bkgr_fricc').click(function(){
            $('.hover_bkgr_fricc').hide();
        });
        $('.popupCloseButton').click(function(){
            $('.hover_bkgr_fricc').hide();
        });

        $(document).keyup(function(e) {
            if (e.key === "Escape") { 
            $('.hover_bkgr_fricc').hide();
           }
       });
    
});