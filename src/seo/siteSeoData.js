const SITE_URL = "https://pyeongtaekgodeok-umirin.co.kr/";

export const siteSeo = {
  siteName: "한강 푸르지오 리버프론트",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "한강 푸르지오 리버프론트 분양 안내 홈페이지입니다. 김포시 고촌읍 향산리 588-45번지 일원에 조성되는 공동주택 총 2,432세대와 오피스텔 250실 규모의 대단지로, 전용 84㎡·106㎡·122㎡·180㎡ PH 평면, 입지환경, 공급정보, 분양 일정과 모델하우스 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "김포시",
    streetAddress: "고촌읍 향산리 588-45번지 일원",
    brands: [
      "한강 푸르지오 리버프론트",
      "푸르지오",
      "대우건설",
    ],
    navigationSchemaName: "한강 푸르지오 리버프론트 주요 메뉴",
  },

  keywords: [
    "한강 푸르지오 리버프론트",
    "한강 푸르지오 리버프론트 분양",
    "한강 푸르지오 리버프론트 모델하우스",
    "한강 푸르지오 리버프론트 견본주택",
    "한강 푸르지오 리버프론트 방문예약",
    "한강 푸르지오 리버프론트 공급정보",
    "한강 푸르지오 리버프론트 청약",
    "한강 푸르지오 리버프론트 분양가",
    "한강 푸르지오 리버프론트 평면도",
    "한강 푸르지오 리버프론트 입지환경",
    "한강 푸르지오 리버프론트 커뮤니티",
    "한강 푸르지오 리버프론트 2432세대",
    "한강 푸르지오 리버프론트 오피스텔",
    "김포 한강 푸르지오",
    "김포 푸르지오 리버프론트",
    "김포 고촌 아파트",
    "김포 고촌 아파트 분양",
    "김포 고촌 신축아파트",
    "김포 향산리 아파트",
    "고촌읍 향산리 588-45",
    "김포 대단지 아파트",
    "김포 한강변 아파트",
    "한강 조망 아파트",
    "김포 푸르지오",
    "고촌 푸르지오",
    "대우건설 푸르지오",
    "한강 푸르지오 리버프론트 84㎡",
    "한강 푸르지오 리버프론트 106㎡",
    "한강 푸르지오 리버프론트 122㎡",
    "한강 푸르지오 리버프론트 180㎡ PH",
    "한강 푸르지오 리버프론트 오피스텔 84㎡",
    "한강 푸르지오 리버프론트 오피스텔 90㎡",
    "모델하우스 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      { name: "호수배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "입주자 모집공고", path: "/SalesInfo/announcement" },
      { name: "계약서류안내", path: "/SalesInfo/guide" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "84㎡", path: "/FloorPlan/59A" },
      { name: "106㎡", path: "/FloorPlan/59B" },
      { name: "122㎡", path: "/FloorPlan/84A" },
      { name: "180㎡ PH", path: "/FloorPlan/84B" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "한강 푸르지오 리버프론트",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 브랜드소개 페이지입니다. 대우건설 푸르지오의 주거 철학과 브랜드 가치, 김포 고촌에서 선보이는 한강변 대단지의 차별화된 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 홍보영상 페이지입니다. 한강을 가까이 누리는 입지와 공동주택 총 2,432세대 대단지, 푸르지오 브랜드 프리미엄을 영상으로 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 사업안내 페이지입니다. 김포시 고촌읍 향산리 588-45번지 일원, 공동주택 총 2,432세대와 오피스텔 250실로 조성되는 대규모 주거단지의 사업개요를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 분양일정 안내입니다. 특별공급과 일반공급, 당첨자 발표, 서류접수, 계약 일정 등 공동주택과 오피스텔의 주요 공급 일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 공급안내 페이지입니다. 공동주택 2,432세대와 오피스텔 250실의 공급 규모, 전용 84㎡·106㎡·122㎡·180㎡ PH 및 오피스텔 84㎡·90㎡ 주택형 정보를 확인하세요.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 입주자모집공고 안내 페이지입니다. 공급 대상과 청약 자격, 공급 일정, 주택형, 계약 조건 및 유의사항 등 청약 전 확인해야 할 공고 정보를 제공합니다.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 계약서류안내 페이지입니다. 당첨자 자격 확인과 계약 체결, 제출서류, 준비사항 및 모델하우스 방문 전 확인해야 할 내용을 안내합니다.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 입지환경 안내입니다. 김포시 고촌읍 향산리의 한강 생활권과 서울 접근성, 교통망, 생활 인프라, 자연환경 및 미래가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 프리미엄 안내입니다. 한강을 가까이 누리는 입지와 김포 고촌의 서울 접근성, 총 2,432세대 대단지, 푸르지오 브랜드 및 차별화된 상품성을 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 단지배치도 안내입니다. 공동주택 12개동의 주거동 배치와 동선, 조망, 채광, 조경 및 단지 내 생활 편의를 고려한 공간 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 호수배치도 안내입니다. 공동주택 12개동의 동·호수 구성과 향, 주택형별 배치 및 단지 내 세대 위치 정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 커뮤니티 안내입니다. 공동주택 총 2,432세대 대단지의 규모에 어울리는 입주민 중심 커뮤니티와 휴식, 건강, 여가를 위한 편의시설을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan84: page({
    path: "/FloorPlan/59A",
    title: "84㎡ 평면도 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 전용 84㎡ 평면도 안내입니다. 가족의 생활 편의와 공간 활용을 고려한 내부 구조, 수납공간 및 실거주 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan94: page({
    path: "/FloorPlan/59B",
    title: "106㎡ 평면도 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 전용 106㎡ 평면도 안내입니다. 여유로운 공간 구성과 가족 중심의 주거 동선, 수납 및 타입별 특화설계를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "122㎡ 평면도 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 전용 122㎡ 평면도 안내입니다. 넓은 실내 공간과 효율적인 생활 동선, 가족 구성원의 라이프스타일을 고려한 공간 설계를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan111: page({
    path: "/FloorPlan/84B",
    title: "180㎡ PH 평면도 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 전용 180㎡ PH 평면도 안내입니다. 차별화된 펜트하우스 공간과 여유로운 실내 구성, 프리미엄 주거 설계를 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 E-모델하우스입니다. 공동주택 전용 84㎡·106㎡·122㎡·180㎡ PH 타입의 실내 구조와 공간 구성, 수납 및 생활 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 한강 푸르지오 리버프론트",
    description:
      "한강 푸르지오 리버프론트 관심고객등록 페이지입니다. 분양 일정과 공급정보, 분양가 상담, 모델하우스 위치 및 방문예약 등 주요 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 한강 푸르지오 리버프론트",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 한강 푸르지오 리버프론트 홈페이지의 사업안내, 입지환경, 단지안내, 평면도, E-모델하우스 및 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) return seoPages.customer;

  return seoPages.notFound;
};