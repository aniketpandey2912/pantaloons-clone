import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  chakra,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
  VStack,
  SimpleGrid,
  Container,
  Link,
  Box,
  Divider,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import React, { ReactNode } from "react";

type socialType = { id: number; name: string; icon: JSX.Element };
const socials: socialType[] = [
  { id: 1, name: "Facebook", icon: <FaFacebook /> },
  { id: 2, name: "Instagram", icon: <FaInstagram /> },
  { id: 3, name: "Twitter", icon: <FaTwitter /> },
  { id: 4, name: "Youtube", icon: <FaYoutube /> },
  { id: 5, name: "Whatsapp", icon: <FaWhatsapp /> },
];

type ribbonType = { id: number; text: string; img: string };
const ribbon: ribbonType[] = [
  {
    id: 1,
    text: "EASY RETURNS",
    img: "https://imagescdn.pantaloons.com/img/app/brands/pantaloons/quickLinks/easy_returns.svg",
  },
  {
    id: 2,
    text: "1800-103-7527(10am - 10pm)",
    img: "https://imagescdn.pantaloons.com/img/app/brands/pantaloons/quickLinks/call_centre_worker.svg",
  },
  {
    id: 3,
    text: "FREE SHIPPING",
    img: "https://imagescdn.pantaloons.com/img/app/brands/pantaloons/quickLinks/group.svg",
  },
  {
    id: 4,
    text: "CASH ON DELIVERY",
    img: "https://imagescdn.pantaloons.com/img/app/brands/pantaloons/quickLinks/group-20.svg",
  },
  {
    id: 5,
    text: "SECURE PAYMENT",
    img: "https://imagescdn.pantaloons.com/img/app/brands/pantaloons/quickLinks/shape.svg",
  },
  {
    id: 6,
    text: "FREE ALTERATIONS",
    img: "https://imagescdn.pantaloons.com/img/app/brands/pantaloons/quickLinks/group-21.svg",
  },
];

type tableType = { id: number; title: string; list: string[] };
const table: tableType[] = [
  {
    id: 1,
    title: "WOMEN",
    list: [
      "Western Wear",
      "Ethnic Wear",
      "Footwear",
      "Handbags",
      "Inner Wear",
      "Sleepwear",
      "Athleisure",
      "Masks",
      "Beauty",
      "New Arrivals",
      "Shop By Brands",
    ],
  },
  {
    id: 2,
    title: "MEN",
    list: [
      "Top Wear",
      "Bottom Wear",
      "Ethnic Wear",
      "Athleisure",
      "Bags",
      "Masks",
      "Innerwear",
      "Footwear",
      "Belts",
      "New Arrivals",
      "Shop By Brands",
    ],
  },
  {
    id: 3,
    title: "KIDS",
    list: ["Boys", "Girls", "Baby", "Bags", "New Arrivals", "Shop By Brands"],
  },
  {
    id: 4,
    title: "HOME",
    list: ["Decor", "Living", "Dining", "Bed", "Bath"],
  },
  {
    id: 5,
    title: "ACCESSORIES",
    list: [
      "Bags",
      "Women Footwear",
      "Men Footwear",
      "Boys Footwear",
      "Girls Footwear",
    ],
  },
  {
    id: 6,
    title: "ABOUT",
    list: [
      "About Us",
      "Greencard",
      "Store Locator",
      "Payment Options",
      "Investor Relations",
    ],
  },
  {
    id: 7,
    title: "CUSTOMER",
    list: [
      "Track Order",
      "FAQs",
      "Customer Support",
      "Returns & Exchange Policy",
      "Shipping Policy",
    ],
  },
];

