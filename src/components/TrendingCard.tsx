import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  borderRadius: "12px",
  width: "340px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  marginBottom: "24px",
});

const StyledListItem = styled(ListItem)({
  padding: "12px 0",
  display: "flex",
  gap: "12px",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.02)",
    borderRadius: "8px",
  },
});

const TrendingImage = styled("img")({
  width: "48px",
  height: "48px",
  borderRadius: "8px",
  objectFit: "cover",
});

const TrendingCard = () => {
  const trendingTopics = [
    {
      topic: "Photography",
      posts: "2.5k posts",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      topic: "Digital Art",
      posts: "1.8k posts",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
    },
    {
      topic: "Landscape",
      posts: "1.2k posts",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
    },
    {
      topic: "Portrait",
      posts: "950 posts",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500",
    },
  ];

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Trending Topics
        </Typography>
        <List>
          {trendingTopics.map((item, index) => (
            <StyledListItem key={index} sx={{ px: 0 }}>
              <TrendingImage src={item.image} alt={item.topic} />
              <ListItemText
                primary={item.topic}
                secondary={item.posts}
                primaryTypographyProps={{ fontWeight: "medium" }}
              />
            </StyledListItem>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
};

export default TrendingCard;
