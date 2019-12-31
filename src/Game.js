BasicGame.Game = function (game) {


};





BasicGame.Game.prototype = {



    preload : function() {


    },



    create: function () {

        this.back = game.add.sprite(0,0,'back');

        this.snd = game.add.audio('soundtrack',1,true);


        this.snd.play();

        this.gameText = game.add.bitmapText(200, 380, 'myfont', '0', 120);

        this.score = 0;
        this.button = game.add.button(100,600,'button',function () {

            let i = Math.floor(Math.random()*4);
            while (i===this.button.frame)
                i = Math.floor(Math.random()*4)
            this.button.frame = i;

            this.score +=1;

            this.gameText.text = ''+this.score;

        },this);



        this.pressed =function() {


            console.log("Shit");
            send("VKWebAppShowWallPostBox", {"message": "Я eблaн "+this.score+" раз","attachments":"https://vk.com/app7266134/"});

        }

        this.obj = game.add.button(0, 0, 'repButton', this.pressed, this, 2, 1, 0);



    },

    update: function () {


    }



};
