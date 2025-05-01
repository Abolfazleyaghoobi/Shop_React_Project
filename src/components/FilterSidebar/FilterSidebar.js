import { useEffect, useRef, useState } from "react";
import "./FilterSidebar.css";
// * react icons

import PlusIcons from "../../assets/img/icons/icons8_Plus.svg";
// * react-bootstrap
import Accordion from "react-bootstrap/Accordion";
// 1 gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// 1 register gsap animation
gsap.registerPlugin(useGSAP);
function FilterSidebar() {
  //%+++START SUBMENU++++ 
  //@  state management
  const [CategoriesSpecialValue, setCategoriesSpecialValue] = useState(false);
  const [heightBox, setHeightBox] = useState({
    Men: 0,
    Women: 0,
    Kids: 0,
  });
  const [isShowBox, setIsShowBox] = useState({
    Men: false,
    Women: false,
    Kids: false,
  });
  //@ useRef management
  const boxSubMenuRefMen = useRef(null);
  const boxSubMenuRefWomen = useRef(null);
  const boxSubMenuRefKids = useRef(null);
  // @ icons
  const boxSubMenuIconMen = useRef(null);
  const boxSubMenuIconWomen = useRef(null);
  const boxSubMenuIconKids = useRef(null);
  //@ Submenu visibility status
  function toggleBoxVisibility(
    targetEL,
    nodeName,
    height,
    padding,
    marginBottom
  ) {
    if (nodeName === "Men" || nodeName === "Women" || nodeName === "Kids") {
      // انیمیشن باز شدن زیرمنو
      gsap.to(targetEL, {
        height: height,
        padding: padding,
        marginBottom: marginBottom,
        ease: "power1.inOut",
        duration: 0.4,
      });
    }
  }
  //@ useEffect for set height of submenu
  useEffect(() => {
    if (boxSubMenuRefMen.current) {
      setHeightBox((prev) => ({
        ...prev,
        Men: boxSubMenuRefMen.current.scrollHeight,
      }));
    }
    if (boxSubMenuRefWomen.current) {
      setHeightBox((prev) => ({
        ...prev,
        Women: boxSubMenuRefWomen.current.scrollHeight,
      }));
    }
    if (boxSubMenuRefKids.current) {
      setHeightBox((prev) => ({
        ...prev,
        Kids: boxSubMenuRefKids.current.scrollHeight,
      }));
    }
  }, [isShowBox]);
  //@  use hook for gsap animation
  const { contextSafe } = useGSAP();
  const toggleSubMenu = contextSafe((submenuType) => {
 
    setIsShowBox((prev) => ({
      ...prev,
      [submenuType]: !prev[submenuType], 
    }));


    const iconRef =
      submenuType === "Men"
        ? boxSubMenuIconMen
        : submenuType === "Women"
        ? boxSubMenuIconWomen
        : boxSubMenuIconKids;

    const submenuRef =
      submenuType === "Men"
        ? boxSubMenuRefMen
        : submenuType === "Women"
        ? boxSubMenuRefWomen
        : boxSubMenuRefKids;

    if (isShowBox[submenuType]) {

      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.4,
      });
      toggleBoxVisibility(submenuRef.current, submenuType, "0px", "0px", "0px");
    } else {

      gsap.to(iconRef.current, {
        rotate: 40,
        duration: 0.4,
      });
      toggleBoxVisibility(
        submenuRef.current,
        submenuType,
        `${heightBox[submenuType]}px`, 
        "5px 10px",
        "7px"
      );
    }
  });
 // % checkboxes Handler
 const specialCheckboxHandler = (e) => {
  setCategoriesSpecialValue(e.target.value);
};
//@+++END SUBMENU++++ 

