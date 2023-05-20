import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

import { VscAccount, VscHeart } from "react-icons/vsc";
import { TfiBag } from "react-icons/tfi";
import { menuProps, navMenuProps } from "./const.components";
import MenuPopover from "./MenuPopover";
import UserInfo from "./UserInfo";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useEffect } from "react";
import { getCartProductsApi } from "../redux/carts/carts.actions";

// menu popover details
const women: menuProps = {
  title: "WOMEN",
  menu: {
    box1: [
      {
        id: 1,
        title: "WESTERN WEAR",
        options: [
          "Tees & Tops",
          "Shirts & Blouses",
          "Dresses & Jumpsuits",
          "Suits & Blazers",
          "Sweaters & Sweatshirts",
          "Shrugs",
          "Jackets",
          "Trousers",
          "Jeans",
          "Shorts",
          "Culottes & Capris",
          "Tracks & Joggers",
          "Skirts",
        ],
      },
      {
        id: 2,
        title: "ETHNIC WEAR",
        options: [
          "Kurtas",
          "Kurtis & Tunics",
          "Tops & Cholis",
          "Kurta Sets",
          "Dresses",
          "Dupattas",
          "Leggings",
          "Skirts & Lehengas",
          "Pants & Palazzos",
          "Churidars & Salwars",
          "SARIS",
          "Winter Kurta",
        ],
      },
      {
        id: 3,
        title: "FOOTWEAR",
        options: [
          "Ballerina",
          "Flip Flops",
          "Sandals",
          "Heels",
          "Sneakers & Sports Shoes",
          "Casual Shoes",
          "Loafers",
        ],
      },
      {
        id: 4,
        title: "HANDBAGS",
        options: ["INNER WEAR", "SLEEPWEAR", "ATHLEISURE", "MASKS", "Beauty"],
      },
    ],
    box2: [
      {
        title: "NEW ARRIVALS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1631080475_tops.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1631106933_newarrivalswomen-jeans.jpg",
          },
        ],
      },
      {
        title: "SHOP BY OCCASION",
        tags: ["Casual", "Work Wear", "Festive", "Party"],
      },
      {
        title: "SHOP BY BRANDS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632143381_AjileWomen.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460202_Womens-Logos-Akkriti.jpg",
          },
          {
            id: 3,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459907_Womens-Logos-Annabelle.jpg",
          },
          {
            id: 4,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460134_Womens-Logos-Bare.jpg",
          },
          {
            id: 5,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632193607_Dreamz.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460023_Womens-Logos-Rangmanch.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460848_Womens-Logos-W.jpg",
          },
          {
            id: 7,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459710_Womens-Logos-SF.jpg",
          },
          {
            id: 8,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460706_Womens-Logos-People.jpg",
          },
          {
            id: 9,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459854_Womens-Logos-Aurelia.jpg",
          },
        ],
      },
    ],
  },
};

const men: menuProps = {
  title: "MEN",
  menu: {
    box1: [
      {
        id: 1,
        title: "TOP WEAR",
        options: [
          "T-shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Party Shirts",
          "Jackets",
          "Sweaters & Sweatshirts",
        ],
      },
      {
        id: 2,
        title: "BOTTOM WEAR",
        options: [
          "Shorts",
          "Jeans",
          "Casual Trousers",
          "Formal Trousers",
          "Tracks & Joggers",
        ],
      },
      {
        id: 3,
        title: "ETHNIC WEAR",
        options: ["Kurtas", "Pyjamas & Salwar"],
      },
      {
        id: 4,
        title: "ATHLEISURE",
        options: ["BAGS", "MASKS", "INNERWEAR", "FOOTWEAR", "BELTS"],
      },
    ],
    box2: [
      {
        title: "NEW ARRIVALS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1631079309_sleepwear.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1631079364_tshirts.jpg",
          },
        ],
      },
      {
        title: "SHOP BY OCCASION",
        tags: ["Casual", "Work Wear", "Festive", "Party"],
      },
      {
        title: "SHOP BY BRANDS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632143381_AjileWomen.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460202_Womens-Logos-Akkriti.jpg",
          },
          {
            id: 3,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459907_Womens-Logos-Annabelle.jpg",
          },
          {
            id: 4,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460134_Womens-Logos-Bare.jpg",
          },
          {
            id: 5,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632193607_Dreamz.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460023_Womens-Logos-Rangmanch.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460848_Womens-Logos-W.jpg",
          },
          {
            id: 7,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459710_Womens-Logos-SF.jpg",
          },
          {
            id: 8,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460706_Womens-Logos-People.jpg",
          },
          {
            id: 9,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459854_Womens-Logos-Aurelia.jpg",
          },
        ],
      },
    ],
  },
};

