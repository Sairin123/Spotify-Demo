// Music Data
const tracks = [
    {
        id: 1,
        name: "Meri Zindagi Tu Hai",
        artist: "Jubin Nautiyal",
        src: "Meri Zindagi Tu Hai.mp3",
        img: "download.jpeg",
        album: "Satyameva Jayate 2",
        duration: "4:26",
        durationSec: 266,
        category: "hindi"
    },
    {
        id: 2,
        name: "Chords of Life",
        artist: "Madza",
        src: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
        img: "realistic-music-record-label-disk-mockup_1017-33906.avif",
        album: "Chords of Life EP",
        duration: "4:03",
        durationSec: 243,
        category: "english"
    },
    {
        id: 3,
        name: "Late Night Drive",
        artist: "Madza",
        src: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
        img: "realistic-music-record-label-disk-mockup_1017-33906.avif",
        album: "Midnight Drives",
        duration: "2:46",
        durationSec: 166,
        category: "english"
    },
    {
        id: 4,
        name: "Persistence",
        artist: "Madza",
        src: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
        img: "realistic-music-record-label-disk-mockup_1017-33906.avif",
        album: "Persistence Vol 1",
        duration: "2:50",
        durationSec: 170,
        category: "english"
    },
    {
        id: 5,
        name: "SoundHelix Song 1",
        artist: "SoundHelix",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "logo.svg",
        album: "SoundHelix Project",
        duration: "6:12",
        durationSec: 372,
        category: "english"
    },
    {
        id: 6,
        name: "Tum Hi Ho",
        artist: "Arijit Singh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        album: "Aashiqui 2",
        duration: "7:05",
        durationSec: 425,
        category: "hindi"
    },
    {
        id: 7,
        name: "Channa Mereya",
        artist: "Arijit Singh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        album: "Ae Dil Hai Mushkil",
        duration: "5:44",
        durationSec: 344,
        category: "hindi"
    },
    {
        id: 8,
        name: "Amake Amar Moto Thakte Dao",
        artist: "Anupam Roy",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
        album: "Autograph",
        duration: "5:02",
        durationSec: 302,
        category: "bengali"
    },
    {
        id: 9,
        name: "Boba Tunnel",
        artist: "Anupam Roy",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Chotushkone",
        duration: "6:02",
        durationSec: 362,
        category: "bengali"
    },
    {
        id: 10,
        name: "Zingaat",
        artist: "Ajay-Atul",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        img: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=400&h=400&fit=crop",
        album: "Sairat",
        duration: "5:12",
        durationSec: 312,
        category: "marathi"
    },
    {
        id: 11,
        name: "Mauli Mauli",
        artist: "Ajay-Atul",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop",
        album: "Lai Bhaari",
        duration: "6:20",
        durationSec: 380,
        category: "marathi"
    },
    {
        id: 12,
        name: "Apsara Aali",
        artist: "Shreya Ghoshal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
        album: "Natarang",
        duration: "5:30",
        durationSec: 330,
        category: "marathi"
    },
    {
        id: 13,
        name: "Despacito",
        artist: "Luis Fonsi",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
        album: "Vida",
        duration: "5:10",
        durationSec: 310,
        category: "spanish"
    },
    {
        id: 14,
        name: "Dynamite",
        artist: "BTS",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
        album: "Be",
        duration: "6:15",
        durationSec: 375,
        category: "korean"
    },
    {
        id: 15,
        name: "Lemon",
        artist: "Kenshi Yonezu",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Bootleg",
        duration: "4:50",
        durationSec: 290,
        category: "japanese"
    },
    {
        id: 16,
        name: "Hene Hene Kow Aka",
        artist: "Israel Kamakawiwo'ole",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=400&fit=crop",
        album: "Ka 'Ano'i",
        duration: "5:22",
        durationSec: 322,
        category: "international"
    },
    {
        id: 17,
        name: "As It Was",
        artist: "Harry Styles",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Harry's House",
        duration: "5:00",
        durationSec: 300,
        category: "english"
    },
    {
        id: 18,
        name: "Baby",
        artist: "Justin Bieber",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        album: "My World 2.0",
        duration: "4:44",
        durationSec: 284,
        category: "english"
    },
    {
        id: 19,
        name: "Perfect",
        artist: "Ed Sheeran",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        album: "Divide",
        duration: "5:55",
        durationSec: 355,
        category: "english"
    },
    {
        id: 20,
        name: "Abhi Mujh Mein Kahin",
        artist: "Sonu Nigam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Agneepath",
        duration: "6:05",
        durationSec: 365,
        category: "hindi"
    },
    {
        id: 21,
        name: "Dil Diyan Gallan",
        artist: "Atif Aslam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=400&h=400&fit=crop",
        album: "Tiger Zinda Hai",
        duration: "4:20",
        durationSec: 260,
        category: "hindi"
    },
    {
        id: 22,
        name: "Mile Ho Tum",
        artist: "Neha Kakkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
        album: "Fever",
        duration: "4:12",
        durationSec: 252,
        category: "hindi"
    },
    // Harry Styles (additional)
    {
        id: 23,
        name: "Watermelon Sugar",
        artist: "Harry Styles",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
        album: "Fine Line",
        duration: "2:54",
        durationSec: 174,
        category: "english"
    },
    {
        id: 24,
        name: "Adore You",
        artist: "Harry Styles",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
        album: "Fine Line",
        duration: "3:27",
        durationSec: 207,
        category: "english"
    },
    // Justin Bieber (additional)
    {
        id: 25,
        name: "Sorry",
        artist: "Justin Bieber",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Purpose",
        duration: "3:20",
        durationSec: 200,
        category: "english"
    },
    {
        id: 26,
        name: "Love Yourself",
        artist: "Justin Bieber",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=400&fit=crop",
        album: "Purpose",
        duration: "3:53",
        durationSec: 233,
        category: "english"
    },
    // Ed Sheeran (additional)
    {
        id: 27,
        name: "Shape of You",
        artist: "Ed Sheeran",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Divide",
        duration: "3:53",
        durationSec: 233,
        category: "english"
    },
    {
        id: 28,
        name: "Thinking Out Loud",
        artist: "Ed Sheeran",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        album: "Multiply",
        duration: "4:41",
        durationSec: 261,
        category: "english"
    },
    // Sonu Nigam (additional)
    {
        id: 29,
        name: "Kal Ho Naa Ho",
        artist: "Sonu Nigam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        album: "Kal Ho Naa Ho",
        duration: "5:22",
        durationSec: 322,
        category: "hindi"
    },
    {
        id: 30,
        name: "Deewana Tera",
        artist: "Sonu Nigam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
        album: "Deewana",
        duration: "4:30",
        durationSec: 270,
        category: "hindi"
    },
    // Atif Aslam (additional)
    {
        id: 31,
        name: "Tera Hone Laga Hoon",
        artist: "Atif Aslam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=400&h=400&fit=crop",
        album: "Ajab Prem Ki Ghazab Kahani",
        duration: "5:00",
        durationSec: 300,
        category: "hindi"
    },
    {
        id: 32,
        name: "Jeena Jeena",
        artist: "Atif Aslam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop",
        album: "Badlapur",
        duration: "3:49",
        durationSec: 229,
        category: "hindi"
    },
    // Neha Kakkar (additional)
    {
        id: 33,
        name: "Dilbar",
        artist: "Neha Kakkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
        album: "Satyameva Jayate",
        duration: "3:04",
        durationSec: 184,
        category: "hindi"
    },
    {
        id: 34,
        name: "Kar Gayi Chull",
        artist: "Neha Kakkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
        album: "Kapoor & Sons",
        duration: "3:07",
        durationSec: 187,
        category: "hindi"
    },
    // Jubin Nautiyal (additional)
    {
        id: 35,
        name: "Raataan Lambiyan",
        artist: "Jubin Nautiyal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
        album: "Shershaah",
        duration: "3:50",
        durationSec: 230,
        category: "hindi"
    },
    {
        id: 36,
        name: "Tujhe Kitna Chahein Aur Hum",
        artist: "Jubin Nautiyal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Kabir Singh",
        duration: "4:00",
        durationSec: 240,
        category: "hindi"
    },
    // Shreya Ghoshal (additional Hindi)
    {
        id: 37,
        name: "Sunn Raha Hai",
        artist: "Shreya Ghoshal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=400&fit=crop",
        album: "Aashiqui 2",
        duration: "5:14",
        durationSec: 314,
        category: "hindi"
    },
    {
        id: 38,
        name: "Deewani Mastani",
        artist: "Shreya Ghoshal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Bajirao Mastani",
        duration: "5:40",
        durationSec: 340,
        category: "hindi"
    },
    // Taylor Swift (New English Singer)
    {
        id: 39,
        name: "Blank Space",
        artist: "Taylor Swift",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&h=400&fit=crop",
        album: "1989",
        duration: "3:51",
        durationSec: 231,
        category: "english"
    },
    {
        id: 40,
        name: "Love Story",
        artist: "Taylor Swift",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop",
        album: "Fearless",
        duration: "3:55",
        durationSec: 235,
        category: "english"
    },
    {
        id: 41,
        name: "Cruel Summer",
        artist: "Taylor Swift",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        album: "Lover",
        duration: "2:58",
        durationSec: 178,
        category: "english"
    },
    // Adele (New English Singer)
    {
        id: 42,
        name: "Hello",
        artist: "Adele",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        album: "25",
        duration: "4:55",
        durationSec: 295,
        category: "english"
    },
    {
        id: 43,
        name: "Someone Like You",
        artist: "Adele",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        album: "21",
        duration: "4:45",
        durationSec: 285,
        category: "english"
    },
    {
        id: 44,
        name: "Rolling in the Deep",
        artist: "Adele",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
        album: "21",
        duration: "3:48",
        durationSec: 228,
        category: "english"
    },
    // Billie Eilish (New English Singer)
    {
        id: 45,
        name: "Bad Guy",
        artist: "Billie Eilish",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
        album: "When We All Fall Asleep",
        duration: "3:14",
        durationSec: 194,
        category: "english"
    },
    {
        id: 46,
        name: "Lovely",
        artist: "Billie Eilish",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        img: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=400&h=400&fit=crop",
        album: "Lovely (Single)",
        duration: "3:20",
        durationSec: 200,
        category: "english"
    },
    // The Weeknd (New English Singer)
    {
        id: 47,
        name: "Blinding Lights",
        artist: "The Weeknd",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        album: "After Hours",
        duration: "3:20",
        durationSec: 200,
        category: "english"
    },
    {
        id: 48,
        name: "Starboy",
        artist: "The Weeknd",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop",
        album: "Starboy",
        duration: "3:50",
        durationSec: 230,
        category: "english"
    },
    // Bruno Mars (New English Singer)
    {
        id: 49,
        name: "Uptown Funk",
        artist: "Bruno Mars",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        album: "Uptown Special",
        duration: "4:30",
        durationSec: 270,
        category: "english"
    },
    {
        id: 50,
        name: "Just the Way You Are",
        artist: "Bruno Mars",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
        album: "Doo-Wops & Hooligans",
        duration: "3:40",
        durationSec: 220,
        category: "english"
    },
    // Dua Lipa (New English Singer)
    {
        id: 51,
        name: "Levitating",
        artist: "Dua Lipa",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        album: "Future Nostalgia",
        duration: "3:23",
        durationSec: 203,
        category: "english"
    },
    {
        id: 52,
        name: "Don't Start Now",
        artist: "Dua Lipa",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
        album: "Future Nostalgia",
        duration: "3:03",
        durationSec: 183,
        category: "english"
    },
    // Coldplay (New English Band)
    {
        id: 53,
        name: "Viva La Vida",
        artist: "Coldplay",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        album: "Viva la Vida",
        duration: "4:02",
        durationSec: 242,
        category: "english"
    },
    {
        id: 54,
        name: "Yellow",
        artist: "Coldplay",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
        album: "Parachutes",
        duration: "4:29",
        durationSec: 269,
        category: "english"
    },
    // Kishore Kumar (New Hindi Singer)
    {
        id: 55,
        name: "Roop Tera Mastana",
        artist: "Kishore Kumar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop",
        album: "Aradhana",
        duration: "3:40",
        durationSec: 220,
        category: "hindi"
    },
    {
        id: 56,
        name: "O Saathi Re",
        artist: "Kishore Kumar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Muqaddar Ka Sikandar",
        duration: "4:30",
        durationSec: 270,
        category: "hindi"
    },
    // Lata Mangeshkar (New Hindi Singer)
    {
        id: 57,
        name: "Lag Ja Gale",
        artist: "Lata Mangeshkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        album: "Woh Kaun Thi?",
        duration: "4:15",
        durationSec: 255,
        category: "hindi"
    },
    {
        id: 58,
        name: "Tujhe Dekha To Ye Jaana",
        artist: "Lata Mangeshkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=400&fit=crop",
        album: "Dilwale Dulhania Le Jayenge",
        duration: "5:02",
        durationSec: 302,
        category: "hindi"
    },
    // KK (New Hindi Singer)
    {
        id: 59,
        name: "Zara Sa",
        artist: "KK",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=400&fit=crop",
        album: "Jannat",
        duration: "5:01",
        durationSec: 301,
        category: "hindi"
    },
    {
        id: 60,
        name: "Ankhon Mein Teri",
        artist: "KK",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Om Shanti Om",
        duration: "4:02",
        durationSec: 242,
        category: "hindi"
    },
    // Sunidhi Chauhan (New Hindi Singer)
    {
        id: 61,
        name: "Kamli",
        artist: "Sunidhi Chauhan",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
        album: "Dhoom 3",
        duration: "4:22",
        durationSec: 262,
        category: "hindi"
    },
    {
        id: 62,
        name: "Sheila Ki Jawani",
        artist: "Sunidhi Chauhan",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        album: "Tees Maar Khan",
        duration: "4:43",
        durationSec: 283,
        category: "hindi"
    },
    // Mohit Chauhan (New Hindi Singer)
    {
        id: 63,
        name: "Tum Se Hi",
        artist: "Mohit Chauhan",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        album: "Jab We Met",
        duration: "5:21",
        durationSec: 321,
        category: "hindi"
    },
    {
        id: 64,
        name: "Nadaan Parindey",
        artist: "Mohit Chauhan",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        album: "Rockstar",
        duration: "6:26",
        durationSec: 386,
        category: "hindi"
    },
    // Armaan Malik (New Hindi Singer)
    {
        id: 65,
        name: "Bol Do Na Zara",
        artist: "Armaan Malik",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        album: "Azhar",
        duration: "4:53",
        durationSec: 293,
        category: "hindi"
    },
    {
        id: 66,
        name: "Pehla Pyaar",
        artist: "Armaan Malik",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
        album: "Kabir Singh",
        duration: "4:25",
        durationSec: 265,
        category: "hindi"
    },
    // Diljit Dosanjh (New Hindi/Punjabi Singer)
    {
        id: 67,
        name: "Lover",
        artist: "Diljit Dosanjh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
        album: "MoonChild Era",
        duration: "3:11",
        durationSec: 191,
        category: "hindi"
    },
    {
        id: 68,
        name: "Proper Patola",
        artist: "Diljit Dosanjh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Namaste England",
        duration: "2:58",
        durationSec: 178,
        category: "hindi"
    },
    // Harry Styles (even more songs)
    {
        id: 69,
        name: "Sign of the Times",
        artist: "Harry Styles",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        album: "Harry Styles",
        duration: "5:40",
        durationSec: 340,
        category: "english"
    },
    {
        id: 70,
        name: "Late Night Talking",
        artist: "Harry Styles",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Harry's House",
        duration: "2:57",
        durationSec: 177,
        category: "english"
    },
    // Justin Bieber (even more songs)
    {
        id: 71,
        name: "What Do You Mean?",
        artist: "Justin Bieber",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=400&fit=crop",
        album: "Purpose",
        duration: "3:25",
        durationSec: 205,
        category: "english"
    },
    {
        id: 72,
        name: "Peaches",
        artist: "Justin Bieber",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        album: "Justice",
        duration: "3:18",
        durationSec: 198,
        category: "english"
    },
    // Ed Sheeran (even more songs)
    {
        id: 73,
        name: "Castle on the Hill",
        artist: "Ed Sheeran",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        album: "Divide",
        duration: "4:21",
        durationSec: 261,
        category: "english"
    },
    {
        id: 74,
        name: "Bad Habits",
        artist: "Ed Sheeran",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        album: "= (Equals)",
        duration: "3:51",
        durationSec: 231,
        category: "english"
    },
    // Taylor Swift (even more songs)
    {
        id: 75,
        name: "Shake It Off",
        artist: "Taylor Swift",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&h=400&fit=crop",
        album: "1989",
        duration: "3:39",
        durationSec: 219,
        category: "english"
    },
    {
        id: 76,
        name: "Cardigan",
        artist: "Taylor Swift",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop",
        album: "Folklore",
        duration: "3:59",
        durationSec: 239,
        category: "english"
    },
    {
        id: 77,
        name: "Style",
        artist: "Taylor Swift",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
        album: "1989",
        duration: "3:51",
        durationSec: 231,
        category: "english"
    },
    // Adele (even more songs)
    {
        id: 78,
        name: "Set Fire to the Rain",
        artist: "Adele",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        album: "21",
        duration: "4:02",
        durationSec: 242,
        category: "english"
    },
    {
        id: 79,
        name: "Easy On Me",
        artist: "Adele",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=400&h=400&fit=crop",
        album: "30",
        duration: "3:44",
        durationSec: 224,
        category: "english"
    },
    // Billie Eilish (even more songs)
    {
        id: 80,
        name: "When the Party's Over",
        artist: "Billie Eilish",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
        album: "When We All Fall Asleep",
        duration: "3:13",
        durationSec: 193,
        category: "english"
    },
    {
        id: 81,
        name: "Ocean Eyes",
        artist: "Billie Eilish",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop",
        album: "Don't Smile at Me",
        duration: "3:20",
        durationSec: 200,
        category: "english"
    },
    // The Weeknd (even more songs)
    {
        id: 82,
        name: "The Hills",
        artist: "The Weeknd",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        album: "Beauty Behind the Madness",
        duration: "4:02",
        durationSec: 242,
        category: "english"
    },
    {
        id: 83,
        name: "Can't Feel My Face",
        artist: "The Weeknd",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
        album: "Beauty Behind the Madness",
        duration: "3:35",
        durationSec: 215,
        category: "english"
    },
    // Bruno Mars (even more songs)
    {
        id: 84,
        name: "Locked Out of Heaven",
        artist: "Bruno Mars",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        album: "Unorthodox Jukebox",
        duration: "3:53",
        durationSec: 233,
        category: "english"
    },
    {
        id: 85,
        name: "24K Magic",
        artist: "Bruno Mars",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
        album: "24K Magic",
        duration: "3:46",
        durationSec: 226,
        category: "english"
    },
    // Dua Lipa (even more songs)
    {
        id: 86,
        name: "One Kiss",
        artist: "Dua Lipa",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        album: "Dua Lipa",
        duration: "3:34",
        durationSec: 214,
        category: "english"
    },
    {
        id: 87,
        name: "Physical",
        artist: "Dua Lipa",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
        album: "Future Nostalgia",
        duration: "3:13",
        durationSec: 193,
        category: "english"
    },
    // Coldplay (even more songs)
    {
        id: 88,
        name: "Fix You",
        artist: "Coldplay",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        album: "X&Y",
        duration: "4:55",
        durationSec: 295,
        category: "english"
    },
    {
        id: 89,
        name: "Something Just Like This",
        artist: "Coldplay",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Memories...Do Not Open",
        duration: "4:07",
        durationSec: 247,
        category: "english"
    },
    // Arijit Singh (even more songs)
    {
        id: 90,
        name: "Tum Kya Mile",
        artist: "Arijit Singh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=400&fit=crop",
        album: "Rocky Aur Rani Kii Prem Kahaani",
        duration: "4:37",
        durationSec: 277,
        category: "hindi"
    },
    {
        id: 91,
        name: "Zaalima",
        artist: "Arijit Singh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Raees",
        duration: "4:59",
        durationSec: 299,
        category: "hindi"
    },
    {
        id: 92,
        name: "Hawayein",
        artist: "Arijit Singh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        album: "Jab Harry Met Sejal",
        duration: "4:50",
        durationSec: 290,
        category: "hindi"
    },
    // Sonu Nigam (even more songs)
    {
        id: 93,
        name: "Main Agar Kahoon",
        artist: "Sonu Nigam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        album: "Om Shanti Om",
        duration: "5:10",
        durationSec: 310,
        category: "hindi"
    },
    {
        id: 94,
        name: "Mere Haath Mein",
        artist: "Sonu Nigam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
        album: "Fanaa",
        duration: "4:48",
        durationSec: 288,
        category: "hindi"
    },
    // Atif Aslam (even more songs)
    {
        id: 95,
        name: "Pehli Nazar Mein",
        artist: "Atif Aslam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=400&h=400&fit=crop",
        album: "Race",
        duration: "5:13",
        durationSec: 313,
        category: "hindi"
    },
    {
        id: 96,
        name: "Tu Jaane Na",
        artist: "Atif Aslam",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop",
        album: "Ajab Prem Ki Ghazab Kahani",
        duration: "5:37",
        durationSec: 337,
        category: "hindi"
    },
    // Neha Kakkar (even more songs)
    {
        id: 97,
        name: "Aankh Marey",
        artist: "Neha Kakkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
        album: "Simmba",
        duration: "3:20",
        durationSec: 200,
        category: "hindi"
    },
    {
        id: 98,
        name: "O Saki Saki",
        artist: "Neha Kakkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
        album: "Batla House",
        duration: "3:10",
        durationSec: 190,
        category: "hindi"
    },
    // Jubin Nautiyal (even more songs)
    {
        id: 99,
        name: "Lut Gaye",
        artist: "Jubin Nautiyal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
        album: "Lut Gaye (Single)",
        duration: "3:48",
        durationSec: 228,
        category: "hindi"
    },
    {
        id: 100,
        name: "Taaron Ke Shehar",
        artist: "Jubin Nautiyal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Taaron Ke Shehar",
        duration: "3:58",
        durationSec: 238,
        category: "hindi"
    },
    // Shreya Ghoshal (even more songs)
    {
        id: 101,
        name: "Ghoomar",
        artist: "Shreya Ghoshal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=400&fit=crop",
        album: "Padmaavat",
        duration: "4:40",
        durationSec: 280,
        category: "hindi"
    },
    {
        id: 102,
        name: "Barso Re",
        artist: "Shreya Ghoshal",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Guru",
        duration: "5:29",
        durationSec: 329,
        category: "hindi"
    },
    // Kishore Kumar (even more songs)
    {
        id: 103,
        name: "Mere Samne Wali Khidki",
        artist: "Kishore Kumar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop",
        album: "Padosan",
        duration: "2:50",
        durationSec: 170,
        category: "hindi"
    },
    {
        id: 104,
        name: "Pal Pal Dil Ke Paas",
        artist: "Kishore Kumar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "Blackmail",
        duration: "5:12",
        durationSec: 312,
        category: "hindi"
    },
    // Lata Mangeshkar (even more songs)
    {
        id: 105,
        name: "Ajeeb Dastan Hai Yeh",
        artist: "Lata Mangeshkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        album: "Dil Apna Aur Preet Parai",
        duration: "5:16",
        durationSec: 316,
        category: "hindi"
    },
    {
        id: 106,
        name: "Pyar Kiya To Darna Kya",
        artist: "Lata Mangeshkar",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=400&fit=crop",
        album: "Mughal-e-Azam",
        duration: "6:21",
        durationSec: 381,
        category: "hindi"
    },
    // KK (even more songs)
    {
        id: 107,
        name: "Tu Hi Meri Shab Hai",
        artist: "KK",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=400&fit=crop",
        album: "Gangster",
        duration: "6:28",
        durationSec: 388,
        category: "hindi"
    },
    {
        id: 108,
        name: "Alvida",
        artist: "KK",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
        album: "Life in a... Metro",
        duration: "5:40",
        durationSec: 340,
        category: "hindi"
    },
    // Sunidhi Chauhan (even more songs)
    {
        id: 109,
        name: "Beedi",
        artist: "Sunidhi Chauhan",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
        album: "Omkara",
        duration: "5:03",
        durationSec: 303,
        category: "hindi"
    },
    {
        id: 110,
        name: "Dhoom Machale",
        artist: "Sunidhi Chauhan",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
        album: "Dhoom",
        duration: "6:17",
        durationSec: 377,
        category: "hindi"
    },
    // Mohit Chauhan (even more songs)
    {
        id: 111,
        name: "Pee Loon",
        artist: "Mohit Chauhan",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        album: "Once Upon a Time in Mumbaai",
        duration: "4:47",
        durationSec: 287,
        category: "hindi"
    },
    {
        id: 112,
        name: "Matargashti",
        artist: "Mohit Chauhan",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        album: "Tamasha",
        duration: "5:28",
        durationSec: 328,
        category: "hindi"
    },
    // Armaan Malik (even more songs)
    {
        id: 113,
        name: "Wajah Tum Ho",
        artist: "Armaan Malik",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        album: "Hate Story 3",
        duration: "5:57",
        durationSec: 357,
        category: "hindi"
    },
    {
        id: 114,
        name: "Sab Tera",
        artist: "Armaan Malik",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
        album: "Baaghi",
        duration: "3:48",
        durationSec: 228,
        category: "hindi"
    },
    // Diljit Dosanjh (even more songs)
    {
        id: 115,
        name: "Lemonade",
        artist: "Diljit Dosanjh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
        album: "Ghost",
        duration: "3:02",
        durationSec: 182,
        category: "hindi"
    },
    {
        id: 116,
        name: "G.O.A.T.",
        artist: "Diljit Dosanjh",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        album: "G.O.A.T. (Album)",
        duration: "3:43",
        durationSec: 223,
        category: "hindi"
    }
];

