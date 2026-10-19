
(function () {
  const MUSIC_HOST = 'https://music.mek.dpdns.org';

  const playlist = [
    {
      name: 'Candle In The Wind 1997',
      artist: 'Elton John',
      url: MUSIC_HOST + '/audio/Elton John – Candle In The Wind 1997.mp3',
      cover: MUSIC_HOST + '/covers/Elton John – Candle In The Wind 1997.JPG'
    },
    {
      name: 'Thème de Rémi - Générique début',
      artist: 'Carolin Petit',
      url: MUSIC_HOST + '/audio/Carolin Petit – Thème de Rémi - Générique début.mp3',
      cover: MUSIC_HOST + '/covers/Carolin Petit – Thème de Rémi - Générique début.jpg'
    },
    {
      name: '第三首歌曲',
      artist: '演唱者',
      url: MUSIC_HOST + '/audio/003.mp3',
      cover: MUSIC_HOST + '/covers/default.jpg'
    }
  ];

  function initMusic() {
    if (window.blogPlayer) return;
    if (typeof APlayer === 'undefined') return;

    let container = document.getElementById('aplayer');

    if (!container) {
      container = document.createElement('div');
      container.id = 'aplayer';
      document.body.appendChild(container);
    }

    window.blogPlayer = new APlayer({
      container: container,

      fixed: true,
      mini: true,
      autoplay: false,

      loop: 'all',
      order: 'random',
      preload: 'none',

      volume: 0.35,
      mutex: true,

      theme: '#6B8E5A',

      audio: playlist
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusic);
  } else {
    initMusic();
  }

  document.addEventListener('pjax:complete', initMusic);
})();