const kids: menuProps = {
  title: "KIDS",
  menu: {
    box1: [
      {
        id: 1,
        title: "BOYS",
        options: [
          "T-Shirts",
          "Shirts",
          "Jackets",
          "Sweaters & Sweatshirts",
          "Shorts",
          "Jeans",
          "Tracks & Joggers",
          "Trousers",
          "Sleepwear",
          "Ethnic wear",
          "FOOTWEAR",
        ],
      },
      {
        id: 2,
        title: "GIRLS",
        options: [
          "T-shirts, Tops & Blouses",
          "Jackets",
          "Sweaters & Sweatshirts",
          "Dresses & Dungarees",
          "Shorts & Skirts",
          "Jeans & Trousers",
          "Leggings & Jeggings",
          "Tracks & Joggers",
          "Sleepwear",
          "Ethnic wear",
          "FOOTWEAR",
        ],
      },
      {
        id: 3,
        title: "BABY",
        options: [
          "Bodysuits & Sleepsuits",
          "Coordinate Sets",
          "T-shirts & Tops",
          "Shorts",
          "Jeans & Trousers",
          "Leggings",
          "Dresses",
          "Winter wear",
          "Baby Clothing accessories",
        ],
      },
      {
        id: 4,
        title: "CHARACTER SHOP",
        options: ["Mickey & Minnie", "Disney Princess"],
      },
    ],
    box2: [
      {
        title: "NEW ARRIVALS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1672379668_NewArrivals_Kids_Activewear.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1631080185_dresses.jpg",
          },
        ],
      },
      {
        title: "SHOP BY OCCASION",
        tags: ["Casual", "Work Wear", "Festive", "Party"],
      },
      {
        title: "SHOP BY BRANDS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632143381_AjileWomen.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460202_Womens-Logos-Akkriti.jpg",
          },
          {
            id: 3,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459907_Womens-Logos-Annabelle.jpg",
          },
          {
            id: 4,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460134_Womens-Logos-Bare.jpg",
          },
          {
            id: 5,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632193607_Dreamz.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460023_Womens-Logos-Rangmanch.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460848_Womens-Logos-W.jpg",
          },
          {
            id: 7,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459710_Womens-Logos-SF.jpg",
          },
          {
            id: 8,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460706_Womens-Logos-People.jpg",
          },
          {
            id: 9,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459854_Womens-Logos-Aurelia.jpg",
          },
        ],
      },
    ],
  },
};

const homedecor: menuProps = {
  title: "HOME",
  menu: {
    box1: [
      {
        id: 1,
        title: "DECOR",
        options: [
          "Candles & Votives",
          "Vases",
          "Decorative Boxes & Platters",
          "Table Accessories",
          "Plants & Planters",
        ],
      },
      {
        id: 2,
        title: "LIVING",
        options: ["Cushion Covers & Fillers", "Rugs"],
      },
      {
        id: 3,
        title: "DINING",
        options: ["Table Cloth", "Runners", "Placemat"],
      },
      {
        id: 4,
        title: "BATH",
        options: ["Bath Mat", "Bath Towels", "Face Towels"],
      },
      {
        id: 5,
        title: "BED",
        options: [
          "Bed Sheet Sets",
          "Bed Cover",
          "Pillow Cover",
          "Dohar",
          "Quilts",
        ],
      },
    ],
    box2: [
      {
        title: "NEW ARRIVALS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/img/app/product/7/732508-8152992.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/img/app/product/6/696843-7465328.jpg",
          },
        ],
      },
      {
        title: "SHOP BY OCCASION",
        tags: ["Casual", "Work Wear", "Festive", "Party"],
      },
      {
        title: "SHOP BY BRANDS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632143381_AjileWomen.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460202_Womens-Logos-Akkriti.jpg",
          },
          {
            id: 3,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459907_Womens-Logos-Annabelle.jpg",
          },
          {
            id: 4,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460134_Womens-Logos-Bare.jpg",
          },
          {
            id: 5,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632193607_Dreamz.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460023_Womens-Logos-Rangmanch.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460848_Womens-Logos-W.jpg",
          },
          {
            id: 7,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459710_Womens-Logos-SF.jpg",
          },
          {
            id: 8,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460706_Womens-Logos-People.jpg",
          },
          {
            id: 9,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459854_Womens-Logos-Aurelia.jpg",
          },
        ],
      },
    ],
  },
};

