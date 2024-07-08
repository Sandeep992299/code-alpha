document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const addSongButton = document.getElementById('add-song');
    const newSongTitle = document.getElementById('new-song-title');
    const newSongArtist = document.getElementById('new-song-artist');
    const newSongFile = document.getElementById('new-song-file');
    const newBgImageFile = document.getElementById('new-bg-image-file');
    const title = document.getElementById('music-title');
    const artist = document.getElementById('music-artist');

    const songs = [
        {
            title: 'Mama Mama Maai',
            artist: 'Lil Rome',
            src: 'Mama Mama Maai (Rap) - Lil Rome [SONG.LK].mp3',
            bgImage: 'url("1.png")'
        },
        {
            title: 'Manakkalpithai',
            artist: 'Gang Team',
            src: 'Manakkalpithayi - SL Rap Army Ft Pilliya Gang Team [SONG.LK].mp3',
            bgImage: 'url("2.png")'
        },
        {
            title: 'Mohini',
            artist: 'RAWDS',
            src: 'Mohini Medley - RAWDS [SONG.LK].mp3',
            bgImage: 'url("3.png")'
        }
    ];

    let currentSongIndex = 0;

    function loadSong(song) {
        title.textContent = song.title;
        artist.textContent = song.artist;
        audio.src = song.src;
        document.body.style.backgroundImage = song.bgImage;
    }

    function playSong() {
        audio.play();
        playButton.textContent = 'Pause';
    }

    function pauseSong() {
        audio.pause();
        playButton.textContent = 'Play';
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
        playSong();
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        playSong();
    }

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            playSong();
        } else {
            pauseSong();
        }
    });

    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);

    addSongButton.addEventListener('click', () => {
        const songTitle = newSongTitle.value;
        const songArtist = newSongArtist.value;
        const songFile = newSongFile.files[0];
        const bgImageFile = newBgImageFile.files[0];

        if (songTitle && songArtist && songFile && bgImageFile) {
            const newSongURL = URL.createObjectURL(songFile);
            const newBgImageURL = URL.createObjectURL(bgImageFile);

            const newSong = {
                title: songTitle,
                artist: songArtist,
                src: newSongURL,
                bgImage: `url("${newBgImageURL}")`
            };

            songs.push(newSong);
            newSongTitle.value = '';
            newSongArtist.value = '';
            newSongFile.value = '';
            newBgImageFile.value = '';
        } else {
            alert('Please fill out all fields and select both files.');
        }
    });

    // Load the first song initially
    loadSong(songs[currentSongIndex]);
});