//  TODO add data to submenus
  return (
    <Accordion defaultActiveKey="0">
      {/* products categories */}
      <Accordion.Item eventKey="1">
        <Accordion.Header className="p-0">Products Categories</Accordion.Header>
        {/* content  */}
        <Accordion.Body>
          <div className="checkbox-container">
            <input
              onChange={specialCheckboxHandler}
              checked={CategoriesSpecialValue === "All" ? true : false}
              type="checkbox"
              value="All"
              id=""
            />
            <label htmlFor="All">All</label>
          </div>
          {/* men */}
          <div className="checkbox-container d-flex align-content-center justify-content-between">
            <div>
              <input
                onChange={specialCheckboxHandler}
                checked={CategoriesSpecialValue === "Men" ? true : false}
                type="checkbox"
                value="Men"
                id=""
              />
              <label htmlFor="Men">Men</label>
            </div>
            <div
              id="iconSubMen"
              className="iconSubMen1"
              ref={boxSubMenuIconMen}
              onClick={() => toggleSubMenu("Men")}
            >
              <img src={PlusIcons} alt="Men" />
            </div>
          </div>
          {/* submenu */}
          <div ref={boxSubMenuRefMen} className="submenu-container">
            <div className="checkbox-container">
              <input
                onChange={specialCheckboxHandler}
                checked={CategoriesSpecialValue === "Suit" ? true : false}
                type="checkbox"
                value="Suit"
                id="Suit"
              />
              <label htmlFor="Suit">Suit</label>
            </div>
            <div className="checkbox-container">
              <input
                onChange={specialCheckboxHandler}
                checked={CategoriesSpecialValue === "T-Shirt" ? true : false}
                type="checkbox"
                value="T-Shirt"
                id="T-Shirt"
              />
              <label htmlFor="T-Shirt">T-Shirt</label>
            </div>
          </div>
          {/* women */}
          <div className="checkbox-container d-flex align-content-center  justify-content-between">
            <div>
              <input
                onChange={specialCheckboxHandler}
                checked={CategoriesSpecialValue === "Women" ? true : false}
                type="checkbox"
                value="Women"
                id=""
              />
              <label htmlFor="Women">Women</label>
            </div>
            <div
              ref={boxSubMenuIconWomen}
              onClick={() => toggleSubMenu("Women")}
              className="iconSubMen1"
            >
              <img src={PlusIcons} alt="Women" />
            </div>
          </div>
          {/* submenu */}
          <div ref={boxSubMenuRefWomen} className="submenu-container">
            <div className="checkbox-container">
              <input
                onChange={specialCheckboxHandler}
                checked={
                  CategoriesSpecialValue === "comfort wear" ? true : false
                }
                type="checkbox"
                value="comfort wear"
                id="comfort wear"
              />
              <label htmlFor="comfort wear">comfort wear</label>
            </div>
            <div className="checkbox-container">
              <input
                onChange={specialCheckboxHandler}
                checked={
                  CategoriesSpecialValue === "Evening dress" ? true : false
                }
                type="checkbox"
                value="Evening dress"
                id="Evening dress"
              />
              <label htmlFor="Evening dress">Evening dress</label>
            </div>
          </div>
          {/* kids */}
          <div className="checkbox-container d-flex align-content-center justify-content-between">
            <div>
              <input
                onChange={specialCheckboxHandler}
                checked={CategoriesSpecialValue === "Kids" ? true : false}
                type="checkbox"
                value="Kids"
                id=""
              />
              <label htmlFor="Kids">Kids</label>
            </div>
            <div
              className="iconSubMen1"
              ref={boxSubMenuIconKids}
              onClick={() => toggleSubMenu("Kids")}
            >
              <img src={PlusIcons} alt="Kids" />
            </div>
          </div>
          {/* submenu */}
          <div ref={boxSubMenuRefKids} className="submenu-container">
            <div className="checkbox-container">
              <input
                onChange={specialCheckboxHandler}
                checked={
                  CategoriesSpecialValue === "Fairy Dress" ? true : false
                }
                type="checkbox"
                value="Fairy Dress"
                id="Fairy Dress"
              />
              <label htmlFor="Fairy Dress">Fairy Dress</label>
            </div>
            <div className="checkbox-container">
              <input
                onChange={specialCheckboxHandler}
                checked={CategoriesSpecialValue === "comfort" ? true : false}
                type="checkbox"
                value="comfort"
                id="comfort"
              />
              <label htmlFor="T-Shirt">comfort</label>
            </div>
          </div>
          {/* _________________________________ */}
          <div className="checkbox-container">
            <input
              onChange={specialCheckboxHandler}
              checked={CategoriesSpecialValue === "Bags" ? true : false}
              type="checkbox"
              value="Bags"
              id=""
            />
            <label htmlFor="Bags">Bags</label>
          </div>
          <div className="checkbox-container">
            <input
              onChange={specialCheckboxHandler}
              checked={CategoriesSpecialValue === "Belts" ? true : false}
              type="checkbox"
              value="Belts"
              id=""
            />
            <label htmlFor="Belts">Belts</label>
          </div>
          <div className="checkbox-container">
            <input
              onChange={specialCheckboxHandler}
              checked={CategoriesSpecialValue === "Wallets" ? true : false}
              type="checkbox"
              value="Wallets"
              id=""
            />
            <label htmlFor="Wallets">Wallets</label>
          </div>
          <div className="checkbox-container">
            <input
              onChange={specialCheckboxHandler}
              checked={CategoriesSpecialValue === "Watches" ? true : false}
              type="checkbox"
              value="Watches"
              id=""
            />
            <label htmlFor="Watches">Watches</label>
          </div>
          <div className="checkbox-container">
            <input
              onChange={specialCheckboxHandler}
              checked={CategoriesSpecialValue === "WinterWear" ? true : false}
              type="checkbox"
              value="WinterWear"
              id=""
            />
            <label htmlFor="WinterWear">WinterWear</label>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="p-0 ">Filter by Price</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FilterSidebar;
