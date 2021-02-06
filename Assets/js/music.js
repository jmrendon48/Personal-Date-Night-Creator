//Function to have all link elements in music-link open in a new tab
window.onload = function(){
    var anchors = document.getElementById('music-link').getElementsByTagName('a');
    for (var i=0; i<anchors.length; i++){
      anchors[i].setAttribute('target', '_blank');
    }
  }
//generate random num
let RandomNum = Math.floor(Math.random() * 10);
let song_picker = RandomNum;

//Random song Custom Libary
if (song_picker == 0){
document.write("<p>" + ("Your Music Options Are") + "</p>");
document.write('<a href="'+ "https://www.youtube.com/watch?v=mMF6hsQNrBw&ab_channel=ChildishGambinoVEVO"+'">'+"Have Some Love by Childish Gambino"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=450p7goxZqg&ab_channel=johnlegendVEVO"+'">'+"ALl of Me by John Legend"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=AVPEP_KSldA&ab_channel=ArianaGrandeVevo"+'">'+"R.E.M by Ariana Grande"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=NtmorUXAwiI&ab_channel=MartinAxelsson"+'">'+"Romeo And Juliet by The Killers"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=0Hdlh5A6DdY&ab_channel=AcousticLofi"+'">'+"Special Love Song Playlist"+'</a>');
};

if (song_picker == 1){
document.write("<p>" + ("Your Music Options Are") + "</p>");
document.write('<a href="'+ "https://www.youtube.com/watch?v=tGRzz0oqgUE&ab_channel=JanelleMon%C3%A1e"+'">'+"Make Me Feel by Janelle Monae"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=mnH9FHfD0Zg&ab_channel=JohnCarloCarey"+'">'+"Lovesong by Adele"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=zNy4QGHhoTg&ab_channel=MariahCareyVEVO"+'">'+"With You by Mariah Carey"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=ox7RsX1Ee34&ab_channel=KendrickLamarVEVO"+'">'+"Love by Kendrick Lamar"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=qj9ya7fnCyE&ab_channel=FallingInLove."+'">'+"Special Love Song Playlist"+'</a>');
};

if (song_picker == 2){
document.write("<p>" + ("Your Music Options Are") + "</p>");
document.write('<a href="'+ "https://www.youtube.com/watch?v=ix0veVJdmFk&ab_channel=ChanceTheRapper-Topic"+'">'+"Blessing by Chance The Rapper"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=p1JPKLa-Ofc&ab_channel=Beyonc%C3%A9VEVO"+'">'+"Drunk in Love by Beyonce"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=2Vv-BfVoq4g&ab_channel=EdSheeran"+'">'+"Perfect by Ed Sheeran"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=wGp92LanUAM&ab_channel=Potassium"+'">'+"Thinin Bout You by Frank Ocean"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=0tX_UnzmOtg&ab_channel=19xxMusic"+'">'+"Special Love Song Playlist"+'</a>');
};

if (song_picker == 3){
document.write("<p>" + ("Your Music Options Are") + "</p>");
document.write('<a href="'+ "https://www.youtube.com/watch?v=PQZhN65vq9E&ab_channel=FlorenceMachineVEVO"+'">'+"You've Got the Love by Florence and the Machine"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=3-NTv0CdFCk&ab_channel=LanaDelReyVEVO"+'">'+"Love by Lana Del Rey"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=lp-EO5I60KA&ab_channel=EdSheeran"+'">'+"Thinking Out Loud by Ed Sheeran"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=rLiXLzd2Ol8&ab_channel=TaylorSwift-Topic"+'">'+"Today Was a FairyTale by Taylor Swift"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=yFHaWgisNps&ab_channel=19xxMusic"+'">'+"Special Love Song Playlist"+'</a>');
};

if (song_picker== 4){
document.write("<p>" + ("Your Music Options Are") + "</p>");
document.write('<a href="'+ "https://www.youtube.com/watch?v=LjhCEhWiKXk&ab_channel=BrunoMars"+'">'+"Just The Way Your Are by Bruno Mars"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=0RyInjfgNc4&ab_channel=LennBeauty"+'">'+"Love on The Brain by Rihanna"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=dFD02LYcw4k&ab_channel=ToriKellyVEVO"+'">'+"I Was Made For Loving You by Tori Kelly"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=vGJTaP6anOU&ab_channel=ElvisPresleyVEVO"+'">'+"Can't Help Falling In Love by Elvis Presley"+'</a>');
document.write('<a href="'+ "https://www.youtube.com/watch?v=cHP9-Xf95K0&ab_channel=CollectionLoveSongs"+'">'+"Special Love Song Playlist"+'</a>');
};

if (song_picker== 5){
    document.write("<p>" + ("Your Music Options Are") + "</p>");
    document.write('<a href="'+ "https://www.youtube.com/watch?v=_sV0S8qWSy0&ab_channel=ArianaGrandeVevo"+'">'+"The Way by Ariana Grande"+'</a>');
    document.write('<a href="'+ "https://www.youtube.com/watch?v=waU75jdUnYw&ab_channel=TheWeekndVEVO"+'">'+"Earned It by The Weeknd"+'</a>');
    document.write('<a href="'+ "https://www.youtube.com/watch?v=XjwZAa2EjKA&ab_channel=KatyPerryVEVO"+'">'+"Unconditionally by Katy Perry"+'</a>');
    document.write('<a href="'+ "https://www.youtube.com/watch?v=eM213aMKTHg&ab_channel=LadyAVEVO"+'">'+"Need You Now by Lady Antebellum"+'</a>');
    document.write('<a href="'+ "https://www.youtube.com/watch?v=ns5PMI6mrsI&ab_channel=19xxMusic"+'">'+"Special Love Song PLaylist"+'</a>');
    };

  if (song_picker== 6){
        document.write("<p>" + ("Your Music Options Are") + "</p>");
        document.write('<a href="'+ "https://www.youtube.com/watch?v=0yW7w8F2TVA&ab_channel=JamesAVEVO"+'">'+"Sa You Won't Let Go by James Arthur"+'</a>');
        document.write('<a href="'+ "https://www.youtube.com/watch?v=nIjVuRTm-dc&ab_channel=Maroon5VEVO"+'">'+"She Will Be Loved by Maroon 5"+'</a>');
        document.write('<a href="'+ "https://www.youtube.com/watch?v=ehZECQUvMhE&ab_channel=Audioandlyrics"+'">'+"Down by Jay Sean"+'</a>');
        document.write('<a href="'+ "https://www.youtube.com/watch?v=VPRjCeoBqrI&ab_channel=Coldplay"+'">'+"A Sky Full Of Starts by ColdPlay"+'</a>');
        document.write('<a href="'+ "https://www.youtube.com/watch?v=pioizAsehlk&ab_channel=CollectionLoveSongs"+'">'+"Special Love Song Playlist"+'</a>');
        };

 if (song_picker== 7){
            document.write("<p>" + ("Your Music Options Are") + "</p>");
            document.write('<a href="'+ "https://www.youtube.com/watch?v=2-MBfn8XjIU&ab_channel=MeghanTrainorVEVO"+'">'+"Like I'm Gonna Lose by Meghan Trainor"+'</a>');
            document.write('<a href="'+ "https://www.youtube.com/watch?v=EkHTsc9PU2A&ab_channel=JasonMraz"+'">'+"I'm Yours by Jason Mraz"+'</a>');
            document.write('<a href="'+ "https://www.youtube.com/watch?v=pE49WK-oNjU&ab_channel=ArianaGrandeVevo"+'">'+"I'm Stuck With You by Ariana Grande, Justin Bieber"+'</a>');
            document.write('<a href="'+ "https://www.youtube.com/watch?v=Pkh8UtuejGw&ab_channel=ShawnMendesVEVO"+'">'+"Senorita By Shawn Mendes, Camila Cabello"+'</a>');
            document.write('<a href="'+ "https://www.youtube.com/watch?v=rnCxJNhDg_w&ab_channel=CollectionLoveSongs"+'">'+"Special Love Song Playlist"+'</a>');
            };

if (song_picker== 8){
                document.write("<p>" + ("Your Music Options Are") + "</p>");
                document.write('<a href="'+ "https://www.youtube.com/watch?v=x3bfa3DZ8JM&ab_channel=KhalidVEVO"+'">'+"Better by Kalid"+'</a>');
                document.write('<a href="'+ "https://www.youtube.com/watch?v=b8I-7Wk_Vbc&ab_channel=EnriqueIglesiasVEVO"+'">'+"Bailando by Enrique Iglesias"+'</a>');
                document.write('<a href="'+ "https://www.youtube.com/watch?v=-BjZmE2gtdo&ab_channel=TaylorSwiftVEVO"+'">'+"Lover by Taylor Swift"+'</a>');
                document.write('<a href="'+ "https://www.youtube.com/watch?v=nQJEp-k-ogs&ab_channel=ArianaGrandeVevo"+'">'+"Pov by Ariana Grande"+'</a>');
                document.write('<a href="'+ "https://www.youtube.com/watch?v=vXVVTcwlAWQ&ab_channel=19xxMusic"+'">'+"Special Love Song Playlist"+'</a>');
                };

 if (song_picker== 9){
                    document.write("<p>" + ("Your Music Options Are") + "</p>");
                    document.write('<a href="'+ "https://www.youtube.com/watch?v=izGwDsrQ1eQ&ab_channel=georgemichaelVEVO"+'">'+"Careless Whisper by George Michael"+'</a>');
                    document.write('<a href="'+ "https://www.youtube.com/watch?v=7aIToe3_XI4&ab_channel=YellowClaw"+'">'+"Lets Get Married by Yellow Claw"+'</a>');
                    document.write('<a href="'+ "https://www.youtube.com/watch?v=mMF6hsQNrBw&ab_channel=ChildishGambinoVEVO"+'">'+"Despacito by Luis Fonsi, Daddy Yankee "+'</a>');
                    document.write('<a href="'+ "https://www.youtube.com/watch?v=AtKZKl7Bgu0&ab_channel=CalvinHarrisVEVO"+'">'+"I Need Your Love by Calvin Harris "+'</a>');
                    document.write('<a href="'+ "https://www.youtube.com/watch?v=HhAzk-EnpQs&ab_channel=CollectionLoveSongs"+'">'+"Special Love Song Playlist"+'</a>');
                    };

                        
        