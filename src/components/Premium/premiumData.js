import premiumIcon1 from "../../assets/Main/section3-img1.png";
import premiumIcon2 from "../../assets/Main/section3-img2.png";
import premiumIcon3 from "../../assets/Main/section3-img3.png";
import premiumIcon4 from "../../assets/Main/section3-img4.png";

export const premiumData = {
  eyebrow: "GREAT PREMIUM",

  title: ["한강 푸르지오 리버프론트", "프리미엄"],

  description:
    "한강 푸르지오 리버프론트는 김포시 고촌읍 향산리 일원에 조성되는 대규모 브랜드 주거단지입니다. 한강 프리미엄과 푸르지오 브랜드, 우수한 교통환경, 차별화된 상품성을 모두 누릴 수 있는 새로운 랜드마크를 만나보세요.",

  items: [
    {
      id: "premium-location",
      number: "01",
      icon: premiumIcon1,
      title: "한강 프리미엄 라이프",
      subtitle: "한강을 가까이 누리는 특별한 입지",

      description:
        "한강을 품은 입지에서 자연과 도심을 함께 누릴 수 있으며, 쾌적한 주거환경과 뛰어난 미래가치를 동시에 기대할 수 있습니다.",

      link: "/BusinessGuide/intro",
      linkText: "사업안내 보기",
    },

    {
      id: "premium-reservation",
      number: "02",
      icon: premiumIcon2,
      title: "총 2,432세대 대단지",
      subtitle: "랜드마크 규모의 프리미엄 주거단지",

      description:
        "공동주택 총 2,432세대와 오피스텔 250실 규모로 조성되어 풍부한 커뮤니티와 쾌적한 주거환경을 갖춘 대규모 브랜드 단지입니다.",

      link: "/Promotion/Customer",
      linkText: "방문예약 보기",
    },

    {
      id: "premium-infra",
      number: "03",
      icon: premiumIcon3,
      title: "다양한 평면 구성",
      subtitle: "84㎡ · 106㎡ · 122㎡ · 180㎡ PH",

      description:
        "다양한 라이프스타일을 고려한 전용 84㎡, 106㎡, 122㎡, 180㎡ PH 타입을 구성하여 실수요자와 고급 주거 수요를 모두 만족시키는 공간을 제공합니다.",

      link: "/LocationEnvironment/intro",
      linkText: "입지환경 보기",
    },

    {
      id: "premium-brand",
      number: "04",
      icon: premiumIcon4,
      title: "푸르지오 브랜드 프리미엄",
      subtitle: "대우건설이 완성하는 랜드마크",

      description:
        "대우건설 푸르지오만의 브랜드 경쟁력과 차별화된 설계, 커뮤니티, 상품성을 바탕으로 품격 있는 프리미엄 라이프를 제공합니다.",

      link: "/LocationEnvironment/primium",
      linkText: "프리미엄 보기",
    },
  ],
};