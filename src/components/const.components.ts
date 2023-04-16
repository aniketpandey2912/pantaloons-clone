// navbar
export type navMenuProps = {
  id: number;
  to: string;
  title: string;
  icon?: any;
  popover?: any;
};

// popover props
export type box1Props = {
  id: number | string;
  title: string;
  options: string[];
};

export type box2Props1 = {
  title: string;
  images?: { id: string | Number; img: string }[];
  tags?: string[];
};

export type menuProps = {
  title: string;
  menu: {
    box1: box1Props[];
    box2: box2Props1[];
  };
};

// Carousel images props
export type carouselProps = {
  images: { id: number | string; img: string }[];
};
