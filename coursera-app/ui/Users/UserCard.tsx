import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@/ui";
import { User } from "@/types";

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <>
      <Card className="w-96"
      placeholder="Your Placeholder Value"
      >
        <CardHeader 
        placeholder="Your Placeholder Value"
        floated={false} className="h-80">
          <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody 
        placeholder="Your Placeholder Value"
        className="text-center">
          <Typography 
          placeholder="Your Placeholder Value"
          variant="h4" color="blue-gray" className="mb-2">
            {user.username}
          </Typography>
          <Typography 
          placeholder="Your Placeholder Value"
          color="blue-gray" className="font-medium" textGradient>
            {user.email}
          </Typography>
        </CardBody>
        <CardFooter 
        placeholder="Your Placeholder Value"
        className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
            placeholder="Your Placeholder Value"
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
            placeholder="Your Placeholder Value"
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
            placeholder="Your Placeholder Value"
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  );
}