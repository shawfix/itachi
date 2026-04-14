import type { Moment } from '@/types/biz/content/Moment';
import type { Post } from '@/types/biz/content/Post';
import { ContentType } from '@/types/biz/content/public';

import { AlbumList } from './album';
import { CategoryList } from './category';

const MomentList: Moment[] = [
  {
    id: '1',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-01 00:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-01 00:00:00',
    albumIds: ['1', '2', '3'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'Enjoying a beautiful sunset at the beach while the waves whispered against the shore, the sky painted pink and gold, and the sound of laughter from distant friends made this moment feel warm, peaceful, and timeless.',
    albums: AlbumList.slice(0, 3),
    contentType: ContentType.MOMENT
  },
  {
    id: '2',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-02 08:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-02 08:30:00',
    albumIds: ['4', '5'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A morning hike in the mountains revealed misty valleys, crisp air, and sunlight filtering through towering pines, turning every step into a quiet adventure filled with the scent of earth and the promise of discovery.',
    albums: AlbumList.slice(3, 5),
    contentType: ContentType.MOMENT
  },
  {
    id: '3',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-03 10:15:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-03 10:15:00',
    albumIds: ['6', '7', '8', '9'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'Exploring the city lights at night, with bustling streets and glowing signs, felt like a cinematic journey where every corner offered a new story, every alley a hidden café, and every breath carried the pulse of urban life.',
    albums: AlbumList.slice(5, 9),
    contentType: ContentType.MOMENT
  },
  {
    id: '4',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-04 14:45:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-04 14:45:00',
    albumIds: ['10'],
    images: ['https://avatars.githubusercontent.com/u/75828211?v=4'],
    text: 'A delicious food adventure unfolded with steaming bowls of ramen, fragrant spices, and sweet desserts as each bite transported us to different cultures and memories, reminding us why food can be both comfort and celebration.',
    albums: AlbumList.slice(9, 10),
    contentType: ContentType.MOMENT
  },
  {
    id: '5',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-05 09:20:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-05 09:20:00',
    albumIds: ['11', '12', '13', '14', '15'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A family gathering full of celebrations, laughter, and shared stories around the table, with colorful decorations, warm embraces, and the comforting sense that these collective moments are the ones we return to again and again.',
    albums: AlbumList.slice(10, 15),
    contentType: ContentType.MOMENT
  },
  {
    id: '6',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-06 11:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-06 11:00:00',
    albumIds: ['16', '17'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: "Visiting the art gallery meant moving through bright halls of paintings, sculptures, and installations, reflecting on each artist's emotion and technique while the quiet reverence in the room amplified the power of creative expression.",
    albums: AlbumList.slice(15, 17),
    contentType: ContentType.MOMENT
  },
  {
    id: '7',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-07 13:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-07 13:30:00',
    albumIds: ['18', '19', '20'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'The music festival vibes were alive with thumping beats, dazzling lights, and a crowd moving together as one, where the energy of the performers created unforgettable moments and the night felt endless and electric.',
    albums: AlbumList.slice(17, 20),
    contentType: ContentType.MOMENT
  },
  {
    id: '8',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-08 16:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-08 16:00:00',
    albumIds: ['1', '3', '5'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A weekend getaway to escape the daily routine, exploring winding roads and peaceful landscapes, with cozy evenings, spontaneous discoveries, and the gentle joy of being somewhere new and simple.',
    albums: [AlbumList[0], AlbumList[2], AlbumList[4]],
    contentType: ContentType.MOMENT
  },
  {
    id: '9',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-09 07:45:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-09 07:45:00',
    albumIds: ['2', '4', '6', '8'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A nature photography session among mossy trails and sunlit clearings, capturing tiny details like dew drops on leaves and vivid wildflowers, while the forest air felt crisp and full of quiet wonder.',
    albums: [AlbumList[1], AlbumList[3], AlbumList[5], AlbumList[7]],
    contentType: ContentType.MOMENT
  },
  {
    id: '10',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-10 12:15:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-10 12:15:00',
    albumIds: ['7', '9', '11'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'Cooking new recipes in a lively kitchen, experimenting with fresh ingredients, aromatic herbs, and unexpected flavor combinations, while the excitement of creating something delicious made each moment memorable.',
    albums: [AlbumList[6], AlbumList[8], AlbumList[10]],
    contentType: ContentType.MOMENT
  },
  {
    id: '11',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-11 15:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-11 15:30:00',
    albumIds: ['10', '12', '14', '16', '18'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A sports and fitness day full of energy and determination, from warmups and sprints to strength challenges, with the encouragement of friends and the satisfying feeling of pushing ourselves just a little bit further.',
    albums: [
      AlbumList[9],
      AlbumList[11],
      AlbumList[13],
      AlbumList[15],
      AlbumList[17]
    ],
    contentType: ContentType.MOMENT
  },
  {
    id: '12',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-12 09:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-12 09:00:00',
    albumIds: ['13', '15', '17'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'Reading and relaxation combined in a cozy corner, where well-chosen books, soft light, and comfy cushions made hours slip by pleasantly as each page offered new ideas, calm moments, and quiet reflection.',
    albums: [AlbumList[12], AlbumList[14], AlbumList[16]],
    contentType: ContentType.MOMENT
  },
  {
    id: '13',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-13 10:45:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-13 10:45:00',
    albumIds: ['19', '20'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A movie night at home with popcorn, cozy blankets, and an assortment of films meant slowing down, sharing opinions, and enjoying comfort in a space where even simple stories felt vivid and comforting.',
    albums: [AlbumList[18], AlbumList[19]],
    contentType: ContentType.MOMENT
  },
  {
    id: '14',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-14 13:20:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-14 13:20:00',
    albumIds: ['1', '5', '10', '15'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A travel planning session filled with maps, itineraries, and destination inspiration, imagining scenic routes and local experiences while anticipating the joys, challenges, and unforgettable encounters of a future trip.',
    albums: [AlbumList[0], AlbumList[4], AlbumList[9], AlbumList[14]],
    contentType: ContentType.MOMENT
  },
  {
    id: '15',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-15 17:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-15 17:00:00',
    albumIds: ['2', '7', '12'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A gaming marathon that stretched late into the night, full of thrilling matches, clever strategies, and the camaraderie of teammates, where every victory felt earned and every challenge only fueled the next attempt.',
    albums: [AlbumList[1], AlbumList[6], AlbumList[11]],
    contentType: ContentType.MOMENT
  },
  {
    id: '16',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-16 08:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-16 08:30:00',
    albumIds: ['3', '8', '13', '18'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A coffee shop visit with the aroma of roasted beans in the air, quiet conversations at nearby tables, and the pleasure of sipping carefully brewed coffee while watching the world move slowly outside the window.',
    albums: [AlbumList[2], AlbumList[7], AlbumList[12], AlbumList[17]],
    contentType: ContentType.MOMENT
  },
  {
    id: '17',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-17 11:15:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-17 11:15:00',
    albumIds: ['4', '9', '14', '19'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A shopping spree through eclectic stores and busy markets, trying on finds, comparing colors and textures, and enjoying the thrill of discovering pieces that felt just right for a fresh new season.',
    albums: [AlbumList[3], AlbumList[8], AlbumList[13], AlbumList[18]],
    contentType: ContentType.MOMENT
  },
  {
    id: '18',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-18 14:50:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-18 14:50:00',
    albumIds: ['5', '10', '15', '20'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A park picnic spread out beneath leafy trees, with homemade snacks, gentle breezes, and playful moments, where the simple joy of being outdoors made the afternoon feel relaxed, happy, and restorative.',
    albums: [AlbumList[4], AlbumList[9], AlbumList[14], AlbumList[19]],
    contentType: ContentType.MOMENT
  },
  {
    id: '19',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-19 16:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-19 16:30:00',
    albumIds: ['6', '11', '16'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'Museum exploration through galleries of history and art, reading the stories behind each exhibit, admiring craftsmanship, and realizing how much there is to learn from the objects and ideas preserved in the rooms.',
    albums: [AlbumList[5], AlbumList[10], AlbumList[15]],
    contentType: ContentType.MOMENT
  },
  {
    id: '20',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-20 18:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-20 18:00:00',
    albumIds: ['7', '12', '17'],
    images: [
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4',
      'https://avatars.githubusercontent.com/u/75828211?v=4'
    ],
    text: 'A stargazing night spent under a clear sky, tracing constellations, sharing quiet thoughts, and feeling small yet connected to something much larger as the stars shimmered overhead in calm darkness.',
    albums: [AlbumList[6], AlbumList[11], AlbumList[16]],
    contentType: ContentType.MOMENT
  }
];

const PostList: Post[] = [
  {
    id: '1',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-01 00:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-01 00:00:00',
    categoryIds: ['1', '2', '3'],
    slug: 'the-future-of-technology',
    summary: 'Exploring the latest trends in technology and innovation',
    text: 'Technology is evolving at an unprecedented pace. From artificial intelligence to quantum computing, the future holds endless possibilities. In this post, we dive deep into the emerging technologies that will shape our world.',
    title: 'The Future of Technology',
    categories: CategoryList.slice(0, 3),
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '2',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-02 08:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-02 08:30:00',
    categoryIds: ['4', '5'],
    slug: 'travel-guide-to-japan',
    summary: 'A comprehensive guide to traveling in Japan',
    text: 'Japan offers a unique blend of traditional culture and modern innovation. From the bustling streets of Tokyo to the serene temples of Kyoto, this guide covers everything you need to know for an unforgettable trip.',
    title: 'Travel Guide to Japan',
    categories: CategoryList.slice(3, 5),
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '3',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-03 10:15:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-03 10:15:00',
    categoryIds: ['6', '7', '8', '9'],
    slug: 'healthy-cooking-recipes',
    summary: 'Delicious and nutritious recipes for everyday cooking',
    text: "Eating healthy doesn't have to be boring. Discover these amazing recipes that are both nutritious and flavorful. From salads to main courses, these dishes will keep you energized throughout the day.",
    title: 'Healthy Cooking Recipes',
    categories: CategoryList.slice(5, 9),
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '4',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-04 14:45:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-04 14:45:00',
    categoryIds: ['10'],
    slug: 'fitness-tips-for-beginners',
    summary: 'Essential fitness tips for those starting their fitness journey',
    text: 'Starting a fitness routine can be intimidating, but with the right approach, anyone can achieve their goals. This post covers the basics of exercise, nutrition, and motivation to help you get started.',
    title: 'Fitness Tips for Beginners',
    categories: CategoryList.slice(9, 10),
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '5',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-05 09:20:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-05 09:20:00',
    categoryIds: ['11', '12', '13', '14', '15'],
    slug: 'movie-reviews-2024',
    summary: 'Reviews of the best movies released in 2024',
    text: '2024 has been an incredible year for cinema. From blockbuster hits to indie gems, we review the standout films that captured our attention and why they deserve your time.',
    title: 'Movie Reviews 2024',
    categories: CategoryList.slice(10, 15),
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '6',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-06 11:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-06 11:00:00',
    categoryIds: ['16', '17'],
    slug: 'starting-a-business',
    summary: 'A step-by-step guide to starting your own business',
    text: 'Entrepreneurship is a rewarding but challenging path. Learn about market research, business planning, funding options, and the key steps to launch your venture successfully.',
    title: 'Starting a Business',
    categories: CategoryList.slice(15, 17),
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '7',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-07 13:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-07 13:30:00',
    categoryIds: ['18', '19', '20'],
    slug: 'online-learning-resources',
    summary: 'The best online learning platforms and courses',
    text: 'Education is more accessible than ever with online learning. Discover the top platforms offering courses in everything from programming to design, and find the perfect learning path for you.',
    title: 'Online Learning Resources',
    categories: CategoryList.slice(17, 20),
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '8',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-08 16:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-08 16:00:00',
    categoryIds: ['1', '3', '5'],
    slug: 'digital-art-techniques',
    summary: 'Mastering digital art with modern tools and techniques',
    text: 'Digital art has revolutionized the creative world. Learn about the latest software, techniques, and trends that are shaping the future of digital creativity.',
    title: 'Digital Art Techniques',
    categories: [CategoryList[0], CategoryList[2], CategoryList[4]],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '9',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-09 07:45:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-09 07:45:00',
    categoryIds: ['2', '4', '6', '8'],
    slug: 'music-playlist-essentials',
    summary: 'Curated playlists for every mood and occasion',
    text: 'Music has the power to enhance any moment. Discover carefully curated playlists spanning genres and moods, perfect for work, relaxation, or celebration.',
    title: 'Music Playlist Essentials',
    categories: [
      CategoryList[1],
      CategoryList[3],
      CategoryList[5],
      CategoryList[7]
    ],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '10',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-10 12:15:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-10 12:15:00',
    categoryIds: ['7', '9', '11'],
    slug: 'sports-highlights-2024',
    summary: 'The most memorable sports moments of the year',
    text: '2024 was filled with incredible athletic achievements and unforgettable moments. From championship victories to record-breaking performances, relive the highlights that defined the sports world.',
    title: 'Sports Highlights 2024',
    categories: [CategoryList[6], CategoryList[8], CategoryList[10]],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '11',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-11 15:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-11 15:30:00',
    categoryIds: ['10', '12', '14', '16', '18'],
    slug: 'environmental-conservation',
    summary: 'Protecting our planet for future generations',
    text: 'Climate change and environmental degradation are pressing issues that affect us all. Learn about conservation efforts, sustainable practices, and how you can make a difference.',
    title: 'Environmental Conservation',
    categories: [
      CategoryList[9],
      CategoryList[11],
      CategoryList[13],
      CategoryList[15],
      CategoryList[17]
    ],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '12',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-12 09:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-12 09:00:00',
    categoryIds: ['13', '15', '17'],
    slug: 'scientific-discoveries-2024',
    summary: 'Groundbreaking scientific advancements this year',
    text: 'Science continues to push the boundaries of human knowledge. Explore the most significant discoveries and breakthroughs that are shaping our understanding of the universe.',
    title: 'Scientific Discoveries 2024',
    categories: [CategoryList[12], CategoryList[14], CategoryList[16]],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '13',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-13 10:45:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-13 10:45:00',
    categoryIds: ['19', '20'],
    slug: 'fashion-trends-2024',
    summary: 'The hottest fashion trends for the coming year',
    text: "Fashion is constantly evolving, and 2024 brings exciting new trends. From sustainable fashion to bold colors, discover what's shaping the fashion world this season.",
    title: 'Fashion Trends 2024',
    categories: [CategoryList[18], CategoryList[19]],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '14',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-14 13:20:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-14 13:20:00',
    categoryIds: ['1', '5', '10', '15'],
    slug: 'photography-tips-for-beginners',
    summary: 'Essential photography skills for aspiring photographers',
    text: 'Photography is both an art and a science. Learn the fundamental techniques, composition rules, and equipment choices that will help you capture stunning images.',
    title: 'Photography Tips for Beginners',
    categories: [
      CategoryList[0],
      CategoryList[4],
      CategoryList[9],
      CategoryList[14]
    ],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '15',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-15 17:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-15 17:00:00',
    categoryIds: ['2', '7', '12'],
    slug: 'gaming-culture-evolution',
    summary: 'How gaming has become a mainstream cultural phenomenon',
    text: 'Gaming has evolved from a niche hobby to a global cultural force. Explore the history, current trends, and future of gaming culture and its impact on society.',
    title: 'Gaming Culture Evolution',
    categories: [CategoryList[1], CategoryList[6], CategoryList[11]],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '16',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-16 08:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-16 08:30:00',
    categoryIds: ['3', '8', '13', '18'],
    slug: 'home-garden-design',
    summary: 'Creating beautiful and functional outdoor spaces',
    text: 'Your garden can be both beautiful and productive. Learn about landscaping, plant selection, and design principles that will transform your outdoor space into a personal paradise.',
    title: 'Home Garden Design',
    categories: [
      CategoryList[2],
      CategoryList[7],
      CategoryList[12],
      CategoryList[17]
    ],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '17',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-17 11:15:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-17 11:15:00',
    categoryIds: ['4', '9', '14', '19'],
    slug: 'mindfulness-and-wellness',
    summary: 'Practices for mental health and personal growth',
    text: 'In our fast-paced world, mindfulness and wellness practices are essential for maintaining balance. Discover techniques for stress reduction, meditation, and overall well-being.',
    title: 'Mindfulness and Wellness',
    categories: [
      CategoryList[3],
      CategoryList[8],
      CategoryList[13],
      CategoryList[18]
    ],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '18',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-18 14:50:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-18 14:50:00',
    categoryIds: ['5', '10', '15', '20'],
    slug: 'budget-travel-hacks',
    summary: 'Smart ways to travel more while spending less',
    text: "Travel doesn't have to break the bank. Learn practical tips and strategies for finding deals, saving money, and maximizing your travel experiences on a budget.",
    title: 'Budget Travel Hacks',
    categories: [
      CategoryList[4],
      CategoryList[9],
      CategoryList[14],
      CategoryList[19]
    ],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '19',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-19 16:30:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-19 16:30:00',
    categoryIds: ['6', '11', '16'],
    slug: 'investment-strategies-2024',
    summary: 'Building wealth through smart investment choices',
    text: "Investing can be intimidating, but with the right knowledge, it's accessible to everyone. Explore different investment strategies and learn how to build long-term financial security.",
    title: 'Investment Strategies 2024',
    categories: [CategoryList[5], CategoryList[10], CategoryList[15]],
    type: 'post',
    contentType: ContentType.POST
  },
  {
    id: '20',
    creatorId: 'shawfix',
    creatorName: 'Shawfix',
    createdAt: '2024-01-20 18:00:00',
    modifierId: 'shawfix',
    modifierName: 'Shawfix',
    modifiedAt: '2024-01-20 18:00:00',
    categoryIds: ['7', '12', '17'],
    slug: 'product-reviews-tech-gadgets',
    summary: 'Honest reviews of the latest tech gadgets',
    text: "With so many new gadgets released each year, it's hard to know what's worth your money. Read detailed reviews of the latest tech products to make informed purchasing decisions.",
    title: 'Product Reviews: Tech Gadgets',
    categories: [CategoryList[6], CategoryList[11], CategoryList[16]],
    type: 'post',
    contentType: ContentType.POST
  }
];

type Content = Moment | Post;

export function mockFetchContentList(): Content[] {
  // 合并所有内容
  const allContent = [...MomentList, ...PostList];

  // Fisher-Yates 洗牌算法
  for (let i = allContent.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allContent[i], allContent[j]] = [allContent[j], allContent[i]];
  }

  // 返回前20个随机排序的项目
  return allContent.slice(0, 20);
}
