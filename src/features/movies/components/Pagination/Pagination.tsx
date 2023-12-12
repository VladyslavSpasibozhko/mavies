import { Flex, IconButton, Input, Text } from "@chakra-ui/react";
import { Icon } from "@components/Icon";

type PaginationProps = {
  current: number;
  total: number;
  disabled?: boolean;
  onChange: (value: number) => void;
};

export function Pagination({ current, total, onChange }: PaginationProps) {
  function onInput(value: string) {
    const isHasLength = value.trim().length;

    if (isHasLength) {
      const numValue = Number(value);

      if (numValue >= 1 && numValue <= total) onChange(numValue);
    }
  }

  return (
    <Flex
      padding={4}
      align="center"
      justify="space-between"
      background="blackAlpha.900"
    >
      <Flex>
        <IconButton
          aria-label="to start"
          colorScheme="blackAlpha"
          icon={<Icon name="MdKeyboardDoubleArrowLeft" boxSize={6} />}
          onClick={() => onChange(1)}
        />
        <IconButton
          aria-label="prev page"
          colorScheme="blackAlpha"
          icon={<Icon name="MdKeyboardArrowLeft" boxSize={6} />}
          onClick={() => {
            if (current !== 1) onChange(current - 1);
          }}
        />
        {/* TODO: add debounce */}
        <Input
          type="number"
          value={current}
          color="white"
          _focus={{ border: "1px solid white", boxShadow: "0 0 0 1px white" }}
          onChange={(e) => onInput(e.target.value)}
          width="100px"
        />
        <IconButton
          aria-label="next page"
          colorScheme="blackAlpha"
          icon={<Icon name="MdKeyboardArrowRight" boxSize={6} />}
          onClick={() => onChange(current + 1)}
        />
        <IconButton
          aria-label="last page"
          colorScheme="blackAlpha"
          icon={<Icon name="MdKeyboardDoubleArrowRight" boxSize={6} />}
          onClick={() => onChange(total)}
        />
      </Flex>
      <Text color="white" fontSize={18} fontWeight={600}>
        Total: {total}
      </Text>
    </Flex>
  );
}
