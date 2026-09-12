# 🎵 Spotify Web Player

A modern, interactive music streaming web application inspired by the Spotify interface.  
This project is built using **HTML, CSS, and Vanilla JavaScript** and provides a responsive music-player experience with playlists, artists, search, favorites, audio controls, and an audio visualizer.



## ✨ Features

### 🎧 Music Player
- Play and pause tracks
- Previous and next track controls
- Interactive progress bar
- Track duration and current playback time
- Volume control
- Mute / unmute functionality
- Shuffle mode
- Repeat playlist mode
- Repeat single-track mode
- Currently playing track display

The player includes dedicated controls for shuffle, previous, play/pause, next, and repeat, along with volume and visualizer controls. 

### 🔎 Search
Search through the music library by:

- Song title
- Artist name
- Album name

Search results dynamically update as you type.

### 🎼 Music Categories
Browse songs by language/category:

- All Languages
- English
- Hindi
- Bengali
- Marathi
- Spanish
- Korean
- Japanese

The filtering system combines playlist selection, language filters, and search queries to determine which tracks are displayed. 

### ❤️ Liked Songs
- Like/unlike songs
- Dedicated **Liked Songs** section
- Favorite tracks can be filtered separately

### 📚 Playlists
The application includes a personal library with playlists such as:

- All Tracks
- Liked Songs
- Hindi Special
- English Hits

Users can also create new playlists through the playlist creation interface.

### 👨‍🎤 Artists
- Browse popular artists
- View an artists directory
- Open individual artist pages
- View artist information
- View popular releases
- Play an artist's tracks

### 🎨 Modern UI
The interface features:

- Spotify-inspired dark theme
- Sidebar navigation
- Glassmorphism effects
- Gradient backgrounds
- Animated album artwork
- Hover animations
- Custom scrollbars
- Interactive buttons
- Responsive layout

### 💿 Animated Record
The currently playing album artwork is displayed as a rotating record-style element in the sidebar. The CSS animation rotates the record continuously while playback is active. 

### 📊 Audio Visualizer
A dedicated audio visualizer can be opened from the player controls.

The visualizer uses a `<canvas>` element and displays the currently playing song and artist. 

### 👤 User Profile
The interface includes a user profile section with:

- Profile avatar
- Username
- Profile menu
- Profile details
- Settings
- Login / logout interface

The default profile is displayed as **Dev Guest**. 

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Application structure |
| CSS3 | Styling, layout and animations |
| JavaScript | Application logic and interactivity |
| HTML5 Audio API | Music playback |
| Canvas API | Audio visualizer |
| Font Awesome | Icons |
| Google Fonts | Typography |

The project uses the **Outfit** font and Font Awesome through external CDN resources. 

---

## 📂 Project Structure

```text
Spotify-Web-Player/
│
├── index.html
├── style.css
├── script.js
│
├── logo.svg
├── giphy.gif
├── download.jpeg
├── realistic-music-record-label-disk-mockup_1017-33906.jpg
├── Meri Zindagi Tu Hai.mp3
│
└── README.md

