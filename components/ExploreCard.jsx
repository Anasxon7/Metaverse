'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index,
   active, handleClick}) => (

    <motion.div
    variants={fadeIn('right', 'spring', index * 0.5)}
    className={`relative ${active === id ? 'lg:dlex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}
    flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s]
    ease-out-flex cursor-pointer`}
    >
      Explore Card
    </motion.div>
);

export default ExploreCard;
