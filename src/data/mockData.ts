import { Post, User } from "../types";

const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Software Engineer | Coffee Lover | Code Artist",
  },
  {
    id: "2",
    name: "Jane Smith",
    username: "janesmith",
    avatar: "https://i.pravatar.cc/150?img=2",
    bio: "Digital Creator | Photography",
  },
  {
    id: "3",
    name: "Bob Johnson",
    username: "bobjohnson",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Tech Enthusiast | Gamer",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    username: "sarahw",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "Travel | Photography | Life",
  },
];

const mockPosts: Post[] = [
  {
    id: "1",
    content: "Check out these amazing shots from my weekend trip! 📸",
    images: [
      "https://picsum.photos/seed/1/800/600",
      "https://picsum.photos/seed/2/800/600",
      "https://picsum.photos/seed/3/800/600",
      "https://picsum.photos/seed/4/800/600",
    ],
    author: mockUsers[0],
    createdAt: new Date("2024-03-20T10:00:00"),
    likes: 42,
    isLiked: false,
    isBookmarked: false,
    comments: [
      {
        id: "1",
        content: "This looks amazing! Great work! 👏",
        author: mockUsers[1],
        createdAt: new Date("2024-03-20T10:30:00"),
        parentId: null,
        replies: [],
        likes: 5,
      },
    ],
  },
  {
    id: "2",
    content: "Beautiful sunset today in the city 🌅",
    author: mockUsers[1],
    createdAt: new Date("2024-03-19"),
    likes: 127,
    isLiked: false,
    isBookmarked: false,
    comments: [],
  },
  {
    id: "3",
    content: "Check out this amazing view from my morning hike! 🏔️",
    image: "https://picsum.photos/seed/3/800/600",
    author: mockUsers[2],
    createdAt: new Date("2024-03-18"),
    likes: 84,
    isLiked: false,
    isBookmarked: false,
    comments: [],
  },
  {
    id: "4",
    content: "My workspace setup is finally complete! 💻✨",
    image: "https://picsum.photos/seed/4/800/600",
    author: mockUsers[3],
    createdAt: new Date("2024-03-17"),
    likes: 156,
    isLiked: false,
    isBookmarked: false,
    comments: [],
  },
  {
    id: "5",
    content:
      "Just got my hands on the new camera! Can't wait to test it out 📸",
    author: mockUsers[1],
    createdAt: new Date("2024-03-16"),
    likes: 93,
    isLiked: false,
    isBookmarked: false,
    comments: [],
  },
];

export { mockUsers, mockPosts };