const artistProfiles = {
    "Harry Styles": {
        name: "Harry Styles",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        listeners: "67,452,192 monthly listeners",
        bio: "Harry Styles is an English singer-songwriter. His career began in 2010 as part of the boy band One Direction."
    },
    "Justin Bieber": {
        name: "Justin Bieber",
        img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=400&fit=crop",
        listeners: "78,123,092 monthly listeners",
        bio: "Justin Bieber is a Canadian singer-songwriter, widely recognized for his global genre-defining pop albums."
    },
    "Ed Sheeran": {
        name: "Ed Sheeran",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        listeners: "81,452,901 monthly listeners",
        bio: "Ed Sheeran is an English singer-songwriter, one of the best-selling artists globally with records like 'Shape of You'."
    },
    "Taylor Swift": {
        name: "Taylor Swift",
        img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&h=400&fit=crop",
        listeners: "101,230,490 monthly listeners",
        bio: "Taylor Swift is an American singer-songwriter. A subject of widespread public interest, she is a prominent cultural figure of the 21st century."
    },
    "Arijit Singh": {
        name: "Arijit Singh",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        listeners: "45,392,110 monthly listeners",
        bio: "Arijit Singh is a globally renowned Indian singer and composer. He has won numerous accolades including National and Filmfare Awards."
    },
    "Sonu Nigam": {
        name: "Sonu Nigam",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        listeners: "15,892,104 monthly listeners",
        bio: "Sonu Nigam is a highly celebrated Indian playback singer, famous for his versatile songs in Hindi and other regional languages."
    },
    "Atif Aslam": {
        name: "Atif Aslam",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        listeners: "24,892,102 monthly listeners",
        bio: "Atif Aslam is a Pakistani playback singer, famous in Pakistan and Bollywood for his distinct vocal belt and romantic ballads."
    },
    "Neha Kakkar": {
        name: "Neha Kakkar",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        listeners: "21,492,023 monthly listeners",
        bio: "Neha Kakkar is an Indian playback singer, widely known for her pop hits and high-energy dance tracks in Bollywood."
    },
    "Jubin Nautiyal": {
        name: "Jubin Nautiyal",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        listeners: "12,854,392 monthly listeners",
        bio: "Jubin Nautiyal is an Indian playback singer and music director. He is known for his soulful romantic ballads."
    },
    "Shreya Ghoshal": {
        name: "Shreya Ghoshal",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        listeners: "31,452,900 monthly listeners",
        bio: "Shreya Ghoshal is one of India's most celebrated playback singers, winning multiple National Film Awards."
    },
    "Adele": {
        name: "Adele",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        listeners: "58,452,091 monthly listeners",
        bio: "Adele is an English singer-songwriter. She is known for her powerful vocals and songwriting centered on heartbreak and nostalgia."
    },
    "Billie Eilish": {
        name: "Billie Eilish",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
        listeners: "62,892,104 monthly listeners",
        bio: "Billie Eilish is an American singer-songwriter. She first gained public attention in 2015 with her debut single 'Ocean Eyes'."
    },
    "The Weeknd": {
        name: "The Weeknd",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        listeners: "114,892,100 monthly listeners",
        bio: "Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer-songwriter and record producer known for his sonic versatility."
    },
    "Bruno Mars": {
        name: "Bruno Mars",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        listeners: "69,450,210 monthly listeners",
        bio: "Bruno Mars is an American singer-songwriter and dancer. He is famous for his stage performances, retro showmanship, and wide range of musical styles."
    },
    "Dua Lipa": {
        name: "Dua Lipa",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        listeners: "74,120,490 monthly listeners",
        bio: "Dua Lipa is an English and Albanian singer-songwriter. Her signature disco-pop sound has earned her critical acclaim and commercial success."
    },
    "Coldplay": {
        name: "Coldplay",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        listeners: "79,802,104 monthly listeners",
        bio: "Coldplay is a British rock band formed in London in 1997. They are known for their spectacular live shows and anthemic melodies."
    },
    "Kishore Kumar": {
        name: "Kishore Kumar",
        img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop",
        listeners: "18,492,023 monthly listeners",
        bio: "Kishore Kumar was an Indian playback singer, musician, and actor. He is widely regarded as one of the greatest and most influential singers in Indian music history."
    },
    "Lata Mangeshkar": {
        name: "Lata Mangeshkar",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        listeners: "22,892,104 monthly listeners",
        bio: "Lata Mangeshkar was an Indian playback singer and music director. She is widely considered to have been one of the greatest and most influential singers in India."
    },
    "KK": {
        name: "KK",
        img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=400&fit=crop",
        listeners: "14,892,110 monthly listeners",
        bio: "Krishnakumar Kunnath, known professionally as KK, was a prominent Indian playback singer who recorded songs in multiple languages."
    },
    "Sunidhi Chauhan": {
        name: "Sunidhi Chauhan",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
        listeners: "16,492,023 monthly listeners",
        bio: "Sunidhi Chauhan is a versatile Indian playback singer, famous for her powerful and expressive vocals in Hindi cinema dance anthems."
    },
    "Mohit Chauhan": {
        name: "Mohit Chauhan",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        listeners: "15,123,092 monthly listeners",
        bio: "Mohit Chauhan is an Indian playback singer, most known for his romantic songs in Bollywood, especially in the film Rockstar."
    },
    "Armaan Malik": {
        name: "Armaan Malik",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        listeners: "19,892,104 monthly listeners",
        bio: "Armaan Malik is an Indian singer, songwriter, record producer, and actor. He is known for his singing in multiple languages."
    },
    "Diljit Dosanjh": {
        name: "Diljit Dosanjh",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
        listeners: "20,492,023 monthly listeners",
        bio: "Diljit Dosanjh is an Indian singer, actor, film producer, and television presenter, prominent in Punjabi and Hindi cinema."
    },
    "Madza": {
        name: "Madza",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
        listeners: "1,450,230 monthly listeners",
        bio: "Madza is an electronic music producer known for chill house, electropop hits, and midnight driving tracks."
    },
    "SoundHelix": {
        name: "SoundHelix",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        listeners: "3,892,104 monthly listeners",
        bio: "SoundHelix is a project dedicated to producing high quality ambient, relaxing, and chill instrumental soundtracks."
    },
    "Anupam Roy": {
        name: "Anupam Roy",
        img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
        listeners: "4,120,490 monthly listeners",
        bio: "Anupam Roy is an Indian singer-songwriter and music director from Kolkata. He is known for his contribution to Bengali contemporary and Hindi cinema music."
    },
    "Ajay-Atul": {
        name: "Ajay-Atul",
        img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop",
        listeners: "9,780,210 monthly listeners",
        bio: "Ajay and Atul Gogavale are a renowned music composer duo from Pune, famous for their high-energy Marathi folk compositions."
    },
    "Luis Fonsi": {
        name: "Luis Fonsi",
        img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=400&fit=crop",
        listeners: "22,892,120 monthly listeners",
        bio: "Luis Fonsi is a Puerto Rican singer, songwriter, and actor, famous for global hits like 'Despacito'."
    },
    "BTS": {
        name: "BTS",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        listeners: "38,204,912 monthly listeners",
        bio: "BTS is a South Korean boy band formed in 2010. They are a global cultural phenomenon, topping music charts worldwide."
    },
    "Kenshi Yonezu": {
        name: "Kenshi Yonezu",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop",
        listeners: "8,920,410 monthly listeners",
        bio: "Kenshi Yonezu is a Japanese musician, singer-songwriter, record producer, and illustrator."
    },
    "Israel Kamakawiwo'ole": {
        name: "Israel Kamakawiwo'ole",
        img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=400&fit=crop",
        listeners: "5,492,023 monthly listeners",
        bio: "Israel Kamakawiwo'ole was a Hawaiian musician, singer-songwriter, globally famous for his medley of 'Over the Rainbow'."
    }
};


