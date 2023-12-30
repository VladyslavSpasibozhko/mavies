import { Heading } from "@chakra-ui/react";
import { Link } from "@components/Link";
import { Icon } from "@components/Icon";

export function TextLink({ title, link }: { title: string; link?: string }) {
  if (link) {
    return (
      <Link to={link} display="flex" alignItems="center">
        <Heading size="md" textTransform="uppercase" color="whiteAlpha.900">
          {title}
        </Heading>
        <Icon name="BiLinkExternal" boxSize={6} color="whiteAlpha.700" ml={2} />
      </Link>
    );
  }

  return (
    <Heading size="md" textTransform="uppercase" color="whiteAlpha.900">
      {title}
    </Heading>
  );
}
