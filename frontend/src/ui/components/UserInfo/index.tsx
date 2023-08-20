import { Box, Flex, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaCity } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdOutlineSportsFootball } from "react-icons/md";
import { UserProps } from "../../../infra/types/user";

const UserInfo = ({ name, city, country, favorite_sport }: UserProps) => {
  return (
    <Box
      background="white"
      boxShadow="10px 10px 20px #212f41,
    -10px -10px 20px #2d3f59"
      padding="20px"
      borderRadius="15px"
    >
      <Flex alignItems="center" gap="5px" mb="10px">
        <CgProfile />
        <Text fontWeight="semibold">{name}</Text>
      </Flex>

      <Flex gap="10px">
        <Flex alignItems="center" gap="5px">
          <FaCity />
          {city}
        </Flex>
        <Flex alignItems="center" gap="5px">
          <BiWorld />
          {country}
        </Flex>
        <Flex alignItems="center" gap="5px">
          <MdOutlineSportsFootball />
          {favorite_sport}
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserInfo;