// App States
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = 'off'; // 'off' | 'track' | 'playlist'
let favorites = JSON.parse(localStorage.getItem('spotify_favs')) || [];
let customPlaylists = JSON.parse(localStorage.getItem('spotify_playlists')) || [];
let activePlaylistType = 'all'; // 'all' | 'favorites' | 'hindi' | 'english' or custom ID
let currentCategoryFilter = 'all'; // 'all' | 'english' | 'hindi' | 'bengali' | 'marathi' | 'spanish' | 'korean' | 'japanese'
let searchQuery = '';
let currentFilteredTracks = [...tracks];
let currentActiveView = 'home-view'; // 'home-view' | 'artists-view' | 'artist-details-view' | 'playlist-details-view'
let selectedArtist = null;
let selectedPlaylist = null;

// DOM Elements
const audioPlayer = document.getElementById('main-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressBar = document.getElementById('myProgressBar');
const progressBarFill = document.getElementById('slider-progress-fill');
const currentTimeLabel = document.getElementById('current-time');
const durationTimeLabel = document.getElementById('duration-time');

// Left track details
const nowPlayingCover = document.getElementById('now-playing-cover');
const nowPlayingTitle = document.getElementById('now-playing-title');
const nowPlayingArtist = document.getElementById('now-playing-artist');
const playerFavoriteBtn = document.getElementById('player-favorite-btn');
const sidebarAlbumArt = document.getElementById('sidebar-album-art');

// Volume Controls
const volumeIcon = document.getElementById('volume-icon');
const volumeSlider = document.getElementById('volume-slider');
const volumeProgressFill = document.getElementById('volume-progress-fill');
let lastVolumeValue = 80;

// Search and filters
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const filterPills = document.querySelectorAll('.filter-pill');
const playlistItems = document.querySelectorAll('.playlist-item');
const tracksTableBody = document.getElementById('tracks-table-body');
const allTracksCount = document.getElementById('all-tracks-count');
const likedTracksCount = document.getElementById('liked-tracks-count');

// Hero banner controls
const heroPlayBtn = document.getElementById('hero-play-btn');
const heroLikeBtn = document.getElementById('hero-like-btn');
const heroSongTitle = document.getElementById('hero-song-title');
const heroPlayCount = document.getElementById('hero-play-count');

// Visualizer overlay
const visualizerBtn = document.getElementById('visualizer-btn');
const visualizerOverlay = document.getElementById('visualizer-overlay');
const closeVisualizerBtn = document.getElementById('close-visualizer-btn');
const visualizerCanvas = document.getElementById('visualizer-canvas');
const vizSongTitle = document.getElementById('viz-song-title');
const vizSongArtist = document.getElementById('viz-song-artist');

// Navigation DOM Elements
const navHome = document.getElementById('nav-home');
const navSearch = document.getElementById('nav-search-sidebar');
const navArtists = document.getElementById('nav-artists-sidebar');
const navFavorites = document.getElementById('nav-favorites');
const viewAllArtistsBtn = document.getElementById('view-all-artists-btn');
const homeArtistsShelf = document.getElementById('home-artists-shelf');
const artistsDirectoryGrid = document.getElementById('artists-directory-grid');

// Custom Playlists DOM Elements
const createPlaylistBtn = document.getElementById('create-playlist-btn');
const createPlaylistModal = document.getElementById('create-playlist-modal');
const cancelPlaylistBtn = document.getElementById('cancel-playlist-btn');
const confirmPlaylistBtn = document.getElementById('confirm-playlist-btn');
const newPlaylistNameInput = document.getElementById('new-playlist-name-input');
const playlistsContainer = document.getElementById('playlists-container');

// User Authentication DOM Elements
const userProfileBtn = document.getElementById('user-profile-btn');
const profileDropdownMenu = document.getElementById('profile-dropdown-menu');
const profileDisplayName = document.getElementById('profile-display-name');
const profileAvatarImg = document.getElementById('profile-avatar-img');
const profileAvatarInitials = document.getElementById('profile-avatar-initials');
const optAuth = document.getElementById('opt-auth');
const loginModal = document.getElementById('login-modal');
const cancelLoginBtn = document.getElementById('cancel-login-btn');
const confirmLoginBtn = document.getElementById('confirm-login-btn');
const loginUsernameInput = document.getElementById('login-username-input');
const loginPasswordInput = document.getElementById('login-password-input');

// Set initial counts
allTracksCount.textContent = `${tracks.length} Songs`;
likedTracksCount.textContent = `${favorites.length} Songs`;

/* Core Playback Functions */

// Load track metadata into UI
function loadTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.src;
    
    // Update player labels
    nowPlayingCover.src = track.img;
    nowPlayingTitle.textContent = track.name;
    nowPlayingArtist.textContent = track.artist;
    sidebarAlbumArt.src = track.img;
    
    // Update active highlight in table
    updateTableActiveHighlight();
    
    // Reset progress slider
    resetProgressBar();

    // Check favorite status
    if (favorites.includes(track.id)) {
        playerFavoriteBtn.classList.add('liked');
        playerFavoriteBtn.innerHTML = '<i class="fa-solid fa-heart text-green"></i>';
    } else {
        playerFavoriteBtn.classList.remove('liked');
        playerFavoriteBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
}

function resetProgressBar() {
    progressBar.value = 0;
    progressBarFill.style.width = '0%';
    currentTimeLabel.textContent = "0:00";
    durationTimeLabel.textContent = tracks[currentTrackIndex].duration;
}

// Play Audio
function playTrack() {
    isPlaying = true;
    audioPlayer.play().then(() => {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playPauseBtn.title = "Pause";
        sidebarAlbumArt.classList.add('playing');
        updateTableActiveHighlight();
        // Update hero play button text if current is the hero song
        updateHeroPlayBtnText();
    }).catch(error => {
        console.log("Playback interrupted or blocked by browser:", error);
    });
}

// Pause Audio
function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    playPauseBtn.title = "Play";
    sidebarAlbumArt.classList.remove('playing');
    updateTableActiveHighlight();
    updateHeroPlayBtnText();
}

