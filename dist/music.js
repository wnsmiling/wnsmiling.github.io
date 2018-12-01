const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    lrcType: 3,
    audio: [
      {
        name: "你就不要想起我",
        artist: '田馥甄',
        url: 'http://lc-wsjnvubo.cn-n1.lcfile.com/af7ae645ee10cf1e44e1.mp3',
        cover: 'http://lc-wsjnvubo.cn-n1.lcfile.com/05acd312782fe51a18e9.jpg',
        lrc: 'http://lc-wsjnvubo.cn-n1.lcfile.com/383d8a5dcfc982c5c4f7.lrc'
      }
    ]
});