import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const SuggestedUserForFeedPostSection = ({ suggestedUsers }) => {
  console.log(suggestedUsers);
  console.log(suggestedUsers?.profilePicUrl);
  return (
    <div>
      <Text>Suggestion for you</Text>
      <Flex>
        {suggestedUsers.map((user) => (
          <Card maxW="lg">
            <CardBody>
              <Image
                src={user?.profilePicUrl}
                width={"10px"}
                height={"10px"}
                alt="suggesteduser image"
              />
              <Text>{user?.username}</Text>
            </CardBody>
            <Divider />
            <CardFooter>Follow</CardFooter>
          </Card>
        ))}
      </Flex>
    </div>
  );
};
export default SuggestedUserForFeedPostSection;