function togglePlay() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

// Skip forward
function nextTrack() {
    if (isShuffle) {
        let randIndex;
        do {
            randIndex = Math.floor(Math.random() * currentFilteredTracks.length);
        } while (currentFilteredTracks.length > 1 && randIndex === currentTrackIndex);
        currentTrackIndex = tracks.findIndex(t => t.id === currentFilteredTracks[randIndex].id);
    } else {
        // Find position in filtered playlist
        const currentFilteredPos = currentFilteredTracks.findIndex(t => t.id === tracks[currentTrackIndex].id);
        if (currentFilteredPos === -1 || currentFilteredPos === currentFilteredTracks.length - 1) {
            // Circle back to first track in current playlist
            currentTrackIndex = tracks.findIndex(t => t.id === currentFilteredTracks[0].id);
        } else {
            currentTrackIndex = tracks.findIndex(t => t.id === currentFilteredTracks[currentFilteredPos + 1].id);
        }
    }
    loadTrack(currentTrackIndex);
    playTrack();
}

// Skip backward
function prevTrack() {
    const currentFilteredPos = currentFilteredTracks.findIndex(t => t.id === tracks[currentTrackIndex].id);
    if (currentFilteredPos === -1 || currentFilteredPos === 0) {
        // Circle back to last track in current playlist
        currentTrackIndex = tracks.findIndex(t => t.id === currentFilteredTracks[currentFilteredTracks.length - 1].id);
    } else {
        currentTrackIndex = tracks.findIndex(t => t.id === currentFilteredTracks[currentFilteredPos - 1].id);
    }
    loadTrack(currentTrackIndex);
    playTrack();
}