const accessories: menuProps = {
  title: "ACCESSORIES",
  menu: {
    box1: [
      {
        id: 1,
        title: "BAGS",
        options: [
          "Cross Body Bags",
          "Mini Bags",
          "Tote Bags",
          "Men Backpacks",
          "Women Backpacks",
          "Clutches",
          "Women Wallets",
          "Men Wallets",
        ],
      },
      {
        id: 2,
        title: "WOMEN FOOTWEAR",
        options: [
          "Ballerinas",
          "Flip Flops",
          "Sandals",
          "Heels",
          "Sneakers & Sports Shoes",
          "Casual Shoes",
          "Loafers",
        ],
      },
      {
        id: 3,
        title: "MEN FOOTWEAR",
        options: ["Flip Flops", "Sneakers & Sports Shoes", "Casual Shoes"],
      },
      {
        id: 4,
        title: "BOYS FOOTWEAR",
        options: ["Sports Shoes", "Character Shoes", "Sandals", "Flip Flops"],
      },
      {
        id: 5,
        title: "GIRLS FOOTWEAR",
        options: [
          "Ballerina",
          "Character Shoes",
          "Sports Shoes",
          "Sandals",
          "Flip Flops",
        ],
      },
    ],
    box2: [
      {
        title: "NEW ARRIVALS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/img/app/product/6/608207-5729632.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/img/app/product/7/787320-9195451.jpg",
          },
        ],
      },
      {
        title: "SHOP BY OCCASION",
        tags: ["Casual", "Work Wear", "Festive", "Party"],
      },
      {
        title: "SHOP BY BRANDS",
        images: [
          {
            id: 1,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632143381_AjileWomen.jpg",
          },
          {
            id: 2,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460202_Womens-Logos-Akkriti.jpg",
          },
          {
            id: 3,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459907_Womens-Logos-Annabelle.jpg",
          },
          {
            id: 4,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460134_Womens-Logos-Bare.jpg",
          },
          {
            id: 5,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632193607_Dreamz.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460023_Womens-Logos-Rangmanch.jpg",
          },
          {
            id: 6,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460848_Womens-Logos-W.jpg",
          },
          {
            id: 7,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459710_Womens-Logos-SF.jpg",
          },
          {
            id: 8,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460706_Womens-Logos-People.jpg",
          },
          {
            id: 9,
            img: "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459854_Womens-Logos-Aurelia.jpg",
          },
        ],
      },
    ],
  },
};

// values
const menu: navMenuProps[] = [
  {
    id: 1,
    to: "/women",
    title: "WOMEN",
    popover: (
      <MenuPopover
        menu={women}
        left={{ base: "10%", sm: "14%", md: "10%", lg: "14%" }}
      />
    ),
  },
  {
    id: 2,
    to: "/men",
    title: "MEN",
    popover: (
      <MenuPopover
        menu={men}
        left={{ base: "10%", sm: "14%", md: "10%", lg: "14%" }}
      />
    ),
  },
  {
    id: 3,
    to: "/kids",
    title: "KIDS",
    popover: (
      <MenuPopover
        menu={kids}
        left={{ base: "10%", sm: "3%", md: "10%", lg: "14%" }}
      />
    ),
  },
  {
    id: 4,
    to: "/homedecor",
    title: "HOME",
    popover: (
      <MenuPopover
        menu={homedecor}
        left={{ base: "10%", sm: "-7%", md: "9%", lg: "12%" }}
      />
    ),
  },
  {
    id: 5,
    to: "/accessories",
    title: "ACCESSORIES",
    popover: (
      <MenuPopover
        menu={accessories}
        left={{ base: "10%", sm: "-10%", md: "-2%", lg: "2%" }}
      />
    ),
  },
  { id: 6, to: "/brands", title: "BRANDS" },
];

// Main component
const TabDeskNavbar = () => {
  const { token } = useAppSelector((store) => store.authManager);
  const { data } = useAppSelector((store) => store.cartManager);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartProductsApi(token));
  }, []);

  return (
    <Flex
      w="100%"
      bgColor={navStyles.bgColor}
      color={navStyles.color}
      px={{ base: "0.5em", md: "1em", lg: "3em", xl: "8em" }}
      py="1em"
      fontSize={{ base: "1em", sm: "0.7em", md: "0.8em", lg: "1em" }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        end
      >
        <Image
          src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/icons/logo_pantaloons.svg"
          w="10em"
        />
      </NavLink>

      {menu?.map((el) => (
        <NavLink
          key={el.id}
          to={el.to}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          end
        >
          {el.popover ? (
            el.popover
          ) : (
            <Text _hover={{ textDecoration: "underline" }}>{el.title}</Text>
          )}
        </NavLink>
      ))}

      <Box w="15em" display={{ base: "none", md: "block" }}>
        <Search />
      </Box>

      <Flex gap="1.5em" alignItems={token ? "center" : ""}>
        {token ? (
          <UserInfo />
        ) : (
          <NavLink to="/signup" end>
            <Icon as={VscAccount} boxSize={iconBoxSize} cursor="pointer" />
          </NavLink>
        )}

        <NavLink to="/wishlist" end>
          <Icon
            as={VscHeart}
            boxSize={iconBoxSize}
            display={iconDisplay}
            cursor="pointer"
          />
        </NavLink>
        <NavLink to="/cart" end>
          <Icon
            as={TfiBag}
            boxSize={iconBoxSize}
            display={iconDisplay}
            cursor="pointer"
          />
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default TabDeskNavbar;

// styles
const navStyles = {
  bgColor: "#00b0b5",
  color: "#fff",
};

const iconBoxSize = { base: "1.5em", sm: "1.4em", md: "1.4em", lg: "1.2em" };
const iconDisplay = { base: "none", md: "block" };
