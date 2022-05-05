const string = `
#deom1 *{padding: 0;margin: 0; box-sizing: border-box;}
#deom1 *::after,#deom1 *::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.Pickup{
    position: relative;
    width:100%;
    height:100%;
    background: #FFE600;
}

.Pickup .mose{
    border: 8px solid #000;
    border-color: #000 transparent transparent;
    border-bottom: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -5px;
    margin-top: -4px;
}
.Pickup .mose::before{
    content: " ";
    display: block;
    width: 16px;
    height: 6px;
    position: absolute;
    top: -14px;
    left: -8px;
    border-radius: 50% 50% 0 0;
    background: #000;
}
.Pickup .eye{
    border: 1px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -32px;
    margin-top: -32px;
    border-radius: 50%;
    background: #2e2e2e;
}
.Pickup >  .eye.left{
    transform: translateX(-100PX);
}
.Pickup > .eye.right{
    transform: translateX(100PX);
}
.Pickup .eye::before{
    content: " ";
    display: block;
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 10px;
    background: #fff;
}
.Pickup .mouth{
    width: 200px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: 30px;
}
.Pickup .mouth .lipsTop .yuan{
    border: 3px solid #000;
    border-color: transparent transparent #000 #000;
    width: 80px;
    height: 20px;
    position: absolute;
    border-radius: 0 0 50% 50%;
    left: 50%;
    background: #FFE600;
    z-index: 10;
}
.Pickup .mouth .lipsTop .left{
  margin-left: -72px;
  transform: rotate(-20deg);

}
.Pickup .mouth .lipsTop .right{
    border-color: transparent  #000  #000 transparent;
    transform: rotate(20deg);
    margin-left: -6px;
}
.Pickup .mouth .lipsTop .yuan::before{
    content: " ";
    display: block;
    width: 80px;
    height: 20px;
    position: absolute;
    top: -20px;
    background: #FFE600;
}
.Pickup .mouth .wlipsBot{
    height: 150px;
    width: 140px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -70px;
    overflow: hidden;
}
.Pickup .mouth  .lipsBot{
    width: 140px;
    height: 300px;
    border: 2px solid #000;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -70px;
    border-radius: 72px / 150px;
    background:  #9b000a;
    overflow: hidden;
}
.Pickup .mouth  .lipsBot::after{
    content: " ";
    display: block;
    width: 140px;
    height: 100px;
    position: absolute;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    background: #FF485F;
} 
.Pickup .ball{
    width: 80px;
    height: 80px;
    border: 2px solid #000;
    position: absolute;
    left:  50%;
    top: 50%;
    margin-left: -40px;
    margin-top: 60px;
    border-radius: 50%;
    background: #F00;
}
.Pickup .ball.left{
    transform: translateX(-150px);

}
.Pickup .ball.right{
    transform: translateX(150px);

}`
export default string