// Progress slider updates
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = percent;
        progressBarFill.style.width = `${percent}%`;
        currentTimeLabel.textContent = formatTime(audioPlayer.currentTime);
    }
});

audioPlayer.addEventListener('loadedmetadata', () => {
    durationTimeLabel.textContent = formatTime(audioPlayer.duration);
});

// Update timeline on user drag/click
progressBar.addEventListener('input', () => {
    const time = (progressBar.value / 100) * audioPlayer.duration;
    currentTimeLabel.textContent = formatTime(time);
    progressBarFill.style.width = `${progressBar.value}%`;
});

progressBar.addEventListener('change', () => {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Format Seconds into M:SS
function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// Playback finished auto behavior
audioPlayer.addEventListener('ended', () => {
    if (isRepeat === 'track') {
        audioPlayer.currentTime = 0;
        playTrack();
    } else {
        nextTrack();
    }
});

/* Controls Event Listeners */
playPauseBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

// Shuffle mode toggle
shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
});

// Repeat mode toggle
repeatBtn.addEventListener('click', () => {
    if (isRepeat === 'off') {
        isRepeat = 'playlist';
        repeatBtn.classList.add('active');
        repeatBtn.title = "Repeat Playlist";
        repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
    } else if (isRepeat === 'playlist') {
        isRepeat = 'track';
        repeatBtn.classList.add('active');
        repeatBtn.title = "Repeat One Track";
        repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i><span style="font-size: 8px; position: absolute; bottom: 2px;">1</span>';
    } else {
        isRepeat = 'off';
        repeatBtn.classList.remove('active');
        repeatBtn.title = "Enable Repeat (Off)";
        repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
    }
});

/* Volume controls */
volumeSlider.addEventListener('input', () => {
    const val = volumeSlider.value;
    audioPlayer.volume = val / 100;
    volumeProgressFill.style.width = `${val}%`;
    updateVolumeIcon(val);
    if (val > 0) lastVolumeValue = val;
});

function updateVolumeIcon(val) {
    if (val == 0) {
        volumeIcon.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        volumeIcon.title = "Unmute Volume";
    } else if (val < 40) {
        volumeIcon.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
        volumeIcon.title = "Mute Volume";
    } else {
        volumeIcon.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        volumeIcon.title = "Mute Volume";
    }
}

volumeIcon.addEventListener('click', () => {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        volumeSlider.value = 0;
        volumeProgressFill.style.width = '0%';
        updateVolumeIcon(0);
    } else {
        audioPlayer.volume = lastVolumeValue / 100;
        volumeSlider.value = lastVolumeValue;
        volumeProgressFill.style.width = `${lastVolumeValue}%`;
        updateVolumeIcon(lastVolumeValue);
    }
});

/* Playlist Filtering and Sidebar UI Logic */

function filterTracks() {
    currentFilteredTracks = tracks.filter(track => {
        // 1. Sidebar playlist type filter (hindi, english, favorites, all)
        if (activePlaylistType === 'favorites') {
            if (!favorites.includes(track.id)) return false;
        } else if (activePlaylistType === 'hindi') {
            if (track.category !== 'hindi') return false;
        } else if (activePlaylistType === 'english') {
            if (track.category !== 'english') return false;
        }

        // 2. Category / Language pill filters
        if (currentCategoryFilter !== 'all') {
            if (track.category !== currentCategoryFilter) return false;
        }

        // 3. Search input query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const titleMatch = track.name.toLowerCase().includes(query);
            const artistMatch = track.artist.toLowerCase().includes(query);
            const albumMatch = track.album.toLowerCase().includes(query);
            return titleMatch || artistMatch || albumMatch;
        }

        return true;
    });

    renderTracksTable();
}

function renderTracksTable() {
    renderTracksList(tracksTableBody, currentFilteredTracks);
}

// Unified track list rendering
function renderTracksList(tbody, list, options = {}) {
    tbody.innerHTML = '';
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 48px; color: var(--color-text-muted);">No songs found. Try altering filters or adding some!</td></tr>`;
        return;
    }

    list.forEach((track, index) => {
        const isCurrentPlaying = (tracks[currentTrackIndex].id === track.id);
        const activeClass = isCurrentPlaying ? 'active-song' : '';
        const likeIcon = favorites.includes(track.id) ? 'fa-solid fa-heart liked' : 'fa-regular fa-heart';
        
        const row = document.createElement('tr');
        row.className = activeClass;
        row.dataset.trackId = track.id;
        row.setAttribute('draggable', 'true');
        
        row.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', track.id);
            e.dataTransfer.effectAllowed = 'copyMove';
            row.style.opacity = '0.5';
        });
        
        row.addEventListener('dragend', () => {
            row.style.opacity = '1';
        });
        
        let actionButtonsHTML = '';
        if (options.showRemoveButton) {
            actionButtonsHTML = `
                <button class="remove-from-playlist-btn" data-track-id="${track.id}" title="Remove from Playlist">
                    <i class="fa-solid fa-circle-minus"></i>
                </button>
            `;
        } else {
            actionButtonsHTML = `
                <button class="add-to-playlist-row-btn" data-track-id="${track.id}" title="Add to Playlist">
                    <i class="fa-solid fa-plus"></i>
                </button>
            `;
        }
        
        row.innerHTML = `
            <td class="col-num">
                <div class="col-num-box">
                    <span class="col-num-text">${index + 1}</span>
                    <button class="row-play-btn"><i class="fa-solid fa-play"></i></button>
                    <div class="active-audio-icon">
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
            </td>
            <td class="col-title">
                <div class="song-title-cell">
                    <img src="${track.img}" alt="Cover" class="song-img">
                    <div class="song-info-meta">
                        <span class="song-title-name">${track.name}</span>
                        <span class="song-artist-name" style="cursor: pointer; font-size: 12px; margin-top: 2px;">${track.artist}</span>
                    </div>
                </div>
            </td>
            <td class="col-album">${track.album}</td>
            <td class="col-date">Jun 14, 2026</td>
            <td class="col-action">
                <div class="action-cell">
                    ${actionButtonsHTML}
                    <button class="heart-btn ${favorites.includes(track.id) ? 'liked' : ''}" data-track-id="${track.id}">
                        <i class="${likeIcon}"></i>
                    </button>
                    <span class="track-duration">${track.duration}</span>
                </div>
            </td>
        `;

        // Row play clicks (exclude action buttons and artist name clicks)
        row.addEventListener('click', (e) => {
            if (e.target.closest('.heart-btn') || e.target.closest('.add-to-playlist-row-btn') || e.target.closest('.remove-from-playlist-btn')) return;
            
            if (e.target.closest('.song-artist-name')) {
                showArtistDetails(track.artist);
                return;
            }
            
            currentFilteredTracks = list;
            const targetTrackIdx = tracks.findIndex(t => t.id === track.id);
            if (currentTrackIndex === targetTrackIdx) {
                togglePlay();
            } else {
                currentTrackIndex = targetTrackIdx;
                loadTrack(currentTrackIndex);
                playTrack();
            }
        });

        // Favorite Toggle click
        const heartBtn = row.querySelector('.heart-btn');
        heartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(track.id);
            if (options.onFavoriteToggle) options.onFavoriteToggle();
        });

        // Add to playlist dropdown click
        const addBtn = row.querySelector('.add-to-playlist-row-btn');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showAddToPlaylistMenu(e, track.id);
            });
        }

        // Remove from playlist click
        const removeBtn = row.querySelector('.remove-from-playlist-btn');
        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeFromPlaylist(options.customPlaylistId, track.id);
            });
        }

        tbody.appendChild(row);
    });
}

