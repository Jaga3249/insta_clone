import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/AuthStore";
import { timeAgo } from "../../utils/TimeAgo";

const Caption = ({ post }) => {
  const { user } = useAuthStore();

  return (
    <Flex w={"full"} alignItems={"center"} gap={3} mb={2} px={2}>
      <Link to={`/${user?.username}`}>
        <Avatar src={user?.profilePicUrl} width={8} height={8} />
      </Link>
      <Flex flexDirection={"column"} gap={0}>
        <Flex gap={3}>
          <Link to={`/${user?.username}`}>
            <Text as={"span"}>{user?.username}</Text>
          </Link>
          <Text color={"gray.400"}>{post?.caption}</Text>
        </Flex>
        <Text>{timeAgo(post.createdAt)}</Text>
      </Flex>
    </Flex>
  );
};
export default Caption;
