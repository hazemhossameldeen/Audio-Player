let time = document.getElementById('time');
let cover = document.getElementById('cover');
let audio = document.getElementById('audio');
let playBtn = document.getElementById('icon');
let prevBtn = document.getElementById('left');
let nextBtn = document.getElementById('right');
let heart = document.querySelector("li.false");
let audioLink = document.getElementById('target');
let progress = document.getElementById('progress');
let audioInfo = document.getElementById('audio-info');
let audioTitle = document.getElementById('audio-title');
let progressContainer = document.getElementById('progress-container');

// audio titles
const audios = [
    "محمود على البنا",
    "1-حسن صالح",
    "2-حسن صالح"
];
const audiosInfo = [
    "قَالَ رَبِّ اشْرَحْ لِي صَدْرِي",
    "وَيَوْمَ يُنفَخُ فِي الصُّورِ",
    "وَعِبَادُ الرَّحْمَنِ"
];
const audiosLinks = [
    "https://www.youtube.com/watch?v=maYRFpv9iUw&t=47s",
    "https://www.youtube.com/shorts/pogKNbrkc4w",
    "https://www.youtube.com/shorts/A05CQ_m1I4U"
];

const audiosId = [1,2,3];

const favorits = ["false", "false", "false"];


// Keep track of audio
let audioIndex = 1

// Load the audio
loadAudio(audios[audioIndex], audiosInfo[audioIndex], audiosLinks[audioIndex], audiosId[audioIndex], favorits[audioIndex])

// Update the audio
function loadAudio(title,info,link,id,liked){
    audioTitle.innerText = title;
    audioInfo.innerText = info;
    audioLink.href = link;
    audio.src = `./assets/audio/${title}.mp3`;
    cover.style.background = `url('./assets/images/${audioIndex}.jpg')`;
    heart.id = id;
    heart.classList = liked;
}

function playAudio(){
    playBtn.querySelector("i.bx").classList.remove("bx-play-circle");
    playBtn.querySelector("i.bx").classList.add("bx-pause-circle");
    playBtn.classList.remove('play')
    playBtn.classList.add('pause')
    audio.play();
}

function pauseAudio(){
    playBtn.querySelector("i.bx").classList.remove("bx-pause-circle");
    playBtn.querySelector("i.bx").classList.add("bx-play-circle");
    playBtn.classList.remove("pause");
    playBtn.classList.add("play");
    audio.pause();
}

function prevAudio(){
    audioIndex--;

    if(audioIndex < 0){
        audioIndex = audios.length - 1
    }
    loadAudio(audios[audioIndex], audiosInfo[audioIndex], audiosLinks[audioIndex], audiosId[audioIndex], favorits[audioIndex]);
    playAudio();
}

function nextAudio(){
    audioIndex++;
    if(audioIndex > audios.length - 1){
        audioIndex = 0;
    }
    loadAudio(audios[audioIndex], audiosInfo[audioIndex], audiosLinks[audioIndex], audiosId[audioIndex], favorits[audioIndex]);
    playAudio();
}

function updateProgress(e){
    const {currentTime, duration} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function like(){
    heart.classList.toggle('true');

    if(heart.id == audioOne.ib){
        audioOne.one()
    }
    else if(heart.id == audioTwo.ib){
        audioTwo.two();
    }
    else if(heart.id == audioThree.ib){
        audioThree.three();
    }
}

audioOne = {
    ib : 1,
    favorite: "",
    one : function(){    
        if(heart.id == 1 && audioOne.favorite === ""){        
        audioOne.favorite = 'true'
        favorits[0] = audioOne.favorite}
        else{
        audioOne.favorite = "";
        favorits[0] = audioOne.favorite;
    }
}
};

audioTwo = {
    ib : 2,
    favorite: "",
    two : function(){    
        if(heart.id == 2 && audioTwo.favorite === ""){        
        audioTwo.favorite = 'true'
        favorits[1] = audioTwo.favorite}
        else{
        audioTwo.favorite = "";
        favorits[1] = audioTwo.favorite;
    }
}
};

audioThree = {
    ib : 3,
    favorite: "",
    three : function(){    
        if(heart.id == 3 && audioThree.favorite === ""){        
        audioThree.favorite = 'true'
        favorits[2] = audioThree.favorite}
        else{
        audioThree.favorite = "";
        favorits[2] = audioThree.favorite;
    }
}
};

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function play(){
    if(playBtn.classList.contains('play')){
        playAudio();
    } 
    else{
        pauseAudio();
    }
}

setInterval(function(){
    m = 0
    s = Math.floor(audio.currentTime)
    time.innerHTML = `${m}:${s}`;
    if (Math.floor(audio.currentTime) >= 60) {
        m++
        s = Math.floor(audio.currentTime - 60);
        time.innerHTML = `${m}:${s}`;
    }
},1000)


// Event listeners
heart.addEventListener('click', like);
playBtn.addEventListener('click', play)
audio.addEventListener("ended", nextAudio);
prevBtn.addEventListener('click', prevAudio);
nextBtn.addEventListener('click', nextAudio);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