function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx === -1) {
        favorites.push(id);
    } else {
        favorites.splice(idx, 1);
    }
    localStorage.setItem('spotify_favs', JSON.stringify(favorites));
    likedTracksCount.textContent = `${favorites.length} Songs`;
    
    // Refresh views to keep favorite buttons in sync
    if (currentActiveView === 'home-view') {
        filterTracks();
    } else if (currentActiveView === 'artist-details-view') {
        showArtistDetails(selectedArtist);
    } else if (currentActiveView === 'playlist-details-view') {
        if (selectedPlaylist) {
            showPlaylistDetails(selectedPlaylist.name, selectedPlaylist.trackIds, true, selectedPlaylist.id);
        } else {
            showPlaylistDetails("Liked Songs", favorites, false);
        }
    }
    
    // Update player button if currently playing
    if (tracks[currentTrackIndex].id === id) {
        const isFav = favorites.includes(id);
        playerFavoriteBtn.classList.toggle('liked', isFav);
        playerFavoriteBtn.innerHTML = isFav ? '<i class="fa-solid fa-heart text-green"></i>' : '<i class="fa-regular fa-heart"></i>';
        
        // Update hero like button if active
        if (id === 1) {
            heroLikeBtn.innerHTML = isFav ? '<i class="fa-solid fa-heart text-green"></i> LIKED' : '<i class="fa-regular fa-heart"></i> LIKE';
        }
    }
}

function updateTableActiveHighlight() {
    const activeId = tracks[currentTrackIndex].id;
    
    // Update highlights in all visible table structures
    const tables = document.querySelectorAll('.songs-table tbody');
    tables.forEach(tbody => {
        const rows = tbody.querySelectorAll('tr');
        rows.forEach(row => {
            const id = parseInt(row.dataset.trackId);
            const isCurrent = (activeId === id);
            
            row.classList.toggle('active-song', isCurrent);
            const activeWave = row.querySelector('.active-audio-icon');
            const numText = row.querySelector('.col-num-text');
            
            if (activeWave && numText) {
                if (isCurrent && isPlaying) {
                    activeWave.style.display = 'inline-block';
                    numText.style.display = 'none';
                } else {
                    activeWave.style.display = 'none';
                    numText.style.display = 'inline-block';
                }
            }
        });
    });
}

/* Page Views Router Navigation */

function showView(viewId) {
    currentActiveView = viewId;
    
    // Hide all views
    document.querySelectorAll('.view-panel').forEach(v => v.classList.add('hidden'));
    
    // Show view
    const target = document.getElementById(viewId);
    if (target) target.classList.remove('hidden');
    
    // Reset highlights
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
    
    if (viewId === 'home-view') {
        navHome.classList.add('active');
        const allItem = document.querySelector('.playlist-item[data-playlist="all"]');
        if (allItem) allItem.classList.add('active');
        filterTracks();
    } else if (viewId === 'artists-view') {
        navArtists.classList.add('active');
        renderArtistsGrid();
    } else if (viewId === 'search-view') {
        navSearch.classList.add('active');
        renderSearchView();
    }
}

function showArtistDetails(artistName) {
    currentActiveView = 'artist-details-view';
    selectedArtist = artistName;
    
    // Show artist view panel
    document.querySelectorAll('.view-panel').forEach(v => v.classList.add('hidden'));
    document.getElementById('artist-details-view').classList.remove('hidden');
    
    // Clear highlights
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
    
    const profile = artistProfiles[artistName];
    if (!profile) return;
    
    // Populate header details
    document.getElementById('artist-profile-name').textContent = profile.name;
    document.getElementById('artist-profile-listeners').textContent = profile.listeners;
    document.getElementById('artist-profile-bio').textContent = profile.bio;
    
    const banner = document.getElementById('artist-profile-banner');
    banner.style.backgroundImage = `url('${profile.img}')`;
    
    // Get popular tracks for this artist
    const artistTracks = tracks.filter(t => t.artist.toLowerCase() === artistName.toLowerCase());
    
    const tbody = document.getElementById('artist-tracks-table-body');
    renderTracksList(tbody, artistTracks);
    
    // Play all button handler
    const playAllBtn = document.getElementById('artist-play-all-btn');
    playAllBtn.onclick = () => {
        if (artistTracks.length > 0) {
            currentFilteredTracks = artistTracks;
            currentTrackIndex = tracks.findIndex(t => t.id === artistTracks[0].id);
            loadTrack(currentTrackIndex);
            playTrack();
        }
    };
    
    updateTableActiveHighlight();
}

function showPlaylistDetails(name, trackIds, isCustom = false, playlistId = null) {
    currentActiveView = 'playlist-details-view';
    if (isCustom) {
        selectedPlaylist = customPlaylists.find(p => p.id === playlistId);
    } else {
        selectedPlaylist = null;
    }
    
    // Show playlist view panel
    document.querySelectorAll('.view-panel').forEach(v => v.classList.add('hidden'));
    document.getElementById('playlist-details-view').classList.remove('hidden');
    
    // Clear highlights
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
    
    if (name === "Liked Songs") {
        navFavorites.classList.add('active');
        const favItem = document.querySelector('.playlist-item[data-playlist="favorites"]');
        if (favItem) favItem.classList.add('active');
    } else if (!isCustom) {
        const item = document.querySelector(`.playlist-item[data-playlist="${playlistId || name.toLowerCase()}"]`);
        if (item) item.classList.add('active');
    } else {
        const item = document.querySelector(`.playlist-item[data-custom-playlist-id="${playlistId}"]`);
        if (item) item.classList.add('active');
    }
    
    // Populate details
    document.getElementById('playlist-details-name').textContent = name;
    
    const count = trackIds.length;
    document.getElementById('playlist-details-meta').textContent = `${count} Song${count !== 1 ? 's' : ''} • Created by ${isCustom ? 'Dev Guest' : 'Spotify'}`;
    
    const banner = document.getElementById('playlist-details-banner');
    if (name === "Liked Songs") {
        banner.style.backgroundImage = 'none';
        banner.style.backgroundColor = '#450af5';
    } else if (playlistId === 'hindi') {
        banner.style.backgroundImage = 'none';
        banner.style.backgroundColor = '#11998e';
    } else if (playlistId === 'english') {
        banner.style.backgroundImage = 'none';
        banner.style.backgroundColor = '#f857a6';
    } else {
        banner.style.backgroundImage = 'none';
        banner.style.backgroundColor = '#282828';
    }
    
    const playlistTracks = tracks.filter(t => trackIds.includes(t.id));
    
    const tbody = document.getElementById('playlist-tracks-table-body');
    renderTracksList(tbody, playlistTracks, {
        showRemoveButton: isCustom,
        customPlaylistId: playlistId
    });
    
    if (isCustom) {
        initPlaylistReordering(tbody, playlistId);
    }
    
    // Play all button handler
    const playAllBtn = document.getElementById('playlist-play-all-btn');
    playAllBtn.onclick = () => {
        if (playlistTracks.length > 0) {
            currentFilteredTracks = playlistTracks;
            currentTrackIndex = tracks.findIndex(t => t.id === playlistTracks[0].id);
            loadTrack(currentTrackIndex);
            playTrack();
        }
    };
    
    updateTableActiveHighlight();
}

function renderArtistsGrid() {
    artistsDirectoryGrid.innerHTML = '';
    
    Object.keys(artistProfiles).forEach(name => {
        const profile = artistProfiles[name];
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.innerHTML = `
            <div class="artist-card-img-box">
                <img src="${profile.img}" alt="${profile.name}" class="artist-card-img">
            </div>
            <span class="artist-card-name">${profile.name}</span>
            <span class="artist-card-role">Artist</span>
        `;
        card.addEventListener('click', () => {
            showArtistDetails(name);
        });
        artistsDirectoryGrid.appendChild(card);
    });
}

function renderHomeArtistsShelf() {
    homeArtistsShelf.innerHTML = '';
    
    // Take first 6 artists
    const artistNames = Object.keys(artistProfiles).slice(0, 6);
    artistNames.forEach(name => {
        const profile = artistProfiles[name];
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.innerHTML = `
            <div class="artist-card-img-box">
                <img src="${profile.img}" alt="${profile.name}" class="artist-card-img">
            </div>
            <span class="artist-card-name">${profile.name}</span>
            <span class="artist-card-role">Artist</span>
        `;
        card.addEventListener('click', () => {
            showArtistDetails(name);
        });
        homeArtistsShelf.appendChild(card);
    });
}

/* Custom Playlists Manager Logic */

function openCreatePlaylistModal() {
    createPlaylistModal.classList.remove('hidden');
    newPlaylistNameInput.value = '';
    newPlaylistNameInput.focus();
}

function closeCreatePlaylistModal() {
    createPlaylistModal.classList.add('hidden');
}

function handleCreatePlaylist() {
    const name = newPlaylistNameInput.value.trim();
    if (name === '') return;
    
    const newPlaylist = {
        id: Date.now(),
        name: name,
        trackIds: []
    };
    
    customPlaylists.push(newPlaylist);
    localStorage.setItem('spotify_playlists', JSON.stringify(customPlaylists));
    closeCreatePlaylistModal();
    renderSidebarPlaylists();
}

function deletePlaylist(id) {
    customPlaylists = customPlaylists.filter(p => p.id !== id);
    localStorage.setItem('spotify_playlists', JSON.stringify(customPlaylists));
    renderSidebarPlaylists();
    
    if (currentActiveView === 'playlist-details-view' && selectedPlaylist && selectedPlaylist.id === id) {
        showView('home-view');
    }
}

function addToPlaylist(playlistId, trackId) {
    const playlist = customPlaylists.find(p => p.id === playlistId);
    if (playlist) {
        if (!playlist.trackIds.includes(trackId)) {
            playlist.trackIds.push(trackId);
            localStorage.setItem('spotify_playlists', JSON.stringify(customPlaylists));
            renderSidebarPlaylists();
        }
    }
}

