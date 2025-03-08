import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent implements OnInit {
  songs = [
    {
      title: 'Just Pretend',
      artist: 'Malos Presagios',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/justpretend.png',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/justPretend.mp3',
    },
    {
      title: 'Avalanche',
      artist: 'Bring Me The Horizon',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/avalanche.png',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/Avalanche.mp3',
    },
    {
      title: 'Antes de Perderte',
      artist: 'Duki',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/antesPerderte.jfif',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/AntesDePerderte.mp3',
    },
    {
      title: 'Tofu Delivery',
      artist: 'Orslok-Rojuu',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/tofu.jfif',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/tofu.mp3',
    },
    {
      title: 'A la Tumba',
      artist: 'Natos y Waor - Recycled J',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/tumba.jfif',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/ALaTumba.mp3',
    },
    {
      title: 'Doomed',
      artist: 'Bring Me The Horizon',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/doomed.png',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/Doomed.mp3',
    },
    {
      title: 'Platos Rotos',
      artist: 'Natos y Waor - Recycled J',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/platos.jfif',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/Platos.mp3',
    },
    {
      title: 'Llorando Sangre',
      artist: 'Rojuu',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/llorando.jfif',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/llorando.mp3',
    },
    {
      title: 'Antivist',
      artist: 'Bring Me The Horizon',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/anti.jfif',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/antivist.mp3',
    },
    {
      title: 'Se que no debo',
      artist: 'Orslok',
      cover: 'https://pblabad.github.io/AniversarioGHP/assets/portadas/no debo.jfif',
      file: 'https://pblabad.github.io/AniversarioGHP/assets/audio/no debo.mp3',
    },
  ];

  currentSongIndex: number = 0;
  currentSong: any = this.songs[0];
  audioPlayer: HTMLAudioElement = new Audio();
  isPlaying: boolean = false;

  ngOnInit(): void {
    this.loadSong();
  }

  loadSong(): void {
    this.audioPlayer.src = this.currentSong.file;
    this.audioPlayer.load();
  }

  playSong(index: number): void {
    this.currentSongIndex = index;
    this.currentSong = this.songs[index];
    this.loadSong();
    this.playPause();
  }

  playPause(): void {
    if (this.audioPlayer.paused) {
      this.audioPlayer.play();
      this.isPlaying = true;
    } else {
      this.audioPlayer.pause();
      this.isPlaying = false;
    }
  }
  
  nextSong(): void {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.currentSong = this.songs[this.currentSongIndex];
    this.loadSong();
    if (this.isPlaying) {
      this.audioPlayer.play();
    }
  }

  previousSong(): void {
    this.currentSongIndex =
      (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.currentSong = this.songs[this.currentSongIndex];
    this.loadSong();
    if (this.isPlaying) {
      this.audioPlayer.play();
    }
  }
}