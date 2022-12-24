const allMusic = [
    {
        name: 'All Copyrights Reserved',
        author: 'Võ Phước Duy',
        img: 'song-1',
        src: 'song-1'
    },
    {
        name: 'Hơn Cả Mây Trời - Nam Con (TeddyK Đặt - Tặng) (ExclusiveTeam)',
        author: 'Nguyễn Hải Nam',
        img: 'song-2',
        src: 'song-2'
    },
    {
        name: 'Cần không có,có không cần - LVT ft QHP Remix | nqa',
        author: 'ngquanganh',
        img: 'song-3',
        src: 'song-3'
    },
    {
        name: 'Quyền Hải Phòng - She Neva Know Remix',
        author: 'LAGG',
        img: 'song-4',
        src: 'song-4'
    },
    {
        name: 'NASMIK x ARS Remix - Lovely Dog 2021 (ft Neath boss & Rez Boss & Chhay S)',
        author: 'Đăng Phúc',
        img: 'song-5',
        src: 'song-5'
    },
    {
        name: 'SXM Phải Chia Tay Thôi  - Trần Thanh Quốc Thành ft Thành PC ft Đông Gôn',
        author: 'Trần Thanh Quốc Thành',
        img: 'song-6',
        src: 'song-6'
    },
    {
        name: 'Breakfast-Công Thành Remix-Mặt Trăng Đêm Nay Tựa Như Pink Star Diamonda',
        author: 'am a VIỆT CỘNG',
        img: 'song-7',
        src: 'song-7'
    },
    {
        name: 'CHỊ ƠI , HAI CHỊ EM MÌNH ĐI CHỢ MUA CON THỎ ĐI - VÂY GIỮ DBEOS REMIX || NHẠC HOT TIK TOK 2022',
        author: 'Hảo Hán',
        img: 'song-8',
        src: 'song-8'
    },
    {
        name: 'My Everything - ( Hưng Bobbi Remix )Exclusive Music Team®',
        author: 'Nguyễn Hải Nam',
        img: 'song-9',
        src: 'song-9'
    },
    {
        name: 'MIX CHILL | 2AM - JUSTATEE',
        author: 'XOANN',
        img: 'song-10',
        src: 'song-10'
    },
    {
        name: '[HOT TIKTOK] NGỤC TÙ TÌNH YÊU - VLUX REMIX | Một bản nhạc CHILL',
        author: 'Thích Nghe Nhạc Muzik - Music For You',
        img: 'song-11',
        src: 'song-11'
    }, 
    { 
        name: '2AM -  Alvin Cover -DBEOS REMIX',
        author: 'k s o j i n',
        img: 'song-12',
        src: 'song-12'
    },
    {
        name: 'Charlie Puth - River (MXS Chillteg) FREE DOWNLOAD',
        author: 'Max Stealthy',
        img: 'song-13',
        src: 'song-13'
    },
    {
        name: 'Chuyện Đôi Ta (DeeYouSee Remake) - Emcee L (Da LAB) Ft. Muộii',
        author: 'DeeYouSee',
        img: 'song-14',
        src: 'song-14'
    },
    {
        name: 'MASHUP LỠ DUYÊN | RUM X NIT',
        author: 'Rum',
        img: 'song-15',
        src: 'song-15'
    },
    {
        name: 'Feel  Nguyen Axit Remix',
        author: 'Lemon',
        img: 'song-16',
        src: 'song-16'
    },
    {
        name: 'y2Đêm dài thêm với những nhớ nhung ban chiều Remix  Anh Đáng Rơi Người Yêu Này  Tirus Remix_320kbps',
        author: 'LANH 324',
        img: 'song-17',
        src: 'song-17'
    },
    {
        name: 'OUT DONT CHA - ĐẠT MYN REMIX',
        author: 'Chung Hiếu✪',
        img: 'song-18',
        src: 'song-18'
    },
    {
        name: 'Tự Sự | Orange |  Thời gian sẽ chữa lành mọi vết thương, như ai đó đã từng nói',
        author: '𝟹 𝟷 𝟶 𝟽',
        img: 'song-19',
        src: 'song-19'
    },
    {
        name: 'DẤU MƯA REMIX HOT TREND TIKTOK 2022.mp3',
        author: 'iam_vuong02',
        img: 'song-20',
        src: 'song-20'
    },
    {
        name: 'Goldwave feat. Jeoko - Memories',
        author: 'Soave Radio',
        img: 'song-21',
        src: 'song-21'
    },
    {
        name: 'Think Of You - Huynh Huu Khang (feat. Trung) [FREE DOWNLOAD]',
        author: 'Nyctophilia',
        img: 'song-22',
        src: 'song-22'
    },
    {
        name: 'CALL GIRL X TRUNG TỰ - BỘ ĐỘI MS 130BPM*Free Download Click *',
        author: 'Bộ Đội ☸',
        img: 'song-23',
        src: 'song-23'
    },
    {
        name: 'Vài câu nói có khiến người thay đổi - slowed - GREY D X TLINH',
        author: 'Bùi Dung',
        img: 'song-24',
        src: 'song-24'
    },
    {
        name: 'Một ngàn nỗi đau - Trung Quân Idol Cover',
        author: 'Thu Trangg',
        img: 'song-25',
        src: 'song-25'
    },
    {
        name: 'The History Of Future( Dan Dan ) Cambodia Remix',
        author: 'Dan Dan - Cambodia - DDC',
        img: 'song-26',
        src: 'song-26'
    },
    {
        name: 'NHẠC KE HUYỀN THOẠI - guHancci',
        author: 'guHancci ✪',
        img: 'song-27',
        src: 'song-27'
    },
    {
        name: 'Kiss - Hưng bobi',
        author: 'Lê Vạn Bảo Trọng',
        img: 'song-28',
        src: 'song-28'
    },
    {
        name: 'SIÊU PHẨM TRƠN | guHancci',
        author: 'Lo Duc Trong',
        img: 'song-29',
        src: 'song-29'
    },
    {
        name: 'BREAKFAST - Hoàng Dương Remix (Amiri Music Team) - Mặt trăng đêm nay tựa như pink star Diamond',
        author: 'Amiri Music Team ♪',
        img: 'song-30',
        src: 'song-30'
    },
    {
        name: 'gap lai nhau khi mua hoa no nhe',
        author: 'thanhnheen',
        img: 'song-31',
        src: 'song-31'
    },
    {
        name: 'GOODIES - TBYNZ REMIX',
        author: '9 2 C U',
        img: 'song-32',
        src: 'song-32'
    }
]