function removeFromPlaylist(playlistId, trackId) {
    const playlist = customPlaylists.find(p => p.id === playlistId);
    if (playlist) {
        playlist.trackIds = playlist.trackIds.filter(id => id !== trackId);
        localStorage.setItem('spotify_playlists', JSON.stringify(customPlaylists));
        renderSidebarPlaylists();
        
        if (currentActiveView === 'playlist-details-view' && selectedPlaylist && selectedPlaylist.id === playlistId) {
            showPlaylistDetails(playlist.name, playlist.trackIds, true, playlistId);
        }
    }
}

function renderSidebarPlaylists() {
    // Retain first 4 static items in Sidebar, clear the rest
    const staticItems = playlistsContainer.querySelectorAll('.playlist-item[data-playlist]');
    playlistsContainer.innerHTML = '';
    
    staticItems.forEach(item => {
        playlistsContainer.appendChild(item);
    });
    
    // Add custom playlists
    customPlaylists.forEach(playlist => {
        const item = document.createElement('div');
        const isActive = (currentActiveView === 'playlist-details-view' && selectedPlaylist && selectedPlaylist.id === playlist.id);
        item.className = `playlist-item ${isActive ? 'active' : ''}`;
        item.dataset.customPlaylistId = playlist.id;
        
        item.innerHTML = `
            <div class="playlist-icon-box" style="background: linear-gradient(135deg, #1e1e24, #2a2a2a);">
                <i class="fa-solid fa-music text-green"></i>
            </div>
            <div class="playlist-details" style="flex-grow: 1;">
                <span class="playlist-name">${playlist.name}</span>
                <span class="playlist-count">${playlist.trackIds.length} Songs</span>
            </div>
            <button class="delete-playlist-btn" title="Delete Playlist">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        
        item.addEventListener('click', (e) => {
            if (e.target.closest('.delete-playlist-btn')) return;
            showPlaylistDetails(playlist.name, playlist.trackIds, true, playlist.id);
        });
        
        const deleteBtn = item.querySelector('.delete-playlist-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm(`Delete playlist "${playlist.name}"?`)) {
                deletePlaylist(playlist.id);
            }
        });
        
        playlistsContainer.appendChild(item);
    });
}

// Context Dropdown Menu for adding songs to playlists
let activeDropdownMenu = null;

function showAddToPlaylistMenu(e, trackId) {
    if (activeDropdownMenu) {
        activeDropdownMenu.remove();
    }
    
    const menu = document.createElement('div');
    menu.className = 'playlist-dropdown-menu';
    
    const rect = e.currentTarget.getBoundingClientRect();
    menu.style.top = `${rect.bottom + window.scrollY}px`;
    menu.style.left = `${rect.left + window.scrollX - 140}px`;
    
    let html = `<div class="playlist-dropdown-header">Add to Playlist</div>`;
    if (customPlaylists.length === 0) {
        html += `<div class="playlist-dropdown-item" style="color: #666; font-style: italic;">No playlists</div>`;
    } else {
        customPlaylists.forEach(p => {
            html += `
                <div class="playlist-dropdown-item" data-playlist-id="${p.id}">
                    <i class="fa-solid fa-music"></i> ${p.name}
                </div>
            `;
        });
    }
    
    html += `
        <div class="playlist-dropdown-item text-green" id="opt-dropdown-create-new" style="border-top: 1px solid #3e3e3e; margin-top: 4px;">
            <i class="fa-solid fa-plus text-green"></i> Create Playlist...
        </div>
    `;
    
    menu.innerHTML = html;
    document.body.appendChild(menu);
    activeDropdownMenu = menu;
    
    // Add event listeners
    menu.querySelectorAll('.playlist-dropdown-item').forEach(item => {
        item.addEventListener('click', (ev) => {
            ev.stopPropagation();
            const pid = item.dataset.playlistId;
            if (pid) {
                addToPlaylist(parseInt(pid), trackId);
            } else if (item.id === 'opt-dropdown-create-new') {
                openCreatePlaylistModal();
            }
            menu.remove();
            activeDropdownMenu = null;
        });
    });
    
    e.stopPropagation();
}

// Close playlist dropdown on window click
window.addEventListener('click', () => {
    if (activeDropdownMenu) {
        activeDropdownMenu.remove();
        activeDropdownMenu = null;
    }
});

/* Navigation & Sidebar Event Hooks */

navHome.addEventListener('click', () => {
    showView('home-view');
});

navArtists.addEventListener('click', () => {
    showView('artists-view');
});

viewAllArtistsBtn.addEventListener('click', () => {
    showView('artists-view');
});

navFavorites.addEventListener('click', () => {
    showPlaylistDetails("Liked Songs", favorites, false);
});

/* Sidebar Playlist Click Handlers */
playlistItems.forEach(item => {
    item.addEventListener('click', () => {
        playlistItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        activePlaylistType = item.dataset.playlist;
        
        // Clear main category language filters to avoid empty filter lists
        currentCategoryFilter = 'all';
        filterPills.forEach(p => p.classList.toggle('active', p.dataset.filter === 'all'));
        
        if (activePlaylistType === 'all') {
            showView('home-view');
        } else if (activePlaylistType === 'favorites') {
            showPlaylistDetails("Liked Songs", favorites, false);
        } else if (activePlaylistType === 'hindi') {
            const hindiTracks = tracks.filter(t => t.category === 'hindi');
            const ids = hindiTracks.map(t => t.id);
            showPlaylistDetails("Hindi Special", ids, false, 'hindi');
        } else if (activePlaylistType === 'english') {
            const englishTracks = tracks.filter(t => t.category === 'english');
            const ids = englishTracks.map(t => t.id);
            showPlaylistDetails("English Hits", ids, false, 'english');
        }
    });
});

/* Category / Language Filter Pill Click Handlers */
filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        
        currentCategoryFilter = pill.dataset.filter;
        filterTracks();
    });
});

/* Search Bar Inputs */
searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    
    // Automatically switch to Search View so search results are visible
    if (currentActiveView !== 'search-view') {
        showView('search-view');
    }
    
    renderSearchView();
});

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    if (currentActiveView === 'search-view') {
        renderSearchView();
    } else {
        filterTracks();
    }
});

/* Playlist Modals Action Binding */
createPlaylistBtn.addEventListener('click', openCreatePlaylistModal);
cancelPlaylistBtn.addEventListener('click', closeCreatePlaylistModal);
confirmPlaylistBtn.addEventListener('click', handleCreatePlaylist);

newPlaylistNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleCreatePlaylist();
    } else if (e.key === 'Escape') {
        closeCreatePlaylistModal();
    }
});

/* Player Bar Favorite Heart Click */
playerFavoriteBtn.addEventListener('click', () => {
    toggleFavorite(tracks[currentTrackIndex].id);
});

/* Hero Banner Playback Trigger */
function updateHeroPlayBtnText() {
    const isHeroPlaying = (currentTrackIndex === 0 && isPlaying);
    heroPlayBtn.innerHTML = isHeroPlaying ? '<i class="fa-solid fa-pause"></i> PAUSE' : '<i class="fa-solid fa-play"></i> PLAY';
}

heroPlayBtn.addEventListener('click', () => {
    if (currentTrackIndex === 0) {
        togglePlay();
    } else {
        currentTrackIndex = 0;
        loadTrack(currentTrackIndex);
        playTrack();
    }
});

heroLikeBtn.addEventListener('click', () => {
    toggleFavorite(1); // Meri Zindagi Tu Hai is track ID 1
    const isFav = favorites.includes(1);
    heroLikeBtn.innerHTML = isFav ? '<i class="fa-solid fa-heart text-green"></i> LIKED' : '<i class="fa-regular fa-heart"></i> LIKE';
});

// Sync hero like button state initially
if (favorites.includes(1)) {
    heroLikeBtn.innerHTML = '<i class="fa-solid fa-heart text-green"></i> LIKED';
}

/* Fullscreen Audio Visualizer */
let canvasCtx = visualizerCanvas.getContext('2d');
let animationFrameId;

// We build a robust simulation that always works safely and beautifully,
// avoiding any Web Audio API cross-origin issues with remote files.
function drawVisualizer() {
    animationFrameId = requestAnimationFrame(drawVisualizer);
    
    const width = visualizerCanvas.width = visualizerCanvas.offsetWidth;
    const height = visualizerCanvas.height = visualizerCanvas.offsetHeight;
    
    // Clear canvas with deep transparent background
    canvasCtx.fillStyle = 'rgba(6, 7, 10, 0.2)';
    canvasCtx.fillRect(0, 0, width, height);
    
    const barWidth = (width / 60) - 4;
    let barHeight;
    let x = 0;
    
    // Math model parameters for wave generation
    const songFactor = isPlaying ? 1.0 : 0.05;
    const time = Date.now() * 0.003;
    
    for (let i = 0; i < 60; i++) {
        // Combine multiple sine waves for beautiful, organic looking audio spectrum bars
        if (isPlaying) {
            const freq1 = Math.sin(i * 0.15 + time * 1.5) * 40;
            const freq2 = Math.cos(i * 0.3 - time * 2.2) * 20;
            const freq3 = Math.sin(i * 0.05 + time * 0.5) * 30;
            const bassKick = (i < 8) ? (Math.sin(time * 8) * 30 * (1 - i/8)) : 0; // Simulated kick bass on low frequencies
            
            barHeight = Math.max(10, Math.abs(freq1 + freq2 + freq3 + bassKick) * 2.5);
            // Cap height to fit screen gracefully
            if (barHeight > height * 0.85) barHeight = height * 0.85;
        } else {
            // Flat flat breathing wave when paused
            barHeight = 6 + Math.sin(i * 0.2 + time) * 3;
        }
        
        // High quality gradients (Purple -> Turquoise -> Green)
        const gradient = canvasCtx.createLinearGradient(0, height, 0, height - barHeight);
        gradient.addColorStop(0, '#1db954'); // Spotify Green
        gradient.addColorStop(0.5, '#00f2fe'); // Turquoise
        gradient.addColorStop(1, '#9b51e0'); // Purple
        
        canvasCtx.fillStyle = gradient;
        
        // Draw round corner bars
        const yPos = height - barHeight;
        drawRoundedRect(canvasCtx, x, yPos, barWidth, barHeight, 4);
        
        x += barWidth + 4;
    }
}

// Custom round rectangle renderer
function drawRoundedRect(ctx, x, y, width, height, radius) {
    if (height < radius * 2) radius = height / 2;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
}

visualizerBtn.addEventListener('click', () => {
    visualizerOverlay.classList.remove('hidden');
    
    // Sync song info
    const track = tracks[currentTrackIndex];
    vizSongTitle.textContent = track.name;
    vizSongArtist.textContent = track.artist;
    
    // Start animation loop
    drawVisualizer();
});

closeVisualizerBtn.addEventListener('click', () => {
    visualizerOverlay.classList.add('hidden');
    cancelAnimationFrame(animationFrameId);
});

// Close visualizer on escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !visualizerOverlay.classList.contains('hidden')) {
        visualizerOverlay.classList.add('hidden');
        cancelAnimationFrame(animationFrameId);
    }
});

/* Search results, authentication, drag and drop, and reordering implementations */

function renderSearchView() {
    const browseContainer = document.getElementById('search-default-browse');
    const resultsContainer = document.getElementById('search-results-container');
    const searchTracksTbody = document.getElementById('search-tracks-table-body');
    const searchArtistsShelf = document.getElementById('search-artists-shelf');
    
    if (!searchQuery || searchQuery.trim() === '') {
        browseContainer.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        return;
    }
    
    browseContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    const query = searchQuery.toLowerCase();
    
    // Filter tracks
    const searchFilteredTracks = tracks.filter(track => {
        const titleMatch = track.name.toLowerCase().includes(query);
        const artistMatch = track.artist.toLowerCase().includes(query);
        const albumMatch = track.album.toLowerCase().includes(query);
        const categoryMatch = track.category.toLowerCase().includes(query);
        return titleMatch || artistMatch || albumMatch || categoryMatch;
    });
    
    renderTracksList(searchTracksTbody, searchFilteredTracks);
    
    // Filter artists
    searchArtistsShelf.innerHTML = '';
    const matchingArtistNames = Object.keys(artistProfiles).filter(name => name.toLowerCase().includes(query));
    
    if (matchingArtistNames.length === 0) {
        searchArtistsShelf.innerHTML = `<p style="color: var(--color-text-muted); font-size: 14px; padding: 16px 0;">No matching artists found.</p>`;
    } else {
        matchingArtistNames.forEach(name => {
            const profile = artistProfiles[name];
            const card = document.createElement('div');
            card.className = 'artist-card';
            card.innerHTML = `
                <div class="artist-card-img-box">
                    <img src="${profile.img}" alt="${profile.name}" class="artist-card-img">
                </div>
                <span class="artist-card-name">${profile.name}</span>
                <span class="artist-card-role">Artist</span>
            `;
            card.addEventListener('click', () => {
                showArtistDetails(name);
            });
            searchArtistsShelf.appendChild(card);
        });
    }
    
    updateTableActiveHighlight();
}

function initSearchBrowseCards() {
    const cards = document.querySelectorAll('.browse-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const query = card.querySelector('span').textContent;
            searchInput.value = query;
            searchQuery = query;
            clearSearchBtn.style.display = 'block';
            showView('search-view');
        });
    });
}

/* User Authentication State & UI Controls */

let currentUser = JSON.parse(localStorage.getItem('spotify_user')) || null;

function initAuth() {
    userProfileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdownMenu.classList.toggle('hidden');
    });
    
    window.addEventListener('click', () => {
        profileDropdownMenu.classList.add('hidden');
    });
    
    document.getElementById('opt-profile-details').addEventListener('click', () => {
        if (currentUser) {
            alert(`Profile Info:\nLogged in as: ${currentUser.username}`);
        } else {
            openLoginModal();
        }
    });
    
    document.getElementById('opt-settings').addEventListener('click', () => {
        alert("Settings feature is coming soon!");
    });
    
    optAuth.addEventListener('click', () => {
        if (currentUser) {
            logoutUser();
        } else {
            openLoginModal();
        }
    });
    
    cancelLoginBtn.addEventListener('click', closeLoginModal);
    confirmLoginBtn.addEventListener('click', handleLogin);
    
    loginUsernameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    
    renderUserProfile();
}

function openLoginModal() {
    loginModal.classList.remove('hidden');
    loginUsernameInput.value = '';
    loginPasswordInput.value = '';
    loginUsernameInput.focus();
}

function closeLoginModal() {
    loginModal.classList.add('hidden');
}

function handleLogin() {
    const username = loginUsernameInput.value.trim();
    if (username === '') {
        alert('Please enter a username.');
        return;
    }
    
    currentUser = {
        username: username,
        avatarInitials: username.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    };
    
    localStorage.setItem('spotify_user', JSON.stringify(currentUser));
    closeLoginModal();
    renderUserProfile();
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('spotify_user');
    renderUserProfile();
}

function renderUserProfile() {
    if (currentUser) {
        profileDisplayName.textContent = currentUser.username;
        profileAvatarImg.classList.add('hidden');
        profileAvatarInitials.classList.remove('hidden');
        profileAvatarInitials.textContent = currentUser.avatarInitials;
        optAuth.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Log Out';
    } else {
        profileDisplayName.textContent = "Log In";
        profileAvatarImg.classList.remove('hidden');
        profileAvatarInitials.classList.add('hidden');
        optAuth.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Log In';
    }
}

/* HTML5 Drag and Drop events (Drag tracks into sidebar playlists) */

function initDragAndDropSidebar() {
    const sidebarContainer = document.getElementById('playlists-container');
    
    sidebarContainer.addEventListener('dragover', (e) => {
        const playlistItem = e.target.closest('.playlist-item');
        if (playlistItem) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }
    });
    
    sidebarContainer.addEventListener('dragenter', (e) => {
        const playlistItem = e.target.closest('.playlist-item');
        if (playlistItem) {
            playlistItem.classList.add('drag-over');
        }
    });
    
    sidebarContainer.addEventListener('dragleave', (e) => {
        const playlistItem = e.target.closest('.playlist-item');
        if (playlistItem) {
            if (!playlistItem.contains(e.relatedTarget)) {
                playlistItem.classList.remove('drag-over');
            }
        }
    });
    
    sidebarContainer.addEventListener('drop', (e) => {
        const playlistItem = e.target.closest('.playlist-item');
        if (playlistItem) {
            playlistItem.classList.remove('drag-over');
            e.preventDefault();
            
            const trackId = parseInt(e.dataTransfer.getData('text/plain'));
            if (isNaN(trackId)) return;
            
            // 1. Custom playlist dropped on
            const customId = parseInt(playlistItem.dataset.customPlaylistId);
            if (!isNaN(customId)) {
                addToPlaylist(customId, trackId);
                return;
            }
            
            // 2. Favorites playlist dropped on
            const isFavorites = playlistItem.dataset.playlist === 'favorites';
            if (isFavorites) {
                if (!favorites.includes(trackId)) {
                    toggleFavorite(trackId);
                }
                return;
            }
        }
    });
}

/* Drag to reorder tracks within custom playlists details view */

function initPlaylistReordering(tbody, playlistId) {
    let dragSourceRow = null;
    
    tbody.addEventListener('dragstart', (e) => {
        dragSourceRow = e.target.closest('tr');
        e.dataTransfer.effectAllowed = 'move';
    });
    
    tbody.addEventListener('dragover', (e) => {
        const targetRow = e.target.closest('tr');
        if (targetRow && targetRow !== dragSourceRow) {
            e.preventDefault();
            targetRow.classList.add('drag-row-over');
        }
    });
    
    tbody.addEventListener('dragleave', (e) => {
        const targetRow = e.target.closest('tr');
        if (targetRow) {
            if (!targetRow.contains(e.relatedTarget)) {
                targetRow.classList.remove('drag-row-over');
            }
        }
    });
    
    tbody.addEventListener('drop', (e) => {
        const targetRow = e.target.closest('tr');
        if (targetRow) {
            targetRow.classList.remove('drag-row-over');
            e.preventDefault();
            
            if (dragSourceRow && dragSourceRow !== targetRow) {
                const sourceTrackId = parseInt(dragSourceRow.dataset.trackId);
                const targetTrackId = parseInt(targetRow.dataset.trackId);
                
                if (isNaN(sourceTrackId) || isNaN(targetTrackId)) return;
                
                reorderPlaylistTracks(playlistId, sourceTrackId, targetTrackId);
            }
        }
    });
}

function reorderPlaylistTracks(playlistId, sourceTrackId, targetTrackId) {
    const playlist = customPlaylists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    const sourceIndex = playlist.trackIds.indexOf(sourceTrackId);
    const targetIndex = playlist.trackIds.indexOf(targetTrackId);
    
    if (sourceIndex === -1 || targetIndex === -1) return;
    
    // Move
    playlist.trackIds.splice(sourceIndex, 1);
    playlist.trackIds.splice(targetIndex, 0, sourceTrackId);
    
    localStorage.setItem('spotify_playlists', JSON.stringify(customPlaylists));
    renderSidebarPlaylists();
    showPlaylistDetails(playlist.name, playlist.trackIds, true, playlist.id);
}

// App Startup Initializer
function initApp() {
    // Load first track on list
    loadTrack(currentTrackIndex);
    
    // Render sidebars and shelves
    renderSidebarPlaylists();
    renderHomeArtistsShelf();
    
    // Initialize search cards, login authentication, and drag-and-drop
    initSearchBrowseCards();
    initAuth();
    initDragAndDropSidebar();
    
    // Render the initial playlist
    filterTracks();
    
    // Enable volume to default
    audioPlayer.volume = 0.8;
}

initApp();
