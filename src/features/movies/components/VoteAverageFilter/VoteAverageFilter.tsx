import { Flex, Input, Text } from "@chakra-ui/react";

type VoteAverageFilterProps = {
  min: string | number;
  max: string | number;
  onChange: (type: "min" | "max", value: string | number) => void;
};

export function VoteAverageFilter({
  min,
  max,
  onChange,
}: VoteAverageFilterProps) {
  function onType(type: "min" | "max", value: string) {
    onChange(type, value);
  }

  return (
    <Flex alignItems="center" ml={4}>
      <Text color="whiteAlpha.900" fontWeight="bold" fontSize="xl" mr={2}>
        Rating:
      </Text>
      <Input
        type="number"
        value={min}
        onChange={(e) => onType("min", e.target.value)}
        placeholder="From"
        mr={2}
        color="whiteAlpha.900"
        fontWeight="bold"
        minWidth={100}
        _focus={{
          border: "1px solid white",
          boxShadow: "0px 0px 0px 1px white",
        }}
        _placeholder={{
          color: "whiteAlpha.700",
          fontWeight: "400",
        }}
      />

      <Input
        type="number"
        value={max}
        onChange={(e) => onType("max", e.target.value)}
        placeholder="To"
        mr={2}
        color="whiteAlpha.900"
        fontWeight="bold"
        minWidth={100}
        _focus={{
          border: "1px solid white",
          boxShadow: "0px 0px 0px 1px white",
        }}
        _placeholder={{
          color: "whiteAlpha.700",
          fontWeight: "400",
        }}
      />
    </Flex>
  );
}