const Footer = () => {
  const [join, setJoin] = React.useState<boolean>(false);
  const handleClick = () => setJoin(!join);
  return (
    <Box w="100%" py="100px">
      {/* Join */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-evenly" }}
        alignItems="center"
        px="12%"
        rowGap="1em"
        columnGap="2%"
      >
        <Text fontSize={"12px"} fontWeight="500">
          GET AHEAD OF THE STYLE CURVE SUBSCRIBE TO THE FASHION NEWSLETTER
        </Text>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="email"
            placeholder="Enter your email address here"
          />
          <InputRightElement width="4.5rem">
            <Text
              h="1.75rem"
              size="sm"
              color="green"
              fontWeight="500"
              cursor="pointer"
              onClick={handleClick}
            >
              {join ? "Joined" : "Join"}
            </Text>
          </InputRightElement>
        </InputGroup>
        <Stack direction={"row"} spacing={6}>
          {socials?.map((el) => (
            <SocialButton key={el.id} label={el.name} href={"#"}>
              {el.icon}
            </SocialButton>
          ))}
        </Stack>
      </Flex>

      {/* Ribbon */}
      <SimpleGrid
        w="100%"
        bgColor="#d2fdff"
        columns={{ base: 3, md: 6 }}
        // spacingX="1%"
        spacingY="20px"
        alignItems="stretch"
        justifyContent="center"
        px="15%"
        py="4%"
      >
        {ribbon?.map((el) => (
          <VStack
            key={el.id}
            textAlign="center"
            fontSize="12px"
            fontWeight="500"
          >
            <Image src={el.img} alt={el.text} w="40px" h="40px" />
            <Text>{el.text}</Text>
          </VStack>
        ))}
      </SimpleGrid>

      {/* Table */}
      <Box w="100%" bgColor="#f1ffff" mt="0">
        <Container as={Stack} maxW={"6xl"} py={10} fontSize="12px">
          <SimpleGrid columns={{ base: 3, sm: 5, md: 8 }} spacing={8}>
            {table?.map((el) => (
              <Stack key={el.id} align={"flex-start"}>
                <ListHeader>
                  <Text fontSize="12px">{el.title}</Text>
                </ListHeader>
                {el.list?.map((ele, ind) => (
                  <Link key={ind} href={"#"}>
                    {ele}
                  </Link>
                ))}
              </Stack>
            ))}

            <Stack align={"flex-start"}>
              <ListHeader>
                <Text fontSize="12px">Install App</Text>
              </ListHeader>
              <Image
                src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/downloadapp/apple.svg"
                w="120px"
              />
              <Image
                src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/downloadapp/google-play.svg"
                w="120px"
              />
            </Stack>
          </SimpleGrid>
        </Container>
        <Divider />
        <Container as={Stack} maxW={"6xl"} py={10} fontSize="12px">
          <Text fontWeight="500">
            PANTALOONS ONLINE STORE- BEST ONLINE SHOPPING SITES FOR FASHION
            CLOTHING
          </Text>
          <Link href={"#"}>
            Best shopping site in India for Fashion Clothing
          </Link>
          <Link href={"#"}>Smart Men’s Clothing</Link>
          <Link href={"#"}>Smart Women’s Clothing</Link>
          <Link href={"#"}>Smart Kid’s wear</Link>
          <Link href={"#"}>Benefits of shopping with Pantaloons</Link>
          <Link href={"#"}>Pantaloons app</Link>
          <Flex flexDirection="column" gap="40px" py="40px">
            <Text>
              With the consistent change in fashion statement Pantaloons online
              shopping sites have managed to keep up with the expectations of
              the customers without any hiccups. Gone are those days when you
              needed to step out of your house to shop for your favorite outfits
              from Pantaloons. Online clothes shopping facilities helped us to
              reach you at your doors and deliver you your chosen outfits on
              time and with care.
            </Text>

            <Text fontWeight="500">
              Best online shopping sites in India for clothes
            </Text>

            <Text>
              It needs no mention that we house a variety of merchandise
              abounding in fashionable and latest collections including Men’s
              wear, women’s wear, accessories, Kid’s wear that would make you
              redefine your fashion statement and flaunt your unparalleled
              fashion choices which would make you stand out among the crowd!
              All you need to do is visit our official website and scroll
              through thousands of options from a plethora of reputed brands
              including Home Décor.
            </Text>

            <Text fontWeight="500">Here are some you need to hear about:</Text>
            <Text fontWeight="500">Smart Men’s Clothing</Text>

            <Text>
              As conveyed before, the options are innumerable. Be it a wedding,
              an office party or a family get-together, or a dinner date, plan
              your outfit and choose according to your preferences and we have
              you deliver your favorite product on time. The options in Men’s
              clothing range from formal shirts, T-shirts, trousers, jeans,
              kurtas, pajamas, and many more.
            </Text>

            <Text>
              Formal as well as informal men’s wear are available in all styles
              that are widely acknowledged as fashionable by experts and
              stylists, including checked, solid-colored, windowpane style,
              cuffed, buffalo style, or gingham. Couple these with comfortable
              undergarments to bring out the best in your outfit and slay.
            </Text>

            <Text>
              Our myriad options in kurtas and Sherwanis for men come with
              attractive colors and the latest style that would boost your
              celebration mood. Perfection is indeed an attractive thing in
              itself, and your outfit defines how perfectly you like to present
              yourself! Browse through our Men’s wear collections and order now.
            </Text>

            <Text fontWeight="500">Smart Women’s Clothing</Text>
            <Text>
              If you are a person for whom buying fashion clothing becomes a
              mood elevator for you, then you have decided to resort to the
              right website for yourself. We offer almost all you need to check
              out before deciding to buy one. There are a plethora of options
              irrespective of what you are planning to shop for, be it for
              summer, a date, a party, or a wedding. Collections abound in both
              traditional and western wear. Varieties include dresses, sarees,
              lehenga choli, striped dresses, Little Black Dress, off the
              shoulder, shirt-style, blouson, embroidered and peplum tops, and
              many more.
            </Text>

            <Text>
              We also offer branded and quality jeans to team up with tops or
              kurtas which look smart as trendy fusion wear. Skirts and Palazzos
              are also good options to choose from. Comfortable regular office
              wear, as well as inner wear for women, has also caught the
              attention of customers on our website.
            </Text>

            <Text>
              Apart from clothing, the website is one of the top online shopping
              sites in India for clothes that offer matching accessories to go
              with your chosen outfit, be it a trendy heel, or a chandbali to go
              with your Anarkali.
            </Text>

            <Text fontWeight="500">Smart Kid’s wear</Text>
            <Text>
              Special attention and care need to be invested while offering a
              kid's collection on a particular website that would be comfortable
              and at the same time delight the little ones with utmost joy and
              fun. For this, we have several cartoons designed t-shirts,
              t-shirts painted with their favorite superhero, favorite team
              jerseys, comfortable cotton t-shirts with playful and lively
              colors, attractive dresses for your little princess, and many more
              that would create memories to cherish.
            </Text>

            <Text fontWeight="500">Benefits of shopping with Pantaloons</Text>
            <Text>
              Online clothes shopping with Pantaloons not only offers
              customer-friendly as well as budget-friendly spicks but also
              detailed descriptions of the chosen product are displayed right
              under the outfit encompassing its size, color, material, its
              brand, and easy return policies.{" "}
            </Text>
            <Text>
              Shop your heart out for the sky's the limit! Visit our online
              shopping websites where we deliver you at our earliest along with
              our doorstep facilities. Online clothes shopping at Pantaloons has
              become more loveable due to the seasonal discounts and special
              offers allowed to our loving customers.
            </Text>

            <Text fontWeight="500">Pantaloons App</Text>
            <Text>
              Online clothes shopping websites have undoubtedly offered
              customer-friendly services but we are different concerning some of
              the most engaging customer-oriented specifications, with the
              flexibility to choose your payment options through debit, credit,
              Net banking, or UPI. The detailed, collective charts,
              high-resolution images, perfect size charts according to body
              fittings as well as flexible selection process have made our
              customers feel special about us. Moreover, the easy and convenient
              return policy is something that has made us one of the top online
              shopping sites in India.
            </Text>
            <Text>
              Now shop hassle-free from the comfort of your couch or your office
              and get your outfits delivered carefully by our delivery agents
              along with the feature of cash on delivery with our online
              clothing stores. We also have gift options to satisfy your loved
              ones during your busy days. Visit our online shopping websites and
              scroll through our online clothing stores for the latest and most
              fashionable outfits.
            </Text>
          </Flex>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>
              © Aditya Birla Fashion & Retail Limited. All rights reserved
            </Text>
            <SimpleGrid columns={{ base: 3, sm: 5, md: 8 }} spacing={6}>
              <Image
                src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/paymentoptions/visa.jpg?q=75&auto=format"
                w="50px"
              />
              <Image
                src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/paymentoptions/mastercard.jpg?q=75&auto=format"
                w="50px"
              />
              <Image
                src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/paymentoptions/upi.jpg?q=75&auto=format"
                w="50px"
              />
              <Image
                src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/paymentoptions/cashondelivery.svg"
                w="50px"
              />
              <Image
                src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/paymentoptions/truste.jpg?q=75&auto=format"
                w="50px"
              />
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
