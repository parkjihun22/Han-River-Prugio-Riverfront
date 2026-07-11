// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>현장명</strong>
          <span>한강 푸르지오 리버프론트</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>김포시 고촌읍 향산리 588-45번지 일원</span>
        </li>

        <li>
          <strong>공동주택</strong>
          <span>
            총 2,432세대 / 지하 4층 ~ 지상 38층 / 총 12개동
          </span>
        </li>

        <li>
          <strong>오피스텔</strong>
          <span>
            총 250실 / 지하 2층 ~ 지상 27층 / 총 1개동
          </span>
        </li>

        <li>
          <strong>공동주택 주택형</strong>
          <span>전용 84㎡ · 106㎡ · 122㎡ · 180㎡ PH</span>
        </li>

        <li>
          <strong>오피스텔 주택형</strong>
          <span>전용 84㎡ · 90㎡</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="한강 푸르지오 리버프론트 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="한강 푸르지오 리버프론트 지북동 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
{/* 프리미엄 섹션 상단 문단 */}
<div className={styles.premiumIntro}>
  <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
  <p className={styles.premiumSubtitle}>
    고덕국제신도시의 프리미엄을 담은<br />
    한강 푸르지오 리버프론트 라이프
  </p>
</div>

{/* 슬라이더 */}
<PremiumSlider />
</>
),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "고덕국제신도시 프리미엄 입지",
      desc:
        "경기도 평택시 고덕 국제화계획지구 내 Abc-36블록<br/>우수한 생활 인프라와 미래가치를 갖춘 입지<br/>한강 푸르지오 리버프론트의 새로운 주거 가치",
    },
    {
      img: slide2,
      title: "84㎡ · 94㎡ · 101㎡ · 111㎡ 구성",
      desc:
        "다양한 라이프스타일을 고려한 중대형 평면<br/>실용성과 공간 활용을 높인 특화 설계<br/>품격 있는 프리미엄 주거공간",
    },
    {
      img: slide3,
      title: "총 743세대 브랜드 대단지",
      desc:
        "총 743세대 규모의 프리미엄 아파트<br/>쾌적한 단지 설계와 효율적인 공간 배치<br/>한강 푸르지오 리버프론트",
    },
    {
      img: slide4,
      title: "생활·교통 인프라를 모두 누리다",
      desc:
        "고덕국제신도시 생활권의 다양한 인프라<br/>편리한 교통과 풍부한 생활환경<br/>더욱 편안한 프리미엄 라이프",
    },
    {
      img: slide5,
      title: "우미건설 브랜드 프리미엄",
      desc:
        "우미건설의 브랜드 노하우를 담은 주거공간<br/>품격 있는 설계와 편리한 생활환경 제공<br/>한강 푸르지오 리버프론트",
    },
    {
      img: slide6,
      title: "미래가치를 품은 새로운 선택",
      desc:
        "고덕국제신도시의 미래가치를 함께 누리는 입지<br/>실거주와 미래가치를 모두 고려한 프리미엄 아파트<br/>한강 푸르지오 리버프론트",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>PYEONGTAEK GODEOK WOOMIRIN</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="한강 푸르지오 리버프론트 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
