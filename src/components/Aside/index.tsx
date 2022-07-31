import React, { useState } from "react";
import css from "./styles.module.css";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { Tooltip } from "@chakra-ui/react";

function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className={css.aside}>
        {/* <article className={css.sidebar}> */}
        <GiHamburgerMenu onClick={() => setIsOpen((old) => !old)} />
        <ul className={isOpen ? css.itemVisible : css.item}>
        {/*   <li>
            <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
              <AiOutlineHome />
            </Tooltip>
          </li> */}

          {/* <li>
              <Link to={""}>
                <AiOutlineHome />
              </Link>
            </li>

            <li>
              <Link to={""}>
                <AiOutlineHome />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <FaRegEdit />
              </Link>
            </li> */}
        </ul>
        {/* </article> */}
      </aside>
    </>
  );
}

export { Aside };
