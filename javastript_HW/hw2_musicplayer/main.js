const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playlist = $(".playlist")
const cd = $('.cd')
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");

const PLAYER_STORAGE_KEY = "LIEUX_PLAYER";

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,  
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {}, 
    songs: [
        {
          name: "Click Pow Get Down",
          singer: "Raftaar x Fortnite",
          path: "./asset/music/music_list/song-1.mp3",
          image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
        {
          name: "Tu Phir Se Aana",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "./asset/music/music_list/song-2.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "Naachne Ka Shaunq",
          singer: "Raftaar x Brobha V",
          path: "./asset/music/music_list/song-3.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
          name: "Mantoiyat",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "./asset/music/music_list/song-4.mp3",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "Aage Chal",
          singer: "Raftaar",
          path: "./asset/music/music_list/song-5.mp3",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
          name: "Damn",
          singer: "Raftaar x kr$na",
          path:
            "./asset/music/music_list/song-6.mp3",
          image:
            "./asset/img/song_img/song-6.jpg"
        },
        {
          name: "Feeling You",
          singer: "Raftaar x Harjas",
          path: "./asset/music/music_list/song-7.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        }
      ],
    setConfig: function (key,value) {
      this.config[key] = value;
      localStorage.setItem(PLAYER_STORAGE_KEY,JSON.stringify(this.config));
    },
    render: function() { 
        const htmls = this.songs.map((song,index) => {
            return `
            <div class="song ${
              index === this.currentIndex ? "active" : ""
            }" data-index="${index}">
                  <div class="thumb"
                      style="background-image: url('${song.image}')">
                  </div>
                  <div class="body">
                      <h3 class="title">${song.name}</h3>
                      <p class="author">${song.singer}</p>
                  </div>
                  <div class="option">
                      <i class="fas fa-ellipsis-h"></i>
                  </div>
              </div>
            `
        })
        playlist.innerHTML = htmls.join("")
    },
    defineProperties: function() {
      Object.defineProperty(this, "currentSong", {
        get: function() {
          return this.songs[this.currentIndex];
        }
      });
    },
    handleEvents: function() {
        _this = this;
        const cdWidth = cd.offsetWidth;
        // Xu ly quay dia
        const cdThumbAnimate = cdThumb.animate([{transform: "rotate(360deg"}],{
          duration: 10000,
          iterations: Infinity
        });
        cdThumbAnimate.pause();
        // Xu ly scroll len
        document.onscroll = function() {
          const scrollTop = window.scrollY || 
                        document.documentElement.scrollTop;
          const newCdWidth = cdWidth - scrollTop;

          cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
          cd.style.opacity = newCdWidth / cdWidth;
          
        }
        // Xu ly khi bam play
        playBtn.onclick = function () {
          if (_this.isPlaying) {
            audio.pause();
          } else {
            audio.play();
          }
        };
        // Khi song được play
        // When the song is played
        audio.onplay = function () {
          _this.isPlaying = true;
          player.classList.add("playing");
          cdThumbAnimate.play();
        };

        // Khi song bị pause
        // When the song is pause
        audio.onpause = function () {
          _this.isPlaying = false;
          player.classList.remove("playing");
          cdThumbAnimate.pause();
        };

        // Xu ly tien do bai hat
        audio.ontimeupdate = function () {
          if (audio.duration) {
            const progressPercent = Math.floor((audio.currentTime / audio.duration)*100);
            progress.value = progressPercent;

          }
        }
        // Xu ly keo thanh nhac
        progress.onchange = function (e) {
          const seekTime = (audio.duration /100) * e.target.value;
          audio.currentTime = seekTime;
        };
        // Xu ly next song
        nextBtn.onclick = function () {
          if (_this.isRandom) {
            _this.playRandomSong();
          }
          else {
            _this.nextSong();
          }
          audio.play();
          _this.render();
          _this.scrollToActiveSong();
        };
        // Xu ly prev song
        prevBtn.onclick = function () {
          if (_this.isRandom) {
            _this.playRandomSong();
          }
          else {
            _this.prevSong();
          }
          audio.play();
          _this.render();
          _this.scrollToActiveSong();
        };
        // Xu ly nut random
        randomBtn.onclick = function () {
          _this.isRandom =!_this.isRandom;
          randomBtn.classList.toggle("active",_this.isRandom);
          _this.setConfig("isRandom",_this.isRandom);
        };
        // Xu ly tu phat khi het nhac
        audio.onended = function () {
          nextBtn.click();
        };
        // Xu ly nut repeat songs
        repeatBtn.onclick = function (e) {
          _this.isRepeat = !_this.isRepeat;
          repeatBtn.classList.toggle("active", _this.isRepeat);
          _this.setConfig("isRepeat",_this.isRepeat);

        };
    
        // XU ly repeat songs
        audio.onended = function () {
          if (_this.isRepeat) {
            audio.play();
          }
          else {
          nextBtn.click();
          }
        };
        // Xu li khi nhan playlist
        playlist.onclick = function (e) {
          const songNode = e.target.closest(".song:not(.active)");
    
          if (songNode || e.target.closest(".option")) {
            // Xử lý khi click vào song
            // Handle when clicking on the song
            if (songNode) {
              _this.currentIndex = Number(songNode.dataset.index);
              _this.loadCurrentSong();
              _this.render();
              audio.play();
            }
    
            // Xử lý khi click vào song option
            // Handle when clicking on the song option
            if (e.target.closest(".option")) {
            }
          }
        };
    },
    scrollToActiveSong: function () {
      setTimeout(function () {
        $(".song.active").scrollIntoView({
          behavior: "smooth",
          block: "center"
        }
        );
      }, 300);
    },
    loadCurrentSong: function () {
      heading.textContent = this.currentSong.name;
      cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
      audio.src = this.currentSong.path;
    },
    loadConfig: function (){
      this.isRandom = this.config.isRandom;
      this.isRepeat = this.config.isRepeat;
    },
    nextSong: function () {
      this.currentIndex++;
      if (this.currentIndex >= this.songs.length) {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
    },
    prevSong: function () {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.songs.length -1;
      }
      this.loadCurrentSong();
    },
    playRandomSong: function () {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.songs.length);
      }while (newIndex === this.currentIndex);
      this.currentIndex = newIndex;
      this.loadCurrentSong(); 
    },
    start: function() {
        this.loadConfig();
        this.defineProperties()
        this.render()
        this.handleEvents()
        this.loadCurrentSong()
        randomBtn.classList.toggle("active", this.isRandom)
        repeatBtn.classList.toggle("active", this.isRepeat)
    }
}

app.start()