import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "한강을 품은 프리미엄 입지<br />김포의 새로운 랜드마크",
    contentText:
      "김포시 고촌읍 향산리 일원에 조성되는 한강 푸르지오 리버프론트<br />한강 조망과 도심 생활을 함께 누리는 프리미엄 주거환경",
  },
  {
    img: section2Image2,
    titleText: "서울과 김포를 잇는<br />우수한 광역 교통망",
    contentText:
      "김포한강로와 올림픽대로 등 주요 도로망을 편리하게 이용하고<br />서울 접근성이 뛰어난 교통 프리미엄을 누릴 수 있습니다.",
  },
  {
    img: section2Image3,
    titleText: "생활을 더욱 편리하게 하는<br />풍부한 생활 인프라",
    contentText:
      "쇼핑과 문화, 교육, 의료시설 등 다양한 생활 인프라를 가까이 누리며<br />일상의 편리함을 높여주는 주거환경을 제공합니다.",
  },
  {
    img: section2Image4,
    titleText: "자연과 도심이 공존하는<br />쾌적한 주거환경",
    contentText:
      "한강과 주변 녹지공간이 어우러진 자연환경 속에서<br />도심의 편의성과 여유로운 일상을 함께 누릴 수 있습니다.",
  },
  {
    img: section2Image5,
    titleText: "대우건설 푸르지오가 만드는<br />브랜드 프리미엄",
    contentText:
      "차별화된 설계와 상품성, 브랜드 노하우를 바탕으로<br />한강 푸르지오 리버프론트만의 품격 있는 라이프를 제안합니다.",
  },
  {
    img: section2Image6,
    titleText: "총 2,432세대<br />랜드마크 대단지",
    contentText:
      "공동주택 총 2,432세대 규모의 프리미엄 브랜드 단지로<br />김포를 대표하는 새로운 랜드마크 주거공간을 선보입니다.",
  },
];
const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>삼성 평택캠퍼스와 함께 성장하는</div>
  <div>고덕국제신도시 프리미엄 라이프</div>
  <div>한강 푸르지오 리버프론트가 새로운 주거 가치를 완성합니다.</div>
</div>
      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="한강 푸르지오 리버프론트 입지환경과 지북동 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "한강 푸르지오 리버프론트 입지환경과 지북동 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `한강 푸르지오 리버프론트 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
